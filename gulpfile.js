'use strict';

/**
 * Change `siteUrl` for your development environment.
 */
var siteUrl = 'wordpress.dev';

/**
 * Settings
 */
var path    = { assets: './assets' };
path.css    = path.assets + '/css';
path.sass   = path.assets + '/_sass';
path.js     = path.assets + '/js';
path.images = path.assets + '/images';

var compass = {
  config:   './config.rb',
  style:    'compressed',
  comments: false
};

var js = {
  src: [
    path.js + '/main.js'
  ],
  destFilename: 'main.min.js'
};

/**
 * Gulp Package
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

/**
 * Browser
 */
gulp.task('browser', function () {
  browserSync({
      proxy: siteUrl
  });
});

gulp.task('browser-reload', function () {
  browserSync.reload();
});

/**
 * Compile files from Sass directory into CSS directory
 */
gulp.task('compass', function () {
  return gulp.src(path.sass + '/**/*')
    .pipe(plumber())
    .pipe(compass({
      config_file: compass.config,
      style: compass.style,
      comments: compass.comments,
      css: path.css,
      sass: path.sass,
      image: path.images
    }));
});

/**
 * Browserify and compress JavaScripts
 */
gulp.task('browserify', function () {
  return compile(false);
});

gulp.task('watchify', function () {
  return compile(true);
});

function compile(watching) {
  var b = browserify(js.src);
  if (watching) {
    b = watchify(b);
  }

  function bundle() {
    return b.bundle()
      .pipe(source(js.destFilename))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(path.js));
  }

  b.on('update', function () {
    bundle();
  });

  return bundle();
}

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', ['watchify'], function () {
  gulp.watch(path.sass + '/**/*', ['compass']);
  gulp.watch(['**/*.php', path.css + '/**/*', path.js + '/' + js.destFilename, path.images + '/**/*'], ['browser-reload']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['compass', 'browserify', 'browser', 'watch']);
