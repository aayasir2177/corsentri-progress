# CorSentri Homepage

A responsive Next.js homepage showcase for CorSentri. Built with TypeScript and custom CSS, featuring interactive animations, responsive typography, and media.

## Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Build & Verification

```bash
npm run check
```

`npm run check` runs:
1. `npm run typecheck` (strict TypeScript check)
2. `npm run lint` (ESLint with zero warnings)
3. `npm run build` (Prebuild image optimization via Sharp + static Next.js production export to `out/`)

## Cloudflare Deployment

### Option 1: Cloudflare Pages (Git integration or CLI)
- **Build command**: `npm run build`
- **Build output directory**: `out`

To deploy via Wrangler CLI:
```bash
npx wrangler pages deploy out
```

### Option 2: Cloudflare Workers (Static Assets)
The included `wrangler.jsonc` is configured for Cloudflare Workers with static assets pointing to `out/`.
Deploy directly:
```bash
npx wrangler deploy
```

## Structure

- `app/page.tsx`: Homepage layout and content
- `app/layout.tsx`: Fonts, root chrome and SEO metadata
- `app/components/site-chrome.tsx`: Header navigation, mobile slideout dialog, and footer
- `app/components/home-interactions.tsx`: Hero motion effect, service accordion with radar visualization, and accessible process tabs
- `app/components/responsive-image.tsx`: Responsive picture element with AVIF and WebP variants
- `app/styles/homepage.css`: Homepage layout and design styling
- `app/styles/responsive.css`: Breakpoints and mobile responsiveness
- `app/interior.css`: Navigation, dialog, and modal chrome styles
- `public/brand/`: CorSentri SVG logos and logomarks
- `public/images/`: Photography and optimized responsive variants
# corsentri-progress
