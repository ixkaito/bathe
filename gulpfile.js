'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});

// /**
//  * gulp modules
//  */
// var autoprefixer = require('gulp-autoprefixer');
// var browsersync  = require('browser-sync').create();
// var eslint       = require('gulp-eslint');
// var gulp         = require('gulp');
// var imagemin     = require('gulp-imagemin');
// var named        = require('vinyl-named');
// var newer        = require('gulp-newer');
// var plumber      = require('gulp-plumber');
// var pngquant     = require('imagemin-pngquant');
// var postcss      = require('gulp-postcss');
// var sass         = require('gulp-sass');
// var uglify       = require('gulp-uglify');
// var watch        = require('gulp-watch');
// var webpack      = require('webpack-stream');

// // Load configurations set variables
// var config = require('./bathe.config.js');
// var tasks = [];
// var build = [];
// var paths = {};
// var entry = [];

// /**
//  * All tasks
//  */
// Object.keys(config.tasks).forEach(function (key) {
//   if (config.tasks[key]) {
//     tasks.push(key == 'webpack' ? '_' + key : key);
//   }
// });

// Object.keys(config.tasks).forEach(function (key) {
//   if (config.tasks[key] && key != 'browsersync') {
//     build.push(key);
//   }
// });

// /**
//  * Paths
//  */
// Object.keys(config.paths).forEach(function (key) {
//   if (key != 'assets') {
//     if (config.paths.assets === '') {
//       paths[key] = './' + config.paths[key];
//     } else {
//       paths[key] = config.paths.assets + '/' + config.paths[key];
//     }
//   }
// });

// /**
//  * Watch files for changes, recompile, and reload the browser.
//  */
// gulp.task('watch', function () {
//   if (config.tasks.imagemin) {
//     watch(paths.imagesSrc + '/**/*', function () {
//       gulp.start('imagemin');
//     });
//   }

//   if (config.tasks.sass) {
//     watch(paths.sass + '/**/*', function () {
//       gulp.start('sass');
//     });
//   }

//   if (config.tasks.browsersync) {
//     watch([
//       '!./node_modules/**/*',
//       '!./README.md',
//       './**/*.php',
//       paths.css + '/**/*',
//       paths.js + '/**/*',
//       paths.images + '/**/*'
//     ], function () {
//       gulp.start('browser-reload');
//     });
//   }
// });

// /**
//  * Build task, this will minify the images, compile the sass,
//  * bundle the js, but not launch BrowserSync and watch files.
//  */
// gulp.task('build', build);

// /**
//  * Default task, running just `gulp` will minify the images,
//  * compile the sass, bundle the js, launch BrowserSync, and
//  * watch files.
//  */
// gulp.task('default', tasks);

// /**
//  * Test
//  */
// gulp.task('test', ['build']);
