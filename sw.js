// **Template code last revised: 08/30/21
const staticCacheName = 'test Amiga-Cloud2_pwa_cache-v-01.26';
const dynamicCacheName = 'test Amiga-Cloud2_pwa_dynamic_cache-v-01.26';
const dynamicCacheSize = 30;
const offlineFilename = '/mobilevisitpwan2/offline.html';
const showDebugInfo = true;
const usingFirestore = false;
const usingOneSignalPush = false;

var filesToCache = [
'/mobilevisitpwan2/css/A5System/default/tree/b.png',
'/mobilevisitpwan2/css/A5System/default/tree/bc.png',
'/mobilevisitpwan2/css/A5System/default/tree/bcf.png',
'/mobilevisitpwan2/css/A5System/default/tree/bcl.png',
'/mobilevisitpwan2/css/A5System/default/tree/bo.png',
'/mobilevisitpwan2/css/A5System/default/tree/bof.png',
'/mobilevisitpwan2/css/A5System/default/tree/bol.png',
'/mobilevisitpwan2/css/A5System/default/tree/l.png',
'/mobilevisitpwan2/css/A5System/default/tree/lf.png',
'/mobilevisitpwan2/css/A5System/default/tree/ll.png',
'/mobilevisitpwan2/css/A5System/default/tree/n.png',
'/mobilevisitpwan2/css/A5System/default/theme.css',
'/mobilevisitpwan2/css/A5System/default/theme.js',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/AccordionTitle.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/AccordionTitleHover.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/ListHighlight.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/ListSelected.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/style.css',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/TabbandBackground.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/TabBottomSelected.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/TabLeftSelected.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/TabRightSelected.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/TabTopSelected.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/WindowButtonGrad.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/WindowButtonsGrad.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/WindowMainGrad.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/WindowTrans.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/WindowTransHighlight.png',
'/mobilevisitpwan2/css/A5System/GenericStyles/Default/WindowTransHighlightBottom.png',
'/mobilevisitpwan2/css/A5System/Images/designModeDropOff.png',
'/mobilevisitpwan2/css/A5System/Images/designModeDropOn.png',
'/mobilevisitpwan2/css/A5System/Images/designModeIcons.png',
'/mobilevisitpwan2/css/A5System/Images/designModeIconsHover.png',
'/mobilevisitpwan2/css/A5System/Images/designModeTip.png',
'/mobilevisitpwan2/css/A5System/Images/loading.gif',
'/mobilevisitpwan2/css/A5System/Images/menuCheck.png',
'/mobilevisitpwan2/css/A5System/Images/menuRadio.png',
'/mobilevisitpwan2/css/A5System/Images/resizeThumb.gif',
'/mobilevisitpwan2/css/A5System/Images/spinner1.gif',
'/mobilevisitpwan2/css/A5System/Images/spinner2.gif',
'/mobilevisitpwan2/css/A5System/Images/tabclose.png',
'/mobilevisitpwan2/css/A5System/Images/tabcloseHover.png',
'/mobilevisitpwan2/css/A5System/Images/wait.gif',
'/mobilevisitpwan2/css/A5System/reportStyles/Minimal.css',
'/mobilevisitpwan2/css/A5System/reportStyles/RoundedBandedBlue.css',
'/mobilevisitpwan2/css/A5System/reportStyles/RoundedBandedGray.css',
'/mobilevisitpwan2/css/A5System/reportStyles/RoundedBandedOlive.css',
'/mobilevisitpwan2/css/A5System/reportStyles/RoundedBandedTan.css',
'/mobilevisitpwan2/css/A5System/reportStyles/RoundedBlue.css',
'/mobilevisitpwan2/css/A5System/reportStyles/RoundedGray.css',
'/mobilevisitpwan2/css/A5System/reportStyles/RoundedOlive.css',
'/mobilevisitpwan2/css/A5System/reportStyles/RoundedTan.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareBanded.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareBandedBlue.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareBandedGray.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareBandedOlive.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareBandedTan.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareBlue.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareGray.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareOlive.css',
'/mobilevisitpwan2/css/A5System/reportStyles/SquareTan.css',
'/mobilevisitpwan2/css/A5System/Vista/tree/bc.png',
'/mobilevisitpwan2/css/A5System/Vista/tree/bch.png',
'/mobilevisitpwan2/css/A5System/Vista/tree/bo.png',
'/mobilevisitpwan2/css/A5System/Vista/tree/boh.png',
'/mobilevisitpwan2/css/A5System/Vista/tree/n.png',
'/mobilevisitpwan2/css/A5System/Vista/theme.css',
'/mobilevisitpwan2/css/A5System/Vista/theme.js',
'./css/Alpha-Magenta/accentEditBorder.png',
'/mobilevisitpwan2/css/Alpha-Magenta/accentForeEditBorder.png',
'/mobilevisitpwan2/css/Alpha-Magenta/contrastEditBorder.png',
'/mobilevisitpwan2/css/Alpha-Magenta/headerEditBorder.png',
'/mobilevisitpwan2/css/Alpha-Magenta/spinListBack.png',
'/mobilevisitpwan2/css/Alpha-Magenta/style.css',
'/mobilevisitpwan2/css/Alpha-Magenta/style.dat',
'/mobilevisitpwan2/css/Alpha-Magenta/style.js',
'/mobilevisitpwan2/css/Alpha-Magenta/styleInherit.json',
'/mobilevisitpwan2/css/_sharedStyles/style.css',
'/mobilevisitpwan2/icons/favicon-16x16.png',
'/mobilevisitpwan2/icons/favicon-32x32.png',
'/mobilevisitpwan2/icons/icon-120.png',
'/mobilevisitpwan2/icons/icon-128.png',
'/mobilevisitpwan2/icons/icon-144.png',
'/mobilevisitpwan2/icons/icon-152.png',
'/mobilevisitpwan2/icons/icon-180.png',
'/mobilevisitpwan2/icons/icon-192.png',
'/mobilevisitpwan2/icons/icon-384.png',
'/mobilevisitpwan2/icons/icon-512.png',
'/mobilevisitpwan2/icons/icon-72.png',
'/mobilevisitpwan2/icons/icon-96.png',
'/mobilevisitpwan2/javascript/a5.js',
'/mobilevisitpwan2/javascript/A5jQueryWithUI.js',
'/mobilevisitpwan2/javascript/a5_url.js',
'/mobilevisitpwan2/svg/AASVG.js',
'/mobilevisitpwan2/alert.png',
'/mobilevisitpwan2/Amiga_logo_pcs_CroppedXS.png',
'/mobilevisitpwan2/arrows.png',
'/mobilevisitpwan2/clearsearch2.png',
'/mobilevisitpwan2/clock.png',
'/mobilevisitpwan2/deal.png',
'/mobilevisitpwan2/doctor-consultation.png',
'/mobilevisitpwan2/hight.png',
'/mobilevisitpwan2/JS.js',
'/mobilevisitpwan2/low.png',
'./makevisit.png',
'./manifest.json',
'./medium.png',
'./phoneorder.png',
'./planning_16759800.png',
'./rotate.png',
'./searchicon2.png',
'./settings-778.png',
'./shopping.png',
'./skip.png',
'./index.html',

];


