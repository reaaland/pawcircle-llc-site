# PawCircle LLC Website

Public business website for PawCircle LLC, positioned as a practical website and technology partner for independent service businesses.

## Purpose

The site separates PawCircle LLC from the older PawCircle Membership product and presents the company around services it can offer now:

- Small-business websites
- Website maintenance and improvements
- SEO, launch, accessibility, and performance basics
- Practical help with website workflows, forms, Google tools, and related small-business technology

PawCircle's internal bookkeeping and operations software is intentionally not presented as a public product at launch. Mahaku remains a separate venture and is also intentionally not part of this site.

## Stack

- Next.js App Router
- React
- TypeScript
- Plain CSS

## Pages

- `/` Home
- `/services`
- `/work`
- `/about`
- `/contact`

The former `/routeledger` route redirects to `/services` so stale links do not expose outdated product positioning.

## Site configuration

Shared public identity values live in `lib/site.ts`, including the company name, tagline, PawCircle business email, Rochester location, and canonical domain.

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```

## Current status

The core content architecture and visual foundation are complete. Responsive mobile navigation, PawCircle business-email contact handling, canonical metadata, robots configuration, and sitemap generation are implemented.

Remaining launch work includes server-side contact delivery, real project imagery, social preview artwork, final Lighthouse/accessibility QA, deployment, and connecting `pawcirclellc.com`.
