import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import tw from 'twin.macro'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GitHubButton from 'react-github-btn'

import heroImage from '../images/hero.png'

const markdown = css`
  h2 {
    ${tw`text-3xl font-bold mt-16 sm:mt-20 md:mt-24 mb-6`}
  }

  h3 {
    ${tw`text-lg font-bold mt-8 mb-4`}
  }

  p {
    ${tw`my-4`}
  }

  a {
    ${tw`text-blue-500`}
    &:hover {
      ${tw`underline`}
    }
  }

  strong {
    ${tw`font-semibold`}
  }

  ol {
    ${tw`list-decimal pl-4`}
  }

  ul {
    ${tw`list-disc pl-4`}
  }

  li {
    ${tw`my-4`}
  }

  pre {
    ${tw`my-4`}

    code {
      ${tw`rounded-lg bg-gray-800 text-white block p-4`}

      &.language-shell {
        &::before {
          ${tw`text-pink-500`}
          content: "$ ";
        }
      }
    }
  }

  code {
    ${tw`font-mono text-sm bg-blue-200 rounded px-1`}
    padding-bottom: 0.125rem;
    padding-top: 0.125rem;
  }

  .br {
    &::after {

    }
  }

  .features {
    ${tw`list-none p-0 -m-4 flex flex-wrap`}

    li {
      ${tw`text-center m-0 p-4 sm:p-3 md:p-4 w-1/3 sm:w-1/6`}

      figcaption {
        ${tw`mt-1 text-xs sm:text-sm text-gray-500 duration-200`}
      }
    }

    a {
      &:hover {
        ${tw`no-underline`}

        figcaption {
          ${tw`text-gray-800`}
        }
      }
    }
  }

  .button {
    ${tw`inline-block font-bold px-6 py-2 mx-1 my-2`}
    border-radius: 2rem;
    box-shadow: -6px 6px 12px #cbd5e0, 6px -6px 12px #fff;
    transition: box-shadow 0.25s;
    &:hover {
      ${tw`no-underline`}
      box-shadow: -4px 4px 10px #cbd5e0, 4px -4px 10px #fff;
    }
    &:active {
      box-shadow: 0 0 0 transparent, 0 0 0 transparent,
        -6px 6px 12px #e2e8f0 inset, 6px -6px 12px #fff inset;
    }
  }
`

const IndexPage = ({ location, data }) => {
  const { html } = data.markdownRemark
  return (
    <Layout>
      <SEO title="Bathe | The simplest WordPress starter theme" />
      <div
        className="bg-blue-500 text-white bg-right-top bg-no-repeat bg-cover pt-px -mt-px"
        css={css`
          background-image: url(${heroImage});
        `}
      >
        <div
          className="
            max-w-4xl mx-auto flex flex-col justify-center items-start
            px-6 pt-3 pb-12 sm:p-10 sm:pb-20 md:px-12 md:py-24
          "
        >
          <h1
            className="text-5xl font-bold"
            css={css`
              @media (min-width: 320px) {
                font-size: calc(6vw + 1.8rem);
              }
              @media (min-width: 1920px) {
                font-size: 9rem;
              }
            `}
          >
            Bathe
          </h1>
          <p
            className="font-semibold text-lg sm:text-xl"
            css={css`
              max-width: 23em;
              @media (min-width: 640px) {
                font-size: calc(0.938vw + 0.875rem);
              }
              @media (min-width: 1920px) {
                font-size: 2rem;
              }
            `}
          >
            The simplest WordPress starter theme including Sass, PostCSS,
            Autoprefixer, stylelint, Webpack, ESLint, imagemin, Browsersync,
            etc.
          </p>
          <div className="mt-8 sm:mt-10 md:mt-12">
            <a
              className="inline-block font-bold text-lg px-12 py-4 bg-blue-500"
              css={css`
                border-radius: 2rem;
                box-shadow: -6px 6px 12px rgba(0, 0, 0, 0.2),
                  6px -6px 12px rgba(255, 255, 255, 0.1);
                transition: box-shadow 0.25s;
                &:hover {
                  box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.2),
                    4px -4px 10px rgba(255, 255, 255, 0.1);
                }
                &:active {
                  box-shadow: 0 0 0 transparent, 0 0 0 transparent,
                    -6px 6px 12px rgba(0, 0, 0, 0.2) inset,
                    6px -6px 12px rgba(255, 255, 255, 0.1) inset;
                }
              `}
              href="https://github.com/wp-bathe/bathe/archive/master.zip"
            >
              Get Bathe
            </a>
          </div>
          <ul
            className="flex flex-wrap mt-8 sm:mt-12 md:mt-16"
            css={css`
              @media (min-width: 640px) {
                &::before,
                &::after {
                  content: "";
                  flex-basis: 100%;
                  order: 1;
                }
              }

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
                  src="https://img.shields.io/github/v/release/ixkaito/bathe?color=ed64a6"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/ixkaito/bathe/blob/master/LICENSE">
                <img
                  alt="license GPL 2.0 or later"
                  src="https://img.shields.io/badge/license-GPL--2.0%2B-orange"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/ixkaito/bathe/blob/master/package.json#L67">
                <img
                  alt="node >= 12.0.0"
                  src="https://img.shields.io/badge/node-%3E%3D%2012.0.0-brightgreen"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/ixkaito/bathe/blob/master/package.json#L68">
                <img
                  alt="npm >= 6.9.0"
                  src="https://img.shields.io/badge/npm-%3E%3D%206.9.0-brightgreen"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/ixkaito/bathe/actions">
                <img
                  alt="Test"
                  src="https://github.com/ixkaito/bathe/workflows/Test/badge.svg"
                />
              </a>
            </li>
            <li className="order-1">
              <GitHubButton
                href="https://github.com/ixkaito/bathe/generate"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-repo-template"
                aria-label="Use this template ixkaito/bathe on GitHub"
              >
                Use this template
              </GitHubButton>
            </li>
            <li className="order-1">
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
            <li className="order-1">
              <GitHubButton
                href="https://github.com/ixkaito"
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-show-count="true"
                aria-label="Follow @ixkaito on GitHub"
              >
                Follow
              </GitHubButton>
            </li>
            <li className="order-1">
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
            <li className="order-2">
              <div
                class="fb-share-button"
                data-href="https://ixkaito.github.io/bathe/"
                data-layout="button_count"
                data-size="small"
              >
                <a
                  target="_blank"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    location.href
                  )}&amp;src=sdkpreparse`}
                  class="fb-xfbml-parse-ignore"
                >
                  Share
                </a>
              </div>
            </li>
            <li
              className="order-2"
              css={css`
                min-width: 60px;
              `}
            >
              <a
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet?text=Bathe%20%7C%20The%20simplest%20WordPress%20starter%20theme"
              >
                Tweet
              </a>
            </li>
            <li className="order-2">
              <a
                class="twitter-follow-button"
                href="https://twitter.com/ixkaito"
                data-show-count="false"
                data-show-screen-name="false"
              >
                Follow @ixkaito
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-12 sm:px-10 sm:pb-16 md:px-12 md:pb-20">
        <div css={markdown} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "index" } }) {
      html
    }
  }
`
