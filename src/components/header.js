import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import '../css/main.css'

const Header = ({ siteTitle }) => (
  <header className="bg-blue-500">
    <h1 className="text-white">
      <Link to="/">
        <img src="" alt=""/>
        {siteTitle}
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
