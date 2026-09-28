import React, { useEffect, useState } from 'react';

// Analytics (Google Analytics + Tag Manager) only load after the visitor
// clicks "Accept". The loader itself lives in index.html (window.loadAnalytics).
const COOKIE = 'cookie_consent';
const ONE_YEAR = 60 * 60 * 24 * 365;

function readConsent() {
  const row = document.cookie.split('; ').find((r) => r.startsWith(COOKIE + '='));
  return row ? row.split('=')[1] : null;
}

function saveConsent(value) {
  document.cookie = `${COOKIE}=${value}; max-age=${ONE_YEAR}; path=/; SameSite=Lax`;
}

export default function CookieConsent() {
  // Starts hidden so the pre-rendered HTML and the first client render match.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!readConsent()) setOpen(true);
  }, []);

  if (!open) return null;

  const accept = () => {
    saveConsent('accepted');
    if (typeof window.loadAnalytics === 'function') window.loadAnalytics();
    setOpen(false);
  };

  const decline = () => {
    saveConsent('declined');
    setOpen(false);
  };

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p>
        This site uses Google Analytics cookies to count visits. Nothing is tracked unless you accept.
      </p>
      <div className="cookie-banner-actions">
        <button className="cookie-btn cookie-btn-secondary" onClick={decline}>Decline</button>
        <button className="cookie-btn cookie-btn-primary" onClick={accept}>Accept</button>
      </div>
    </div>
  );
}
