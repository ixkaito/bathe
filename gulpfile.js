'use strict';

/**
 * Gulp modules
 */
var gulp        = require('gulp');
var glob        = require('glob');
var newer       = require('gulp-newer');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var compass     = require('gulp-compass');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');
var browserify  = require('browserify');
var watchify    = require('watchify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');

// Load configurations set variables
var config = require('./gulpconfig.json');
var tasks = [];
var paths = {};
var jsSrc = [];

Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key]) {
    tasks.push(key);
  }
});

Object.keys(config.paths).forEach(function (key) {
  if (key != 'assets') {
    paths[key] = config.paths.assets + '/' + config.paths[key];
  }
});

for (var i = 0; i <= config.js.src.length - 1; i++) {
  jsSrc.push(paths.jsSrc + '/' + config.js.src[i]);
}

/**
 * Browser
 */
gulp.task('browser-sync', function () {
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
  return gulp.src(paths.sass + '/**/*')
    .pipe(plumber())
    .pipe(compass({
      config_file: config.compass.config,
      style: config.compass.style,
      comments: config.compass.comments,
      css: paths.css,
      sass: paths.sass,
      image: paths.images
    }));
});

/**
 * Imagemin
 */
gulp.task('imagemin', function () {
  return gulp.src(paths.imagesSrc + '/**/*')
    .pipe(plumber())
    .pipe(newer(paths.imagesSrc))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.images));
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
  var b = browserify(jsSrc);
  if (watching) {
    b = watchify(b);
  }

  function bundle() {
    return b.bundle()
      .pipe(source(config.js.dist))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(paths.js));
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
  gulp.watch(paths.sass + '/**/*', ['compass']);
  gulp.watch([
    '**/*.php',
    paths.css + '/**/*',
    paths.js + '/**/*',
    paths.images + '/**/*'
  ], ['browser-reload']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * bundle the js, launch BrowserSync & watch files.
 */
gulp.task('default', tasks);
