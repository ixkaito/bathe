const ESLintPlugin = require('eslint-webpack-plugin');
const MODE = 'production';

module.exports = {
  mode: MODE,

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.ts'],
    }),
  ],
};
