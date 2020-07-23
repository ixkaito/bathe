import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        background: '#f00'
      }}
    >
      <h1>Bathe</h1>
      <p>The simplest WordPress starter theme including full setup for Sass, PostCSS, Autoprefixer, stylelint, Webpack, imagemin, Browsersync etc.</p>
      <figure
        style={{
          background: '#f00'
        }}
      >
        <Image />
      </figure>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
