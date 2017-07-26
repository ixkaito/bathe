const config = require('../bathe.config.js');
const eslint = require('gulp-eslint');
const gulp   = require('gulp');

gulp.task('eslint', function() {
  return gulp.src([config.assets + '/' + config.js.src + '/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
