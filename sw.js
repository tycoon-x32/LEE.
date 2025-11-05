const CACHE_NAME = 'lee-global-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/invest.html',
  '/legal.html',
  '/manifest.json',
  '/images/21355.jpg',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});