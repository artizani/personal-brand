# davidsalami.com

Personal website for David Salami, technology leader and founder.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Open Sans font

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy to Vercel:

```bash
vercel
```

Or connect your repository to Vercel for automatic deployments.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage
│   ├── writing/
│   │   └── page.tsx        # Writing page
│   ├── company/
│   │   └── page.tsx        # Company page
│   ├── speaking/
│   │   └── page.tsx        # Speaking page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Navigation.tsx      # Top navigation
│   └── Footer.tsx          # Footer
└── globals.css             # Global styles
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking
