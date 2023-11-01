import { openDB } from 'idb';
import config from '../../scripts/global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = config;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteDaftarRestaurant = {
  async getDaftar(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllDaftar() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putDaftar(restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteDaftar(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteDaftarRestaurant;
