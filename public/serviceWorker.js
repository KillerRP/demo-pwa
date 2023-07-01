const CACHE_NAME = "version-2";

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

// When the service worker is activated, remove old caches
this.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: intercept requests and serve from cache if available
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the request is already in the cache, serve it from there
      if (response) {
        return response;
      }

      // Otherwise, fetch the request from the network
      return fetch(event.request);
    })
  );
});
