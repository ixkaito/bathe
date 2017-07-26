const assets = require('../config.js').assets;
const eslint = require('gulp-eslint');
const config = require('../config.js').js;
const gulp   = require('gulp');

gulp.task('eslint', function() {
  return gulp.src([assets + '/' + config.src + '/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
