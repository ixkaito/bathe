import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import logo from '../images/bathe-logo.svg'

const Header = ({ siteTitle }) => (
  <header className="bg-blue-500 text-white py-8 px-12 flex justify-between items-center">
    <h1>
      <Link to="/">
        <img src={logo} alt={siteTitle}/>
      </Link>
    </h1>
    <nav>
      <ul className="flex">
        <li><a className="p-5" href="#getting-started">Getting Started</a></li>
        <li><a className="p-5" href="#configurations">Configurations</a></li>
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
