# Context

Technical context for agents working on this project.

## Architecture

- **Framework:** Astro 7 static site
- **Deployment:** GitHub Pages at `daviderwin.me`
- **Rendering:** static generation only; no React runtime or hydrated islands
- **Package manager:** Bun
- **Dependency policy:** direct and transitive packages must be at least seven
  days old; enforced by `bunfig.toml`
- **Typography:** bundled SF Mono Regular and Semibold WOFF2 via `@font-face`

## Homepage

`src/pages/index.astro` owns the homepage markup. `src/scripts/signal-room.ts`
owns evidence state, clipboard behavior, and pointer-position updates. The page
has no server runtime, UI framework runtime, or animation dependency.

The field-notes section sits after the project index so it can humanize David
without weakening the recruiter-first hierarchy. Graduation occupies the tall
left frame, a wakeboarding photo occupies the tall right frame, and hockey and
family moments fill the center. Source photos are kept out of the public
build, while optimized exports are lazy-loaded from `public/assets/images/life`.

The hero uses three optimized JPEGs in a fixed-position card deck: the festival
image is the lead frame, snowboarding is the medium accent, and the sunlit
portrait is the smallest. The deck occupies the original portrait geometry;
CSS transforms fan its decorative rear cards without moving surrounding
content, and the front card's foil sheen is CSS-only.

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
- Mobile retains the same layout, imagery, color states, and entrance rhythm,
  while paint-heavy blur, scan, foil, and box-shadow animations are replaced by
  a word-level headline reveal and static lighting below 900px.
- Hover-only evidence styling is limited to fine-pointer devices. Touch devices
  paint only the selected evidence card, preventing stale hover and transition
  states from presenting two active cards.
- `prefers-reduced-motion` resolves all information immediately and disables
  ambient scans.
- Calendar years displayed by the interface are derived from the current date;
  factual event dates remain authored content.

## Design constraints

- All component colors come from semantic tokens in `src/styles/global.css`.
- One font family and two weights are used application-wide.
- Layout spacing follows the project’s 4px scale.
- Interactive elements include hover, active, and visible keyboard-focus states.
- The site must remain legible and navigable when animation is disabled.
