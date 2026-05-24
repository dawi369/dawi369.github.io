const LINKS = [
  { label: 'eu/acc', href: 'https://euacc.com' },
  { label: 'Hermes', href: 'https://www.hermes.com' },
  { label: 'Polymarket', href: 'https://polymarket.com' },
  { label: 'CERN ATLAS', href: 'https://atlas.cern' },
  { label: 'Databricks', href: 'https://www.databricks.com' },
  { label: 'Prague', href: 'https://www.prague.eu' },
  { label: 'Futures', href: 'https://www.cmegroup.com' },
  { label: 'Applied AI', href: 'https://openrouter.ai' },
];

export default function BottomMarquee() {
  return (
    <nav
      aria-label="Interests"
      className="absolute bottom-4 left-[20%] right-[28%] z-40 h-9 overflow-hidden text-muted-foreground sm:right-[20%]"
    >
      <div className="bottom-marquee-track flex h-full w-max items-center gap-10 whitespace-nowrap">
        {[...LINKS, ...LINKS].map((link, index) => (
          <a
            key={`${link.label}-${index}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium transition hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
