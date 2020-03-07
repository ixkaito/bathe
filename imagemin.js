const imagemin = require('@ixkaito/imagemin');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');

const input = process.argv[2];
if (! input) return;

(async () => {
  const files = await imagemin([input], {
    destination: 'assets/images',
    plugins: [
      imageminGifsicle(),
      imageminJpegtran(),
      imageminOptipng(),
      imageminSvgo({
        plugins: [
          { removeViewBox: false }
        ]
      }),
    ],
  });

  console.log(`${files.length} images minified`);
})();
