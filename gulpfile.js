'use strict';

/**
 * Gulp modules
 */
var gulp         = require('gulp');
var newer        = require('gulp-newer');
var plumber      = require('gulp-plumber');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var browserify   = require('browserify');
var watchify     = require('watchify');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var uglify       = require('gulp-uglify');
var watch        = require('gulp-watch');

// Load configurations set variables
var config = require('./batheconfig.json');
var tasks = [];
var build = [];
var paths = {};
var jsSrc = [];

/**
 * All tasks
 */
Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key]) {
    tasks.push(key);
  }
});

/**
 * Build tasks
 */
build = tasks.concat();
var index;
['server', 'watch'].forEach(function (value) {
  index = build.indexOf(value);
  if (index > -1) {
    build.splice(index, 1);
  }
});

/**
 * Paths
 */
Object.keys(config.paths).forEach(function (key) {
  if (key != 'assets') {
    if (config.paths.assets === '') {
      paths[key] = './' + config.paths[key];
    } else {
      paths[key] = config.paths.assets + '/' + config.paths[key];
    }
  }
});

for (var i = 0; i <= config.js.src.length - 1; i++) {
  jsSrc.push(paths.jsSrc + '/' + config.js.src[i]);
}

/**
 * Browser
 */
gulp.task('browsersync', function () {
  return browserSync.init({
      proxy: config.siteurl
  });
});

gulp.task('browser-reload', function () {
  return browserSync.reload();
});

/**
 * Sass
 */
gulp.task('sass', function () {
  return gulp.src(paths.sass + '/**/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: config.sass.outputStyle}))
    .pipe(autoprefixer({ browsers: config.autoprefixer.browsers }))
    .pipe(gulp.dest(paths.css));
});

/**
 * Imagemin
 */
gulp.task('imagemin', function () {
  return gulp.src(paths.imagesSrc + '/**/*')
    .pipe(plumber())
    .pipe(newer(paths.images))
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
  if (config.tasks.imagemin) {
    watch(paths.imagesSrc + '/**/*', function () {
      gulp.start('imagemin');
    });
  }

  if (config.tasks.sass) {
    watch(paths.sass + '/**/*', function () {
      gulp.start('sass');
    });
  }

  if (config.tasks.browsersync) {
    watch([
      '!./node_modules/**/*',
      '!./README.md',
      './**/*.php',
      paths.css + '/**/*',
      paths.js + '/**/*',
      paths.images + '/**/*'
    ], function () {
      gulp.start('browser-reload');
    });
  }
});

/**
 * Build task, this will minify the images, compile the sass,
 * bundle the js, but not launch BrowserSync and watch files.
 */
gulp.task('build', build);

/**
 * Default task, running just `gulp` will minify the images,
 * compile the sass, bundle the js, launch BrowserSync, and
 * watch files.
 */
gulp.task('default', tasks);

/**
 * Test
 */
gulp.task('test', ['build']);
