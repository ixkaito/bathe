# Bathe [![GitHub release](https://img.shields.io/github/release/wp-bathe/bathe.svg)](https://github.com/wp-bathe/bathe/releases) [![license](https://img.shields.io/badge/license-GPL--2.0_or_later-orange.svg?maxAge=2592000)](https://github.com/wp-bathe/bathe/blob/master/LICENSE)

**The simplest WordPress starter theme including full setup for Sass, PostCSS, Autoprefixer, stylelint, Webpack, imagemin, Browsersync etc.**

## Features

- Browsersync
- Sass
- Autoprefixer
- PostCSS
- Webpack
- Stylelint
- ESlint
- Imagemin

## Usage

If you don't want to use Sass or Webpack, you can just use this theme like others. Nothing else is necessary except WordPress environment.

### Getting Started

#### 1. Clone this repo into your WordPress theme directory

```shell
$ git clone https://github.com/ixkaito/bathe.git && cd bathe
```

You can also download the .zip file from the following URL.

[https://github.com/wp-bathe/bathe/archive/master.zip](https://github.com/wp-bathe/bathe/archive/master.zip)

#### 2. Install Node modules

```shell
$ npm install
```

#### 3. Change the site url

Change `proxy` of browsersync in `package.json` for your environment. The default is `localhost:8888`.

#### 4. Run the dev script

```shell
$ npm run dev
```

### Configurations and Defaults

You can change the configuration by editing `config` in `package.json`

## Notes

Bathe doesn't load the default theme stylesheet `style.css` by default.

## Copyright / License

© 2015 the contributors of the Bathe project under the [GPL version 2.0](https://raw.githubusercontent.com/wp-bathe/bathe/master/LICENSE) or later.
