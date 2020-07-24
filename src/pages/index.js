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
      className="bg-blue-500 text-white bg-right-top bg-no-repeat bg-cover"
      css={css`
        background-image: url(${heroImage});
      `}
    >
      <div
        className="
          max-w-4xl mx-auto flex flex-col justify-center items-start
          px-6 pt-0 pb-12 sm:p-10 sm:pt-10 sm:pb-20 md:px-12 md:py-24
        "
        css={css`
          /* min-height: 50vw; */
        `}
      >
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
        <div className="mt-8 sm:mt-10 md:mt-12">
          <a
            className="block font-bold text-lg px-12 py-4"
            css={css`
              border-radius: 2rem;
              box-shadow: -6px 6px 12px rgba(0, 0, 0, 0.2),
                6px -6px 12px rgba(255, 255, 255, 0.1);
            `}
            href="https://github.com/wp-bathe/bathe/archive/master.zip"
          >
            Get Bathe
          </a>
          <p className="text-center text-sm mt-5">Version 1.0.0</p>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
