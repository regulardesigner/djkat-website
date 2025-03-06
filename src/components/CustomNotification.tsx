import { useEffect } from 'react';

interface CustomNotificationProps {
  title: string;
  body: string;
  onClose: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'info';
}

function CustomNotification({ 
  title, 
  body, 
  onClose, 
  duration = 5000,
  type = 'info' 
}: CustomNotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getTypeClass = () => {
    switch (type) {
      case 'success':
        return 'has-background-success';
      case 'error':
        return 'has-background-danger';
      default:
        return 'has-background-info';
    }
  };

  return (
    <div className={`notification ${getTypeClass()} has-text-white is-light`} role="alert">
      <button 
        className="delete" 
        onClick={onClose}
        aria-label="Close notification"
      />
      <p className="title is-5 mb-2">{title}</p>
      <p className="subtitle is-6">{body}</p>
    </div>
  );
}

export default CustomNotification; 