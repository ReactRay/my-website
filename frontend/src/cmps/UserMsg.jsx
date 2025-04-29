import { useState, useRef, useEffect } from "react";
import { eventBusService } from "../services/event-bus.service.js";

export function UserMsg() {
  const [msg, setMsg] = useState(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const timeoutIdRef = useRef();

  useEffect(() => {
    const unsubscribe = eventBusService.on('show-user-msg', (msg) => {
      setMsg(msg);


      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }


      timeoutIdRef.current = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(closeMsg, 1500);
      }, 1600);
    });

    return unsubscribe;
  }, []);

  function closeMsg() {
    setMsg(null);
    setIsFadingOut(false);
  }

  if (!msg) return <span></span>;

  return (
    <section
      className={`user-msg ${msg.type} ${isFadingOut ? 'fade-out' : ''}`}
    >
      {msg.txt}
    </section>
  );
}
