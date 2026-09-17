# Handoff: David Salami Personal Site

## Overview
Six-page personal/portfolio site for David Salami (founder, technology leader). Pages: Home, Work with me, Speaking, Writing, Company, About. Shared Header (nav) and Footer (contact CTA). Built to match a Figma design pixel-for-pixel.

## About the Design Files
The `.dc.html` files in this bundle are **design references**, prototyped in HTML — not production code to copy directly. Recreate these designs in your target codebase's existing environment (React, Vue, etc.) using its established components and patterns, or choose an appropriate framework if none exists yet.

## Fidelity
**High-fidelity.** These are pixel-accurate mockups matched against Figma exports (colors, typography, spacing, copy all finalized). Recreate pixel-perfectly.

## Design Tokens
- Font: Archivo (Google Fonts), weights 400/500/600/700/800/900
- Heading weight: 800 (900 for strongest emphasis spans), `letter-spacing: -0.02em`
- Body text: #5a5a5a / #8a8a8a on light sections, #b3b3b3 / #9a9a9a on dark sections
- Primary ink: #111111 (near-black), pure black sections: #0a0a0a
- Light section bg: #ffffff and #fafafa
- Accent (tweakable per user): default #2f5fe0 (blue); options #0a0a0a, #b8862f (gold), #1f7a4d (green) — set via a prop on Home
- Base type scale: 10px (eyebrow/kicker, uppercase, letter-spacing 0.08em) · 12–13px (body small/nav) · 14–18px (body/card titles) · 28–46px (H1, clamp) · 26–40px (H2, clamp)
- Max content width: 1360px, side padding 5vw
- Buttons: solid black bg / white text (primary), 1px black border (secondary), 14px 26px padding, 12px bold uppercase label with letter-spacing 0.05em

## Screens

### Header (shared)
Sticky-less top bar: "DAVID SALAMI" wordmark (left, 14px/800/uppercase tracking), center nav (WRITING / COMPANY / SPEAKING / ABOUT, 12px/600, active = black, inactive = #7a7a7a), right "WORK WITH ME" outlined button.

### Footer (shared)
Black (#0a0a0a) band. Email link (underlined), large H2 "For advisory, speaking, or collaboration.", supporting paragraph, two CTA buttons (WORK WITH ME / BOOK A SESSION), decorative rotated pill labels, bottom legal row with GITHUB / LINKEDIN / EMAIL links.

### Home
1. Hero: profile card (avatar, role, focus, contact) + big headline with inline black "Founder" chip and bold closing phrase + intro paragraph + two CTAs.
2. Brand bar (logos), toggle-able via `showBrandBar` prop.
3. Black "Built for scale." stat strip (Founder / Currently building / Focus / Markets).
4. "Building beyond the idea." — 3-row list (Islands Digital, Taxable.ng, Truss.ng) with description + "Explore the work →" link.
5. Black "Built where the stakes are high." 3-card grid, numbered 01–03 with tag pill.
6. "Selected writing…" 2×2 post grid + "VIEW ALL" tile linking to Writing.
7. Footer.

### Work with me
Hero (Let's build something consequential.) + Stripe/PayPal buttons → black pricing block ($1000/hr) → contact form (name/email/org/message) → booking block → Footer.

### Speaking
Hero with topic image on the right → black "Six areas…" 3×2 topic grid → "Who These Talks Are Built For" pill list → outcome quote block → Footer.

### Writing
Hero → "LATEST WRITINGS" list rows (title + summary + READ button) → Footer.

### Company
Hero "Company & Ventures." → black featured venture (Islands Digital) → "Building Taxable.ng" current-focus rows → "Ventures & systems built" past rows → brand logo grid → "How I think about building companies" numbered list → Footer.

### About
Hero "Founder. Builder. Operator." + portrait → black bio/stat block → timeline list (4 entries) → black 4-up "I work where technology meets complexity" grid → "What I'm building now" 2-card row → Footer.

## Interactions & Behavior
- Nav active-state color swap (Header takes `active` prop: writing/company/speaking/about/"").
- All CTAs are plain links to the relevant page (`./Home.dc.html` etc.) — no JS-driven modals.
- Contact form on Work with me is presentational only (no submit handler wired).
- Home's accent color and brand-bar visibility are exposed as tweakable props.

## Assets
Logo/photo assets are in `assets/` (brand logos: NatWest, Citibank, Lloyds, Dangote, Microsoft, Liberty Mutual, ACI, Vocalink, FT, Domestic & General, ABN AMRO). Avatar and portrait slots are currently drag-drop placeholders (`image-slot` component) — replace with real photos.

## Files
- `Header.dc.html`, `Footer.dc.html` — shared chrome
- `Home.dc.html`, `WorkWithMe.dc.html`, `Speaking.dc.html`, `Writing.dc.html`, `Company.dc.html`, `About.dc.html` — pages
- `assets/` — logo images
- `screenshots/` — rendered top-of-page captures of all 6 pages, for a quick visual reference alongside the HTML
- `figma-reference/` — the original Figma frame exports (full-page PNGs) these designs were built and pixel-matched against; use as the ground truth for exact spacing/type/color if anything is ambiguous in the HTML
- `design-tokens.css` — the underlying design-system tokens (colors, spacing scale, font vars) the HTML pages draw from
