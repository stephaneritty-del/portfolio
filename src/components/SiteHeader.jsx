import { CV_URL } from '../content.js';

// Used inside the homepage hero and at the top of every other page.
export default function SiteHeader({ className = '' }) {
  return (
    <header className={`site-header ${className}`}>
      <a href="/" className="site-name">Stephane Ritty</a>
      <nav className="site-nav" aria-label="Main">
        <a href="/#build">Work</a>
        <a href="/#about">About</a>
        {CV_URL && (
          <a href={CV_URL} className="btn btn-outline btn-small">CV</a>
        )}
      </nav>
    </header>
  );
}
