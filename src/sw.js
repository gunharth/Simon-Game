self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('simon-pwa-v1')
            .then(function (cache) {
                return cache.addAll([
                    '/',
                    'index.html',
                    'app.css',
                    'global.css',
                    'app.js',
                    'favicon.ico',
                    'favicons/android-chrome-192x192.png',
                    'favicons/android-chrome-384x384.png',
                    'favicons/apple-touch-icon.png',
                    'favicons/favicon-16x16.png',
                    'favicons/favicon-32x32.png',
                    'favicons/mstile-150x150.png',
                    'favicons/safari-pinned-tab.svg',
                    'site.webmanifest'
                ]);
            })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== 'simon-pwa-v1') {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});


self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
