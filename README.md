# Personal Brand Website

A modern personal brand website built with Next.js and deployed to Cloudflare Pages.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Deployment:** Cloudflare Pages
- **Build Tool:** Wrangler

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Preview (Cloudflare Pages)

```bash
npm run preview
```

This builds the site and runs it locally using Wrangler.

### Deploy to Cloudflare Pages

#### Option 1: Manual Deploy

```bash
npm run deploy
```

#### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your repository to Cloudflare Pages
3. Set build command: `npm run pages:build`
4. Set build output directory: `.vercel/output/static`

## Project Structure

```
personal-brand/
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Home page
│       └── globals.css      # Global styles
├── public/                  # Static assets
├── wrangler.toml           # Cloudflare configuration
├── next.config.mjs         # Next.js configuration
└── package.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run pages:build` - Build for Cloudflare Pages
- `npm run preview` - Preview Cloudflare Pages build locally
- `npm run deploy` - Deploy to Cloudflare Pages

## Environment Variables

Create a `.env.local` file for local environment variables:

```bash
# Add your environment variables here
```

For Cloudflare Pages, set environment variables in the dashboard or using Wrangler.

## Cloudflare Pages Setup

1. Install Wrangler globally (optional):
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## License

Private - All rights reserved
