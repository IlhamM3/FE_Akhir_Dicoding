import config from './config';

const Api = {
  DaftarRestorant: `${config.BASE_URL}/list`,
  detail: (id) => `${config.BASE_URL}/detail/${id}`,
};

export default Api;
