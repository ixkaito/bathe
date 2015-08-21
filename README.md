# Bathe
__Blank WordPress Theme for Gulp__

## Features
- Gulp
- Sass
- Compass
- Imagemin
- Browserify
- Watchify
- UglifyJS
- Browser-Sync
- Bourbon
- Neat

## Usage
If you don't use Gulp or Compass, you can just use this theme like other themes. Nothing else is necessary except WordPress Environment.

### Using Gulp to develop in Bathe

#### 1 Install Node.js

[https://nodejs.org/](https://nodejs.org/)

Instead, the easiest way is using Homebrew.

```
$ brew install node
```

#### 2. Install Sass and Compass

```
$ gem install compass
```

This will install both Sass and Compass.

#### 3 Clone this repo in WordPress theme directory

```
$ git clone https://github.com/ixkaito/bathe.git && cd bathe
```

You can also download the .zip file from the following URL.

[https://github.com/ixkaito/bathe/archive/master.zip](https://github.com/ixkaito/bathe/archive/master.zip)

#### 4. Install Node modules

```
$ npm install
```

#### 6. Change the site url

Change `siteurl` in `gulpconfig.json` for your environment.

#### 7. Run Gulp

```
$ gulp
```

### Options

You can change the configuration by editing `gulpconfig.json`

- siteurl: `wocker.dev`
- tasks:
  - compass:      `true`
  - browserify:   `true`
  - imagemin:     `true`
  - browser-sync: `true`
  - watch:        `true`
- paths:
  - assets:    `./assets`
  - css:       `css`
  - js:        `js`
  - images:    `images`
  - sass:      `_sass`
  - jsSrc:     `_js`
  - imagesSrc: `_images`
- compass:
  - config:   `./config.rb`
  - style:    `compressed`
  - comments: `false`
- js:
  - src:
    - `main.js`
  - dist: `main.js`

## Notes
- The default theme stylesheet will not be loaded.
