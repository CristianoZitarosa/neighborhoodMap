/**
* Service worker registration
**/
export default function registerServiceWorker() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker
      .register('./sw.js')
      .then(function (registration) {
        // success
        console.log("Service Worker is correctly registered", registration.scope);
      })
      .catch(function (error) {
        // fail
        console.log("Service Worker is not registered", error);
      })
    });
  }

}
