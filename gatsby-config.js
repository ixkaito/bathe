module.exports = {
  pathPrefix: '/bathe',
  siteMetadata: {
    title: `Bathe`,
    description: `The simplest WordPress starter theme including full setup for Sass, PostCSS, Autoprefixer, stylelint, Webpack, Eslint, imagemin, Browsersync, etc.`,
    url: `https://ixkaito.github.io/bathe`,
    author: `@ixkaito`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ixkaito.github.io/bathe/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bathe`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0080ff`,
        theme_color: `#0080ff`,
        display: `minimal-ui`,
        icon: `src/images/bathe-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
