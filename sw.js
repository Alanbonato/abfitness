const CACHE_NAME = "abnutri-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/apple-touch-icon.png",
  "/favicon.ico",
  "/favicon-32x32.png",
  "/copo.png",
  "/logo.png",
  "/firebase-config.js",
  "/firebase-messaging-sw.js"
];

// Instala e adiciona ao cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativa e limpa caches antigos
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// Intercepta requisições
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
