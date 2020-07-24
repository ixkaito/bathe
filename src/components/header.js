import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import logo from '../images/bathe-logo.svg'

const Header = ({ siteTitle }) => (
  <header className="
    bg-blue-500 text-white sticky top-0 z-50
    px-5 py-6 sm:px-12 sm:py-8
    sm:flex justify-between items-center
  ">
    <h1 className="flex-shrink-0 w-32 sm:w-auto">
      <Link to="/">
        <img src={logo} alt={siteTitle} />
      </Link>
    </h1>
    <nav className="-mx-5 -mb-6 mt-2 sm:-mt-3">
      <ul className="flex px-3 sm:p-0 overflow-x-auto">
        <li>
          <a className="block p-3 sm:p-5 whitespace-no-wrap" href="#getting-started">
            Getting Started
          </a>
        </li>
        <li>
          <a className="block p-3 sm:p-5 whitespace-no-wrap" href="#configurations">
            Configurations
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header