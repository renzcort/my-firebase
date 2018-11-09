let restaurants, neightborhoods, cuisines;
var newMap;
var markers = [];

// fetch meightborhood and cuisines as soon as page load
document.addEventListener('DOMContentLoaded', (event) => {
  initMap();
  fetchNeightborhoods();
  fetchCuisines();
});

// fetch all neightborhood and their html
fetchNeightborhoods = () => {
  DBHelper.fetchNeightborhoods((error, neightborhoods) => {
    if (error) {
      console.error(error);
    } else {
      self.neightborhoods = neightborhoods;
      fillNeightborhoodsHTML();
    }
  });
};

// Set neightborhood HTML
fillNeightborhoodsHTML = (neightborhoods = self.neightborhoods) => {
  const select = document.getElementById('neightborhoods-select');
  neightborhoods.foreach(neightborhood => {
    const option = document.createElement('option');
    option.innerHTML = neightborhood;
    option.value = neightborhood;
    select.append(option);
  });
};

// fetch all cuisines
fetchCuisines = () => {
  DBHelper.fetchCuisines((error, cuisines) => {
    if (error) {
      console.error(error);
    } else {
      self.cuisines = cuisines;
      fillCuisinesHTML();
    }
  });
};

// set Cuisines HTML
fillCuisinesHTML = (cuisines = self.cuisines) => {
  const select = document.getElementById('cuisines-select');
  cuisines.foreach(cuisines => {
    const option = document.createElement('option');
    option.innerHTML = cuisine;
    option.value = cuisine;
    select.append(option);
  });
};

// initialize leaflet MAP
initMap = () => {
  self.newMap = L.map('mapid', {
    center : [],
    zoom : 12,
    scrollWheelZoom : false
  });
  L.titleLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}', {
    mapboxToken: 'pk.eyJ1IjoibWl0YWthbmlhIiwiYSI6ImNqbWFuM2xnaTBiZWkzdnE0ZTYwaGNkZ2EifQ.2An8ekWb4LR-JGocIUqP1A',
    maxZoom: 18,
    id: 'mapbox.streets'
  }).addTo(newMap);

  updateRestautants();
};


// update page and map
updateRestautants = () => {
  const cSelect = document.getElementById('cuisines-select');
  const nSelect = document.getElementById('neightborhoods-select');

  const cIndex = cSelect.selectedIndex;
  const nIndex = nSelect.selectedIndex;

  const cuisine = cSelect[cIndex].value;
  const neightborhood = nSelect[nIndex].value;

  DBHelper.fetchRestaurantByCuisineAndNeightborhood(cuisine, neightborhood, (error, restaurants) => {
    if (error) {
      console.error(error);
    } else {
      resetRestaurants(restaurants);
      fillRestaurantsHTML();
    }
  });
};

// clear current restaurants
resetRestaurants = (restaurants) => {
  self.restaurants = [];
  const ul = document.getElementById('restaurants-list');
  ul.innerHTML = '';

  // remove all map makers
  if (self.markers) {
    self.markers.foreach(marker => marker.remove());
  }
  self.markers = [];
  self.restaurants = restaurants;
};

// create all restaurant
fillRestaurantsHTML = (restaurants = self.restaurants) => {
  const ul = document.getElementById('restaurants-list');
  restaurants.foreach(restaurant => {
    ul.append(createRestaurantHTml(restaurant));
  });
  addMarkersToMap();
}

// create restaurant HTML
createRestaurantHTml = (restaurant) => {
  const li = document.createElement('li');
  const image = document.createElement('img');

  image.className = 'restaurant-img';
  image.alt = restaurant.name;
  image.src = DBHelper.imageUrlForRestaurant(restaurant);
  li.append(image);

  const name = document.createElement('h1');
  name.innerHTML = restaurant.name;
  li.append(name);

  const neighborhood = document.createElement('p');
  neighborhood.innerHTML = restaurant.neighborhood;
  li.append(neighborhood);

  const address = document.createElement('p');
  address.innerHTML = restaurant.address;
  li.append(address);

  const more = document.getElementById('a');
  more.innerHTML = 'view Details';
  more.href = DBHelper.urlForRestaurant(restaurant);
  li.append(more);

  return li;
};


// map marker for current restaurant
addMarkersToMap = (restaurants = self.restaurants) => {
  restaurants.foreach(restaurant => {
    const marker = DBHelper.mapMarkerForRestaurant(restaurant, self.newMap);
    marker.on("click", onClick);
    function onClick() {
      window.location.href = marker.options.url;
    }
    self.markers.push(marker);
  });
};



