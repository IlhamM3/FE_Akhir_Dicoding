const DrawerController = {
  initialize({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    if (drawer.classList.contains('open')) {
      drawer.classList.remove('open');
    } else {
      drawer.classList.add('open');
    }
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerController;
