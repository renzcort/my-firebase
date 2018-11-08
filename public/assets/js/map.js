/*function findLocation(x,y) {
// console.log(x,y);
  for (var i=0; i< places.length;i++) {
    if (places[i].lokasi[0]==x && places[i].lokasi[1]==y) {
      return i;
    }
  }
  return -1;
}

function showLocation(e) {
  console.log("you clicked "+ e.latlng.lat + " dan " + e.latlng.lng);
  let ix= findLocation(e.latlng.lat,e.latlng.lng);
  if (ix >=0) {
    img.src= places[ix].gambar;
    par.textContent=places[ix].review;
  }
}

(async function (){
  const URL="../project3/data/peta.json";
  try {
    let resp= await(fetch(URL));
    let resp2= await resp.json();
    localStorage.setItem('places',JSON.stringify(resp2.places));//
  }
  catch(err){
    console.log(err);
  }
})( ); // <--- IIFE

let gmb= document.getElementById("gmb");
let rev= document.getElementById("review");
let img= document.createElement('img');
let par= document.createElement('p');
gmb.appendChild(img);
rev.appendChild(par);

f(URL);
let places = JSON.parse(localStorage.getItem('places'));

// let r0="restoran spanyol di jakarta yang dekat dengan kantor saya";
// let r1="warung kopi cita rasa yang sangat tinggi dengan harga yang murah";
// let r2="Ikan bakar kualitas tinggi, hampir gosong tapi belum";
// let r3="Steak lokal harga impor, 200gr dan 300gr mentah ";
// let r4="seafood international lobster, king crabs, cumi, kerang, semua ada";
// let places= [
//   {"lokasi": [-6.221028, 106.791434], "sponsor" : "Resto Spanyol", "gambar":"images/planB.jpg","review": r0},
//   {"lokasi": [-6.219912, 106.791239], "sponsor" : "Warung Kopi","gambar":"images/warkop.jpg","review": r1},
//   {"lokasi": [-6.220529, 106.789848], "sponsor" : "Pondok Ikan Bakar", "gambar":"images/ikan_bakar.jpg","review": r2},
//   {"lokasi": [-6.222977, 106.789152], "sponsor" : "STEAK cow", "gambar":"images/steak.jpg","review": r3},
//   {"lokasi": [-6.222043, 106.791070], "sponsor" : "Rupa-rupa Seafood!!", "gambar":"images/seafood.jpg","review": r4}
// ];

const URL="../project3/data/peta.json";
// Fetch
fetch(URL)
  .then(function(response){
      if (response.status !== 200) {
          console.log('There is a problem . Status Code: ' + response.status);
          throw response.statusText;
      }
      return response.json()
  })
  .then ( resp => {
      localStorage.setItem('places', JSON.stringify(resp.places));
      setView();
  })
  .catch(function(err){
      console.log(err);
  });
// let places = JSON.parse(localStorage.getItem('places'));

for (var p of places) {
  var marker= L.marker(p.lokasi).addTo(mymap).bindPopup(p.sponsor);
  marker.on('click', showLocation);
}*/


function findLocation(x, y) {
    //console.log(x, y);

    for (let i = 0; i < places.length; i++) {
        if (places[i].location[0] === x &&
            places[i].location[1] === y) {
            return i;
        }
    }

    return -1;
}

function showLocation(e) {
    //console.log("You clicked " + e.latlng.lat + " and " + e.latlng.lng);

    let idx = findLocation(e.latlng.lat, e.latlng.lng);
    if (idx >= 0) {
        imgElem.src = places[idx].image;
        imgElem.alt = places[idx].title;
        review.innerHTML = places[idx].review;
    }
}

function setView() {
    places = JSON.parse(localStorage.getItem('places'));

    if (places) {
        for (var p of places) {
            var marker = L.marker(p.location).addTo(myMap).bindPopup(p.title);
            marker.on('click', showLocation);
        }
    }
}

var myMap = L.map('mapid').setView([48.021193, 4.995559], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
    attribution: '© <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWl0YWthbmlhIiwiYSI6ImNqbWFuM2xnaTBiZWkzdnE0ZTYwaGNkZ2EifQ.2An8ekWb4LR-JGocIUqP1A'
  }
).addTo(myMap);

// Initiate map
/*let myMap = L.map('map').setView([48.021193, 4.995559], 6);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
  {
      attribution: '© <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 14,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoibWl0YWthbmlhIiwiYSI6ImNqbWFuM2xnaTBiZWkzdnE0ZTYwaGNkZ2EifQ.2An8ekWb4LR-JGocIUqP1A'
  }).addTo(myMap);*/

// Get data
const URL="../project3/data/peta.json";

// Async await
/*
(async function f(URL){
    try {
        const resp     = await(fetch(URL));
        const respJSON = await resp.json();
        localStorage.setItem('places', JSON.stringify(respJSON.places));
    }
    catch(err){
        console.log(err);
    }
}) ();
*/

// Fetch
fetch(URL)
    .then(function(response){
        if (response.status !== 200) {
            console.log('There is a problem . Status Code: ' + response.status);
            throw response.statusText;
        }
        return response.json()
    })
    .then ( resp => {
        localStorage.setItem('places', JSON.stringify(resp.places));
        setView();
    })
    .catch(function(err){
        console.log(err);
    });

// Set view
let img = document.getElementById('image');
let review = document.getElementById('review');
let imgElem = document.createElement('img');
let places;

img.appendChild(imgElem);

setView();