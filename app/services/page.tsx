import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">SERVICES</p>
      <h1>Practical web help for real business needs.</h1>
      <p className="lede page-lede">PawCircle focuses on useful outcomes: a clearer website, a better customer path, easier maintenance, and online tools that do not create more work than they save.</p>

      <div className="detail-grid">
        <article className="detail-card"><h2>New websites</h2><p>Responsive small-business websites with clear services, strong calls to action, contact or quote flows, real photos, and a structure that works well on phones.</p></article>
        <article className="detail-card"><h2>Website improvements</h2><p>Focused fixes for mobile layout, navigation, forms, accessibility, content organization, performance, gallery presentation, and visual consistency.</p></article>
        <article className="detail-card"><h2>SEO & launch basics</h2><p>Page metadata, sitemap and robots setup, structured data where appropriate, Google indexing support, and practical launch checks.</p></article>
        <article className="detail-card"><h2>Ongoing maintenance</h2><p>Monthly care options for small content changes, form checks, link checks, routine updates, and selected improvements without constant sales pressure.</p></article>
      </div>

      <section className="inline-cta">
        <h2>Not sure what you need?</h2>
        <p>That is okay. Start with the business problem, not a technical shopping list.</p>
        <Link className="button button-dark" href="/contact">Tell me what is not working</Link>
      </section>
    </main>
  );
}
