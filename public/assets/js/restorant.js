
var myMap = L.map('mapid').setView([48.021193, 4.995559], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
    attribution: '© <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWl0YWthbmlhIiwiYSI6ImNqbWFuM2xnaTBiZWkzdnE0ZTYwaGNkZ2EifQ.2An8ekWb4LR-JGocIUqP1A'
  }
).addTo(myMap);