# Subhash Garden — marketing website

Simple, mobile-first React site for **Subhash Garden** water park (Madanpally / Nizamabad).

## What this is

- Fancy single-page **info site** (no ticket purchase / checkout)
- Hero **video** + gallery **images** (AI-generated placeholders)
- Call + WhatsApp CTAs optimized for Android phones
- Visit info: timings, indicative prices, address, FAQ

## Stack

- Vite + React + TypeScript
- Framer Motion (light scroll fades)
- Plain CSS (no heavy UI kit)

## Run locally

```bash
cd subhash-garden-web
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option A — GitHub + Vercel website (recommended)

1. Create a free account at [vercel.com](https://vercel.com) (sign in with GitHub is easiest).
2. Put this project on GitHub:
   ```bash
   cd ~/subhash-garden-web
   git init
   git add .
   git commit -m "Initial Subhash Garden marketing site"
   # Create a new empty repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/subhash-garden-web.git
   git branch -M main
   git push -u origin main
   ```
3. In Vercel: **Add New… → Project → Import** that GitHub repo.
4. Keep defaults (Vite / `npm run build` / output `dist`) → **Deploy**.
5. You get a URL like `https://subhash-garden-web.vercel.app`.

Later pushes to `main` auto-deploy.

### Option B — Vercel CLI (no GitHub)

```bash
cd ~/subhash-garden-web
npm i -g vercel
vercel login
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

### Notes

- Videos/images in `public/` are included in the build (can make deploy ~50MB+).
- Free Vercel plan is enough for this static site.
- Custom domain: Project → **Settings → Domains**.

## Project layout

```
public/
  images/     # hero + gallery stills
  videos/     # hero loop (hero.mp4)
src/
  App.tsx     # full page
  index.css   # design system + layout
```

## Notes

- Prices/hours are **indicative** — copy tells users to confirm by phone/WhatsApp.
- Replace AI media in `public/` with real park photos/video when you have them.
- Existing ticket-counter app (if any) is separate from this marketing site.
