import { useState, useEffect } from "react";
import CustomNotification from "./CustomNotification";
import "@/styles/notifications.css";

interface Notification {
  id: string;
  title: string;
  body: string;
  type?: "success" | "error" | "info";
  duration?: number;
}

function NotificationContainer() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, "id">) => {
    // generate a random identifier for the notification
    const id = Math.random().toString(36).substring(2, 9);

    setNotifications((prev) => [...prev, { ...notification, id }]);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  useEffect(() => {
    // Set up the global notification function
    (window as any).showCustomNotification = addNotification;

    // Clean up on unmount
    return () => {
      (window as any).showCustomNotification = undefined;
    };
  }, []);

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <CustomNotification
          key={notification.id}
          title={notification.title}
          body={notification.body}
          type={notification.type}
          duration={notification.duration}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
}

export default NotificationContainer;
