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
          <p class="favorite-not-found">Tidak ada restaurant yang disukai</p>
        </div>
      `);
    });
  },

  async afterRender() {
    const restaurants = await FavoriteDaftarRestaurant.getAllDaftar();
    const favoriteDiv = document.querySelector('#list-restaurant');
    const messageDiv = document.querySelector('.favorite-not-found');

    if (restaurants.length > 0) {
      favoriteDiv.innerHTML = ''; // Kosongkan konten div sebelum menambahkan data restaurant
      restaurants.forEach((restaurant) => {
        favoriteDiv.innerHTML += createDaftarRestaurant(restaurant);
      });
      messageDiv.style.display = 'none'; // Sembunyikan pesan jika ada data restaurant
    } else {
      messageDiv.style.display = 'block'; // Tampilkan pesan jika tidak ada data restaurant
    }
  },
};

export default favorite;
