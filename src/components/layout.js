/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <body className="font-inter antialiased bg-gray-200 text-gray-900" />
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0"
          nonce="7ePK7Kt3"
        />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="px-6 py-4 sm:px-10 md:px-12 text-center text-gray-500">
        © {new Date().getFullYear()} the contributors of Bathe under
        the{' '}
        <a
          href="https://github.com/ixkaito/bathe/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:underline"
        >
          GPL version 2.0
        </a>{' '}
        or later.
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
