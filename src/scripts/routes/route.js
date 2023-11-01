import detail from '../view/page/detail-resto';
import favorite from '../view/page/favorite';
import daftar from '../view/page/daftar';

const route = {
  '/': daftar,
  '/daftar': daftar,
  '/favorite': favorite,
  '/detail/:id': detail,
};
export default route;
