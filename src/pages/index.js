import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

import heroImage from '../images/hero.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="
        bg-blue-500 text-white bg-right bg-no-repeat bg-cover
        p-6 pt-0 sm:p-10 sm:pt-2 md:p-12
      "
      css={css`
        background-image: url(${heroImage});
      `}
    >
      <div
      css={css`
        min-height: 50vw;
      `}
      className="max-w-4xl mx-auto flex flex-col justify-center">
        <h1
          className="text-5xl font-bold"
          css={css`
            @media screen and (min-width: 640px) {
              font-size: 7.5vw;
            }
          `}
        >
          Bathe
        </h1>
        <p
          className="font-semibold text-lg sm:text-xl"
          css={css`
            max-width: 22em;

            @media screen and (min-width: 640px) {
              font-size: calc(1.25vw + 0.75rem);
            }
          `}
        >
          The simplest WordPress starter theme including Sass, PostCSS,
          Autoprefixer, stylelint, Webpack, imagemin, Browsersync etc.
        </p>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
