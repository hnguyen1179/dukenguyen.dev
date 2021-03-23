console.log('in here')

function returnRangeRequest(request, cacheName) {
  console.log("returning range request")
  return caches
    .open(cacheName)
    .then(function(cache) {
      return cache.match(request.url);
    })
    .then(function(res) {
      if (!res) {
        return fetch(request)
          .then(res => {
            const clonedRes = res.clone();
            return caches
              .open(cacheName)
              .then(cache => cache.put(request, clonedRes))
              .then(() => res);
          })
          .then(res => {
            return res.arrayBuffer();
          });
      }
      return res.arrayBuffer();
    })
    .then(function(arrayBuffer) {
    const bytes = /^bytes\=(\d+)\-(\d+)?$/g.exec(
      request.headers.get('range')
    );
    if (bytes) {
      const start = Number(bytes[1]);
      const end = Number(bytes[2]) || arrayBuffer.byteLength - 1;
      return new Response(arrayBuffer.slice(start, end + 1), {
        status: 206,
        statusText: 'Partial Content',
        headers: [
          ['Content-Range', `bytes ${start}-${end}/${arrayBuffer.byteLength}`]
        ]
      });
    } else {
      return new Response(null, {
        status: 416,
        statusText: 'Range Not Satisfiable',
        headers: [['Content-Range', `*/${arrayBuffer.byteLength}`]]
      });
    }
  });
}


self.addEventListener('install', function(event) {
  console.log('Claiming control');
});

self.addEventListener('fetch', function(event) {
  console.log(event)

  var url = new URL(event.request.url);
  if (url.pathname.match(/^\/((assets|images)\/|manifest.json$)/)) {
    if (event.request.headers.get('range')) {
      event.respondWith(returnRangeRequest(event.request, staticCacheName));
    } else {
      event.respondWith(returnFromCacheOrFetch(event.request, staticCacheName));
    }
  }
  // other strategies
});

self.addEventListener('activate', () => self.clients.claim());
