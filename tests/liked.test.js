import Buttonlike from '../src/scripts/view/utils/button-like';
import FavoriteDaftarRestaurant from '../src/public/data/favorite-resorce';
import * as factories from './helpers/factories';

describe('Menyukai Restaurant', () => {
  const addbutton = () => {
    document.body.innerHTML = '<div tabindex="0" id="likeButtonContainer"></div>';
  };
  beforeEach(() => {
    addbutton();
  });
  it('Menampilkan tombol suka ketika Restaurant belum pernah disukai sebelumnya', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    expect(document.querySelector('[aria-label="sukai Restaurant ini"]')).toBeTruthy();
  });
  it('Tidak Menampilkan tombol suka ketika Restaurant belum pernah disukai sebelumnya', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    expect(document.querySelector('[aria-label="batalkan sukai Rastaurant"]')).toBeFalsy();
  });
  it('harus dapat melakukan aksi untuk menyukai Restoran', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteDaftarRestaurant.getDaftar(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteDaftarRestaurant.deleteDaftar(1);
  });
  it('Restorant ini sudah disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    await FavoriteDaftarRestaurant.putDaftar({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada duplikat restauran atau double
    expect(await FavoriteDaftarRestaurant.getAllDaftar()).toEqual([{ id: 1 }]);

    await FavoriteDaftarRestaurant.deleteDaftar(1);
  });
  it('Dilarang menambahkan Restaurant yang tidak memiliki id', async () => {
    await factories.createpresenterwithtrestourant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteDaftarRestaurant.getAllDaftar()).toEqual([]);
  });
});
