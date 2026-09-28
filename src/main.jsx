import React from 'react'
import ReactDOM from 'react-dom/client'
import { matchRoute } from './routes.jsx'
import './styles.css'

const container = document.getElementById('root')
const route = matchRoute(window.location.pathname)
const app = <React.StrictMode>{route.render()}</React.StrictMode>

// In production every page is pre-rendered at build time (see prerender.js),
// so React attaches to the existing markup. In `npm run dev` it's empty.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
