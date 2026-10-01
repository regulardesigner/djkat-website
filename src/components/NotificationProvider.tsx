import { useCallback, useState, type ReactNode } from "react";
import CustomNotification from "./CustomNotification";
import {
  NotificationContext,
  type NotificationOptions,
} from "@/contexts/NotificationContext";
import "@/styles/notifications.css";

interface Notification extends NotificationOptions {
  id: string;
}

function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const notify = useCallback((notification: NotificationOptions) => {
    setNotifications((prev) => [
      ...prev,
      { ...notification, id: crypto.randomUUID() },
    ]);
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  }, []);

  return (
    <NotificationContext.Provider value={notify}>
      {children}
      {/* The live region stays mounted so screen readers announce new toasts. */}
      <div className="notification-container" role="status" aria-live="polite">
        {notifications.map((notification) => (
          <CustomNotification
            key={notification.id}
            id={notification.id}
            title={notification.title}
            body={notification.body}
            type={notification.type}
            duration={notification.duration}
            onClose={removeNotification}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
