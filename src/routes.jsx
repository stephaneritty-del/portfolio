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
    title: `Stephane Ritty, ${ROLE} | I turn chaos into revenue lines`,
    description:
      'Head of Product Stephane Ritty builds products, services and platforms from zero: $70M in new revenue over 4 years from the NPI portfolio he led at Thermo Fisher.',
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
