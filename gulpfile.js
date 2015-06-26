/**
 * Change `siteUrl` for your development environment.
 */
var siteUrl        = 'wordpress.dev';

/**
 * Settings
 */
var assetsDir           = './assets';
var cssDir              = assetsDir + '/css';
var sassDir             = assetsDir + '/_sass';
var jsDir               = assetsDir + '/js';
var imagesDir           = assetsDir + '/images';
var compassConfigFile   = './config.rb';
var compassStyle        = 'compressed';
var compassComments     = false;
var jsFilesToBrowserify = [
  jsDir + '/main.js'
];
var destJsFilename = 'main.min.js';

/**
 * Gulp Package
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var compass     = require('gulp-compass');
var browserify  = require('browserify');
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
  gulp.src(sassDir + '/**/*')
    .pipe(plumber())
    .pipe(compass({
      config_file: compassConfigFile,
      style: compassStyle,
      comments: compassComments,
      css: cssDir,
      sass: sassDir,
      image: imagesDir
    }));
});

/**
 * Browserify and compress JavaScripts
 */
gulp.task('browserify', function () {
  browserify(jsFilesToBrowserify)
    .bundle()
    .pipe(plumber())
    .pipe(source(destJsFilename))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(jsDir));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(sassDir + '/**/*', ['compass']);
  gulp.watch(['**/*.php', cssDir + '/**/*', jsDir + '/**/*', imagesDir + '/**/*'], ['browser-reload']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['compass', 'browserify', 'browser', 'watch']);
