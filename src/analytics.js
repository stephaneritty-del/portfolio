// Website analytics: the moments that matter on a portfolio, as named PostHog events.
// PostHog loads after the page (see main.jsx), so events wait in a queue until it's ready.

let posthog = null;
const queue = [];

export function track(event, properties = {}) {
  if (posthog) posthog.capture(event, properties);
  else queue.push([event, properties]);
}

export function connectPostHog(instance) {
  posthog = instance;
  queue.splice(0).forEach(([event, properties]) => posthog.capture(event, properties));
}

// Where on the page a link sits, so "contact_clicked" says which button worked
function placement(el) {
  if (el.closest('.contact-band')) return 'contact band';
  if (el.closest('.site-footer')) return 'footer';
  if (el.closest('.home-hero')) return 'hero';
  if (el.closest('header')) return 'header';
  return 'page';
}

// Fires once, the first time an element is at least `share` visible
function onceVisible(el, share, callback) {
  if (!el || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      observer.disconnect();
      callback();
    }
  }, { threshold: share });
  observer.observe(el);
}

const secondsSince = (start) => Math.round((performance.now() - start) / 1000);

export function startTracking() {
  const start = performance.now();
  const path = window.location.pathname;

  // Clicks: contact, and the AI apps
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    const href = link?.getAttribute('href') || '';
    if (href.startsWith('mailto:')) {
      track('contact_clicked', { method: 'email', placement: placement(link), seconds_on_page: secondsSince(start) });
    } else if (href.includes('linkedin.com')) {
      track('contact_clicked', { method: 'linkedin', placement: placement(link), seconds_on_page: secondsSince(start) });
    }

    const app = e.target.closest('.app-item');
    if (app) {
      const name = app.querySelector('.app-title')?.textContent;
      if (e.target.closest('button')) track('app_previewed', { app: name });
      else if (link) track('app_played', { app: name });
    }
  });

  // A corporate story: opened, and read to the end (the "Next case" link comes right after the text)
  if (path.startsWith('/work/')) {
    const story = path.slice('/work/'.length);
    const title = document.querySelector('h1')?.textContent;
    const ref = document.referrer && new URL(document.referrer);
    const from = ref && ref.host === window.location.host ? ref.pathname : 'outside';
    track('story_opened', { story, title, from });
    onceVisible(document.querySelector('.case-next'), 0.5, () =>
      track('story_read', { story, title, seconds_on_page: secondsSince(start) })
    );
  }

  // Homepage: how far down people get (a section counts as reached once its heading is fully on screen)
  if (path === '/') {
    ['work', 'how', 'independent', 'background', 'contact'].forEach((id) =>
      onceVisible(document.querySelector(`#${id} h2`), 1, () =>
        track('section_viewed', { section: id, seconds_on_page: secondsSince(start) })
      )
    );
  }
}
