---
slug: index
---

## Features



<h2 id="quick-start">Quick Start</h2>

### 1. Download Bathe or generate a new repository with Bathe

<a class="button" href="https://github.com/wp-bathe/bathe/archive/master.zip">Download</a>
<a class="button" href="https://github.com/ixkaito/bathe/generate" target="_blank" rel="noopener">Use this template</a>

### 2. Unzip the file or clone the repository into your WordPress environment

### 3. Change directories into the Bathe folder

```shell
cd /path/to/bathe
```

### 4. Install dependencies

```shell
npm install
```

Or with [yarn](https://classic.yarnpkg.com/en/):

```shell
yarn
```

### 5. Change the `proxy` of browsersync in `package.json` for your environment

The default `proxy` is `localhost:8888` for [wp-env](https://developer.wordpress.org/block-editor/packages/packages-env/).

### 6. Start developing

```shell
npm run dev
```

Or with yarn:

```shell
yarn dev
```

<h2 id="configurations">Configurations and Defaults</h2>

You can modify the configurations by editing `config` in `package.json`.

### Defaults

```json
"config": {
  "browsersync": {
    "proxy": "localhost:8888",
    "port": 3000
  },
  "image": {
    "src": "assets/src/images",
    "dist": "assets/images"
  },
  "js": {
    "entry": "bundle.js",
    "src": "assets/src/js",
    "dist": "assets/js"
  },
  "css": {
    "src": "assets/src/scss",
    "dist": "assets/css",
    "style": "compressed",
    "map": "--map"
  }
}
```

## Notes

- Bathe doesn't load the default theme stylesheet `style.css` by default.
- You can use Bathe without Node.js (Sass, Webpack, Browsersync, etc.) just like other themes. Nothing else is necessary except WordPress environment.
