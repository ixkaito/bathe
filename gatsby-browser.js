/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import 'typeface-inter'

import './src/css/global.css'

const addScript = url => {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript('https://buttons.github.io/buttons.js')
  }
}
