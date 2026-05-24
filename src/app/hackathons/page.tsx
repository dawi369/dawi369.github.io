import Link from 'next/link';
import { HACKATHONS } from '@/content/hackathons';

export default function HackathonsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground sm:px-8">
      <section className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground transition hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          Back
        </Link>
        <h1 className="mt-12 max-w-3xl font-serif text-5xl leading-[1.02] font-normal sm:text-6xl md:text-7xl">
          Hackathon <em className="font-normal">Notes</em>
        </h1>
        <p className="mt-10 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          A running list of hackathons I have been part of. There is only one
          entry for now, but this page is structured so future events can each
          have their own notes.
        </p>

        <div className="mt-16 space-y-4">
          {HACKATHONS.map((hackathon) => (
            <Link
              key={hackathon.slug}
              href={`/hackathons/${hackathon.slug}`}
              className="block border-t border-border py-6 transition hover:border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-lg font-medium text-foreground">
                  {hackathon.title}
                </h2>
                <p className="text-sm text-muted-foreground">{hackathon.date}</p>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                {hackathon.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
