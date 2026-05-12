# Final report

Built a Next.js + TypeScript + Tailwind editorial microsite: Machine Labor and Human Time: A Future History, 2026-2035. The site includes a landing page, long future-history essay, filterable timeline, key forecasts, assumptions, branch points, forces map, signals to watch, and sources/method.

Run locally:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run start
```

Railway deployment:

1. Push the repo to GitHub.
2. Create a new Railway project from the GitHub repo.
3. Railway should detect Next.js. Use build command `npm run build` and start command `npm run start`.
4. No secrets or database are required.

Limitations: the scenario is analysis, not prophecy; it uses current evidence available by May 2026 and makes explicit baseline calls. Future facts after May 2026 are scenario assumptions. The essay could be expanded with more quantitative charts and professional copyediting.
