import config from './src/scripts/global/config';

workbox.routing.registerRoute(
  new RegExp(config.BASE_IMAGE_URL),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cacherestaurant',
  }),
);
