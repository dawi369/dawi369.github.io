# daviderwin.me

David Erwin’s kinetic, recruiter-facing portfolio.

## Local development

```bash
bun install
bun run dev
```

The site is a statically generated Astro application deployed to GitHub Pages.
The homepage is intentionally self-contained: its evidence selector and ambient
motion run entirely in the browser without an animation framework or server
runtime.

All package resolutions enforce a seven-day minimum release age through
`bunfig.toml`, including transitive dependencies.
