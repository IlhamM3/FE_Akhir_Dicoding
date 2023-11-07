import 'regenerator-runtime';
import Cacheapi from './view/utils/cache';

const assetcache = [
  './',
  './icons/icon16.png',
  './icons/icon196.png',
  './icons/icon32.png',
  './icon.png',
  './images/Logo.png',
  './images/hero-image_2.jpg',
  './images/hero-image_2-150.jpg',
  './images/hero-image_2-400.jpg',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(Cacheapi.caching([...assetcache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(Cacheapi.deletecache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(Cacheapi.revalidation(event.request));
});
