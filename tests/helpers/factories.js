import Buttonlike from '../../src/scripts/view/utils/button-like';

const createpresenterwithtrestourant = async (restaurant) => {
  const likeButtonContainer = document.querySelector('#likeButtonContainer');
  await Buttonlike.init({
    likeButtonContainer,
    restaurant,
  });
};
export { createpresenterwithtrestourant };
