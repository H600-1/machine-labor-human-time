# Machine Labor and Human Time

A public-facing editorial future-history microsite covering late summer 2026 through 2035 in a faster AI takeoff world that avoids only the terminal worst outcomes.

Stack: Next.js 16, TypeScript, Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Deploy on Railway

1. Push this directory to a GitHub repository.
2. In Railway, create a new project from the GitHub repo.
3. Use the default Node builder. If Railway asks:
   - Build command: `npm run build`
   - Start command: `npm run start`
4. No database, secrets, or paid dependencies are required.

## Contents

- Landing page with scenario frame and navigation.
- Long future-history essay from the vantage point of 2036.
- Filterable timeline from late summer 2026 through 2035.
- Key forecasts with baseline call, rationale, alternative, and signals.
- Forces map.
- Signals to watch.
- Scenario assumptions and branch points.
- Sources and method.
- Local notes under `/notes` documenting research, causal model, political forecast, red-team critique, design critique, and final report.

## Caveat

This is scenario analysis, not prophecy. It uses current evidence available by May 2026 and makes explicit baseline assumptions for later events.
