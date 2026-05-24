import Link from 'next/link';

const STACK = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'SQL', 'Kotlin', 'C'],
  },
  {
    title: 'Product',
    items: ['React', 'Expo', 'Next.js', 'Bun', 'Zod', 'Zustand', 'Tailwind CSS', 'Uniwind'],
  },
  {
    title: 'Data and Systems',
    items: ['Postgres', 'Redis', 'Apache Spark', 'Databricks', 'Pandas'],
  },
  {
    title: 'ML',
    items: ['PyTorch', 'Optuna'],
  },
  {
    title: 'Cloud and DevOps',
    items: ['AWS', 'Terraform', 'Cloudflare Workers', 'Docker', 'GitHub Actions', 'Tailscale', 'Fly.io', 'Railway'],
  },
];

export default function TechPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 text-foreground sm:px-8">
      <section className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground transition hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
        >
          Back
        </Link>
        <h1 className="mt-12 max-w-3xl font-serif text-5xl leading-[1.02] font-normal sm:text-6xl md:text-7xl">
          Tech in <em className="font-normal">Practice</em>
        </h1>
        <p className="mt-10 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          The tools I reach for are mostly boring on purpose: typed product
          code, practical data systems, and enough ML depth to know when a model
          is useful instead of decorative.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {STACK.map((group) => (
            <section key={group.title} className="border-t border-border pt-6">
              <h2 className="text-sm font-medium uppercase tracking-[0.04em] text-foreground">
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-card/70 px-3 py-2 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
