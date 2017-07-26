const config   = require('../bathe.config.js');
const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const newer    = require('gulp-newer');
const plumber  = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function () {
  return gulp.src(config.assets + '/' + config.imagemin.src + '/**/*')
    .pipe(plumber())
    .pipe(newer(config.assets + '/' + config.imagemin.dest))
    .pipe(imagemin({
      progressive: config.imagemin.progressive,
      svgoPlugins: config.imagemin.svgoPlugins,
      use:         [pngquant()],
    }))
    .pipe(gulp.dest(config.assets + '/' + config.imagemin.dest));
});
