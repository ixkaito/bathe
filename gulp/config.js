module.exports = {
  assets: './assets',

  browsersync: {
    siteurl: 'wocker.dev',
  },

  tasks: {
    browsersync: true,
    imagemin:    false,
    sass:        true,
    watch:       true,
    webpack:     true,
  },

  // paths: {
  //   assets:    './assets',
  //   css:       'css',
  //   js:        'js',
  //   images:    'images',
  //   sass:      '_sass',
  //   jsSrc:     '_js',
  //   imagesSrc: '_images',
  // },

  sass: {
    src:          '_sass',
    dest:         'css',
    outputStyle:  'compressed',
    autoprefixer: {
      browsers: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ],
    },
  },

  imagemin: {
    src:         '_images',
    dest:        'images',
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
  },

  js: {
    src: '_js',
    entry: [
      'main.js',
    ],
  },
}
