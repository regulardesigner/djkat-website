# Custom Notification System Documentation

## Overview

The notification system provides a flexible way to show custom-styled notifications in your application. It uses a custom React component that displays notifications in the top-right corner of the screen.

## Installation

The notification system is already set up in your project. No additional installation is required.

## Basic Usage

### 1. Show a Notification

```typescript
// Using the global method
(window as any).showCustomNotification({
  title: "Your Title",
  body: "Your message here",
  type: "success", // 'success', 'error', or 'info'
  duration: 5000, // Duration in milliseconds (default: 5000)
});
```

## Notification Options

The notification function accepts the following options:

```typescript
interface NotificationOptions {
  title: string; // The title of the notification
  body: string; // The message content
  type?: "success" | "error" | "info"; // The type of notification (default: 'info')
  duration?: number; // How long to show the notification in milliseconds (default: 5000)
}
```

## Examples

### 1. Basic Notification

```typescript
(window as any).showCustomNotification({
  title: "Hello!",
  body: "This is a basic notification",
});
```

### 2. Success Notification

```typescript
(window as any).showCustomNotification({
  title: "Success!",
  body: "Operation completed successfully",
  type: "success",
});
```

### 3. Error Notification

```typescript
(window as any).showCustomNotification({
  title: "Error",
  body: "Something went wrong",
  type: "error",
  duration: 8000, // Show for 8 seconds
});
```

## Common Use Cases

### 1. On User Action

```typescript
function DownloadButton() {
  const handleDownload = () => {
    // Your download logic here
    (window as any).showCustomNotification({
      title: 'Download Complete',
      body: 'Your track has been downloaded successfully!',
      type: 'success',
    });
  };

  return <button onClick={handleDownload}>Download Track</button>;
}
```

### 2. On Timer

```typescript
function TimerNotification() {
  useEffect(() => {
    const timer = setTimeout(() => {
      (window as any).showCustomNotification({
        title: "Time's Up!",
        body: "Your session has ended",
        type: "info",
      });
    }, 3600000); // 1 hour

    return () => clearTimeout(timer);
  }, []);
}
```

### 3. On API Response

```typescript
function TrackUploader() {
  const handleUpload = async () => {
    try {
      // Your upload logic here
      await uploadTrack();
      (window as any).showCustomNotification({
        title: "Upload Success",
        body: "Your track has been uploaded successfully!",
        type: "success",
      });
    } catch (error) {
      (window as any).showCustomNotification({
        title: "Upload Failed",
        body: "There was an error uploading your track",
        type: "error",
      });
    }
  };
}
```

## Best Practices

1. **Use Appropriate Types**: Choose the right notification type ('success', 'error', or 'info') for the context.
2. **Set Appropriate Duration**: Longer durations for important messages, shorter for less critical ones.
3. **Clear Messages**: Keep titles and messages concise and clear.
4. **Consistent Usage**: Use notifications consistently throughout your application.
5. **Clean Up**: Always clean up timers when components unmount.

## Features

1. **Auto-dismiss**: Notifications automatically disappear after the specified duration
2. **Manual Close**: Users can manually close notifications
3. **Multiple Notifications**: Multiple notifications can be shown simultaneously
4. **Responsive Design**: Works well on both mobile and desktop
5. **Type-based Styling**: Different colors for different notification types
6. **Global Access**: Can be triggered from anywhere in the application

## Styling

The notifications use Bulma CSS classes and can be customized by modifying the `notifications.css` file. The default styles include:

- Position: Top-right corner
- Maximum width: 400px
- Spacing: 10px between notifications
- Colors:
  - Success: Green background
  - Error: Red background
  - Info: Blue background
- Animation: Slide-in from the right
- Box shadow for depth
- Rounded corners

## Troubleshooting

If notifications aren't showing:

1. Ensure the `NotificationContainer` component is mounted in your app
2. Check the browser console for any errors
3. Verify that the notification call is being made correctly
4. Make sure you're not calling the notification function before the container is mounted
5. Add a small delay (100ms) if calling the notification immediately after component mount
