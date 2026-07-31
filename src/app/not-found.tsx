import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Signal Lost — David Erwin',
  description: 'The requested route could not be found.',
};

export default function NotFound() {
  return (
    <main className="not-found-room">
      <div className="not-found-grid" aria-hidden="true" />
      <div className="not-found-scan" aria-hidden="true" />

      <header className="not-found-header">
        <Link className="signal-brand" href="/" aria-label="Return to David Erwin home">
          <span>DAVID</span>
          <span>ERWIN</span>
        </Link>
        <p>Tampa, FL ↔ Prague, CZ</p>
        <span>HTTP / 404</span>
      </header>

      <section className="not-found-stage" aria-labelledby="not-found-title">
        <p className="not-found-kicker">Route unresolved / signal interrupted</p>
        <p className="not-found-number" aria-hidden="true">
          404
        </p>
        <h1 id="not-found-title">
          <span>Signal</span>
          <span>lost.</span>
        </h1>
        <p className="not-found-copy">
          This coordinate does not resolve in Tampa, Prague, or anywhere between.
        </p>
        <Link className="not-found-return" href="/">
          Return to signal room
          <span aria-hidden="true">↙</span>
        </Link>
      </section>

      <div className="not-found-radar" aria-hidden="true">
        <span />
        <span />
      </div>

      <footer className="not-found-footer">
        <span>TAMPA / 27°56&apos;52&quot;N / 82°27&apos;26&quot;W</span>
        <span>PRAGUE / 50°05&apos;19&quot;N / 14°25&apos;17&quot;E</span>
      </footer>
    </main>
  );
}
