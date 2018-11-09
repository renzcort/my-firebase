class DBHelper {

  static get DATABASE_URL() {
    return 'restaurants.json';
  }

  // fetch all restaurants
  static fetchRestaurants(callback){
    fetch(DBHelper.DATABASE_URL)
      .then((response) => { return response.json() })
      .then((json) => {
        const restaurants = json.restaurants;
        callback(null, restaurants);
      })
      .catch((error) => callback(error, null))
  }

  /*fetch restaurants by ID*/
  static fetchRestaurantById(id, callback){
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const restaurant = restaurants.find(r => r.id == id);
        if (restaurant) {
          callback(null, restaurant);
        } else {
          callback('Restaurant does not exist', null);
        }
      }
    });
  }


  // fetch restaurant by causine type
  static fetchRestautantByCuisine(cuisine, callback) {
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const results = restaurants.filter(r => r.cuisine_type == cuisine);
        callback(null, results);
      }
    });
  }

  // fetch restaurant by neightboorhood
  static fetchRestaurantByNeightborhood(neightborhood, callback) {
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(errorm null);
      } else {
        // filter restaurant only neightborhood
        const results = restaurants.filter(r => r.neightborhood == neightborhood);
        callback(null, results);
      }
    });
  }

  // fetch by cuisine and neightborhood
  static fetchRestaurantCuisineAndNeightborhood(cuisine, neightborhood, callback) {
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        let results = restaurants;
        // filter by cuisine
        if (cuisine != 'all') {
          results = results.filter(r => r.cuisine_type == cuisine);
        }
        // filter by neightborhood
        if (neightborhood != 'all') {
          results = results.filter(r => r.neightborhood == neightborhood);
        }
        callback(null, results);
      }
    });
  }

  // fetch all neighborhood
  static fetchNeightborhoods(callback){
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        const neightborhoods = restaurants.map((v, i) => restaurants[i].neightborhood);
        const uniqueNeightborhoods = neightborhoods.filter((v, i) => neightborhoods.indexOf(v) == i);
        callback(null, uniqueNeightborhoods);
      }
    });
  }


  // fetch all cuisine
  static fetchCuisines(callback) {
    DBHelper.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // get all cuisines all restautants 
        const cuisines = restautants.map((v, i) => restautants[i].cuisine_type);
        // get unique duplicatee
        const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i);
        callback(null, uniqueCuisines);
      }
    });
  }


  // restaurants page URL
  static urlForRestaurant(restaurant) {
    return (`/project4/index.html?id=${restaurant.id}`);
  }

  // restaurant image URL
  static imageUrlForRestaurant(restaurant) {
    return (`/project4/index.html?id=${restaurant.photograph}`);
  }

  // Map maker for restautant
  static mapMakerForRestaurant(restaurant, mao) {
    const maker = new L.maker([restaurant.latlng.lat, restaurant.latlng.lng],
      {
        title : restaurant.name,
        alt : restaurant.name,
        url : DBHelper.URLForRestaurant(restaurant)
      }
    );
    marker.addTo(newMap);
    return maker;
  }





}