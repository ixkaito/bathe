# Bathe

__WordPress Starter Theme for Gulp__

## Version

0.3.0

## Features

- Gulp
- Sass
- Autoprefixer
- Bourbon
- Neat
- Bitters
- Imagemin
- Browserify
- Watchify
- UglifyJS
- Browser-Sync

Bourbon is a lightweight Sass framework. If you don't use it, it will do nothing to your CSS file.

## Usage

If you don't use Gulp or Sass, you can just use this theme like others. Nothing else is necessary except WordPress environment.

### Using Gulp to develop in Bathe

#### 1 Install Node.js

[https://nodejs.org/](https://nodejs.org/)

Instead, the easiest way is using Homebrew.

```bash
$ brew install node
```

#### 2. Install Gulp globally

```bash
$ npm install --global gulp
```

#### 4 Clone this repo in WordPress theme directory

```bash
$ git clone https://github.com/ixkaito/bathe.git && cd bathe
```

You can also download the .zip file from the following URL.

[https://github.com/wp-bathe/bathe/archive/master.zip](https://github.com/wp-bathe/bathe/archive/master.zip)

#### 5. Install Node modules

```bash
$ npm install
```

#### 6. Change the site url

Change `siteurl` in `gulpconfig.json` for your environment. The default siteurl is `wocker.dev` for [Wocker](http://wckr.github.io/).

#### 7. Run Gulp

```
$ gulp
```

### Configurations and Defaults

You can change the configuration by editing `gulpconfig.json`

#### siteurl

An EXISTING vhost.

default: `"wocker.dev"`  
options: string  
example: `"localhost:8888"`

#### tasks

Tasks to run when you exec `gulp` command.

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

##### browser-sync

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

##### imageSrc

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
