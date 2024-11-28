import { getToken } from "firebase/messaging";
import { messaging } from "../config/firebaseConfig";

export const requestNotificationPermission = async (): Promise<
  string | null
> => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_ID,
      });
      console.log("Token generado:", token);
      return token;
    } else {
      console.warn("Permiso para notificaciones denegado.");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el token de notificaciones:", error);
    return null;
  }
};
