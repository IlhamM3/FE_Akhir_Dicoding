import Api from '../../scripts/global/api';

class databaserestorant {
  static async daftarrestorant() {
    const response = await fetch(Api.DaftarRestorant);
    if (response.ok) {
      const json = await response.json();
      return json.restaurants;
    }
    throw new Error('Gagal mengambil data daftar restoran.');
  }

  static async detailrestorant(id) {
    const response = await fetch(Api.detail(id));
    if (response.ok) {
      const json = await response.json();
      return json.restaurant;
    }
    throw new Error('Gagal mengambil data detail restoran.');
  }
}

export default databaserestorant;
