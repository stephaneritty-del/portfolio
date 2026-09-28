import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App.jsx'

// Used only at build time by prerender.js to turn the app into static HTML.
export function render() {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
