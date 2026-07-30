'use client';

import Image from 'next/image';
import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

type Proof = {
  id: 'mastercard' | 'cern' | 't23';
  index: string;
  label: string;
  eyebrow: string;
  quip: string;
  detail: string;
  metric: string;
  href?: string;
  action?: string;
};

const PROOFS: Proof[] = [
  {
    id: 'mastercard',
    index: '01',
    label: 'Mastercard',
    eyebrow: 'Finance / scale',
    quip: 'Built financial data systems that have to be right.',
    detail:
      'Modernized SpendingPulse pipelines, co-led a near-real-time Databricks migration, and helped retire expensive legacy paths.',
    metric: 'NRT / SPARK / DELTA',
  },
  {
    id: 'cern',
    index: '02',
    label: 'CERN ATLAS',
    eyebrow: 'Research / signal',
    quip: 'Trained a transformer to find rare Higgs signals.',
    detail:
      'Designed a 1.2M-parameter classifier and its preprocessing pipeline for noisy high-energy physics data.',
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

const SYSTEMS = [
  {
    index: 'A',
    name: 'assistant-mk1',
    type: 'agent workbench',
    line: 'A control plane for running, reviewing, and governing agents.',
    stack: 'Next.js / LangGraph / WorkOS / Cloudflare / Fly',
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
    href: 'https://polymancer.ai',
  },
];

const TILE_WORDS = ['product', 'data', 'systems', 'ai'];

type GlyphStyle = CSSProperties & {
  '--glyph-index': number;
};

type TileStyle = CSSProperties & {
  '--tile-index': number;
};

function KineticHeadline() {
  const lines = [
    { text: 'I build software', accent: false },
    { text: 'where almost right', accent: true },
    { text: 'is still wrong.', accent: false },
  ];

  let glyphIndex = 0;

  return (
    <h1
      id="signal-title"
      className="signal-headline"
      aria-label="I build software where almost right is still wrong."
    >
      {lines.map((line) => (
        <span
          key={line.text}
          className="signal-headline-line"
          data-accent={line.accent || undefined}
          aria-hidden="true"
        >
          {line.text.split(' ').map((word) => (
            <span key={word} className="signal-word">
              {word.split('').map((glyph, index) => {
                const currentIndex = glyphIndex;
                glyphIndex += 1;

                return (
                  <span
                    key={`${word}-${index}`}
                    className="signal-glyph"
                    style={{ '--glyph-index': currentIndex } as GlyphStyle}
                  >
                    {glyph}
                  </span>
                );
              })}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

function TileBar() {
  return (
    <p className="signal-tile-bar" aria-label="Product, data, systems, AI">
      {TILE_WORDS.map((word, index) => (
        <span
          key={word}
          className={`signal-tile signal-tile-${index + 1}`}
          style={{ '--tile-index': index } as TileStyle}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default function SignalRoom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const roomRef = useRef<HTMLElement>(null);
  const pointerFrameRef = useRef(0);
  const activeProof = PROOFS[activeIndex];

  useEffect(() => {
    if (!autoRotate) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % PROOFS.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [autoRotate]);

  useEffect(() => {
    return () => window.cancelAnimationFrame(pointerFrameRef.current);
  }, []);

  function updatePointer(event: ReactPointerEvent<HTMLElement>) {
    if (event.pointerType === 'touch') return;

    const x = (event.clientX / window.innerWidth) * 100;
    const y = (event.clientY / window.innerHeight) * 100;

    window.cancelAnimationFrame(pointerFrameRef.current);
    pointerFrameRef.current = window.requestAnimationFrame(() => {
      roomRef.current?.style.setProperty('--pointer-x', `${x}%`);
      roomRef.current?.style.setProperty('--pointer-y', `${y}%`);
    });
  }

  function chooseProof(index: number) {
    setActiveIndex(index);
    setAutoRotate(false);
  }

  return (
    <main
      ref={roomRef}
      className="signal-room"
      data-focus={activeProof.id}
      onPointerMove={updatePointer}
    >
      <div className="signal-grid" aria-hidden="true" />
      <div className="signal-scan" aria-hidden="true" />
      <div className="signal-cursor-field" aria-hidden="true" />

      <header className="signal-header">
        <a className="signal-brand" href="#top" aria-label="David Erwin, home">
          <span>DAVID</span>
          <span>ERWIN</span>
        </a>
        <p className="signal-header-role">
          Software engineer
          <span aria-hidden="true"> / </span>
          Product · Data · AI
        </p>
        <div className="signal-header-actions">
          <span className="signal-status">
            <span className="signal-status-dot" aria-hidden="true" />
            US + CZ citizen
          </span>
          <a className="signal-mini-link" href="/CVs.pdf" target="_blank">
            CV <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section id="top" className="signal-hero" aria-labelledby="signal-title">
        <div className="signal-coordinate signal-coordinate-left" aria-hidden="true">
          50°05&apos;N / 14°26&apos;E
        </div>
        <div className="signal-coordinate signal-coordinate-right" aria-hidden="true">
          CHANNEL 26 / LIVE
        </div>

        <div className="signal-intro">
          <p className="signal-kicker">
            <span>Signal room</span>
            <span>Portfolio / 2026</span>
          </p>

          <KineticHeadline />

          <div className="signal-hero-foot">
            <TileBar />
            <p className="signal-summary">
              Mastercard systems. CERN research. Independent products.
              <br />
              One engineer across the stack.
            </p>
          </div>
        </div>

        <figure className="signal-portrait">
          <div className="signal-portrait-image">
            <Image
              src="/assets/images/chilling.jpg"
              alt="David Erwin"
              fill
              priority
              sizes="(max-width: 767px) 44vw, 280px"
            />
            <div className="signal-portrait-sweep" aria-hidden="true" />
            <div className="signal-portrait-crosshair" aria-hidden="true" />
          </div>
          <figcaption>
            <span>Human / verified</span>
            <span>Prague, CZ</span>
          </figcaption>
        </figure>

        <div className="signal-proof-selector" aria-label="Evidence selector">
          {PROOFS.map((proof, index) => (
            <button
              key={proof.id}
              type="button"
              className="signal-proof-button"
              data-active={index === activeIndex || undefined}
              aria-pressed={index === activeIndex}
              onClick={() => chooseProof(index)}
              onPointerEnter={(event) => {
                if (event.pointerType !== 'touch') chooseProof(index);
              }}
              onFocus={() => chooseProof(index)}
            >
              <span className="signal-proof-index">{proof.index}</span>
              <span className="signal-proof-label">{proof.label}</span>
              <span className="signal-proof-quip">{proof.quip}</span>
              <span className="signal-proof-arrow" aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>

        <article className="signal-readout" data-proof={activeProof.id}>
          <div className="signal-readout-top">
            <span>{activeProof.eyebrow}</span>
            <span>{activeProof.metric}</span>
          </div>
          <p>{activeProof.detail}</p>
          {activeProof.href && (
            <a href={activeProof.href} target="_blank" rel="noreferrer">
              {activeProof.action}
              <span aria-hidden="true"> ↗</span>
            </a>
          )}
        </article>

        <a className="signal-scroll-cue" href="#systems">
          Inspect the systems
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section id="systems" className="systems-section" aria-labelledby="systems-title">
        <div className="systems-heading">
          <p>Selected systems / not a logo wall</p>
          <h2 id="systems-title">
            Four builds.
            <br />
            Four hard parts.
          </h2>
          <p className="systems-heading-note">
            I work from interface to infrastructure, but the interesting part is
            always the system in between.
          </p>
        </div>

        <div className="systems-list">
          {SYSTEMS.map((system) => (
            <article key={system.name} className="system-row">
              <span className="system-index">{system.index}</span>
              <div className="system-name">
                <h3>{system.name}</h3>
                <p>{system.type}</p>
              </div>
              <p className="system-line">{system.line}</p>
              <p className="system-stack">{system.stack}</p>
              {system.href ? (
                <a
                  className="system-link"
                  href={system.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${system.name}`}
                >
                  ↗
                </a>
              ) : (
                <span className="system-link system-link-disabled" aria-hidden="true">
                  ·
                </span>
              )}
            </article>
          ))}
        </div>

        <a className="systems-index-link" href="/tech">
          Open the full system index
          <span aria-hidden="true"> ↗</span>
        </a>
      </section>

      <footer className="signal-footer">
        <p className="signal-footer-code" aria-hidden="true">
          END_OF_SIGNAL / START_OF_CONVERSATION
        </p>
        <h2>Bring me the hard part.</h2>
        <div className="signal-footer-actions">
          <a href="mailto:hello@daviderwin.me">hello@daviderwin.me</a>
          <a href="/CVs.pdf" target="_blank">
            CV ↗
          </a>
          <a href="https://github.com/dawi369" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
        <p className="signal-footer-meta">
          Designed and engineered by David Erwin
          <span>© 2026</span>
        </p>
      </footer>
    </main>
  );
}
