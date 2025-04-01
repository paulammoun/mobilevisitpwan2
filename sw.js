const staticCacheName = 'mobilevisitpwan2-static-v1';
const dynamicCacheName = 'mobilevisitpwan2-dynamic-v1';
const dynamicCacheSize = 30;
const offlineFilename = '/mobilevisitpwan2/offline.html';
const showDebugInfo = true;

const filesToCache = [
  '/mobilevisitpwan2/index.html',
  '/mobilevisitpwan2/offline.html',
  '/mobilevisitpwan2/manifest.json',
  '/mobilevisitpwan2/icons/icon-192.png',
  '/mobilevisitpwan2/icons/icon-512.png',
  '/mobilevisitpwan2/css/Alpha-Magenta/style.css',
  '/mobilevisitpwan2/css/_sharedStyles/style.css',
  '/mobilevisitpwan2/javascript/a5.js',
  '/mobilevisitpwan2/javascript/a5_url.js',
  '/mobilevisitpwan2/javascript/A5jQueryWithUI.js',
  '/mobilevisitpwan2/JS.js',
];

const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(() => limitCacheSize(name, size));
      }
    });
  });
};

self.addEventListener('install', evt => {
  if (showDebugInfo) console.log('[Service Worker] Install');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      if (showDebugInfo) console.log('[Service Worker] Caching static assets');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', evt => {
  if (showDebugInfo) console.log('[Service Worker] Activate');
  evt.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== staticCacheName && key !== dynamicCacheName)
            .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', evt => {
  if (showDebugInfo) console.log('[Service Worker] Fetching:', evt.request.url);

  const excluded = ['chrome-extension', 'firestore.googleapis.com', 'sdks', 'apis', 'onesignal.com'];
  const skip = excluded.some(str => evt.request.url.includes(str));
  if (skip) return;

  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          limitCacheSize(dynamicCacheName, dynamicCacheSize);
          return fetchRes;
        });
      });
    }).catch(() => {
      if (evt.request.headers.get('accept')?.includes('text/html')) {
        return caches.match(offlineFilename);
      }
    })
  );
});
