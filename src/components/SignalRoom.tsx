'use client';

import Image from 'next/image';
import {
  memo,
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

const SYSTEMS = [
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
    // Add `href` when a public project destination is ready.
  },
  {
    index: 'C',
    name: 'drillbit',
    type: 'interview coach',
    line: 'Keeps the human solving; brings in AI without hijacking the flow.',
    stack: 'Expo / React Native / OpenRouter / SQLite',
    // Add `href` when a public project destination is ready.
  },
  {
    index: 'D',
    name: 'polymancer',
    type: 'market agent',
    line: 'A hold-first trading agent with real risk controls, not just confident output.',
    stack: 'Cloudflare / D1 / Queues / Expo / Supabase',
    // Add `href` when a public project destination is ready.
  },
];

const TILE_WORDS = ['product', 'data', 'systems', 'ai'];
const HEADLINE_LINES = [
  { text: 'I build software', accent: false },
  { text: 'where almost right', accent: true },
  { text: 'is still wrong.', accent: false },
] as const;
const EMAIL = 'hello@daviderwin.me';
const ROTATION_INTERVAL_MS = 10000;
const INTERACTION_PAUSE_MS = 6000;
const DESKTOP_PROOF_QUERY = '(hover: hover) and (pointer: fine)';

type GlyphStyle = CSSProperties & {
  '--glyph-index': number;
};

type TileStyle = CSSProperties & {
  '--tile-index': number;
};

async function writeClipboard(text: string) {
  if (!navigator.clipboard?.writeText) {
    throw new Error('Clipboard API unavailable');
  }

  await new Promise<void>((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      reject(new Error('Clipboard API timed out'));
    }, 800);

    navigator.clipboard.writeText(text).then(
      () => {
        window.clearTimeout(timeout);
        resolve();
      },
      (error) => {
        window.clearTimeout(timeout);
        reject(error);
      },
    );
  });
}

function fallbackCopy(text: string) {
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  Object.assign(field.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none',
  });
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(field);
  return copied;
}

