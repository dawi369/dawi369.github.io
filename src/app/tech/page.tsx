import Link from 'next/link';

const STACK = [
  {
    title: 'Product Web',
    items: [
      'TypeScript',
      'Next.js 16',
      'React 19',
      'Astro',
      'Tailwind CSS v4',
      'Radix UI',
      'Base UI',
    ],
  },
  {
    title: 'Native Apps',
    items: [
      'Expo SDK 55',
      'React Native',
      'Expo Router',
      'Expo Widgets',
      'HeroUI Native',
      'Uniwind',
      'SQLite',
    ],
  },
  {
    title: 'Agents and AI',
    items: [
      'assistant-ui',
      'LangGraph',
      'Vercel AI SDK',
      'OpenRouter',
      'LangChain',
      'Cloudflare Agents',
      'Browserbase',
    ],
  },
  {
    title: 'Backend and Data',
    items: [
      'Bun',
      'Cloudflare Workers',
      'D1',
      'Postgres',
      'Redis',
      'Payload CMS',
      'Supabase',
      'Zod',
    ],
  },
  {
    title: 'Ops',
    items: [
      'Wrangler',
      'Docker',
      'Fly.io',
      'Railway',
      'Trigger.dev',
      'Sentry',
      'PostHog',
      'Biome',
    ],
  },
  {
    title: 'Data Science',
    items: ['Python', 'SQL', 'Databricks', 'Spark', 'PyTorch', 'Transformers'],
  },
];

const PROJECTS = [
  {
    name: 'assistant-mk1',
    role: 'agent workbench',
    stack:
      'Next.js, assistant-ui, LangGraph, OpenRouter, WorkOS, Cloudflare Worker/D1, Fly',
  },
  {
    name: 'swordfish',
    role: 'futures terminal',
    stack:
      'Next.js terminal UI, Bun market-data hub, Redis hot path, Postgres durable bars, Trigger.dev jobs',
  },
  {
    name: 'drillbit',
    role: 'interview prep app',
    stack:
      'Expo SDK 55, React Native, Expo Router, widgets, HeroUI Native, Uniwind, local SQLite',
  },
  {
    name: 'polymancer',
    role: 'Polymarket bot product',
    stack:
      'Cloudflare Workers, Queues, Cron, D1, Expo mobile, Next.js waitlist, Supabase auth',
  },
  {
    name: 'momma-bot',
    role: 'job-search control plane',
    stack:
      'Bun server, Postgres, Browserbase/Stagehand, policy gates, audit records, Fly deployment',
  },
  {
    name: 'aeromarine-mil',
    role: 'content-heavy production site',
    stack:
      'Next.js 16, Payload CMS, Postgres, S3 storage, content query boundary, Vitest checks',
  },
  {
    name: 't23.dev',
    role: 'studio site',
    stack: 'Astro 6, MDX, sitemap, simple static publishing',
  },
  {
    name: 'mk5',
    role: 'desktop/runtime experiment',
    stack: 'Electrobun, Bun tests, Cloudflare Worker helper',
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
        The arsenal: typed product code, practical, scalable, data systems.
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

        <section className="mt-20 border-t border-border pt-8">
          <h2 className="text-sm font-medium uppercase tracking-[0.04em] text-foreground">
            Where it shows up
          </h2>
          <div className="mt-6 divide-y divide-border">
            {PROJECTS.map((project) => (
              <article
                key={project.name}
                className="grid gap-3 py-6 sm:grid-cols-[12rem_1fr]"
              >
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.role}
                  </p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {project.stack}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
