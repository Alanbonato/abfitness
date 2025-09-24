// firebase-messaging-sw.js
// Service Worker do Firebase Messaging

importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// === copie o MESMO firebaseConfig que você usa no index.html ===
firebase.initializeApp({
  apiKey: "AIzaSyDYcgm0wfWgecIFvjSV3MF2QLdUuuCwoLU",
  authDomain: "abfitness-af1cc.firebaseapp.com",
  projectId: "abfitness-af1cc",
  storageBucket: "abfitness-af1cc.firebasestorage.app",
  messagingSenderId: "392827676437",
  appId: "1:392827676437:web:386a433fffbeef99bdab1c"
});

// inicializa o messaging
const messaging = firebase.messaging();

// handler para notificações recebidas quando a aba estiver FECHADA
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Mensagem recebida em background:', payload);

  const notificationTitle = payload.notification?.title || 'Notificação';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/copo.png' // ajuste o caminho do ícone conforme seus arquivos
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
