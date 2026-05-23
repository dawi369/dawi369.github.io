import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-0">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.04em] text-muted-foreground">
          Essay
        </p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] font-normal text-foreground sm:text-6xl md:text-7xl">
          Finance, Tools and{' '}
          <em className="font-normal">Intelligence</em>
        </h1>
        <div className="mt-12 max-w-2xl space-y-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          <p>
            I am a software engineer at Mastercard, drawn to the places where
            financial systems, developer tools, and machine learning become real
            products. I care about clean DX, fast feedback loops, and software
            that helps small teams move with confidence.
          </p>
          <p>
            I am especially interested in ambitious European startups: teams
            moving quickly on hard problems with enough taste and discipline to
            build things that last. I keep close to tech and finance because the
            best opportunities live where infrastructure, markets, and
            intelligent tools start to overlap.
          </p>
        </div>
      </article>

      <Link
        href="/wip"
        aria-label="Open WIP homepage"
        className="fixed bottom-4 left-4 z-50 flex size-6 items-center justify-center rounded-lg border border-border bg-card/60 opacity-10 shadow-sm backdrop-blur-sm transition hover:bg-muted hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent/50 active:scale-95"
      >
        <span className="sr-only">Open WIP homepage</span>
      </Link>
    </main>
  );
}
