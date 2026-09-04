# PawCircle LLC Website

Public business website for PawCircle LLC, positioned as a practical technology company for independent service businesses.

## Purpose

The site separates PawCircle LLC from the older PawCircle Membership product and presents the company as an umbrella for:

- Small-business websites
- Website maintenance and improvements
- A PawCircle software product currently using the working title RouteLedger
- Future practical business tools that fit the same audience and mission

Mahaku remains a separate venture and is intentionally not part of this site.

## Stack

- Next.js App Router
- React
- TypeScript
- Plain CSS

## Pages

- `/` Home
- `/services`
- `/routeledger`
- `/work`
- `/about`
- `/contact`

## Site configuration

Shared public identity values live in `lib/site.ts`, including the company name, tagline, PawCircle business email, Rochester location, canonical domain, and current product-name status.

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

The initial content architecture and visual foundation are complete. Responsive mobile navigation, PawCircle business-email contact handling, canonical metadata, robots configuration, and sitemap generation are implemented. Rebecca confirmed a successful local production build after the responsive/contact update.

Remaining launch work includes server-side contact delivery, real project imagery, social preview artwork, final Lighthouse/accessibility QA, deployment, and connecting `pawcirclellc.com`.
