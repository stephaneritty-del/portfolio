import { useState } from 'react';
import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter, { ContactBand } from '../components/SiteFooter.jsx';
import { apps } from '../content.js';

export default function AppsPage() {
  const [active, setActive] = useState(0);
  const [showIframe, setShowIframe] = useState(false);
  const app = apps[active];

  const handleAppChange = (index) => {
    setActive(index);
    setShowIframe(false); // Reset to video preview when switching apps
  };

  const handleTryApp = () => {
    setShowIframe(true);
  };

  return (
    <>
      <SiteHeader className="page-header" />
      <main>
        <header className="case-hero">
          <p className="kicker">Independent 0→1</p>
          <h1 className="display-lg">The environment changes. <em>I still build.</em></h1>
          <p className="lead">
            Small AI products I design and build myself, from idea to working product, without an organization around
            them. Try them on your phone or desktop.
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
                {a.tip && <p className="app-tip">{a.tip}</p>}
                <p className="app-tags">{a.tags.join(' · ')}</p>
                {a.url && (
                <div className="button-row">
                  <button
                    type="button"
                    className="btn btn-light btn-small"
                    aria-pressed={active === i}
                    onClick={() => handleAppChange(i)}
                  >
                    {active === i ? 'Showing preview' : 'Preview'}
                  </button>
                  <a href={a.url} className="btn btn-accent btn-small" target="_blank" rel="noopener noreferrer">
                    Play now →
                  </a>
                </div>
                )}
              </li>
            ))}
          </ul>

          <div className="app-demo">
            <div className="phone">
              <div className="phone-screen">
                {!showIframe && app.video ? (
                  <div className="video-preview">
                    <video
                      key={app.id}
                      src={app.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="preview-video"
                    />
                    <button
                      type="button"
                      className="try-app-overlay"
                      onClick={handleTryApp}
                      aria-label={`Try ${app.title}`}
                    >
                      <span className="try-icon">▶</span>
                      <span className="try-text">Try it live</span>
                    </button>
                  </div>
                ) : (
                  <iframe
                    key={app.id}
                    src={app.url}
                    title={`${app.title} live demo`}
                    loading="lazy"
                    allow="camera; microphone; accelerometer; gyroscope; autoplay; fullscreen"
                  />
                )}
              </div>
            </div>
            <p className="app-demo-caption">
              {showIframe || !app.video ? 'Live: ' : 'Preview: '}{app.title}
              {' · '}
              <a href={app.url} target="_blank" rel="noopener noreferrer">
                open on your phone
              </a>
            </p>
          </div>
        </section>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
