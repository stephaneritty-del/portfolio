import { EMAIL, LINKEDIN, GITHUB } from '../content.js';
import CookieConsent from '../CookieConsent.jsx';

export function ContactBand() {
  return (
    <section id="contact" className="contact-band">
      <h2 className="display-md">
        Something that needs <em>building?</em>
      </h2>
      <div className="button-row">
        <a href={`mailto:${EMAIL}`} className="btn btn-accent">{EMAIL}</a>
        <a href={LINKEDIN} className="btn btn-outline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Stephane Ritty</p>
        <nav aria-label="Footer">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </nav>
      </footer>
      <CookieConsent />
    </>
  );
}
