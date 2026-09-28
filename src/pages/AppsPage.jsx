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
          <p className="kicker">Independent 0→1</p>
          <h1 className="display-lg">The environment changes. <em>I still build.</em></h1>
          <p className="lead">
            Small AI products I design and build myself, from idea to working product, without an organization around
            them. Open any of them in the phone.
          </p>
        </header>

        <section className="band apps-layout">
          <ul className="apps-list">
            {apps.map((a, i) => (
              <li key={a.id} className={`app-item${active === i ? ' is-active' : ''}`}>
                <div className="app-head">
                  <h2 className="app-title">{a.title}</h2>
                  <span className="app-status">{a.status}</span>
                </div>
                <p className="app-subtitle">{a.subtitle}</p>
                <p className="app-text">{a.description}</p>
                <p className="app-tags">{a.tags.join(' · ')}</p>
                <div className="button-row">
                  <button
                    type="button"
                    className="btn btn-light btn-small"
                    aria-pressed={active === i}
                    onClick={() => setActive(i)}
                  >
                    {active === i ? 'Showing in the phone' : 'Try it in the phone'}
                  </button>
                  <a href={a.url} className="btn btn-outline btn-small" target="_blank" rel="noopener noreferrer">
                    Open full screen
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <div className="app-demo">
            <div className="phone">
              <div className="phone-screen">
                <iframe key={app.id} src={app.url} title={`${app.title} live demo`} loading="lazy" />
              </div>
            </div>
            <p className="app-demo-caption">
              Live: {app.title} ·{' '}
              <a href={app.url} target="_blank" rel="noopener noreferrer">open in a new tab</a>
            </p>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
