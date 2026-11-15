import React from 'react'
import ReactDOM from 'react-dom/client'
import { matchRoute } from './routes.jsx'
import { inject } from '@vercel/analytics'
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

// Cookieless page-view counting (no consent banner needed)
inject()

// PostHog product analytics, also cookieless: nothing is stored on the visitor's device, so a returning
// visitor counts as new. The key and host come from Vercel's environment variables; without them it stays off.
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY
if (POSTHOG_KEY) {
  // Loaded separately so it never slows down the page itself
  import('posthog-js').then(({ default: posthog }) => {
    posthog.init(POSTHOG_KEY, {
      api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com',
      persistence: 'memory',
      person_profiles: 'identified_only'
    })
  })
}
