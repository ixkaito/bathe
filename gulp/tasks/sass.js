const assets       = require('../config.js').assets;
const autoprefixer = require('autoprefixer');
const config       = require('../config.js').sass;
const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const sass         = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(assets + '/' + config.src + '/**/*')
    .pipe(sass({outputStyle: config.outputStyle}).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        browsers: config.autoprefixer.browsers
      })
    ]))
    .pipe(gulp.dest(assets + '/' + config.dest));
});
