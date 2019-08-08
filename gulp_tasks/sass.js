const autoprefixer = require('autoprefixer');
const config       = require('../bathe.config.js');
const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const sass         = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src(config.assets + '/' + config.sass.src + '/**/*')
    .pipe(sass({outputStyle: config.sass.outputStyle}).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest(config.assets + '/' + config.sass.dest));
});
