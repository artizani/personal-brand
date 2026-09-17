# davidsalami.com

Personal website for David Salami. Next.js 14 App Router, TypeScript, Tailwind CSS, fonts Sora / Inter / JetBrains Mono. Pages are a **static export** (`output: 'export'`).

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build          # writes static files to out/
npm run lint
npm run type-check
```

`npm start` does **not** work with this static export. After `npm run build`, preview with any static server, for example `npx serve out`.

## Environment variables

Copy `.env.example` to `.env.local`. Public `NEXT_PUBLIC_*` values are inlined at **build** time — change them, then rebuild.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for sitemap, RSS, and post meta (no trailing slash) |
| `NEXT_PUBLIC_EMAIL` | Site email (footer, CTA, speaking invite) |
| `NEXT_PUBLIC_PROFILE_EMAIL` | Homepage sidebar contact |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` | Work-with-me Stripe Payment Link |
| `NEXT_PUBLIC_PAYPAL_URL` | Work-with-me PayPal URL |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly event URL (embeds on Work with me) |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Contact form POST URL (`https://formspree.io/f/…`). If empty, the form opens a mailto |
| `NEXT_PUBLIC_GITHUB_URL` | Footer GitHub |
| `NEXT_PUBLIC_LINKEDIN_URL` | Footer / social LinkedIn |
| `NEXT_PUBLIC_TWITTER_URL` | Homepage X link |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Homepage Instagram link |
| `RESEND_API_KEY` | Newsletter (server). If missing, subscribe is stubbed |
| `RESEND_FROM_EMAIL` | Verified Resend from address |
| `NEWSLETTER_NOTIFY_EMAIL` | Where signup notifications are sent (defaults to `NEXT_PUBLIC_EMAIL`) |

Until Stripe / PayPal / Calendly URLs are set, those buttons stay visible but inactive. Production hosts (Cloudflare Pages, etc.) need the same variables set in the dashboard **before** the build.

The newsletter form `POST`s to `/api/newsletter`. That route runs under `npm run dev`. A pure static host (`out/`) will not execute it until you add a server (Node, Cloudflare Function, or turn off `output: 'export'`).

## Writing (blog)

Essays are MDX files in `content/writing/`. The filename (without `.mdx`) is the URL slug. Existing posts stay at `/writing/<slug>/`.

Add a post by creating `content/writing/your-slug.mdx` with this frontmatter, then the Markdown body:

```yaml
---
title: Your title
description: One-line summary used on the index, homepage, RSS, and meta tags.
pubDate: 2026-09-17
updatedDate: 2026-09-18   # optional
tags:
  - leadership
  - systems
draft: false
num: "06"                 # optional label on the writing cards
---
```

- `title`, `description`, `pubDate` are required. Invalid frontmatter fails the build.
- `draft: true` is listed in development and **omitted from production builds**.
- Index is paginated (5 per page), newest `pubDate` first. Page 1 is `/writing/`; later pages are `/writing/page/2/`.
- Tags render at `/writing/tags/<tag>/`.
- RSS: `/rss.xml`. Sitemap (all pages + posts + tags): `/sitemap.xml`.
- Each post gets Open Graph / Twitter meta, JSON-LD `BlogPosting`, and a reading-time estimate.

After adding or editing a post, refresh `npm run dev` or run `npm run build`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about/` | About |
| `/company/` | Company & ventures |
| `/speaking/` | Speaking |
| `/work/` | Advisory, payments, contact, Calendly |
| `/writing/` | Writing index |
| `/writing/<slug>/` | Essay |
| `/writing/tags/<tag>/` | Tag index |
| `/rss.xml` | RSS |
| `/sitemap.xml` | Sitemap |

Trailing slashes are required (`trailingSlash: true`).

## Deploy

This repo is set up for Cloudflare Pages. See `SETUP.md` for Wrangler, GitHub Actions, and custom domains. Because the build is static, set all `NEXT_PUBLIC_*` secrets in the Pages project environment, then trigger a new build.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server (includes `/api/newsletter`) |
| `npm run build` | Production static export → `out/` |
| `npm run lint` | ESLint |
| `npm run type-check` | `tsc --noEmit` |
