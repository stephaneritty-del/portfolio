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
    title: `Stephane Ritty, ${ROLE} | I build what doesn’t exist yet`,
    description:
      'Stephane Ritty, Head of Product. 0→1 products, services and businesses: $70M of new revenue in four years at Thermo Fisher, a service built in three months, AI prototypes built hands-on.',
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
    title: 'AI prototypes | Stephane Ritty',
    description: 'Prototyping with AI: prototypes and cheap test artifacts Stephane Ritty designs and builds himself to validate assumptions. VitalEat, Cross Invasion, WineCard Selector and more.',
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
