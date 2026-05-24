import Link from 'next/link';

const FIELDS = [
  'Event',
  'Date',
  'Team',
  'Problem',
  'What we built',
  'Stack',
  'What I learned',
];

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
        <p className="mt-10 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          I have only been to one hackathon so far, so this page is intentionally
          a placeholder for the details that matter: what the team tried, what I
          shipped, and what I would do differently next time.
        </p>

        <div className="mt-16 space-y-4">
          {FIELDS.map((field) => (
            <section
              key={field}
              className="grid gap-3 border-t border-border pt-4 sm:grid-cols-[160px_1fr]"
            >
              <h2 className="text-sm font-medium text-foreground">{field}</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Fill this in.
              </p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
