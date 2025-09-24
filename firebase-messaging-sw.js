// firebase-messaging-sw.js (colocar na raiz do host: /firebase-messaging-sw.js)
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDYcgm0wfWgecIFvjSV3MF2QLdUuuCwoLU",
  authDomain: "abfitness-af1cc.firebaseapp.com",
  projectId: "abfitness-af1cc",
  storageBucket: "abfitness-af1cc.firebasestorage.app",
  messagingSenderId: "392827676437",
  appId: "1:392827676437:web:386a433fffbeef99bdab1c"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload){
  console.log('[firebase-messaging-sw.js] mensagem recebida em background', payload);

  // tenta usar payload.notification primeiro; se não existir, cria corpo usando payload.data
  const title = (payload.notification && payload.notification.title) || 'Notificação';
  const options = (payload.notification) || {
    body: payload.data?.body || '',
    // aqui você pode apontar para um ícone existente do seu site:
    icon: '/copo.png' // ajuste conforme o seu arquivo de ícone disponível
  };

  self.registration.showNotification(title, options);
});

// opcional: trate clicks na notificação
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(function(clientList) {
      if (clientList.length > 0) {
        return clientList[0].focus();
      }
      return clients.openWindow('/');
    })
  );
});
