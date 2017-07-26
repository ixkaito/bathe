const assets   = require('../config.js').assets;
const config   = require('../config.js').imagemin;
const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const newer    = require('gulp-newer');
const plumber  = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function () {
  return gulp.src(assets + '/' + config.src + '/**/*')
    .pipe(plumber())
    .pipe(newer(assets + '/' + config.dest))
    .pipe(imagemin({
      progressive: config.progressive,
      svgoPlugins: config.svgoPlugins,
      use:         [pngquant()],
    }))
    .pipe(gulp.dest(assets + '/' + config.dest));
});
