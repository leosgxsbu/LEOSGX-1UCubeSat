# SYSTEM-3 / LEO-GRM — Project website

This folder is the Next.js site for [LEOSGX-1UCubeSat](https://github.com/leosgxsbu/LEOSGX-1UCubeSat).

## Run locally

```bash
cd docs
npm install
npm run dev
```

Open http://localhost:3000

## Build static site

```bash
cd docs
npm run build
```

Output: `docs/out/`

## Push to GitHub

From the repo root (`LEOSGX-1UCubeSat/`):

1. Put CAD / Code / Gerber / etc. files in the matching folders at the repo root.
2. Keep the website under `docs/`.
3. Commit and push to `https://github.com/leosgxsbu/LEOSGX-1UCubeSat`.

Background photos live in `docs/public/backgrounds/` (do not delete those).
