# Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

## Cloudflare Pages Setup

### Prerequisites

1. Sign up for [Cloudflare Pages](https://pages.cloudflare.com/)
2. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

### Local Preview

Test your site with Cloudflare Pages locally:

```bash
npm run preview
```

### Deploy

#### Option 1: Manual Deploy with Wrangler

1. Login to Cloudflare:
   ```bash
   wrangler login
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

#### Option 2: GitHub Actions (Recommended)

1. Get your Cloudflare API Token and Account ID:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to My Profile → API Tokens
   - Create a token with "Cloudflare Pages" permissions
   - Copy your Account ID from the dashboard

2. Add GitHub Secrets:
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `CLOUDFLARE_API_TOKEN`: Your API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your account ID

3. Push to GitHub:
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

4. The GitHub Action will automatically deploy to Cloudflare Pages on push to main.

#### Option 3: Cloudflare Dashboard (Git Integration)

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command:** `npm run pages:build`
   - **Build output directory:** `.vercel/output/static`
   - **Root directory:** `/`
5. Click "Save and Deploy"

## Environment Variables

### Local Development

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Add your environment variables to `.env.local` (not tracked by git).

Payment and booking are wired through public env vars so a static Cloudflare/Next export can still deep-link out:

- `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` — Stripe Payment Link for the advisory hour
- `NEXT_PUBLIC_PAYPAL_URL` — PayPal.me or checkout URL
- `NEXT_PUBLIC_CALENDLY_URL` — Calendly event URL (embeds on Work with me)
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — optional form backend; otherwise the contact form opens mail

Writing is a file-based MDX engine. Add an essay at `content/writing/your-slug.mdx` with `title`, `summary`, `date`, `order`, and `num` in the frontmatter. It appears on `/writing` and the homepage automatically.

### Production (Cloudflare Pages)

Set environment variables in Cloudflare Dashboard:

1. Go to your Pages project
2. Click Settings → Environment variables
3. Add your variables

Or use Wrangler:

```bash
wrangler pages secret put VARIABLE_NAME
```

## Custom Domain

1. Go to your Cloudflare Pages project
2. Click "Custom domains"
3. Add your domain
4. Update DNS records as instructed

## Project Structure

```
personal-brand/
├── .github/
│   └── workflows/          # GitHub Actions
│       ├── ci.yml          # Continuous Integration
│       └── deploy.yml      # Cloudflare Pages deployment
├── public/                 # Static assets
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page
│       └── globals.css     # Global styles
├── .env.example           # Environment template
├── .gitignore
├── next.config.mjs        # Next.js config
├── package.json
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── wrangler.toml          # Cloudflare config
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (Next.js) |
| `npm run start` | Start production server locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |
| `npm run pages:build` | Build for Cloudflare Pages |
| `npm run preview` | Preview Cloudflare Pages build locally |
| `npm run deploy` | Deploy to Cloudflare Pages via Wrangler |

## Next Steps

1. Customize `src/app/page.tsx` with your content
2. Update `src/app/layout.tsx` metadata (title, description)
3. Add your brand colors to `tailwind.config.ts`
4. Create additional pages in `src/app/`
5. Add components in `src/components/`
6. Configure custom domain in Cloudflare

## Support

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

Private - All rights reserved
