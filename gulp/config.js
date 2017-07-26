module.exports = {
  assets: "./assets",

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
  //   assets:    "./assets",
  //   css:       "css",
  //   js:        "js",
  //   images:    "images",
  //   sass:      "_sass",
  //   jsSrc:     "_js",
  //   imagesSrc: "_images",
  // },

  sass: {
    src: "_sass",
    outputStyle: "compressed",
    autoprefixer: {
      browsers: [
        "> 1%",
        "last 2 versions",
        "Firefox ESR",
      ]
    },
    dest: "css",
  },

  js: {
    entry: [
      "main.js",
    ],
  },
}
