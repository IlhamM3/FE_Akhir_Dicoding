import 'regenerator-runtime';
import '../styles/index.scss';
import Application from './view/apps';
import swRegister from './view/utils/sw-register';

const app = new Application({
  button: document.querySelector('#burgerbutton'),
  drawer: document.querySelector('#navbar'),
  content: document.querySelector('#Content'),
});
window.addEventListener('hashchange', () => {
  app.render();
});
window.addEventListener('load', () => {
  app.render();
  swRegister();
});
