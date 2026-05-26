# Veritas Capital Partners — Marketing Website

Next.js 16 · Tailwind v4 · Framer Motion · TypeScript

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx            Root layout (fonts, Header, Footer, metadata)
│   ├── globals.css           Tailwind v4 @theme brand tokens + base styles
│   ├── page.tsx              / Home
│   ├── about/page.tsx        /about
│   ├── services/page.tsx     /services
│   ├── education/page.tsx    /education
│   └── contact/
│       ├── page.tsx          /contact (server component)
│       └── ContactForm.tsx   Contact form (client component, validated)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx        Sticky nav with scroll state + mobile menu
│   │   └── Footer.tsx        Logo, nav, contact info, legal disclaimer
│   ├── ui/
│   │   ├── Button.tsx        primary / ghost / outline variants
│   │   ├── Card.tsx          dark / light / teal variants
│   │   ├── Container.tsx     Max-width wrapper (sm / md / lg / xl)
│   │   ├── Logo.tsx          Switches logo-light.png / logo-dark.png by prop
│   │   ├── Quote.tsx         Libre Baskerville italic pull-quote
│   │   └── Section.tsx       Semantic <section> dark / light / alt / teal
│   └── home/
│       ├── Hero.tsx
│       ├── Pillars.tsx
│       ├── MissionBand.tsx
│       ├── TrustSection.tsx
│       └── HomeCTA.tsx
│
└── lib/
    ├── fonts.ts              All 5 Google Fonts via next/font/google
    └── utils.ts              cn() utility (clsx + tailwind-merge)

public/
├── logo-light.png   ← DROP IN  (ivory wordmark — for dark backgrounds)
└── logo-dark.png    ← DROP IN  (dark wordmark — for light backgrounds)
```

---

## Dropping in Your Logo Files

1. Export two versions from your design source:
   - **`logo-light.png`** — ivory / white wordmark, transparent background (dark sections)
   - **`logo-dark.png`** — dark wordmark, transparent background (light sections)
2. Place both files directly in `/public/`.
3. Recommended: **600 × 240 px** at 2×, transparent PNG.
4. The `<Logo variant="light" />` component automatically references the correct file — no code changes needed.

---

## Brand Color Tokens (Tailwind v4)

Defined in `src/app/globals.css` under `@theme`. Use as standard Tailwind classes:

| Token           | Hex       | Usage                                      |
| --------------- | --------- | ------------------------------------------ |
| `obsidian`      | `#0e1514` | Primary dark background (~60% of site)    |
| `forest-black`  | `#111816` | Alternate dark surfaces, cards, footer     |
| `bronze`        | `#a56a3f` | Primary accent — use sparingly (~5%)       |
| `bronze-gold`   | `#c08a5a` | Hover highlights, luxury accents           |
| `alabaster`     | `#f2eee8` | Light sections, primary light text (~25%)  |
| `stone-gray`    | `#d9d7d2` | Secondary text, borders, neutral surfaces  |
| `slate-teal`    | `#425456` | Supporting tone, CTA sections (~10%)       |

---

## Typography Classes

| Tailwind class  | Font               | Use for                                       |
| --------------- | ------------------ | --------------------------------------------- |
| `font-display`  | Playfair Display   | Hero headlines, logo text, luxury display     |
| `font-serif`    | Cormorant Garamond | Section titles, editorial headings            |
| `font-sans`     | Montserrat         | Nav, labels, buttons, captions, UI elements   |
| `font-body`     | Lato               | Body copy, paragraphs, form fields            |
| `font-italic`   | Libre Baskerville  | Quotes, mission statements (use sparingly)    |

---

## Replacing Placeholder Content

Run these to find every placeholder that needs a real value before launch:

```bash
grep -r "\[Placeholder" src/
grep -r "\[Founder" src/
grep -r "\[City" src/
grep -r "\[Photo" src/
grep -r "\[Name" src/
```

Key areas:
- **About page** — founder names, bios, placeholder photos
- **Footer / Contact page** — firm address, phone, real email
- **Contact page disclaimer** — replace the `[Placeholder]` with your firm's licensed compliance disclosure (required before launch)
- **ContactForm.tsx** — wire up `handleSubmit` to your email service or API route

---

## Wiring Up the Contact Form

The form in `src/app/contact/ContactForm.tsx` validates client-side and currently only sets `submitted = true`. To send emails, add a Next.js API route:

```ts
// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // Send via Resend, SendGrid, Nodemailer, etc.
  return NextResponse.json({ ok: true });
}
```

Then replace the placeholder comment in `handleSubmit` with a `fetch("/api/contact", ...)` call.

---

## Deploy to Vercel

1. Push this directory to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. If your repo root is the parent folder, set **Root Directory** → `app`.
4. Framework: **Next.js** (auto-detected). No environment variables required for the base site.
5. Click **Deploy**.

For a custom domain, add it under **Settings → Domains** in your Vercel project dashboard.
