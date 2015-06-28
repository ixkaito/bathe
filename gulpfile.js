'use strict';

/**
 * Gulp modules
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var compass     = require('gulp-compass');
var browserify  = require('browserify');
var watchify    = require('watchify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var plumber     = require('gulp-plumber');

// Load configurations
var config = require('./gulpconfig.json');

var tasks = {
  watch:      config.tasks.watch ? 'watch' : '',
  browser:    config.tasks.browserSync ? 'browser' : '',
  compass:    config.tasks.compass ? 'compass' : '',
  browserify: config.tasks.browserify ? 'browserify' : '',
  imagemin:   config.tasks.imagemin ? 'imagemin' : '',
};

/**
 * Browser
 */
gulp.task('browser', function () {
  browserSync({
      proxy: config.siteurl
  });
});

gulp.task('browser-reload', function () {
  browserSync.reload();
});

/**
 * Compass
 */
gulp.task('compass', function () {
  return gulp.src(config.paths.sass + '/**/*')
    .pipe(plumber())
    .pipe(compass({
      config_file: config.compass.config,
      style: config.compass.style,
      comments: config.compass.comments,
      css: config.paths.css,
      sass: config.paths.sass,
      image: config.paths.images
    }));
});

/**
 * Browserify and Watchify
 */
gulp.task('browserify', function () {
  return compile(false);
});

gulp.task('watchify', function () {
  return compile(true);
});

function compile(watching) {
  var b = browserify(config.js.src);
  if (watching) {
    b = watchify(b);
  }

  function bundle() {
    return b.bundle()
      .pipe(source(config.js.dist))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(config.paths.js));
  }

  b.on('update', function () {
    bundle();
  });

  return bundle();
}

/**
 * Watch files for changes, recompile, and reload the browser.
 */
gulp.task('watch', ['watchify'], function () {
  gulp.watch(config.paths.sass + '/**/*', ['compass']);
  gulp.watch([
    '**/*.php',
    config.paths.css + '/**/*',
    config.paths.js + '/**/*',
    config.paths.images + '/**/*'
  ], ['browser-reload']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * bundle the js, launch BrowserSync & watch files.
 */
gulp.task('default', [
  tasks.compass,
  tasks.browserify,
  tasks.browser,
  tasks.watch
]);