const KineticHeadline = memo(function KineticHeadline() {
  let glyphIndex = 0;

  return (
    <h1
      id="signal-title"
      className="signal-headline"
      aria-label="I build software where almost right is still wrong."
    >
      {HEADLINE_LINES.map((line) => (
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
});

const TileBar = memo(function TileBar() {
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
});

const ProofCardContent = memo(function ProofCardContent({
  proof,
}: {
  proof: Proof;
}) {
  return (
    <>
      <span className="signal-proof-index">{proof.index}</span>
      <span className="signal-proof-label">{proof.label}</span>
      <span className="signal-proof-quip">{proof.quip}</span>
      <span className="signal-proof-arrow" aria-hidden="true">
        ↗
      </span>
    </>
  );
});

const CopyIcon = memo(function CopyIcon({ copied }: { copied: boolean }) {
  return copied ? (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4.5 10.5 3.25 3.25L15.5 6" />
    </svg>
  ) : (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <rect x="6.5" y="6.5" width="10" height="10" rx="2" />
      <path d="M13.5 6.5V5.25A1.75 1.75 0 0 0 11.75 3.5h-6.5A1.75 1.75 0 0 0 3.5 5.25v6.5A1.75 1.75 0 0 0 5.25 13.5H6.5" />
    </svg>
  );
});

export default function SignalRoom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotationPaused, setRotationPaused] = useState(false);
  const [copyState, setCopyState] = useState<
    'idle' | 'copying' | 'copied' | 'failed'
  >('idle');
  const roomRef = useRef<HTMLElement>(null);
  const pointerFrameRef = useRef(0);
  const rotationResumeRef = useRef(0);
  const copyResetRef = useRef(0);
  const hoveredProofRef = useRef<number | null>(null);
  const activeProof = PROOFS[activeIndex];
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (rotationPaused) return;

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const interval = window.setInterval(() => {
      if (document.hidden) return;
      setActiveIndex((current) => (current + 1) % PROOFS.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [rotationPaused]);

  useEffect(() => {
    const finePointer = window.matchMedia(DESKTOP_PROOF_QUERY);
    if (!finePointer.matches) return;

    let pointerX = 50;
    let pointerY = 50;

    function updatePointer(event: PointerEvent) {
      pointerX = (event.clientX / window.innerWidth) * 100;
      pointerY = (event.clientY / window.innerHeight) * 100;

      if (pointerFrameRef.current) return;

      pointerFrameRef.current = window.requestAnimationFrame(() => {
        roomRef.current?.style.setProperty('--pointer-x', `${pointerX}%`);
        roomRef.current?.style.setProperty('--pointer-y', `${pointerY}%`);
        pointerFrameRef.current = 0;
      });
    }

    window.addEventListener('pointermove', updatePointer, { passive: true });

    return () => {
      window.removeEventListener('pointermove', updatePointer);
      window.cancelAnimationFrame(pointerFrameRef.current);
      pointerFrameRef.current = 0;
    };
  }, []);

  useEffect(() => {
    const capabilities = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };
    const constrainedDevice =
      capabilities.connection?.saveData === true ||
      (typeof capabilities.deviceMemory === 'number' &&
        capabilities.deviceMemory <= 4) ||
      navigator.hardwareConcurrency <= 4;

    if (constrainedDevice) {
      roomRef.current?.setAttribute('data-lite-motion', '');
    }
  }, []);

  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(pointerFrameRef.current);
      window.clearTimeout(rotationResumeRef.current);
      window.clearTimeout(copyResetRef.current);
    };
  }, []);

  function holdProof(index: number) {
    setActiveIndex(index);
    setRotationPaused(true);
    window.clearTimeout(rotationResumeRef.current);
    rotationResumeRef.current = window.setTimeout(() => {
      if (hoveredProofRef.current === null) {
        setRotationPaused(false);
      }
    }, INTERACTION_PAUSE_MS);
  }

  function hoverProof(index: number) {
    hoveredProofRef.current = index;
    window.clearTimeout(rotationResumeRef.current);
    setActiveIndex(index);
    setRotationPaused(true);
  }

  function leaveProof(index: number) {
    if (hoveredProofRef.current !== index) return;

    hoveredProofRef.current = null;
    window.clearTimeout(rotationResumeRef.current);
    setRotationPaused(false);
  }

  function selectProof(index: number, proof: Proof) {
    holdProof(index);

    if (!proof.href || !window.matchMedia(DESKTOP_PROOF_QUERY).matches) return;

    window.open(proof.href, '_blank', 'noopener,noreferrer');
  }

  async function copyEmail() {
    window.clearTimeout(copyResetRef.current);
    setCopyState('copying');

    try {
      await writeClipboard(EMAIL);
      setCopyState('copied');
    } catch {
      setCopyState(fallbackCopy(EMAIL) ? 'copied' : 'failed');
    }

    copyResetRef.current = window.setTimeout(() => {
      setCopyState('idle');
    }, 1800);
  }

  return (
    <main
      ref={roomRef}
      className="signal-room"
      data-focus={activeProof.id}
    >
      <div className="signal-grid" aria-hidden="true" />
      <div className="signal-scan" aria-hidden="true" />
      <div className="signal-cursor-field" aria-hidden="true" />

      <header className="signal-header">
        <a className="signal-brand" href="#top" aria-label="David Erwin, home">
          <span>DAVID</span>
          <span>ERWIN</span>
        </a>
        <div className="signal-header-role">
          <span>Software engineer / Product · Data · AI</span>
          <span className="signal-header-facts">
            <span>Tampa, FL ↔ Prague, CZ</span>
            <span>Native English</span>
          </span>
        </div>
        <div className="signal-header-actions">
          <span className="signal-status">
            <span className="signal-status-dot" aria-hidden="true" />
            US + CZ citizen
          </span>
          <a
            className="signal-mini-link"
            href="/David-Erwin-CV.pdf"
            target="_blank"
          >
            CV <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section id="top" className="signal-hero" aria-labelledby="signal-title">
        <div className="signal-coordinate signal-coordinate-left" aria-hidden="true">
          TAMPA / 27°56&apos;52&quot;N / 82°27&apos;26&quot;W
        </div>
        <div className="signal-coordinate signal-coordinate-right" aria-hidden="true">
          PRAGUE / 50°05&apos;19&quot;N / 14°25&apos;17&quot;E
        </div>

        <div className="signal-intro">
          <p className="signal-kicker">
            <span>Signal room</span>
            <span suppressHydrationWarning>Portfolio / {currentYear}</span>
          </p>

          <KineticHeadline />

          <div className="signal-hero-foot">
            <TileBar />
            <p className="signal-summary">
              <span>Mastercard systems. CERN research.</span>
              <span>Independent systems.</span>
              <span>One engineer across the stack.</span>
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
            <span>Tampa / Prague</span>
          </figcaption>
        </figure>

        <div
          className="signal-proof-selector"
          aria-label="Evidence selector"
          data-rotation-paused={rotationPaused || undefined}
        >
          {PROOFS.map((proof, index) => {
            const interactionProps = {
              className: 'signal-proof-button',
              'data-active': index === activeIndex || undefined,
              onClick: () => selectProof(index, proof),
              onPointerEnter: (event: ReactPointerEvent<HTMLElement>) => {
                if (event.pointerType !== 'touch') hoverProof(index);
              },
              onPointerLeave: (event: ReactPointerEvent<HTMLElement>) => {
                if (event.pointerType !== 'touch') leaveProof(index);
              },
              onFocus: () => holdProof(index),
            };

            return (
              <button
                key={proof.id}
                {...interactionProps}
                type="button"
                aria-pressed={index === activeIndex}
              >
                <ProofCardContent proof={proof} />
              </button>
            );
          })}
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
                  onClick={(event) => {
                    if (event.detail > 0) event.currentTarget.blur();
                  }}
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
          <div className="signal-email-action">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button
              type="button"
              onClick={copyEmail}
              data-copy-state={copyState}
              aria-busy={copyState === 'copying'}
              aria-label={
                copyState === 'copied'
                  ? 'Email address copied'
                  : copyState === 'failed'
                    ? 'Email address could not be copied'
                    : copyState === 'copying'
                      ? 'Copying email address'
                    : 'Copy email address'
              }
            >
              <CopyIcon copied={copyState === 'copied'} />
            </button>
            <span className="signal-copy-feedback" role="status">
              {copyState === 'copied'
                ? 'Email copied'
                : copyState === 'failed'
                  ? 'Copy failed'
                  : ''}
            </span>
          </div>
          <a href="/David-Erwin-CV.pdf" target="_blank">
            CV ↗
          </a>
          <a href="https://github.com/dawi369" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/david-erwin-cz68/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <p className="signal-footer-meta">
          Designed and engineered by David Erwin
          <span suppressHydrationWarning>© {currentYear}</span>
        </p>
      </footer>
    </main>
  );
}
