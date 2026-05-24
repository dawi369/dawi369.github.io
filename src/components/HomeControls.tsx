'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function HomeControls() {
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <div className="absolute right-4 bottom-4 z-50 flex items-center gap-2">
      <button
        type="button"
        onClick={() => setTheme(nextTheme)}
        aria-label={`Switch to ${nextTheme} mode`}
        className="flex h-9 items-center justify-center rounded-lg border border-border bg-card/70 px-3 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm transition hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 active:scale-95"
        suppressHydrationWarning
      >
        {resolvedTheme === 'dark' ? 'Light' : 'Dark'}
      </button>
      <Link
        href="/wip"
        aria-label="Open WIP homepage"
        className="flex size-6 items-center justify-center rounded-lg border border-border bg-card/60 opacity-10 shadow-sm backdrop-blur-sm transition hover:bg-muted hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 active:scale-95"
      >
        <span className="sr-only">Open WIP homepage</span>
      </Link>
    </div>
  );
}
