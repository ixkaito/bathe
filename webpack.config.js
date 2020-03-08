const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MODE = 'production';
const enabledSourceMap = (MODE === 'development');

module.exports = {
  mode: MODE,

  entry: {
    bundle: './assets/_js/bundle.js',
  },
  output: {
    path: `${__dirname}/assets/js`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: enabledSourceMap,
              plugins: [
                require('autoprefixer')({ grid: true })
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '${__dirname}/assets/css/style.css',
    }),
  ],
};
