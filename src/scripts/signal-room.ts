import { PROOFS } from '../data/site';

const EMAIL = 'hello@daviderwin.me';
const ROTATION_INTERVAL_MS = 10_000;
const INTERACTION_PAUSE_MS = 6_000;
const DESKTOP_PROOF_QUERY = '(hover: hover) and (pointer: fine)';

type CopyState = 'idle' | 'copying' | 'copied' | 'failed';

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
      }
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
  const legacyCopy = Reflect.get(document, 'execCommand') as
    | ((commandId: string) => boolean)
    | undefined;
  const copied = legacyCopy?.call(document, 'copy') ?? false;
  document.body.removeChild(field);
  return copied;
}

function initSignalRoom(room: HTMLElement) {
  const proofSelector = room.querySelector<HTMLElement>(
    '.signal-proof-selector'
  );
  const proofButtons = Array.from(
    room.querySelectorAll<HTMLButtonElement>('.signal-proof-button')
  );
  const readout = room.querySelector<HTMLElement>('.signal-readout');
  const readoutEyebrow = readout?.querySelector<HTMLElement>(
    '[data-readout-eyebrow]'
  );
  const readoutMetric = readout?.querySelector<HTMLElement>(
    '[data-readout-metric]'
  );
  const readoutDetail = readout?.querySelector<HTMLElement>(
    '[data-readout-detail]'
  );
  const readoutAction = readout?.querySelector<HTMLAnchorElement>(
    '[data-readout-action]'
  );
  const readoutActionLabel = readoutAction?.querySelector<HTMLElement>(
    '[data-readout-action-label]'
  );
  const copyButton = room.querySelector<HTMLButtonElement>(
    '[data-copy-email]'
  );
  const copyIcon = copyButton?.querySelector<SVGElement>('[data-copy-icon]');
  const copiedIcon = copyButton?.querySelector<SVGElement>(
    '[data-copied-icon]'
  );
  const copyFeedback = room.querySelector<HTMLElement>(
    '.signal-copy-feedback'
  );

  if (
    !proofSelector ||
    proofButtons.length !== PROOFS.length ||
    !readout ||
    !readoutEyebrow ||
    !readoutMetric ||
    !readoutDetail ||
    !readoutAction ||
    !readoutActionLabel
  ) {
    return;
  }

  const selector = proofSelector;
  const readoutElement = readout;
  const eyebrowElement = readoutEyebrow;
  const metricElement = readoutMetric;
  const detailElement = readoutDetail;
  const actionElement = readoutAction;
  const actionLabelElement = readoutActionLabel;

  let activeIndex = 0;
  let hoveredIndex: number | null = null;
  let rotationPaused = false;
  let rotationInterval = 0;
  let rotationResumeTimeout = 0;
  let copyResetTimeout = 0;
  let pointerFrame = 0;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia(DESKTOP_PROOF_QUERY);

  function stopRotation() {
    window.clearInterval(rotationInterval);
    rotationInterval = 0;
  }

  function startRotation() {
    stopRotation();
    if (rotationPaused || reducedMotion.matches) return;

    rotationInterval = window.setInterval(() => {
      if (document.hidden) return;
      setActiveProof((activeIndex + 1) % PROOFS.length);
    }, ROTATION_INTERVAL_MS);
  }

  function setRotationPaused(paused: boolean) {
    rotationPaused = paused;
    selector.toggleAttribute('data-rotation-paused', paused);
    if (paused) stopRotation();
    else startRotation();
  }

  function setActiveProof(index: number) {
    if (index === activeIndex) return;

    activeIndex = index;
    const proof = PROOFS[index];
    room.dataset.focus = proof.id;

    proofButtons.forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.toggleAttribute('data-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    readoutElement.dataset.proof = proof.id;
    eyebrowElement.textContent = proof.eyebrow;
    metricElement.textContent = proof.metric;
    detailElement.textContent = proof.detail;

    if (proof.href && proof.action) {
      actionElement.href = proof.href;
      actionLabelElement.textContent = proof.action;
      actionElement.hidden = false;
    } else {
      actionElement.removeAttribute('href');
      actionLabelElement.textContent = '';
      actionElement.hidden = true;
    }
  }

  function holdProof(index: number) {
    setActiveProof(index);
    setRotationPaused(true);
    window.clearTimeout(rotationResumeTimeout);
    rotationResumeTimeout = window.setTimeout(() => {
      if (hoveredIndex === null) setRotationPaused(false);
    }, INTERACTION_PAUSE_MS);
  }

  function hoverProof(index: number) {
    hoveredIndex = index;
    window.clearTimeout(rotationResumeTimeout);
    setActiveProof(index);
    setRotationPaused(true);
  }

  function leaveProof(index: number) {
    if (hoveredIndex !== index) return;
    hoveredIndex = null;
    window.clearTimeout(rotationResumeTimeout);
    setRotationPaused(false);
  }

  proofButtons.forEach((button, index) => {
    button.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'touch') hoverProof(index);
    });
    button.addEventListener('pointerleave', (event) => {
      if (event.pointerType !== 'touch') leaveProof(index);
    });
    button.addEventListener('focus', () => holdProof(index));
    button.addEventListener('click', () => {
      const proof = PROOFS[index];
      holdProof(index);
      if (!proof.href || !finePointer.matches) return;
      window.open(proof.href, '_blank', 'noopener,noreferrer');
    });
  });

  let pointerX = 50;
  let pointerY = 50;

  function updatePointer(event: PointerEvent) {
    pointerX = (event.clientX / window.innerWidth) * 100;
    pointerY = (event.clientY / window.innerHeight) * 100;
    if (pointerFrame) return;

    pointerFrame = window.requestAnimationFrame(() => {
      room.style.setProperty('--pointer-x', `${pointerX}%`);
      room.style.setProperty('--pointer-y', `${pointerY}%`);
      pointerFrame = 0;
    });
  }

  if (finePointer.matches) {
    window.addEventListener('pointermove', updatePointer, { passive: true });
  }

  function setCopyState(state: CopyState) {
    if (!copyButton) return;
    copyButton.dataset.copyState = state;
    copyButton.setAttribute('aria-busy', String(state === 'copying'));
    copyButton.setAttribute(
      'aria-label',
      state === 'copied'
        ? 'Email address copied'
        : state === 'failed'
          ? 'Email address could not be copied'
          : state === 'copying'
            ? 'Copying email address'
            : 'Copy email address'
    );
    copyIcon?.toggleAttribute('data-icon-hidden', state === 'copied');
    copiedIcon?.toggleAttribute('data-icon-hidden', state !== 'copied');
    if (copyFeedback) {
      copyFeedback.textContent =
        state === 'copied'
          ? 'Email copied'
          : state === 'failed'
            ? 'Copy failed'
            : '';
    }
  }

  copyButton?.addEventListener('click', async () => {
    window.clearTimeout(copyResetTimeout);
    setCopyState('copying');

    try {
      await writeClipboard(EMAIL);
      setCopyState('copied');
    } catch {
      setCopyState(fallbackCopy(EMAIL) ? 'copied' : 'failed');
    }

    copyResetTimeout = window.setTimeout(() => {
      setCopyState('idle');
    }, 1800);
  });

  room.querySelectorAll<HTMLAnchorElement>('.system-link[href]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.detail > 0) link.blur();
    });
  });

  startRotation();

  window.addEventListener(
    'pagehide',
    () => {
      stopRotation();
      window.clearTimeout(rotationResumeTimeout);
      window.clearTimeout(copyResetTimeout);
      window.cancelAnimationFrame(pointerFrame);
      window.removeEventListener('pointermove', updatePointer);
    },
    { once: true }
  );
}

document.querySelectorAll<HTMLElement>('[data-current-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const room = document.querySelector<HTMLElement>('.signal-room');
if (room) initSignalRoom(room);
