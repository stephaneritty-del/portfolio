import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter, { ContactBand } from '../components/SiteFooter.jsx';
import { EMAIL, ROLE, apps, cases, heroFacts, beyondProduct, principles } from '../content.js';

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
          <h1 className="display-xl">I build what doesn’t exist yet.</h1>
          <p className="lead">
            0→1 products, services and businesses, from the first idea to something that works. Inside Thermo Fisher
            and Dow, or on my own, I run the whole thing: customer, business model, product, team, launch.
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
            <a href="#work" className="btn btn-light">See the work</a>
            <a href={`mailto:${EMAIL}`} className="btn btn-outline">Email me</a>
          </div>
        </div>
      </section>

      <main>
        <section id="work" className="band">
          <div className="section-head">
            <h2 className="display-md">Corporate 0→1</h2>
            <p className="section-note">
              Inside Thermo Fisher and Dow, with everything a large company brings: finance, legal, operations, politics.
            </p>
          </div>
          <ol className="work-list">
            {cases.map((c) => (
              <li key={c.slug}>
                <a href={`/work/${c.slug}`} className="work-row">
                  <span className="work-company">
                    {c.company}
                    <span className="work-type">{c.type}</span>
                  </span>
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

        <section id="independent" className="band">
          <div className="section-head">
            <h2 className="display-md">Independent 0→1</h2>
            <p className="section-note">The environment changes. I still build. Small AI products I design and build myself.</p>
          </div>
          <ol className="work-list">
            {apps.map((a) => (
              <li key={a.id}>
                <a href="/ai-apps" className="work-row">
                  <span className="work-company">
                    AI product
                    <span className="work-type">{a.subtitle}</span>
                  </span>
                  <span className="work-main">
                    <span className="work-title">{a.title}</span>
                    <span className="work-line">{a.description}</span>
                  </span>
                  <span className="work-status">{a.status}</span>
                </a>
              </li>
            ))}
          </ol>
          <p className="section-more"><a href="/ai-apps">Try them in the browser</a></p>
        </section>

        <section id="how" className="band">
          <div className="section-head section-head-stack">
            <h2 className="display-md">Building 0→1</h2>
            <p className="lead">{beyondProduct}</p>
          </div>
          <ol className="practices">
            {principles.map((p) => (
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
              Product director, program lead, product owner, portfolio lead, now Head of Product. The titles changed;
              the work didn’t: take something ambiguous and build it into something real. That meant working across
              product, sales, operations, finance and legal, inside Thermo Fisher and Dow, and on my own.
            </p>
            <p className="rugby">
              Like a rugby forward, I go into the rucks no one wants, so the team can move forward.
            </p>
          </div>
        </section>

        <ContactBand />
      </main>

      <SiteFooter />
    </>
  );
}
