/*if(!('serviceWorker' in navigator)) {
	console.log("Browser tidak mendukung service worker");
} else {
	navigator.serviceWorker.register('assets/js/service-worker.js')
	.then(function() {
		console.log('Service Worker terdaftar (registered)');
	})
	.catch(function(error) {
		console.log('Error: Gagal melakukan registrasi service workder:', error);
	});
}*/


/*if ('serviceWorker' in navigator) {
	window.addEventListener('load', function(){
		navigator.serviceWorker.register('assets/js/service-worker.js').then(function(registration){
			// Registration was successfull
			console.log('ServiceWorker Registration Successfull with scopeL: ', registration.scope);
		}, function(err) {
			// registration failed
			console.log('Serviceworker failed : ', err);
		});
	});
}*/

// make sure service worker support in browser
if ('serviceWorker' in navigator) {
	console.log('Service Worker Supported');
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('service-worker-cached-site.js')
		.then(reg => console.log('Service Worker : Registered '))
		.catch(err => console.log('Service Worker : Error: ${err}'));
	})
}