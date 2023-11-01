import Parser from '../../routes/parser';
import databaserestorant from '../../../public/data/restaurant-resouce';
import { createDetailRestaurant } from '../templates/create-data';
import Buttonlike from '../utils/button-like';

const DetailRestaurant = {
  async render() {
    return new Promise((resolve) => {
      resolve(`
        <div class="content" id="main-content">
          <h1 tabindex="0" aria-label="Detail restaurant">Detail Restaurant</h1>
          <hr>
          <div id="Detailrestaurant" class="Detailrestaurant"></div>
          <div tabindex="0" id="likeButtonContainer"></div>
        </div>
      `);
    });
  },

  async afterRender() {
    const url = Parser.parseURLWithoutCombination();
    const detail = await databaserestorant.detailrestorant(url.id);
    const detailElement = document.querySelector('#Detailrestaurant');

    if (detail) {
      detailElement.innerHTML = createDetailRestaurant(detail);
    } else {
      detailElement.innerHTML = 'Detail tidak tersedia.';
    }

    Buttonlike.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: detail.id,
        city: detail.city,
        name: detail.name,
        rating: detail.rating,
        pictureId: detail.pictureId,
        description: detail.description,
      },
    });
  },
};

export default DetailRestaurant;
