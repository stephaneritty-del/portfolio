import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { routes, notFound } from './routes.jsx'

// Used only at build time by prerender.js.
export const pages = [...routes, notFound].map((r) => ({
  path: r.path,
  file: r.file,
  title: r.title,
  description: r.description,
  noindex: !!r.noindex,
  html: () => ReactDOMServer.renderToString(<React.StrictMode>{r.render()}</React.StrictMode>)
}))
