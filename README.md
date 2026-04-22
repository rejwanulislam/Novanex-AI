# InsightFlow AI — Portfolio Website

A production-grade, fully animated portfolio website for InsightFlow AI, built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: CSS animations + Framer Motion + Canvas API
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx       # Animated canvas particle hero
│   │   ├── StatsSection.tsx      # Animated counters
│   │   ├── ServicesSection.tsx   # 6-service grid
│   │   ├── ComparisonSection.tsx # Before vs After
│   │   ├── ProcessSection.tsx    # 4-step process
│   │   ├── ProjectsSection.tsx   # Project portfolio cards
│   │   ├── TechStackSection.tsx  # Tech pills
│   │   ├── SecuritySection.tsx   # Security features
│   │   ├── TestimonialsSection.tsx
│   │   ├── AboutSection.tsx      # Credentials & story
│   │   ├── PricingSection.tsx    # 3-tier pricing
│   │   ├── CTABanner.tsx
│   │   └── ContactSection.tsx    # Contact form
│   └── ui/
│       └── CustomCursor.tsx      # Animated cursor
├── lib/
│   ├── data.ts           # All site data constants
│   └── utils.ts          # cn() helper
└── types/
    └── index.ts          # TypeScript types
```

## Deploying to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**

### Environment Variables (optional)
If you add a contact form API (e.g. Resend, Formspree), add to Vercel:
```
CONTACT_API_KEY=your_key_here
CONTACT_TO_EMAIL=hello@insightflow.ai
```

## Customization

- **Data**: Edit `src/lib/data.ts` to update all content
- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Fonts**: Change Google Fonts import in `globals.css` and update `--font-display` / `--font-body`
- **Contact form**: In `ContactSection.tsx`, replace the `setTimeout` simulation with your actual API call (Resend, Formspree, etc.)

## Performance

- Images optimized via Next.js `<Image>`
- Fonts loaded via Google Fonts with `display=swap`
- Canvas animations use `requestAnimationFrame` with cleanup
- All animations respect `prefers-reduced-motion` (add media query in globals.css if needed)
- Intersection Observer used for scroll-triggered reveals (no layout thrashing)
