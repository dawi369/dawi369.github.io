'use client';

import { useCallback, useEffect, useRef } from 'react';

const LINKS = [
  { label: 'CERN Research', href: 'https://repository.cern/records/1r0yx-syh45' },
  { label: 'Polymancer', href: 'https://polymancer.ai' },
  // { label: 'Swordfsh', href: 'https://swordfsh.app' },
  { label: 'Tech', href: '/tech' },
  { label: 'Hackathons', href: '/hackathons' },
  { label: 'eu/acc', href: 'https://euacc.com' },
];

const REPEAT_COUNT = 50;

export default function BottomMarquee() {
  const navRef = useRef<HTMLElement>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const activeLinkRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef(0);
  const isTrackingRef = useRef(false);

  const clearActive = useCallback(() => {
    if (activeLinkRef.current) {
      activeLinkRef.current.removeAttribute('data-active');
      activeLinkRef.current = null;
    }
  }, []);

  const setActive = useCallback(
    (link: HTMLElement | null) => {
      if (activeLinkRef.current === link) return;
      clearActive();
      if (link) {
        link.setAttribute('data-active', '');
        activeLinkRef.current = link;
      }
    },
    [clearActive],
  );

  const tick = useCallback(() => {
    if (!isTrackingRef.current) return;

    const point = pointerRef.current;
    if (point) {
      const hit = document.elementFromPoint(point.x, point.y);
      const link = hit?.closest('a[data-marquee-link]');

      if (link instanceof HTMLElement && navRef.current?.contains(link)) {
        setActive(link);
      } else {
        clearActive();
      }
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [clearActive, setActive]);

  const startTracking = useCallback(
    (x: number, y: number) => {
      pointerRef.current = { x, y };
      if (isTrackingRef.current) return;
      isTrackingRef.current = true;
      rafRef.current = requestAnimationFrame(tick);
    },
    [tick],
  );

  const stopTracking = useCallback(() => {
    isTrackingRef.current = false;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    pointerRef.current = null;
    clearActive();
  }, [clearActive]);

  useEffect(() => {
    return () => {
      isTrackingRef.current = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Work and projects"
      className="bottom-marquee-mask absolute bottom-4 left-[20%] right-[28%] z-40 h-9 overflow-hidden text-muted-foreground sm:right-[20%]"
      onPointerEnter={(event) => {
        if (event.pointerType === 'touch') return;
        startTracking(event.clientX, event.clientY);
      }}
      onPointerMove={(event) => {
        if (event.pointerType === 'touch') return;
        pointerRef.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerLeave={() => {
        stopTracking();
      }}
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
                data-marquee-link
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                tabIndex={groupIndex === 0 ? undefined : -1}
                className="text-xs font-medium transition data-active:text-foreground data-active:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
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
