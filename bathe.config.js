export default {
  tasks: {
    browsersync: true,
    eslint:      true,
    imagemin:    true,
    sass:        true,
    watch:       true,
    webpack:     true,
  },

  assets: './assets',

  browsersync: {
    siteurl: 'wocker.test',
  },

  eslintLoader: {
    enforce: "pre",
    test:    /\.js$/,
    exclude: /node_modules/,
    loader:  "eslint-loader",
  },

  imagemin: {
    src:         '_images',
    dest:        'images',
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
  },

  js: {
    src:   '_js',
    dest:  'js',
    entry: [
      'bundle.js',
    ],
  },

  sass: {
    src:          '_sass',
    dest:         'css',
    outputStyle:  'compressed',
  },

  webpack: {
    mode:   'production',
    module: {
      rules: [],
    },
  },
}
