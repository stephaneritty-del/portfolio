import { CV_URL } from '../content.js';

// Used inside the homepage hero and at the top of every other page.
export default function SiteHeader({ className = '' }) {
  return (
    <header className={`site-header ${className}`}>
      <a href="/" className="site-name">Stephane Ritty</a>
      <nav className="site-nav" aria-label="Main">
        <a href="/#work">Work</a>
        <a href="/#how">How I work</a>
        <a href="/#contact">Contact</a>
        {CV_URL && (
          <a href={CV_URL} className="btn btn-outline btn-small">CV</a>
        )}
      </nav>
    </header>
  );
}
