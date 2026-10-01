import { useEffect, useState } from "react";
import type { NotificationType } from "@/contexts/NotificationContext";

interface CustomNotificationProps {
  id: string;
  title: string;
  body: string;
  onClose: (id: string) => void;
  duration?: number;
  type?: NotificationType;
}

const typeClasses: Record<NotificationType, string> = {
  success: "has-background-success has-text-black",
  error: "has-background-danger has-text-white",
  info: "has-background-warning has-text-black",
};

function CustomNotification({
  id,
  title,
  body,
  onClose,
  duration = 8000,
  type = "info",
}: CustomNotificationProps) {
  // Auto-dismiss is paused while the user hovers or focuses the notification.
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose, isPaused]);

  return (
    <div
      className={`notification ${typeClasses[type]}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <button
        type="button"
        className="delete"
        onClick={() => onClose(id)}
        aria-label="Close notification"
      />
      <p className="title is-5 mb-2">{title}</p>
      <p className="subtitle is-6">{body}</p>
    </div>
  );
}

export default CustomNotification;
