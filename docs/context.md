# Context

Technical context for agents working on this project.

## Architecture

- **Framework:** Next.js 15 App Router
- **Deployment:** GitHub Pages at `daviderwin.me`
- **Rendering:** static export only
- **Package manager:** Bun
- **Typography:** bundled SF Mono Regular and Semibold via `next/font/local`

## Homepage

`src/components/SignalRoom.tsx` owns the homepage content, evidence state, and
pointer-position updates. The page has no server runtime and no animation
dependency.

The active evidence item is represented by `data-focus` on the homepage root.
CSS maps that state to `--active-signal`; components consume the semantic token
instead of embedding colors in JSX.

## Motion

- Entrance choreography, the character-state headline, tile assembly, scans, and
  hover feedback are CSS-driven.
- JavaScript only rotates the evidence selection and publishes pointer position as
  CSS custom properties.
- Evidence rotates every ten seconds. Hover selects and holds that evidence for
  as long as the pointer remains over the card; leaving starts a fresh cycle.
  Focus or touch selection pauses rotation for six seconds.
- On fine-pointer devices, selecting a linked evidence card also opens its
  destination. On coarse-pointer devices, the cards only select evidence so the
  readout can be reviewed first; its explicit action link remains navigable.
- Coarse-pointer, slow-update, and constrained devices resolve the same final
  composition with high-paint cursor, scan, glyph, and ambient animations
  disabled.
- `prefers-reduced-motion` resolves all information immediately and disables
  ambient scans.
- Calendar years displayed by the interface are derived from the current date;
  factual event dates remain authored content.

## Design constraints

- All component colors come from semantic tokens in `src/app/globals.css`.
- One font family and two weights are used application-wide.
- Layout spacing follows the project’s 4px scale.
- Interactive elements include hover, active, and visible keyboard-focus states.
- The site must remain legible and navigable when animation is disabled.
