var CacheName = 'v1';

// ca;; Install Event
self.addEventListener('install', e => {
	console.log('Service Worker : Installed');
});

// call Activated Event
self.addEventListener('activate', e => {
	console.log('service worker : Activated');
	// remove unwaited caches
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== CacheName) {
						console.log('Service Worker : Clearing Old Cache');
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

// calll fetch event
self.addEventListener('fetch', e => {
	console.log('Service Worker : Fetching');
	e.respondWith(
        fetch(e.request).then(res => {
            // make copu/clone response
            const resClone = res.clone();
            // open cache
            caches.open(CacheName)
                .then(cache => {
                    // add response to cache
                    cache.put(e.request, resClone);
                });
            return res;
        }).catch(err => caches.match(e.request).then(res => res))
    );
});


