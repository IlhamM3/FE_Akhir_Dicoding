const Parser = {
  parseURLWithCombination() {
    const hashURL = this._getCurrentHashURL().toLowerCase();
    const splitURL = this._splitURL(hashURL);
    return this._combineURL(splitURL);
  },

  parseURLWithoutCombination() {
    const hashURL = this._getCurrentHashURL().toLowerCase();
    return this._splitURL(hashURL);
  },

  _splitURL(url) {
    const urlSegments = url.split('/');
    return {
      resource: urlSegments[1] || null,
      id: urlSegments[2] || null,
      verb: urlSegments[3] || null,
    };
  },

  _combineURL(splitURL) {
    return (splitURL.resource ? `/${splitURL.resource}` : '/')
        + (splitURL.id ? '/:id' : '')
        + (splitURL.verb ? `/${splitURL.verb}` : '');
  },

  _getCurrentHashURL() {
    return window.location.hash.slice(1);
  },
};

export default Parser;
