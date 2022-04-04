import imagemin from '@ixkaito/imagemin';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminOptipng from 'imagemin-optipng';
import imageminSvgo from 'imagemin-svgo';

const input = process.argv[2];
const dest = process.argv[3];

if (!input) throw new Error();

(async () => {
  const files = await imagemin([input], {
    destination: dest,
    plugins: [
      imageminGifsicle(),
      imageminJpegtran(),
      imageminOptipng(),
      imageminSvgo({
        plugins: [{ removeViewBox: false }],
      }),
    ],
  });

  console.log(`${files.length} images minified`);
})();
