/**
 * Change `siteUrl` for your development environment.
 */
var siteUrl      = 'wordpress.dev';

/**
 * Path
 */
var assetsDir = 'assets';
var cssDir    = assetsDir + '/css';
var sassDir   = assetsDir + '/_sass';
var jsDir     = assetsDir + '/js';
var imagesDir = assetsDir + '/images';

/**
 * Gulp Package
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var compass     = require('gulp-compass');
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
      config_file: 'config.rb',
      comments: false,
      css: cssDir,
      sass: sassDir
    }));
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
gulp.task('default', ['compass', 'browser', 'watch']);
