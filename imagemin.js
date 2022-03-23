// const imagemin = require('@ixkaito/imagemin');
import imagemin from '@ixkaito/imagemin';
// const imageminGifsicle = require('imagemin-gifsicle');
import imageminGifsicle from 'imagemin-gifsicle';
// const imageminJpegtran = require('imagemin-jpegtran');
import imageminJpegtran from 'imagemin-jpegtran';
// const imageminOptipng = require('imagemin-optipng');
import imageminOptipng from 'imagemin-optipng';
// const imageminSvgo = require('imagemin-svgo');
import imageminSvgo from 'imagemin-svgo';

const input = process.argv[2];
const dest = process.argv[3];
// if (! input) return;

(async () => {
  if (! input) return;
  const files = await imagemin([input], {
    destination: dest,
    plugins: [
      imageminGifsicle(),
      imageminJpegtran(),
      imageminOptipng(),
      imageminSvgo({
        plugins: [
          {removeViewBox: false},
        ],
      }),
    ],
  });

  console.log(`${files.length} images minified`);
})();
