# PawCircle LLC Website Decisions

## 2026-09-05 — Launch the website around services, not the internal ledger

PawCircle LLC's public website will focus on services the company can offer now: small-business websites, website maintenance and improvements, and practical technology help.

The bookkeeping and operations application developed for PawCircle LLC is currently an internal business system. It is not ready to be offered as a multi-user paid product and should not be presented as one on the public website. The working names RouteLedger, BizHandler, and PawCircle Ledger remain internal product-development references only.

If the internal system later becomes a customer product, that will require a separate product decision and architecture for customer accounts, workspace/data isolation, onboarding, billing, security, and privacy.

This decision supersedes the earlier assumption that RouteLedger should be a public PawCircle product at website launch.

## 2026-09-04 — PawCircle LLC remains the umbrella brand

PawCircle LLC will not be renamed to a personal-name design agency. The company keeps continuity with its pet-service origin while expanding into practical technology for independent service businesses.

## 2026-09-04 — Broaden beyond pet businesses

Public positioning should not restrict PawCircle to pet businesses. The same website and technology problems appear across many service industries.

## 2026-09-04 — RouteLedger was initially treated as a PawCircle product

RouteLedger was initially presented as a distinct PawCircle product and as a working title for a broader tool covering work, mileage, expected income, expenses, invoicing, and business summaries. The September 5 decision above supersedes that public-product positioning while the tool remains an internal PawCircle LLC system.

## 2026-09-04 — Mahaku stays separate

Mahaku is a separate AI venture with its own long-term vision and should not be folded into PawCircle LLC.

## 2026-09-04 — Keep the first website lean

The first production version should be polished but intentionally limited. It should support revenue and explain the business clearly without becoming another large software project.

## 2026-09-04 — Keep the original green visual direction

After testing several steel, slate, and brighter blue accents, the original green was restored. It gives PawCircle LLC a cleaner, more distinctive identity against the warm cream background and should remain the baseline brand palette unless a later full brand exercise justifies a change.

## 2026-09-04 — Mobile navigation is a launch requirement

The site must use a responsive hamburger menu on smaller screens. The menu must support keyboard use, close after navigation, expose expanded/collapsed state to assistive technology, and close with Escape.

## 2026-09-04 — PawCircle business email is the public contact address

Public site contact uses `pawcirclellc@gmail.com`. Rebecca's personal email should not be exposed on the PawCircle LLC site. The first working contact form uses a mailto flow so inquiries are addressed directly to PawCircle LLC without requiring third-party credentials; server-side delivery remains a pre-launch enhancement.

## 2026-09-04 — Production identity should be centralized

Company name, tagline, public email, location, and canonical domain live in `lib/site.ts` so the site does not scatter business identity across unrelated components.

## 2026-09-04 — pawcirclellc.com is the canonical website domain

Production metadata, robots configuration, and sitemap generation use `https://pawcirclellc.com` as the canonical public domain. Deployment and DNS connection still need to be completed before launch.
