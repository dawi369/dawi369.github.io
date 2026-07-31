import type { Metadata } from 'next';
import Link from 'next/link';
import './tech.css';

export const metadata: Metadata = {
  title: 'Tech in Practice — David Erwin',
  description:
    'The product, native, agent, backend, operations, and data tools David Erwin uses in practice.',
};

const STACK = [
  {
    title: 'Product Web',
    items: [
      'TypeScript',
      'Next.js',
      'React',
      'Astro',
      'Tailwind CSS',
      'SCSS',
      'Radix UI',
      'Base UI',
      'Zustand',
    ],
  },
  {
    title: 'Native Apps',
    items: [
      'Expo',
      'React Native',
      'Expo Router',
      'Expo Widgets',
      'HeroUI Native',
      'Uniwind',
      'SQLite',
      'Electrobun',
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
      'Model Context Protocol',
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
      'R2',
      'Payload CMS',
      'Supabase',
      'Zod',
      'C#',
      '.NET',
      'WorkOS',
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
      'AWS',
      'Terraform',
      'GitHub Actions',
    ],
  },
  {
    title: 'Data Science',
    items: [
      'Python',
      'SQL',
      'Databricks',
      'Spark',
      'Delta Lake',
      'PyTorch',
      'Pandas',
      'Optuna',
      'Transformers',
    ],
  },
];

const indexLabel = (index: number) => String(index + 1).padStart(2, '0');

export default function TechPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="tech-page">
      <header className="tech-page-header">
        <Link href="/" aria-label="Return to home">
          DAVID / ERWIN
        </Link>
        <p>TECH / INDEX</p>
        <Link href="/">
          BACK TO SIGNAL <span aria-hidden="true">↙</span>
        </Link>
      </header>

      <section className="tech-page-hero" aria-labelledby="tech-page-title">
        <p className="tech-page-kicker">TOOLS I USE / IN PRACTICE</p>
        <div>
          <h1 id="tech-page-title">Tech in practice.</h1>
          <p>
            Typed product code, native apps, agent systems, backend
            infrastructure, and data work—the tools I actually use.
          </p>
        </div>
      </section>

      <div className="tech-page-summary" aria-label="Page summary">
        <p>
          <span>06</span> STACK GROUPS
        </p>
        <p>FULL STACK / END TO END</p>
      </div>

      <section className="tech-stack-section" aria-labelledby="stack-title">
        <header className="tech-content-heading">
          <p>01 / THE STACK</p>
          <h2 id="stack-title">What I work with.</h2>
        </header>

        <div className="tech-stack-grid">
          {STACK.map((group, index) => (
            <article className="tech-stack-group" key={group.title}>
              <p>{indexLabel(index)}</p>
              <div>
                <h3>{group.title}</h3>
                <ul aria-label={`${group.title} technologies`}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="tech-page-footer">
        <p>DESIGNED AND ENGINEERED BY DAVID ERWIN</p>
        <Link href="/">RETURN HOME ↙</Link>
        <p suppressHydrationWarning>© {currentYear}</p>
      </footer>
    </main>
  );
}
