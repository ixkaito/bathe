const browsersync = require('browser-sync').create();
const config      = require('../config.js').browsersync;
const gulp        = require('gulp');

gulp.task('browsersync', function () {
  return browsersync.init({
      proxy: config.siteurl
  });
});

gulp.task('browser-reload', function () {
  return browsersync.reload();
});
