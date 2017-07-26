const argv          = require('yargs').argv;
const assets        = require('../config.js').assets;
const config        = require('../config.js').webpack;
const eslintLoader  = require('../config.js').eslintLoader;
const gulp          = require('gulp');
const js            = require('../config.js').js;
const named         = require('vinyl-named');
const plumber       = require('gulp-plumber');
const tasks         = require('../config.js').tasks;
const uglify        = require('gulp-uglify');
const webpackStream = require('webpack-stream');
const webpack       = require('webpack');

const entry = [];
for (var i = 0; i <= js.entry.length - 1; i++) {
  entry.push(assets + '/' + js.src + '/' + js.entry[i]);
}

if (tasks.eslint) config.module.rules.push(eslintLoader);

config.watch = argv.watch;

gulp.task('webpack', function () {
  return gulp.src(entry)
    .pipe(plumber())
    .pipe(named())
    .pipe(webpackStream(config, webpack))
    .pipe(uglify())
    .pipe(gulp.dest(assets + '/' + js.dest));
});

// For internal use only
gulp.task('_webpack', function () {
  config.watch = tasks.watch;
  gulp.start('webpack');
});
