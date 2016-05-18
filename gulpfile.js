'use strict';

/**
 * Gulp modules
 */
var gulp         = require('gulp');
var newer        = require('gulp-newer');
var plumber      = require('gulp-plumber');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var compass      = require('gulp-compass');
var bourbon      = require('bourbon').includePaths;
var neat         = require('bourbon-neat').includePaths;
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var browserify   = require('browserify');
var watchify     = require('watchify');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var uglify       = require('gulp-uglify');
var watch        = require('gulp-watch');

// Load configurations set variables
var config = require('./gulpconfig.json');
var tasks = [];
var paths = {};
var jsSrc = [];

if (config.tasks.compass) {
  config.tasks.sass = false;
}

Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key]) {
    tasks.push(key);
  }
});

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
gulp.task('browser-sync', function () {
  browserSync({
      proxy: config.siteurl
  });
});

gulp.task('browser-reload', function () {
  browserSync.reload();
});

/**
 * Sass
 */
gulp.task('sass', function () {
  return gulp.src(paths.sass + '/**/*')
    .pipe(sass({
      includePaths: [bourbon, neat],
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: config.sass.outputStyle}))
    .pipe(autoprefixer({ browsers: config.autoprefixer.browsers }))
    .pipe(gulp.dest(paths.css));
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
  return gulp.src(paths.imageSrc + '/**/*')
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
    watch(paths.imageSrc + '/**/*', function () {
      gulp.start('imagemin');
    });
  }

  if (config.tasks.compass) {
    watch(paths.sass + '/**/*', function () {
      gulp.start('compass');
    });
  } else if (config.tasks.sass) {
    watch(paths.sass + '/**/*', function () {
      gulp.start('sass');
    });
  }

  if (config.tasks['browser-sync']) {
    watch([
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
 * Default task, running just `gulp` will compile the sass,
 * bundle the js, launch BrowserSync & watch files.
 */
gulp.task('default', tasks);
