import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import logo from '../images/bathe-logo.svg'

const Header = ({ siteTitle }) => (
  <header
    className="
      bg-blue-500 text-white sticky top-0 z-50
      p-6 sm:pl-8 sm:pr-10 sm:pt-6 sm:pb-8 md:pl-10 md:pr-12
      flex flex-wrap justify-between items-center
    "
    css={css`
      nav a {
        @media screen and (min-width: 640px) {
          border-radius: 2rem;
          transition: box-shadow 0.25s;
          &:hover {
            box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.2),
              4px -4px 8px rgba(255, 255, 255, 0.1);
          }
          &:active {
            box-shadow: 0 0 0 transparent,
              0 0 0 transparent,
              -4px 4px 8px rgba(0, 0, 0, 0.2) inset,
              4px -4px 8px rgba(255, 255, 255, 0.1) inset;
          }
        }
      }
    `}
  >
    <h1 className="flex-shrink-0">
      <Link to="/">
        <img className="h-8 sm:h-auto" src={logo} alt={siteTitle} />
      </Link>
    </h1>
    <nav
      css={css`
        flex-basis: 100%;
        @media screen and (min-width: 640px) {
          flex-basis: auto;
        }
      `}
      className="order-1 -mx-6 -mb-3 mt-2 sm:ml-auto sm:mr-5 sm:-mt-6 sm:-mb-8"
    >
      <ul className="flex px-3 sm:p-0 overflow-x-auto sm:overflow-visible">
        <li>
          <a
            className="block p-3 sm:px-5 sm:py-1 whitespace-no-wrap"
            href="#quick-start"
          >
            Quick Start
          </a>
        </li>
        <li>
          <a
            className="block p-3 sm:px-5 sm:py-1 whitespace-no-wrap"
            href="#configurations"
          >
            Configurations
          </a>
        </li>
      </ul>
    </nav>
    <nav className="sm:order-2 sm:self-end">
      <a
        href="https://github.com/ixkaito/bathe"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <svg
          className="w-8 h-8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9994 2C6.47766 2 2 6.4771 2 12.0006C2 16.4183 4.86503 20.1664 8.83911 21.4889C9.33912 21.5806 9.52163 21.2719 9.52163 21.0069C9.52163 20.7695 9.51297 20.1406 9.50813 19.3061C6.72646 19.9104 6.13953 17.9656 6.13953 17.9656C5.68482 16.8104 5.02924 16.5029 5.02924 16.5029C4.1213 15.8824 5.09794 15.895 5.09794 15.895C6.10147 15.9657 6.62965 16.9255 6.62965 16.9255C7.5217 18.4537 8.97011 18.0124 9.53992 17.7564C9.63078 17.1102 9.88911 16.6695 10.1748 16.4195C7.95425 16.1672 5.6198 15.3093 5.6198 11.4772C5.6198 10.3856 6.00944 9.4929 6.64911 8.79386C6.54629 8.54088 6.20312 7.52415 6.74715 6.14738C6.74715 6.14738 7.58677 5.8785 9.49707 7.17252C10.2947 6.95072 11.1502 6.83979 12.0006 6.83592C12.8498 6.83979 13.7053 6.95072 14.5041 7.17252C16.4132 5.8785 17.2513 6.14738 17.2513 6.14738C17.7969 7.52415 17.4536 8.54088 17.3508 8.79386C17.9917 9.4929 18.3787 10.3856 18.3787 11.4772C18.3787 15.3188 16.0407 16.1642 13.8129 16.4118C14.172 16.7205 14.4918 17.3308 14.4918 18.2636C14.4918 19.6005 14.4795 20.679 14.4795 21.0069C14.4795 21.2743 14.6596 21.5854 15.1672 21.4878C19.1374 20.1628 22 16.4172 22 12.0006C22 6.4771 17.5223 2 11.9994 2Z"
            fill="#ffffff"
          />
        </svg>
      </a>
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
