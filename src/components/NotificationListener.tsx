import React, { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import { messaging } from "../config/firebaseConfig";

const NotificationListener: React.FC = () => {
  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Mensaje recibido en primer plano: ", payload);
      alert(`Notificación: ${payload.notification?.title}`);
    });

    return () => unsubscribe();
  }, []);

  return null;
};

export default NotificationListener;
