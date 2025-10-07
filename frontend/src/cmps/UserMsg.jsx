import { useEffect, useState } from 'react';
import { eventBusService } from '../services/event-bus.service';

export function UserMsg() {
  const [msg, setMsg] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = eventBusService.on('show-user-msg', (newMsg) => {
      setMsg(newMsg);
      setIsVisible(true);

      // Start a fade-out timer
      setTimeout(() => {
        setIsVisible(false);
      }, 2000); // duration before fade out

      // Fully remove message after fade animation
      setTimeout(() => {
        setMsg(null);
      }, 2600);
    });

    return () => unsubscribe();
  }, []);

  if (!msg) return null;

  return (
    <div className={`user-msg ${msg.type} ${!isVisible ? 'fade-out' : ''}`}>
      <p>{msg.txt}</p>
      <button onClick={() => setIsVisible(false)}>✕</button>
    </div>
  );
}
