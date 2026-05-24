import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getHackathon } from '@/content/hackathons';

export default function FirstHackathonPage() {
  const hackathon = getHackathon('first');

  if (!hackathon) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground sm:px-8">
      <section className="mx-auto max-w-3xl">
        <Link
          href="/hackathons"
          className="text-sm font-medium text-muted-foreground transition hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          Hackathons
        </Link>
        <h1 className="mt-12 max-w-3xl font-serif text-5xl leading-[1.02] font-normal sm:text-6xl md:text-7xl">
          {hackathon.title.split(' ')[0]}{' '}
          <em className="font-normal">
            {hackathon.title.split(' ').slice(1).join(' ')}
          </em>
        </h1>
        <p className="mt-10 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {hackathon.summary}
        </p>

        <div className="mt-16 space-y-4">
          {hackathon.fields.map(([field, value]) => (
            <section
              key={field}
              className="grid gap-3 border-t border-border pt-4 sm:grid-cols-[160px_1fr]"
            >
              <h2 className="text-sm font-medium text-foreground">{field}</h2>
              <p className="text-sm leading-6 text-muted-foreground">{value}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
