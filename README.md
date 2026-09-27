# Wei Chen — Materials Design & Innovation

An Astro website for Wei Chen, Professor at the University at Buffalo. The homepage connects three research themes to supporting papers, a professional profile, and contact information. A dedicated publications page groups 15 selected studies by research area.

## Local development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev -- --background
```

Use `npm run astro -- dev stop` to stop the preview. Build with `npm run build`.

## Editing content

- Homepage and research: `src/pages/index.astro`
- Publications: `src/data/publications.json` (DOI, title, authors, journal, year, research group, source)
- Shared navigation and metadata: `src/layouts/Site.astro`
- Design: `src/styles/site.css`
- Source notes: `CONTENT_SOURCES.md`

Publication entries are selected, not exhaustive. Use the journal volume year where one is assigned, and flag differences from online publication dates. Preserve DOI links and verify authorship before adding records.

## Hosting

The existing `.github/workflows` configuration builds and publishes on a push to `main`. `public/CNAME` and the canonical domain remain `www.wmaterials.net`. Sites provides a separate private review version, identified by `.openai/hosting.json`.

The site uses bundled fonts and static HTML. Core content, navigation and expandable research details work without JavaScript. Motion respects the visitor's reduced-motion setting.

## Analytics

Statcounter is installed in the shared layout through `src/components/Statcounter.astro`. It loads asynchronously and uses invisible tracking with the owner-supplied public project identifiers. It runs in production builds on both content pages, including the hosted review copy; development previews do not send visits. The no-JavaScript fallback is preserved.
