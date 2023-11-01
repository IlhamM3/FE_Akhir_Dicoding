import DrawerController from './utils/drawer-init';
import Parser from '../routes/parser';
import route from '../routes/route';

class Application {
  constructor({ button, drawer, content }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;
    this.initapplicationshell();
  }

  initapplicationshell() {
    // initial drawer
    DrawerController.initialize({
      button: this.button,
      drawer: this.drawer,
      content: this.content,
    });
  }

  async render() {
    const url = Parser.parseURLWithCombination();
    const page = route[url];

    Promise.resolve(page.render())
      .then((renderedContent) => {
        this.content.innerHTML = renderedContent;
      })
      .then(() => page.afterRender());

    const skiptoContent = document.querySelector('.skip-to-content');
    skiptoContent.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#Content').focus();
    });
  }
}

export default Application;
