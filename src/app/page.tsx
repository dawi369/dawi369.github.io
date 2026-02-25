import { Pills } from '@/components/Pills';

const ARTICLES = [
  {
    id: '1',
    title:
      "Programming hasn't actually changed that much, and here's why it's not going to",
    url: 'https://x.com/devDawi/status/2023323128160473293',
    date: 'Feb 2026',
    publisher: 'X / Writing',
    description: "It's not over.",
  },
];

export default function Home() {
  return (
    <>
      <Pills />

      <div className="max-w-3xl mx-auto space-y-32 pb-[100vh] md:pb-0">
        {/* Me Section */}
        <section id="me" className="min-h-screen flex flex-col justify-center">
          <h1 className="text-4xl mb-3 font-semibold font-mono tracking-tight">Dawi</h1>
          <p className="text-lg text-gray-600 mb-2 font-mono">David William Erwin</p>
          <p className="text-sm text-gray-500 mb-6">
            Founder & Software Engineer
          </p>

          {/* Bio */}
          <div className="max-w-2xl">
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              Building autonomous prediction agents and a futures analytics
              terminal.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mt-4">
              I am currently focused on{' '}
              <a
                href="https://polymancer.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors"
              >
                <b>Polymancer</b>
              </a>
              , an app allowing non-technical mobile users to summon their own
              24/7 prediction market trading bots.
              <br />
              <br />I am also working on{' '}
              <a
                href="https://swrdfish.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors"
              >
                <b>Swordfish</b>
              </a>
              , a real-time futures
              analytics terminal for active retail traders, with justtt the
              right amout of AI.
              <br />
              <br />I also write data pipeline, backend, and frontend code at
              Mastercard.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="md:min-h-screen flex flex-col md:justify-center"
        >
          <h2 className="text-2xl mb-5 font-semibold font-mono tracking-tight">Projects</h2>

          <div className="space-y-4">
            {/* Polymancer */}
            <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://polymancer.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                    >
                      <h3 className="text-xl font-medium font-mono tracking-tight">Polymancer</h3>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Summon your 24/7 Prediction Market Trader
                  </p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  Alpha
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-snug mb-3">
                Polymancer is an autonomous AI trading agent for prediction markets.
                It monitors Polymarket around the clock, identifies high-probability setups, 
                and executes trades within configurable risk parameters. The system 
                leverages deep research, sentiment analysis, and market intelligence—without 
                high-frequency noise. Every decision is fully transparent and auditable, so 
                the user always knows exactly what the agent is doing and why. Built with a
                clean mobile interface and Telegram integration, it keeps the user connected 
                to their agent, establishing trust.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Expo
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Bun
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Elysia
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Supabase
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  AI Agents
                </span>
              </div>
            </div>

            {/* Swordfish */}
            <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-medium font-mono tracking-tight">Swordfish</h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Futures Analytics Terminal
                  </p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  Alpha
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-snug mb-3">
                Swordfish is a real-time futures trading platform. It streams market 
                data with sub-second latency from massive.com, stored in Redis for 
                instant access. Features professional TradingView charting with 
                calendar spreads and custom overlays, plus volume profiles and VWAP. 
                An AI assistant lets traders ask questions in plain English and get 
                instant insights. Built for active traders who need speed and clarity,
                all in a modern, sleek UI.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  TypeScript
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Redis
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Websocket Streaming
                </span>
              </div>
            </div>

            {/* CERN Thesis */}
            <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://repository.cern/records/1r0yx-syh45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                    >
                      <h3 className="text-xl font-medium font-mono tracking-tight">
                        Self-Attention for Particle Physics
                      </h3>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Bachelor's Thesis @ CERN
                  </p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  Research
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-snug mb-3">
                Applied attention-based neural networks to
                classify simulated Higgs boson (ttH) events in the ATLAS
                detector at CERN. Improved signal separation from vast
                background data, reducing coupling measurement uncertainty.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Machine Learning
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Transformers
                </span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                  Data Analysis
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section
          id="articles"
          className="md:min-h-screen flex flex-col md:justify-center pt-24 md:pt-0"
        >
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-semibold font-mono tracking-tight">Articles</h2>
            <a
              href="https://x.com/devDawi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              @devDawi ↗
            </a>
          </div>

          <div className="space-y-4">
            {ARTICLES.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-gray-300 transition-all bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors font-mono tracking-tight">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 shrink-0">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                      {article.publisher}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
                {article.description && (
                  <p className="text-gray-600 text-sm leading-snug mt-2">
                    {article.description}
                  </p>
                )}
              </a>
            ))}

            {/* Blank placeholder for future thoughts or articles */}
            <div className="flex flex-col items-center justify-center bg-gray-50/50 rounded-2xl border border-dashed border-gray-300 p-8 min-h-[150px]">
              <svg
                className="w-6 h-6 text-gray-400 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <p className="text-sm text-gray-500 text-center">
                More thoughts and articles coming soon...
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
