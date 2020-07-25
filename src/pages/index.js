import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GitHubButton from 'react-github-btn'

import heroImage from '../images/hero.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="bg-blue-500 text-white bg-right-top bg-no-repeat bg-cover pt-px -mt-px"
      css={css`
        background-image: url(${heroImage});
      `}
    >
      <div
        className="
          max-w-4xl mx-auto flex flex-col justify-center items-start
          px-6 pt-3 pb-12 sm:p-10 sm:pb-16 md:px-12 md:pt-24 md:pb-20
        "
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
            className="inline-block font-bold text-lg px-12 py-4"
            css={css`
              background: var(--blue);
              border-radius: 2rem;
              box-shadow: -6px 6px 12px rgba(0, 0, 0, 0.2),
                6px -6px 12px rgba(255, 255, 255, 0.1);
              transition: box-shadow 0.25s;
              &:hover {
                box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2),
                  4px -4px 10px rgba(255, 255, 255, 0.1);
              }
              &:active {
                box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2),
                  4px -4px 10px rgba(255, 255, 255, 0.1),
                  -6px 6px 12px rgba(0, 0, 0, 0.2) inset,
                  6px -6px 12px rgba(255, 255, 255, 0.1) inset;
              }
            `}
            href="https://github.com/wp-bathe/bathe/archive/master.zip"
          >
            Get Bathe
          </a>
          <ul
            className="flex flex-wrap mt-12 sm:mt-16 md:mt-20"
            css={css`
              li {
                flex-shrink: 0;
                line-height: 0;
                margin: 0.25rem;
              }
            `}
          >
            <li>
              <a href="https://github.com/ixkaito/bathe/releases">
                <img
                  alt="GitHub release"
                  src="https://img.shields.io/github/release/ixkaito/bathe.svg"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/ixkaito/bathe/blob/master/LICENSE">
                <img
                  alt="license"
                  src="https://img.shields.io/github/license/ixkaito/bathe.svg?maxAge=2592000"
                />
              </a>
            </li>
            <li>
              <GitHubButton
                href="https://github.com/ixkaito/bathe"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-star"
                data-show-count="true"
                aria-label="Star ixkaito/bathe on GitHub"
              >
                Star
              </GitHubButton>
            </li>
            <li>
              <GitHubButton
                href="https://github.com/ixkaito/bathe/fork"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-repo-forked"
                data-show-count="true"
                aria-label="Fork ixkaito/bathe on GitHub"
              >
                Fork
              </GitHubButton>
            </li>
            <li>
              <GitHubButton
                href="https://github.com/ixkaito/bathe/generate"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-repo-template"
                aria-label="Use this template ixkaito/bathe on GitHub"
              >
                Use this template
              </GitHubButton>
            </li>
            <li>
              <GitHubButton
                href="https://github.com/ixkaito"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-show-count="true"
                aria-label="Follow @ixkaito on GitHub"
              >
                Follow Me
              </GitHubButton>
            </li>
            {/* <li><a className="github-button" href="https://github.com/ixkaito/bathe/fork" data-show-count="true" aria-label="Fork ixkaito/bathe on GitHub">Fork</a></li>
            <li><a className="github-button" href="https://github.com/ixkaito" data-show-count="true" aria-label="Follow @ixkaito on GitHub">Follow Me</a></li>
            <li><div className="fb-like" data-href="https://example.com/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div></li>
            <li><a href="https://twitter.com/share" className="twitter-share-button" data-url="https://example.com/">Tweet</a></li>
            <li><a href="https://twitter.com/ixkaito" className="twitter-follow-button" data-show-count="false">Follow Me</a></li>
            <li><a data-pocket-label="pocket" data-pocket-count="horizontal" className="pocket-btn" data-lang="en" data-save-url="https://example.com/"></a></li> */}
          </ul>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
