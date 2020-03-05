const imagemin = require('@ixkaito/imagemin');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');
const imageminSvgo = require('imagemin-svgo');

(async () => {
  const files = await imagemin(['assets/_images/**/*.{jpg,png}'], {
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

  console.log(files);
})();
