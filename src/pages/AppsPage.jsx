import { useState } from 'react';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter, { ContactBand } from '../components/SiteFooter.jsx';
import { apps } from '../content.js';

export default function AppsPage() {
  const [active, setActive] = useState(0);
  const app = apps[active];

  return (
    <>
      <SiteHeader className="page-header" />
      <main>
        <header className="case-hero">
          <p className="kicker">AI apps</p>
          <h1 className="display-lg">Built hands-on, <em>still shipping.</em></h1>
          <p className="lead">
            Side projects I design and build myself with AI, from the first idea to a live product.
          </p>
        </header>

        <section className="band apps">
          <ul className="apps-list">
            {apps.map((a, i) => (
              <li key={a.id} className="app-item">
                <div className="app-head">
                  <h2 className="app-title">{a.title}</h2>
                  <span className="app-status">{a.status}</span>
                </div>
                <p className="app-subtitle">{a.subtitle}</p>
                <p className="app-text">{a.description}</p>
                <p className="app-tags">{a.tags.join(' · ')}</p>
                <div className="button-row">
                  <a href={a.url} className="btn btn-light btn-small" target="_blank" rel="noopener noreferrer">
                    Open app
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline btn-small"
                    aria-pressed={active === i}
                    onClick={() => setActive(i)}
                  >
                    {active === i ? 'Showing below' : 'Preview here'}
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="app-demo">
            <div className="app-demo-head">
              <h2 className="display-sm">Live demo: {app.title}</h2>
              <a href={app.url} target="_blank" rel="noopener noreferrer">Open in a new tab</a>
            </div>
            <iframe key={app.id} src={app.url} title={`${app.title} live demo`} loading="lazy" />
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
