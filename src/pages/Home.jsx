import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter, { ContactBand } from '../components/SiteFooter.jsx';
import { EMAIL, ROLE, TESTIMONIAL, cases, heroFacts, practices } from '../content.js';

const caseTitle = (slug) => cases.find((c) => c.slug === slug).title;

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-photo">
          <img src="/portrait.jpg" alt="Stephane Ritty" width="930" height="1410" />
        </div>
        <SiteHeader className="home-hero-header" />
        <div className="home-hero-content">
          <p className="kicker">{ROLE}</p>
          <h1 className="display-xl">I build new services inside companies that weren’t set up to run them.</h1>
          <p className="lead">
            Mostly at Thermo Fisher, in clinical trial services: a marketplace that had failed twice, a rental model the
            company had tried for ten years, a labeling service sales had sold before it existed. And at Dow, a roofing
            platform to reach building owners in a market where Dow had almost no presence.
          </p>
          <ul className="hero-proof" aria-label="Results">
            {heroFacts.map(([value, label]) => (
              <li key={label}>
                <span className="hero-proof-value">{value}</span>
                <span className="hero-proof-label">{label}</span>
              </li>
            ))}
          </ul>
          <div className="button-row">
            <a href="#work" className="btn btn-light">Read the cases</a>
            <a href={`mailto:${EMAIL}`} className="btn btn-outline">Email me</a>
          </div>
        </div>
      </section>

      <main>
        <section id="work" className="band">
          <h2 className="display-md section-title">Work</h2>
          <ol className="work-list">
            {cases.map((c) => (
              <li key={c.slug}>
                <a href={`/work/${c.slug}`} className="work-row">
                  <span className="work-company">{c.company}</span>
                  <span className="work-main">
                    <span className="work-title">{c.title}</span>
                    <span className="work-line">{c.line}</span>
                  </span>
                  <span className="work-status">{c.status}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section id="how" className="band">
          <h2 className="display-md section-title">How I work</h2>
          <ol className="practices">
            {practices.map((p) => (
              <li key={p.title} className="practice">
                <h3 className="practice-title">{p.title}</h3>
                <p className="practice-text">
                  {p.text} <a href={`/work/${p.slug}`}>{caseTitle(p.slug)}</a>
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="background" className="band background">
          <h2 className="display-md section-title">Background</h2>
          <div className="background-text">
            <p>
              Product and innovation management, mostly in clinical trial services at Thermo Fisher and construction
              chemicals at Dow. Today I&apos;m Head of Product.
            </p>
            <p>
              The titles changed: product director, program lead, product owner, portfolio lead. The work sat in the
              same place each time, between product, sales, operations, finance and legal, which is where new services
              usually get stuck. On the Dow platform I negotiated with partner CEOs and also made the UX decisions
              with the Scrum team.
            </p>
          </div>
          <blockquote className="testimonial">
            <p>“{TESTIMONIAL.quote}”</p>
            <footer>
              {TESTIMONIAL.name}, {TESTIMONIAL.title}
            </footer>
          </blockquote>
        </section>

        <ContactBand />
      </main>

      <SiteFooter />
    </>
  );
}
