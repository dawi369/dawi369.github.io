'use client';

import { useTheme } from 'next-themes';

const PROJECTS = ['p1', 'p2', 'p3'] as const;

export default function DevPanel() {
  const { theme, setTheme } = useTheme();

  function set_project(p: string) {
    document.documentElement.dataset.project = p;
  }

  function cycle_theme() {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 rounded-xl border border-border bg-card/80 p-3 backdrop-blur-sm">
      <div className="flex gap-2">
        {PROJECTS.map((p) => (
          <button
            key={p}
            onClick={() => set_project(p)}
            className="rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-mono text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {p}
          </button>
        ))}
      </div>
      <button
        onClick={cycle_theme}
        suppressHydrationWarning
        className="rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-mono text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        {theme}
      </button>
    </div>
  );
}
