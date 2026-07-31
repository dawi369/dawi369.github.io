export type ProofId = 'mastercard' | 'cern' | 't23';

export type Proof = {
  id: ProofId;
  index: string;
  label: string;
  eyebrow: string;
  quip: string;
  detail: string;
  metric: string;
  href?: string;
  action?: string;
};

export const PROOFS: readonly Proof[] = [
  {
    id: 'mastercard',
    index: '01',
    label: 'Mastercard',
    eyebrow: 'Full stack / product',
    quip:
      'Built ambitious products with teams across the stack—from data systems to user-facing software.',
    detail:
      'Co-led Tourism Insights, a new product that replaced two legacy pipelines and expanded tourism and market intelligence across Asia, Europe, and the U.S. Migrated near-real-time processing to Databricks Serverless. Now I ship React and TypeScript interfaces alongside .NET and C# services for a unified platform, while building team-adopted tools for synthetic data and documentation health.',
    metric: 'TEAM / PLATFORM / DELIVERY',
  },
  {
    id: 'cern',
    index: '02',
    label: 'CERN ATLAS',
    eyebrow: 'Research / signal',
    quip: 'Trained a transformer to find rare Higgs signals.',
    detail:
      'Developed a 1.2M-parameter Transformer classifier and particle-specific preprocessing pipeline for rare Higgs signals in CERN ATLAS data.',
    metric: '0.804 AUC / 0.705 F1',
    href: 'https://repository.cern/records/1r0yx-syh45',
    action: 'Read the research',
  },
  {
    id: 't23',
    index: '03',
    label: 'T23',
    eyebrow: 'Studio / shipped',
    quip: 'Turned applied-AI ideas into products people can use.',
    detail:
      'A small software studio building serious products across agent workflows, market analytics, and interview practice.',
    metric: 'DESIGN / BUILD / OPERATE',
    href: 'https://t23.dev',
    action: 'Visit the studio',
  },
];

export const SYSTEMS = [
  {
    index: 'A',
    name: 'assistant-mk1',
    type: 'agent workbench',
    line:
      'Durable runs, approvals, tool policy, artifacts, and recovery outside the chat box.',
    stack: 'Next.js / LangGraph / WorkOS / Cloudflare / Fly',
    href: 'https://github.com/dawi369/assistant-mk1',
  },
  {
    index: 'B',
    name: 'swordfish',
    type: 'futures terminal',
    line: 'Live market data, hot caches, durable bars, no patience for stale screens.',
    stack: 'Next.js / Bun / Redis / Postgres / Trigger.dev',
  },
  {
    index: 'C',
    name: 'drillbit',
    type: 'interview coach',
    line: 'Keeps the human solving; brings in AI without hijacking the flow.',
    stack: 'Expo / React Native / OpenRouter / SQLite',
  },
  {
    index: 'D',
    name: 'polymancer',
    type: 'market agent',
    line: 'A hold-first trading agent with real risk controls, not just confident output.',
    stack: 'Cloudflare / D1 / Queues / Expo / Supabase',
  },
] as const;

export const STACK = [
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
] as const;
