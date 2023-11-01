import config from '../../global/config';

const Cacheapi = {
  async caching(requests) {
    const cache = await this._openCache();
    cache.addAll(requests);
  },

  async deletecache() {
    const cacheNames = await caches.keys();
    cacheNames
      .filter((name) => name !== config.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName));
  },

  async revalidation(request) {
    const respon = await caches.match(request);

    if (respon) {
      this._fetchRequest(request);
      return respon;
    }
    return this._fetchRequest(request);
  },

  async _openCache() {
    return caches.open(config.CACHE_NAME);
  },

  async _fetchRequest(request) {
    const respon = await fetch(request);

    if (!respon || respon.status !== 200) {
      return respon;
    }

    await this._addCache(request);
    return respon;
  },

  async _addCache(request) {
    if (request.url.startsWith('http')) {
      const cache = await this._openCache();
      cache.add(request);
    }
  },
};

export default Cacheapi;
