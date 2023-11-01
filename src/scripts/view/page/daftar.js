import databaserestorant from '../../../public/data/restaurant-resouce';
import { createDaftarRestaurant } from '../templates/create-data';

const daftar = {
  async render() {
    return new Promise((resolve) => {
      resolve(`
        <div class="content" id="main-content">
          <h1 tabindex="0" aria-label="Selanjutnya adalah Daftar Restaurant, silakan tekan tombol space atau enter jika itu pilihan anda">Daftar Restaurant</h1>
          <div id="list-restaurant" class="list-restaurant">
          </div>
        </div>
      `);
    });
  },

  async afterRender() {
    const Daftar = await databaserestorant.daftarrestorant();
    const ListElement = document.querySelector('#list-restaurant');

    Daftar.forEach((restaurants) => {
      ListElement.innerHTML += createDaftarRestaurant(restaurants);
    });
  },
};

export default daftar;
