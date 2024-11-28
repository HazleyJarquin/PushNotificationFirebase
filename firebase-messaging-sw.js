importScripts(
  "https://www.gstatic.com/firebasejs/9.17.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBcwuZ044v64M5I7PeNu5UW8BpjBgXl65s",
  authDomain: "pushnotification-25c20.firebaseapp.com",
  projectId: "pushnotification-25c20",
  storageBucket: "pushnotification-25c20.firebasestorage.app",
  messagingSenderId: "272026030688",
  appId: "1:272026030688:web:873775a50d7596cec72905",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
