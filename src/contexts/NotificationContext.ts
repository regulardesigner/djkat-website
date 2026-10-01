import { createContext, useContext } from "react";

export type NotificationType = "success" | "error" | "info";

export interface NotificationOptions {
  title: string;
  body: string;
  type?: NotificationType;
  duration?: number;
}

export type Notify = (notification: NotificationOptions) => void;

export const NotificationContext = createContext<Notify | null>(null);

export function useNotify(): Notify {
  const notify = useContext(NotificationContext);

  if (!notify) {
    throw new Error("useNotify must be used within a NotificationProvider");
  }

  return notify;
}
