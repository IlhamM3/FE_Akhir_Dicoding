const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDirectories = [
  path.resolve(__dirname, 'src/public/images'),
  path.resolve(__dirname, 'src/public/icons'),
];
const destinationDirectories = [
  path.resolve(__dirname, 'dist/images'),
  path.resolve(__dirname, 'dist/icons'),
];

sourceDirectories.forEach((sourceDirectory, index) => {
  const destinationDirectory = destinationDirectories[index];

  if (!fs.existsSync(destinationDirectory)) {
    fs.mkdirSync(destinationDirectory, { recursive: true }); // Gunakan { recursive: true } untuk membuat direktori secara rekursif jika diperlukan
  }

  fs.readdirSync(sourceDirectory).forEach((image) => {
    const sizes = [400, 150];

    sizes.forEach((size) => {
      sharp(`${sourceDirectory}/${image}`)
        .resize(size)
        .toFile(
          path.resolve(
            destinationDirectory,
            `${image.split('.').slice(0, -1).join('.')}-${size}.jpg`,
          ),
          (err) => {
            if (err) {
              console.error(`Error resizing image: ${err}`);
            }
          },
        );
    });
  });
});