// limitCacheSize function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener('install', function(e) {
  if (showDebugInfo) console.log('** service worker installed.');
  e.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
      if (showDebugInfo) console.log('** service worker caching all assets.');
      return cache.addAll(filesToCache);
    })
  );
});


// activate event
self.addEventListener('activate', evt => {
  if (showDebugInfo) console.log('** service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});


// fetch event
self.addEventListener('fetch', evt => {
  if (showDebugInfo) console.log('** service worker fetch event', evt);
 
  /*
   **  skip the fetch request for certain url's
   **  chrome:extensions cause errors here
   **  do not cache results from Firestore
   **  do not cache OneSignal SDK's or API's
  */
  
  const requests = ['chrome-extension'];
  if (usingFirestore) {
  	requests.push('firestore.googleapis.com');
  }
  
  if (usingOneSignalPush) {
  	requests.push('sdks');
  	requests.push('apis');	
  	requests.push('onesignal.com');	
  }
  
 const makeRequest = requests.every(request => {
        return evt.request.url.indexOf(request) === -1;
  });

  if (showDebugInfo) console.log('makeRequest = '+makeRequest + " : " + evt.request.url);
  
  if (makeRequest) {
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            // check cached items size
            limitCacheSize(dynamicCacheName, dynamicCacheSize);
            return fetchRes;
          })
        });
      }).catch(() => {
		if ((evt.request.url.indexOf('.html') > -1) || (evt.request.url.indexOf('.a5w') > -1)){
        	return caches.match(offlineFilename);
      	}     
      })
    );
  }; 
});



