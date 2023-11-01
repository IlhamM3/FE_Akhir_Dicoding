import FavoriteDaftarRestaurant from '../../../public/data/favorite-resorce';
import { createDaftarRestaurant } from '../templates/create-data';

const favorite = {
  async render() {
    return new Promise((resolve) => {
      resolve(`
            <div class="content" id="main-content">
                <h1 tabindex="0" aria-label="Selamat datang di Favorite Page">Favorite Restaurant</h1>
                <div id="list-restaurant" class="list-restaurant">
                </div>
            </div>
        `);
    });
  },

  async afterRender() {
    const restaurants = await FavoriteDaftarRestaurant.getAllDaftar();
    const favoriteDiv = document.querySelector('#list-restaurant');

    restaurants.forEach((restaurant) => {
      favoriteDiv.innerHTML += createDaftarRestaurant(restaurant);
    });
  },
};

export default favorite;
