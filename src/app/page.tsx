import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 py-24 sm:px-8 lg:px-0">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.04em] text-muted-foreground">
          Essay
        </p>
        <h1 className="max-w-2xl font-serif text-6xl leading-[0.9] font-normal text-foreground sm:text-7xl md:text-8xl">
          Intelligence at your <em className="font-normal">Fingertips</em>
        </h1>
        <div className="mt-12 space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pretium, arcu vitae efficitur luctus, lectus magna facilisis arcu,
            non dictum ipsum justo vitae mi. Sed vitae neque at turpis
            scelerisque ullamcorper, et fermentum arcu.
          </p>
          <p>
            Praesent gravida nulla eu lectus tincidunt, sit amet blandit arcu
            tincidunt. Donec vitae velit sed nibh volutpat faucibus. Suspendisse
            potenti. Curabitur posuere, mi id convallis porttitor, lorem erat
            tempor nisl, at cursus sapien nisl a libero.
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
