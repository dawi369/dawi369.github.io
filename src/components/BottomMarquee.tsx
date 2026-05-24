const LINKS = [
  { label: 'CERN Research', href: 'https://repository.cern/records/1r0yx-syh45' },
  { label: 'Tech', href: 'https://daviderwin.me/tech' },
  { label: 'Hackathons', href: 'https://daviderwin.me/hackathons' },
  { label: 'Hermes', href: 'https://hermes-agent.nousresearch.com/' },
  { label: 'Polymancer', href: 'https://polymancer.ai' },
  { label: 'Swordfsh', href: 'https://swordfsh.app' },
  { label: 'eu/acc', href: 'https://euacc.com' },
];

const REPEAT_COUNT = 50;

export default function BottomMarquee() {
  return (
    <nav
      aria-label="Work and projects"
      className="bottom-marquee-mask absolute bottom-4 left-[20%] right-[28%] z-40 h-9 overflow-hidden text-muted-foreground sm:right-[20%]"
    >
      <div className="bottom-marquee-track flex h-full w-max items-center whitespace-nowrap">
        {Array.from({ length: REPEAT_COUNT }).map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="bottom-marquee-segment flex items-center gap-10"
            aria-hidden={groupIndex > 0}
          >
            {LINKS.map((link) => (
              <a
                key={`${link.label}-${groupIndex}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                tabIndex={groupIndex === 0 ? undefined : -1}
                className="text-xs font-medium transition hover:text-foreground hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
