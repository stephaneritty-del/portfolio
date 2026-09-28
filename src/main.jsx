import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// In production the HTML is pre-rendered at build time (see prerender.js),
// so React attaches to the existing markup. In `npm run dev` it's empty.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, app)
} else {
  ReactDOM.createRoot(container).render(app)
}
