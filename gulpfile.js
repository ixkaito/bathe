'use strict';

const config     = require('./gulp/config.js');
const gulp       = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks', {recurse: true});

const tasks = [];
Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key] && key != 'eslint') {
    tasks.push((key == 'webpack' && config.tasks.watch) ? '_' + key : key);
  }
});

/**
 * Default task, running just `gulp` will minify the images,
 * compile the sass, bundle the js, launch BrowserSync, and
 * watch files.
 */
gulp.task('default', tasks);
