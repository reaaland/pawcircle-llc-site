import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Services & Support",
  description:
    "Website design, website improvements, SEO basics, ongoing care, and online business help from PawCircle LLC in Rochester, Minnesota.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">SERVICES</p>
      <h1>Website help that fits what your business actually needs.</h1>
      <p className="lede page-lede">
        Whether you need a new website, a better version of the one you already have, or ongoing help after launch, I focus on useful improvements without adding complexity just for the sake of it.
      </p>

      <div className="detail-grid">
        <article className="detail-card">
          <h2>New websites</h2>
          <p>Small-business websites with clear services, strong calls to action, contact or quote forms, real photos, and layouts that work well on phones, tablets, and computers.</p>
        </article>
        <article className="detail-card">
          <h2>Improve an existing website</h2>
          <p>Focused improvements to mobile layout, navigation, forms, content organization, speed, accessibility, galleries, or the overall look and feel. If your current website can still do the job, I will not recommend rebuilding it just because I can.</p>
        </article>
        <article className="detail-card">
          <h2>SEO, Google & launch setup</h2>
          <p>Page titles and descriptions, sitemap setup, Google indexing help, behind-the-scenes search information when useful, and final checks before launch. Larger projects can also include Google tools or integrations when the business needs them.</p>
        </article>
        <article className="detail-card">
          <h2>Ongoing website care</h2>
          <p>Monthly help with content changes, form and link checks, routine updates, small improvements, and questions after launch without constant sales pressure.</p>
        </article>
      </div>

      <section className="inline-cta">
        <h2>Want to know the likely cost first?</h2>
        <p>You can see starting prices before you send an inquiry. If you are not sure which category fits, describe the business problem and I can help sort that out by email.</p>
        <div className="actions">
          <Link className="button button-dark" href="/pricing">See starting prices</Link>
          <Link className="button button-light" href="/contact">Request a written estimate</Link>
        </div>
      </section>
    </main>
  );
}
