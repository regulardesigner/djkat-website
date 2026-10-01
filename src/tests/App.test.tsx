import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import NotificationProvider from "../components/NotificationProvider";
import { tracks } from "../data/tracks";

function renderApp() {
  return render(
    <NotificationProvider>
      <App />
    </NotificationProvider>,
  );
}

describe("App Component", () => {
  it("renders all main components", () => {
    renderApp();

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByText("Last Releases:")).toBeInTheDocument();
    expect(screen.getByText(/Listen more on soundcloud/)).toBeInTheDocument();
  });

  it("renders all tracks from the data file", () => {
    renderApp();

    tracks.forEach((track) => {
      expect(
        screen.getByTestId(`soundcloud-player-${track.id}`),
      ).toBeInTheDocument();
      expect(
        screen.getByTitle(`SoundCloud player: DJ Kat – ${track.title}`),
      ).toBeInTheDocument();
    });
  });

  it("shows welcome notification on mount", async () => {
    renderApp();

    const status = screen.getByRole("status");
    expect(
      await within(status).findByText("Welcome French-Touch Lovers! 🎵"),
    ).toBeInTheDocument();
    expect(
      within(status).getByText("Thank you for visiting! Enjoy the music."),
    ).toBeInTheDocument();
  });

  it("opens external links safely in a new tab", () => {
    renderApp();

    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);

    links.forEach((link) => {
      if (link.getAttribute("href")?.startsWith("mailto:")) {
        expect(link).not.toHaveAttribute("target");
        return;
      }
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders biography section", () => {
    renderApp();

    expect(
      screen.getByRole("region", { name: "Biography:" }),
    ).toBeInTheDocument();
  });
});
