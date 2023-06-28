const CACHE_NAME = "version-1";

const urlsToCache = ["/", "/index.html", "/manifest.json"]; // Add more URLs to cache as needed

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// this.addEventListener("activate", (event) => {
//   const cacheWhiteList = [];
//   cacheWhiteList.push(CACHE_NAME)
//   event.waitUntil(caches.keys().then(cacheName) => Promise.all())
// });
