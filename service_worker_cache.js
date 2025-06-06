   self.addEventListener('install', event => {
       event.waitUntil(
           caches.open('morse-app-cache').then(cache => 
               cache.addAll([
                   './',
                   './index.html',
                   './estilo.css',
                   './script.js',
                   './icon-192.png',
                   './icon-512.png'
               ])
           )
       );
   });

   self.addEventListener('fetch', event => {
       event.respondWith(
           caches.match(event.request).then(response => response || fetch(event.request))
       );
   });