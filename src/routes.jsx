import Home from './pages/Home.jsx';
import CasePage from './pages/CasePage.jsx';
import AppsPage from './pages/AppsPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { cases, ROLE } from './content.js';

// Every page of the site. prerender.js turns each one into a static HTML file,
// and main.jsx picks the matching one in the browser.
export const routes = [
  {
    path: '/',
    file: 'index.html',
    title: `Stephane Ritty, ${ROLE}`,
    description:
      'Stephane Ritty, Head of Product. New services built inside Thermo Fisher and Dow, including a portfolio that brought $70M of new revenue in four years.',
    render: () => <Home />
  },
  ...cases.map((c) => ({
    path: `/work/${c.slug}`,
    file: `work/${c.slug}.html`,
    title: `${c.title} | Stephane Ritty`,
    description: c.description,
    render: () => <CasePage slug={c.slug} />
  })),
  {
    path: '/ai-apps',
    file: 'ai-apps.html',
    title: 'Side projects (2025) | Stephane Ritty',
    description: 'Personal-time experiments from 2025, when Stephane Ritty started building with AI.',
    noindex: true,
    render: () => <AppsPage />
  }
];

export const notFound = {
  path: '/404',
  file: '404.html',
  title: 'Page not found | Stephane Ritty',
  description: 'This page does not exist.',
  noindex: true,
  render: () => <NotFound />
};

export function matchRoute(pathname) {
  const clean = pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/+$/, '') || '/';
  return routes.find((r) => r.path === clean) || notFound;
}
