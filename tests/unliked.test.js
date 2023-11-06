import Buttonlike from '../src/scripts/view/utils/button-like';
import FavoriteDaftarRestaurant from '../src/public/data/favorite-resorce';
import * as factories from './helpers/factories';

describe('Batalkan menyukai Restaurant', () => {
  const addbutton = () => {
    document.body.innerHTML = '<div tabindex="0" id="likeButtonContainer"></div>';
  };
  beforeEach(async () => {
    addbutton();
    await FavoriteDaftarRestaurant.putDaftar({ id: 1 });
  });
  afterEach(async () => {
    await FavoriteDaftarRestaurant.deleteDaftar(1);
  });
  it('Menampilkan model tombol yang tidak seperti restaurant yang telah disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });
    expect(document.querySelector('[aria-label="batalkan sukai Rastaurant"]')).toBeTruthy();
  });
  it('Menampilkan model tombol yang tidak seperti restaurant yang belum disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    expect(document.querySelector('[aria-label="sukai Restaurant ini"]')).toBeFalsy();
  });
  it('Dapat menghapus Daftar Restaurant yang disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    document.querySelector('[aria-label="batalkan sukai Rastaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteDaftarRestaurant.getAllDaftar()).toEqual([]);
  });
  it('ketika pengguna mengklik tidak disukai maka seharusnya tidak akan tampil pada daftar resturant yang disukai', async () => {
    await factories.createpresenterwithtrestourant({ id: 1 });

    await FavoriteDaftarRestaurant.deleteDaftar(1);

    document.querySelector('[aria-label="batalkan sukai Rastaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteDaftarRestaurant.getAllDaftar()).toEqual([]);
  });
});
