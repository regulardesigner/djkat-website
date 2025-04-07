import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from '../App';
import { tracks } from '../data/tracks';

// Mock the window.showCustomNotification function
const mockShowCustomNotification = vi.fn();
(window as any).showCustomNotification = mockShowCustomNotification;

describe('App Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  it('renders all main components', () => {
    render(<App />);
    
    // Check if main components are rendered
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('Last Releases:')).toBeInTheDocument();
    expect(screen.getByText('Listen more on soundcloud')).toBeInTheDocument();
  });

  it('renders all tracks from the data file', () => {
    render(<App />);
    
    // Check if all tracks are rendered
    tracks.forEach(track => {
      expect(screen.getByTestId(`soundcloud-player-${track.id}`)).toBeInTheDocument();
    });
  });

  it('shows welcome notification on mount', async () => {
    render(<App />);
    
    // Wait for notification content to appear
    await waitFor(() => {
      expect(screen.getByText('Welcome French-Touch Lovers! 🎵')).toBeInTheDocument();
      expect(screen.getByText('Thank you for visiting! Enjoy the music.')).toBeInTheDocument();
    }, { timeout: 150 }); // Set timeout slightly higher than the 100ms delay
  });

  it('has correct social network links', () => {
    render(<App />);
    
    // Check if social network links are present and have correct attributes
    const socialLinks = screen.getAllByRole('link');
    expect(socialLinks.length).toBeGreaterThan(0);
    
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('renders biography section', () => {
    render(<App />);
    
    // Check if biography section is present
    expect(screen.getByTestId('biography-section')).toBeInTheDocument();
  });
}); 