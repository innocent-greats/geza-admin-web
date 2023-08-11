'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "3adfcf034a81b053fcef76be2930ab1b",
"assets/AssetManifest.smcbin": "bdaaf4a810762389c5cb6e203be25730",
"assets/assets/datas/chat_date.json": "a17925714e6d930aebd6427315c29c37",
"assets/assets/datas/customers_data.json": "9d9dbd2227111612c9f1275d7a7d6abe",
"assets/assets/datas/discover_data.json": "6f5c028e68819d0778d8d9366e808152",
"assets/assets/datas/job_vacancee.json": "7ebad57b2025b2216d3b3785730cf892",
"assets/assets/datas/landing_data.json": "c0b49d01ad21c29e2baf1579370af92f",
"assets/assets/datas/products_data.json": "6d0904f7723bc241ed633986bf6ff8ab",
"assets/assets/datas/reviews_data.json": "d2c9f47ab8119a1281070f5f10413ce1",
"assets/assets/images/dummy/1.jpg": "6dd9e5b779dbbd9d62d0877fc7b43748",
"assets/assets/images/dummy/10.jpg": "72727e2cbd4e95dad31005a6f64ad553",
"assets/assets/images/dummy/11.jpg": "f774b24254052e87b577893240c9287f",
"assets/assets/images/dummy/12.jpg": "d046575b8636a0a7e179573a3ae02a1e",
"assets/assets/images/dummy/13.jpg": "f4e7b928c09757f06322f73d825ccc3d",
"assets/assets/images/dummy/14.jpg": "8278b9c949763b70ba034da3d4d01bac",
"assets/assets/images/dummy/15.jpg": "8e7e65bd31a5bd3d1c1575471205115e",
"assets/assets/images/dummy/2.jpg": "393b0a1efe502f0d75f0cbc63f987754",
"assets/assets/images/dummy/3.jpg": "724abbe8e77e3b1947626c161ac96d75",
"assets/assets/images/dummy/4.jpg": "2bbded6cfa2f25bbaa221d9b9631c279",
"assets/assets/images/dummy/5.jpg": "29cf385d776d483a34ad047822d5949c",
"assets/assets/images/dummy/6.jpg": "52ef62ecb6548394da4fcffa2bf82aed",
"assets/assets/images/dummy/7.jpg": "bebf52764bc8e61d03059305a38692b8",
"assets/assets/images/dummy/8.jpg": "eff7b76a83ed3c5c97af0c853612e35a",
"assets/assets/images/dummy/9.jpg": "9c13dd8c28df6d4d35ebfd8907dac1fa",
"assets/assets/images/dummy/avatar-1.jpg": "6b3d7fc9fc5c13c563ca66847b87c67d",
"assets/assets/images/dummy/avatar-10.jpg": "d80707cfaa72d68e9f15521c5912fd7e",
"assets/assets/images/dummy/avatar-11.jpg": "27639ad85f5b3fe0e348fd357a7aba43",
"assets/assets/images/dummy/avatar-12.jpg": "9b34780e52e098c5af8d93ed2e7d5191",
"assets/assets/images/dummy/avatar-2.jpg": "8d832f19a264711a804b1f0ff599e0ae",
"assets/assets/images/dummy/avatar-3.jpg": "69bac73c4e3ccdf4e0c17a1d85e346b7",
"assets/assets/images/dummy/avatar-4.jpg": "c2490a01011a037c979e4c2ba890844d",
"assets/assets/images/dummy/avatar-5.jpg": "fb079bfd1100a06f36224bb642f28abf",
"assets/assets/images/dummy/avatar-6.jpg": "82c67e16a29e2b8fb371368a49c18a77",
"assets/assets/images/dummy/avatar-7.jpg": "e09a066d4230404dde5f4235ad5e2522",
"assets/assets/images/dummy/avatar-8.jpg": "da7ed22cc8df53bc0e43394b785d3a85",
"assets/assets/images/dummy/avatar-9.jpg": "f46a5378522a02b5c93224a26f3ebf82",
"assets/assets/images/dummy/brand-1.jpg": "b668a8988926ff7ba58edbd58a0fe82a",
"assets/assets/images/dummy/brand-2.jpg": "3c4be06089401865db62404f38678e4a",
"assets/assets/images/dummy/brand-3.jpg": "021e8cf94059d126ac7e1294eeaecb2e",
"assets/assets/images/dummy/brand-4.jpg": "ab199135ecaae8ba3751b74ce6eee9aa",
"assets/assets/images/dummy/brand-5.jpg": "94422a40ba64cff2d1a9ec6e36284de3",
"assets/assets/images/dummy/brand-6.jpg": "de47378db0e4cee59a4a6eb4431d3fca",
"assets/assets/images/dummy/brand-7.jpg": "73c975ef55b4a0d685c56566c2eb9ae1",
"assets/assets/images/dummy/brand-8.jpg": "f4d36095ace6fa8859f06af325519df0",
"assets/assets/images/dummy/coming_soon-1.jpg": "4e3b175cc997596bc6a7951816950723",
"assets/assets/images/dummy/error-1.jpg": "6e82611e1c9542ec1748ab69f65de79d",
"assets/assets/images/dummy/error-2.jpg": "2918fa609529406920d0e6f2aebe338a",
"assets/assets/images/dummy/error-3.jpg": "1d20736971db870a29b3a08aa93b8fa6",
"assets/assets/images/dummy/error-4.jpg": "df9bfa2ba07e0febdf96fa76d3037b5b",
"assets/assets/images/dummy/error-5.jpg": "7bf2b56327fea40fe71cdd0d7c5f1509",
"assets/assets/images/dummy/l1.jpg": "a530d59fa7fca0e2983d1ada0aec577a",
"assets/assets/images/dummy/l2.jpg": "6789631815c90d52eaaa3ca190a9ab40",
"assets/assets/images/dummy/l3.jpg": "73543363cfca8fb8307b8b850605990f",
"assets/assets/images/dummy/l4.jpg": "6e61e33609a76e1c425668e73dce7157",
"assets/assets/images/dummy/landing-1.jpg": "fa6ce9ede52e4e387f25f32020d91a73",
"assets/assets/images/dummy/landing-2.jpg": "3b220b249d317147546dcffdf246abf5",
"assets/assets/images/dummy/landing-3.jpg": "fc8e95902a411be297eff242d5f697b3",
"assets/assets/images/dummy/landing-4.jpg": "a9379304a6881589c10d4ab404ebace7",
"assets/assets/images/dummy/landing-5.jpg": "a5b445d62759790950864b6bac5d3b87",
"assets/assets/images/dummy/m-1.jpg": "839fb7b92dbfeb86be59c343bbd0393b",
"assets/assets/images/dummy/m-2.jpg": "d42e9822d8dae565c1704707ffa99705",
"assets/assets/images/dummy/m-3.jpg": "96de6cae58ae474870ef29f43e3a1245",
"assets/assets/images/dummy/maintenance-1.jpg": "695ee627e3201178f368d2a5fa78f483",
"assets/assets/images/dummy/p1.jpg": "0993a07c2eca498fc53abbb4754d4bb5",
"assets/assets/images/dummy/p2.jpg": "07975334d9a5cb9449a7fa9a5b5578ef",
"assets/assets/images/dummy/p3.jpg": "e2e0c556cdb1ff168b2fada00c161a97",
"assets/assets/images/dummy/s-1.jpg": "2d5c08ee01e49d5e278de3a5b45581af",
"assets/assets/images/logo/ethereum-eth-logo.png": "3a3285881789dc8b524b6e5b42012460",
"assets/assets/images/logo/logo.svg": "a7e200120c87ba6eeb2df057a275bee6",
"assets/assets/images/logo/logo_icon_dark.png": "144fd09dd735c2fdb60d49d9fe6f07c6",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/ar.json": "3df835eeed7b1ff68b79c9df9929015f",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/en.json": "879b874b4cb97bc8c2b99c9abc91b753",
"assets/assets/lang/es.jpg": "25d67fb418ce2623d770679b2fd4f575",
"assets/assets/lang/es.json": "a80281efdce9f2b83f082964a55c3839",
"assets/assets/lang/fr.jpg": "ed28420a8f74b0631c24659a40511c2d",
"assets/assets/lang/fr.json": "d162208d847ec1ad2fce096e245bb6ee",
"assets/assets/lang/hi.jpg": "806b19b66156a2bfcb232d4f6518747a",
"assets/assets/lang/hi.json": "f0fa2ecabbbb1d5ccf26d17f241268be",
"assets/FontManifest.json": "fb5788eb9031911a762e8ca8ea2a46fc",
"assets/fonts/MaterialIcons-Regular.otf": "cfcbf9f234cbc176c514b09fa60c4551",
"assets/NOTICES": "58bf34e7cbeb73daf765918f8aaaf5b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/feather_icons/fonts/feather.ttf": "b5f4566bdaa6dfa10fad3bedb22f7ecf",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "c17d858d09fb1c596ef0adbf08872086",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "6d8ab59254a120b76bf53f167e809470",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "7c465988ad197dcf4ad748882b8215c4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/192.png": "690aceb324ca83a80549de0f284a3926",
"icons/512.png": "4581efd74b77c7b0cd7f69b8d6033d61",
"img/splash.png": "ec9c163da1053f6b869874be6520ed05",
"index.html": "ce1b04ffae969e82c98dc8ba468574ff",
"/": "ce1b04ffae969e82c98dc8ba468574ff",
"main.dart.js": "a30c85f2f30e50858e86f72d75eddeb3",
"manifest.json": "33377bde2de8b7f247545007e0ca208e",
"version.json": "e2cbf2918f5465f7f85c3b38dba364ff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
