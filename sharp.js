const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'public/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

const resizeAndSave = (image, width, suffix) => new Promise((resolve, reject) => {
  sharp(`${target}/${image}`)
    .resize({ width })
    .toFile(path.resolve(destination, `${image.split('.').slice(0, -1).join('.')}-${suffix}.jpg`), (err, info) => {
      if (err) {
        reject(err);
      } else {
        console.log(`Gambar ${image} dengan lebar ${width}px berhasil diproses.`);
        resolve();
      }
    });
});

fs.readdirSync(target).forEach(async (image) => {
  try {
    await resizeAndSave(image, 800, 'large');
    await resizeAndSave(image, 480, 'small');
  } catch (error) {
    console.error(`Gagal memproses gambar ${image}:`, error);
  }
});
