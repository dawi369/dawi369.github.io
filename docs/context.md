# Context

Technical context for agents working on this project.

## Architecture

- **Framework:** Next.js 15 App Router, static export (`output: 'export'`)
- **Deployment:** GitHub Pages at daviderwin.me — fully static, no server-side rendering
- **Package manager:** Bun

## Key Constraints

- Static export only — no API routes, no server components that need runtime
- SSR generates HTML at build time — any client-only state (localStorage, window) causes hydration mismatches
- next-themes `theme` is `undefined` on server, populated on client — use `suppressHydrationWarning` on elements that render theme-dependent text (React's built-in mechanism for external values that differ server/client). Do not use `useEffect` + mounted guards
- CSS custom properties registered with `@property` enable smooth color transitions via CSS — no JS animation needed

## Theme System

Two axes, both CSS-driven:

1. **Light/dark mode** — next-themes adds/removes `.dark` class on `<html>`
2. **Project color scheme** — `data-project` attribute on `<html>`, CSS attribute selectors swap variable values

Both trigger CSS variable changes on `:root` / `.dark[data-project="..."]`. The `transition` on `body` interpolates the `@property`-registered color values smoothly (~500ms).

Do not introduce JS-based color animation — `@property` transitions are the intended mechanism.

## Color Tokens

9 semantic CSS variables: `background`, `foreground`, `muted`, `muted-foreground`, `border`, `accent`, `accent-foreground`, `card`, `card-foreground`. Each has light + dark variants per project. Values defined in `globals.css`.

## Patterns

**No `useEffect` for hydration guards.** When rendering text that depends on client-only state (e.g. next-themes `theme`), add `suppressHydrationWarning` to the element. React will skip the mismatch check on that element and reconcile seamlessly. This avoids the unnecessary mounted-state + re-render pattern.

