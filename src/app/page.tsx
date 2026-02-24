import { Pills } from '@/components/Pills';

const ARTICLES = [
  { 
    id: '1', 
    title: "Programming hasn't actually changed that much, and here's why it's not going to",
    url: "https://x.com/devDawi/status/2023323128160473293",
    date: "Feb 2026",
    publisher: "X / Writing",
    description: "It's not over." 
  }
];

export default function Home() {
  return (
    <>
      <Pills />

      <div className="max-w-3xl mx-auto space-y-32 pb-[100vh] md:pb-0">
        {/* Me Section */}
        <section id="me" className="min-h-screen flex flex-col justify-center">
          <h1 className="text-4xl mb-4 font-semibold">Dawi</h1>
          <p className="text-lg text-gray-600 mb-2">David William Erwin</p>
          <p className="text-sm text-gray-500 mb-6">Founder & Software Engineer</p>

          {/* Bio */}
          <div className="max-w-2xl">
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              Building autonomous predicting agents and a futures analytics terminal.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mt-4">
              I am currently focused on <a href="https://polymancer.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors"><b>Polymancer</b></a>, allowing non-technical mobile users to summon their own 24/7 prediction market trading bots using Polyseer and OpenRouter. 
              <br />
              <br />
              I am also working <b>Swordfish</b>, a real-time futures analytics terminal for active retail traders.
              <br />
              <br />
              I also write data pipelines, backend, and frontend code at Mastercard.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="md:min-h-screen flex flex-col md:justify-center">
          <h2 className="text-2xl mb-6 font-semibold">Projects</h2>
          
          <div className="space-y-6">
            {/* Polymancer */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <a href="https://polymancer.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600 transition-colors">
                      <h3 className="text-xl font-medium">Polymancer</h3>
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Summon your 24/7 Prediction Market Trader</p>
                </div>
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100">Alpha</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                A mobile-first MVP allowing non-technical users to activate a fully autonomous Polymarket/Kalshi trading agent. Integrates Polyseer for deep research and OpenRouter for decision logic, executing via paper trading to simulate FOK conditions over a 4-hour cycle. Users manage their bot solely via Telegram interactions and a streamlined mobile dashboard.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Expo</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Bun</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Elysia</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">AI Agents</span>
              </div>
            </div>

            {/* Swordfish */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow bg-gray-50/50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-700">Swordfish</h3>
                  <p className="text-sm text-gray-500 mt-1">Futures Analytics Terminal</p>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Alpha</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                A modern platform providing active traders with digestible, real-time insights into the futures market. Built to simplify complex market data into actionable signals.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">TypeScript</span>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">Real-time Data</span>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section id="articles" className="md:min-h-screen flex flex-col md:justify-center pt-24 md:pt-0">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-semibold">Articles</h2>
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
                className="group block border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-gray-300 transition-all bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 shrink-0">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">{article.publisher}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
                {article.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">
                    {article.description}
                  </p>
                )}
              </a>
            ))}
            
            {/* Blank placeholder for future thoughts or articles */}
            <div className="flex flex-col items-center justify-center bg-gray-50/50 rounded-2xl border border-dashed border-gray-300 p-8 min-h-[150px]">
              <svg className="w-6 h-6 text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
