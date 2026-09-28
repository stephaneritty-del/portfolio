import SiteHeader from '../components/SiteHeader.jsx';
import SiteFooter from '../components/SiteFooter.jsx';

export default function NotFound() {
  return (
    <>
      <SiteHeader className="page-header" />
      <main className="case-hero not-found">
        <p className="kicker">404</p>
        <h1 className="display-lg">This page doesn&apos;t exist.</h1>
        <p className="lead"><a href="/">Back to the homepage</a></p>
      </main>
      <SiteFooter />
    </>
  );
}
