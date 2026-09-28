import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter, { ContactBand } from '../components/SiteFooter.jsx';
import { cases } from '../content.js';
import Adherence from '../cases/Adherence.jsx';
import Rental from '../cases/Rental.jsx';
import Platform from '../cases/Platform.jsx';
import Plastics from '../cases/Plastics.jsx';
import Jit from '../cases/Jit.jsx';
import Portfolio from '../cases/Portfolio.jsx';

const bodies = { Portfolio, Adherence, Jit, Rental, Platform, Plastics };

export default function CasePage({ slug }) {
  const index = cases.findIndex((c) => c.slug === slug);
  const c = cases[index];
  const next = cases[(index + 1) % cases.length];
  const Body = bodies[c.component];

  return (
    <>
      <SiteHeader className="page-header" />
      <main>
        <header className="case-hero">
          <p className="kicker">{c.company} · {c.kind}</p>
          <h1 className="display-lg">{c.title}</h1>
          <p className="lead">{c.summary}</p>
          <dl className="case-meta">
            {c.role && (
              <div>
                <dt>Role</dt>
                <dd>{c.role}</dd>
              </div>
            )}
            <div>
              <dt>Status</dt>
              <dd>{c.status}</dd>
            </div>
          </dl>
          {c.facts.length > 0 && (
            <ul className="case-facts">
              {c.facts.map(([value, label]) => (
                <li key={label}>
                  <span className="case-fact-value">{value}</span>
                  <span className="case-fact-label">{label}</span>
                </li>
              ))}
            </ul>
          )}
        </header>

        <article className="case-body">
          <Body />
        </article>

        <nav className="case-next" aria-label="Next case study">
          <span className="kicker">Next case</span>
          <a href={`/work/${next.slug}`} className="display-md">
            {next.title} <span aria-hidden="true">→</span>
          </a>
        </nav>

        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
