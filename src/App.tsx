import "./App.css";
import { useEffect } from "react";
import { requestNotificationPermission } from "./utils/requestNotification";
import NotificationListener from "./components/NotificationListener";

function App() {
  useEffect(() => {
    const setupNotifications = async () => {
      const token = await requestNotificationPermission();
      if (token) {
        console.log("Token de notificación recibido:", token);

        //!TODO:  Enviar este token a tu servidor para asociarlo con el usuario actual.
      }
    };

    setupNotifications();
  }, []);

  console.log("token", import.meta.env.VITE_VAPID_ID);

  return (
    <div>
      <h1>Notificaciones Push con Firebase</h1>
      <NotificationListener />
    </div>
  );
}

export default App;
