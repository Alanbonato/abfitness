self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("abnutri-cache-v1").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/apple-touch-icon.png",
        "/favicon.ico"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
