const CACHE_NAME = "kefo-syria-v17";

const URLS_TO_CACHE = [
  "/syria/",
  "/syria/index.html",
  "/syria/style.css",
  "/syria/lang.js",
  "/syria/main.js",
  "/syria/manifest.webmanifest",
  "/syria/icons/icon-192.png",
  "/syria/icons/icon-512.png",
  "/syria/qibla/",
  "/syria/qibla/index.html",
  "/syria/salah/",
  "/syria/salah/index.html",
  "/syria/post/",
  "/syria/post/index.html",
  "/syria/map/",
  "/syria/map/index.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).catch(() => {
        return caches.match("/syria/index.html");
      });
    })
  );
});
