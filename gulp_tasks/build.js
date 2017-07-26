const config        = require('../bathe.config.js');
const gulp          = require('gulp');

const build = [];
Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key] && key != 'browsersync' && key != 'watch') {
    build.push(key);
  }
});

/**
 * Build task, this will minify the images, compile the sass,
 * bundle the js, but not launch BrowserSync and watch files.
 */
gulp.task('build', build);

/**
 * Test task, this use the build task.
 */
gulp.task('test', build);
