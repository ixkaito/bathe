import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import '../css/main.css'

import logo from '../images/bathe-logo.svg'

const Header = ({ siteTitle }) => (
  <header className="bg-blue-500 text-white">
    <h1>
      <Link to="/">
        <img src={logo} alt={siteTitle}/>
      </Link>
    </h1>
    <nav>
      <ul>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#configurations">Configurations</a></li>
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
