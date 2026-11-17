import React from 'react'
import ReactDOM from 'react-dom/client'
import { matchRoute } from './routes.jsx'
import { inject } from '@vercel/analytics'
import { startTracking, connectPostHog } from './analytics.js'
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

// PostHog product analytics, also cookieless: nothing is stored on the visitor's device. PostHog recognizes a visit
// on its servers from an anonymous hash that changes every day, so journeys across pages still connect.
// The project key is public by design; Vercel's VITE_POSTHOG_KEY / VITE_POSTHOG_HOST can override it.
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY || 'phc_yX7Q9rPy6MV7ZR274L4Vde3XwTWBYHEzvK3berM46Fug'
if (POSTHOG_KEY) {
  startTracking()
  // Loaded separately so it never slows down the page itself
  import('posthog-js').then(({ default: posthog }) => {
    posthog.init(POSTHOG_KEY, {
      // Sent through our own subdomain (PostHog managed reverse proxy) so ad blockers don't drop visits
      api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://e.stephaneritty.com',
      ui_host: 'https://eu.posthog.com',
      cookieless_mode: 'always',
      // Screen recordings would break the footer's "no personal data" promise
      disable_session_recording: true
    })
    connectPostHog(posthog)
  })
}
