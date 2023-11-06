Feature('Menyukai Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Menampilkan daftar kosong favorite page yang berisikan daftar favorite restaurant', ({ I }) => {
  I.seeElement('.favorite-not-found');
  I.see('Tidak ada restaurant yang disukai');
});

Scenario('menyukai satu restaurant', ({ I }) => {
  I.see('Tidak ada restaurant yang disukai', '.favorite-not-found');
  I.amOnPage('/');

  I.seeElement('.restaurant_name');
  I.click(locate('.restaurant_name').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-restaurant');
});
Scenario('Membatalkan menyukai satu restaurant', ({ I }) => {
  I.see('Tidak ada restaurant yang disukai', '.favorite-not-found');
  I.amOnPage('/');

  I.seeElement('.restaurant_name');
  I.click(locate('.restaurant_name').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-restaurant');

  I.seeElement('.restaurant_name');
  I.click(locate('.restaurant_name').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant yang disukai', '.favorite-not-found');
});
