import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter, { ContactBand } from '../components/SiteFooter.jsx';
import ChaosLine from '../components/ChaosLine.jsx';
import { EMAIL, ROLE, TESTIMONIAL, cases, homeCases, heroProof, toolkit } from '../content.js';

const linkFor = (slug) => ({ href: `/work/${slug}`, label: cases.find((c) => c.slug === slug).cardTitle });

export default function Home() {
  const featured = homeCases.map((slug) => cases.find((c) => c.slug === slug));

  return (
    <>
      <section className="home-hero">
        <img
          className="home-hero-photo"
          src="/portrait.jpg"
          alt="Stephane Ritty"
          width="930"
          height="1410"
        />
        <SiteHeader className="home-hero-header" />
        <div className="home-hero-content">
          <p className="kicker">{ROLE}</p>
          <h1 className="display-xl">
            I turn chaos into <em>revenue lines.</em>
          </h1>
          <p className="lead">
            I see what others miss. Markets with zero presence, stalled initiatives, empty seats: I walk in,
            build the strategy, assemble the team, and ship.
          </p>
          <ul className="hero-proof" aria-label="Track record">
            {heroProof.map(([value, label]) => (
              <li key={label}>
                <span className="hero-proof-value">{value}</span>
                <span className="hero-proof-label">{label}</span>
              </li>
            ))}
          </ul>
          <div className="button-row">
            <a href="#build" className="btn btn-light">See what I&apos;ve built</a>
            <a href={`mailto:${EMAIL}`} className="btn btn-outline">Get in touch</a>
          </div>
        </div>
      </section>

      <main>
        <section className="band band-line" aria-label="From chaos to a clean line">
          <ChaosLine startLabel="Zero presence · stalled · empty seats" endLabel="Shipped." />
        </section>

        <section id="about" className="band band-center">
          <p className="kicker">How I work</p>
          <p className="display-lg statement">
            Like a rugby forward, I go into the rucks no one wants, <em>so the team can move forward.</em>
          </p>
          <p className="statement-proof">
            At Thermo Fisher, the finance director blocking the rental model became its first pilot site.
          </p>
        </section>

        <section id="build" className="band">
          <div className="section-head">
            <h2 className="display-md">What I build</h2>
            <p className="section-note">Product and innovation management, NPI portfolios, from zero to launch</p>
          </div>
          <div className="build-grid">
            {featured.map((c) => (
              <a key={c.slug} href={`/work/${c.slug}`} className="build-item">
                <span className="kicker">{c.kind}</span>
                <span className="build-title">{c.cardTitle}</span>
                <span className="build-text">{c.cardText}</span>
                <span className="build-more">Read the case</span>
              </a>
            ))}
          </div>
        </section>

        <section id="toolkit" className="band">
          <div className="section-head">
            <h2 className="display-md">My toolkit</h2>
            <p className="section-note">The methods I use to go from unknown to launched, and where I used them</p>
          </div>
          <ul className="toolkit">
            {toolkit.map((t) => (
              <li key={t.name} className="toolkit-row">
                <div className="toolkit-name">
                  <span className="toolkit-title">{t.name}</span>
                  {t.by && <span className="toolkit-by">{t.by}</span>}
                </div>
                <p className="toolkit-what">{t.what}</p>
                <p className="toolkit-used">
                  {t.used.map((slug, i) => {
                    const l = linkFor(slug);
                    return (
                      <span key={slug}>
                        {i > 0 && ' · '}
                        <a href={l.href}>{l.label}</a>
                      </span>
                    );
                  })}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="band band-center">
          <blockquote className="quote">
            <p>“{TESTIMONIAL.quote}”</p>
            <footer>
              {TESTIMONIAL.name} · {TESTIMONIAL.title}
            </footer>
          </blockquote>
        </section>

        <ContactBand />
      </main>

      <SiteFooter />
    </>
  );
}
