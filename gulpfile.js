'use strict';

const config     = require('./gulp/config.js');
const gulp       = require('gulp');
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
const tasks = [];
// var build = [];
// var paths = {};
// var entry = [];

Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key] && key != 'eslint') {
    tasks.push((key == 'webpack' && config.tasks.watch) ? '_' + key : key);
  }
});

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

gulp.task('default', tasks);
