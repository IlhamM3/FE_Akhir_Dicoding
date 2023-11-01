import FavoriteDaftarRestaurant from '../../../public/data/favorite-resorce';
import { createUnLikeButton, createLikedButton } from '../templates/create-data';

const Buttonlike = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const daftarRestaurant = await FavoriteDaftarRestaurant.getDaftar(id);
    return !!daftarRestaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createUnLikeButton();

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteDaftarRestaurant.putDaftar(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButton();

    const likeButton = this._likeButtonContainer.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteDaftarRestaurant.deleteDaftar(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default Buttonlike;
