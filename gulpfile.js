/**
 * Change `siteUrl` for your development environment.
 */
var siteUrl      = 'wordpress.dev';

/**
 * Variables
 */
var assetsDir    = 'assets';
var assetsCss    = 'assets/css';
var assetsSass   = 'assets/_sass';
var assetsJs     = 'assets/css';
var assetsImages = 'assets/css';

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
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('compass', function () {
  gulp.src(assetsSass + '/**/*')
    .pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      comments: false,
      css: assetsCss,
      sass: assetsSass
    }));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(assetsSass + '/**/*', ['compass']);
  gulp.watch(['**/*.php', assetsCss + '/**/*', assetsJs + '/**/*', assetsImages + '/**/*'], ['browser-reload']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['compass', 'browser', 'watch']);
