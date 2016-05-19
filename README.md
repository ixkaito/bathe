# Bathe [![GitHub release](https://img.shields.io/github/release/wp-bathe/bathe.svg)](https://github.com/wp-bathe/bathe/releases) [![license](https://img.shields.io/github/license/wp-bathe/bathe.svg?maxAge=2592000)](https://github.com/wp-bathe/bathe/blob/master/LICENSE)

__WordPress starter theme including full setup for Gulp, Sass, Autoprefixer, Bourbon/Neat/Bitters, Browserify, Imagemin, Browsersync, etc.__

## Features

- Gulp
- Sass
- Autoprefixer
- Bourbon/Neat/Bitters
- Browserify
- Watchify
- UglifyJS
- Imagemin
- Browsersync

Bourbon is a lightweight Sass framework. If you don't use it, it will do nothing to your CSS file.

## Usage

If you don't use Gulp or Sass, you can just use this theme like others. Nothing else is necessary except WordPress environment.

### Using Gulp to develop in Bathe

#### 1 Install Node.js

[https://nodejs.org/](https://nodejs.org/)

Instead, the easiest way is using Homebrew.

```shell
$ brew install node
```

#### 2 Clone this repo into your WordPress theme directory

```shell
$ git clone https://github.com/ixkaito/bathe.git && cd bathe
```

You can also download the .zip file from the following URL.

[https://github.com/wp-bathe/bathe/archive/master.zip](https://github.com/wp-bathe/bathe/archive/master.zip)

#### 3. Install Node modules

```shell
$ npm install
```

#### 4. Change the site url

Change `siteurl` in `batheconfig.json` for your environment. The default siteurl is `wocker.dev` for [Wocker](http://wckr.github.io/).

#### 5. Run the package's start script

```shell
$ npm start
```

Or, if you have installed Gulp globally, this is also available and is same as `npm start`.

```shell
$ gulp
```

### Configurations and Defaults

You can change the configuration by editing `batheconfig.json`

#### siteurl

An EXISTING vhost.

default: `"wocker.dev"`  
options: string  
example: `"localhost:8888"`

#### tasks

Tasks to run when you exec `npm start` or `gulp` command.

##### sass

To compile Sass.

default: `true`  
options: boolean (`true` / `false`)

##### browserify

To use Browserify.

default: `true`  
options: boolean (`true` / `false`)

##### imagemin

To minify images.

default: `true`  
options: boolean (`true` / `false`)

##### browsersync

To keep browsers in sync with file changes.

default: `true`  
options: boolean (`true` / `false`)

##### watch

To watch files and run tasks on file changes.

#### paths

Settings about paths.

##### assets

The directory to gather all assets.

default: `"./assets"`  
options: string  
example: `"./"` (directly under the theme direcotry)

##### css

The CSS destination directory for Sass.

default: `"css"`  
options: string  
example: `"stylesheets"`

##### js

The JavaScript destination directory for Browserify.

default: `"js"`  
options: string  
example: `"javascripts"`

##### images

The destination directory of compressed image files for Imagemin.

default: `"images"`  
options: string  
example: `"img"`

##### sass

The directory of Sass files.

default: `"_sass"`  
options: string  
example: `"src/sass"`

##### jsSrc

The directory of JavaScript source files to bundle up by Browserify.

default: `"_js"`  
options: string  
example: `"src/js`"

##### imagesSrc

The directory of image source files to compress.

default: `"_images"`  
options: string  
example: `"src/images"`

#### sass

Sass settings.

##### outputStyle

The output style of Sass.

default: `"compressed"`  
options: `"expanded"`, `"nested"`, `"compact"`, `"compressed"`

#### autoprefixer

Autoprefixer settings.

##### browsers

List of browsers, which are supported in your theme.

default: `["> 1%", "last 2 versions", "Firefox ESR"]`  
options: array. See [Browserslist docs](https://github.com/ai/browserslist#queries) for available queries.
example: `["> 5%", "last 2 versions", "IE 8"]`

#### js

JavaScript settings.

##### src

File name(s) of JavaScript source file(s).

default: `["main.js"]`  
options: array  
example: `["pluginA.js", "pluginB.js", "main.js"]`

##### dist

The distribution JavaScript file name.

default: `"main.js"`  
options: string  
example: `"script.js"`

## Notes

Bathe doesn't load the default theme stylesheet "style.css" by default.

## Copyright / License

Copyright &copy; 2015-2016 the contributors of the Bathe project under the [GPL version 2](https://raw.githubusercontent.com/wp-bathe/bathe/master/LICENSE) or later.
