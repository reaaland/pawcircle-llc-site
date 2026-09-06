import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Work & Case Studies",
  description:
    "See PawCircle LLC website and software case studies, including a custom Minnlawn rebuild and the PawCircle Membership product.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "34px" }}>
        <p className="eyebrow">WORK</p>
        <h1>A closer look at the work behind the finished site.</h1>
        <p className="lede page-lede">
          These examples show what the business needed, what changed, and why some projects involve more planning and technical work than others.
        </p>
      </section>

      <section className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">FEATURED CLIENT PROJECT · MINNLAWN</p>
            <h2>Moving beyond the limits of a template.</h2>
            <p className="lede-small">
              Minnlawn already had a functioning website, but the GoDaddy template system limited how clearly the business could present its services, seasonal work, projects, and quote process. The rebuild gave me more control over the design and features so the site could better match the way Minnlawn actually works.
            </p>
            <p className="lede-small">
              The finished site includes mobile-friendly design, clearer service paths, a project gallery, quote functionality, seasonal updates that change automatically, Google review integration, Google Cloud/API setup, SEO and search setup, performance testing, and launch support.
            </p>
            <div className="actions">
              <Link className="button button-light" href="/work/minnlawn">Read the Minnlawn case study</Link>
              <a className="button button-light" href="https://minnlawn.com" target="_blank" rel="noreferrer">Visit Minnlawn website</a>
            </div>
          </div>
          <blockquote className="quote-card">
            <p>
              “Rebecca stepped in as an absolute superhero and completely transformed my online presence into something far better than I could have imagined on my own. Every single metric improved dramatically. The site is now a powerful asset for my business.”
            </p>
            <span>— Yohan, Minnlawn Lawn & Landscape</span>
            <Link
              href="/work/minnlawn#testimonial"
              style={{ display: "block", marginTop: "24px", color: "#58c9ff", fontWeight: 800 }}
            >
              Read Yohan&apos;s full testimonial →
            </Link>
          </blockquote>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: "80px", paddingBottom: "70px" }}>
        <div className="section-heading" style={{ marginBottom: "34px" }}>
          <div>
            <p className="eyebrow">SOFTWARE PROJECT</p>
            <h2>PawCircle Membership</h2>
          </div>
          <p>
            A different kind of project: taking a business idea through design, development, accounts, data, payments, testing, and launch.
          </p>
        </div>

        <article className="detail-card" style={{ padding: "42px" }}>
          <p className="eyebrow">FULL-STACK MEMBERSHIP APPLICATION</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", margin: "18px 0" }}>
            From business idea to a working membership application.
          </h2>
          <p className="lede-small">
            Built with React, Supabase/PostgreSQL, Stripe, authentication, role-based profiles, privacy controls, payment workflows, and Vercel deployment.
          </p>
          <div className="actions">
            <Link className="button button-dark" href="/work/pawcircle">Read the PawCircle case study</Link>
            <a className="button button-light" href="https://www.pawcirclemembership.com" target="_blank" rel="noreferrer">View live project</a>
          </div>
        </article>
      </section>

      <section className="cta shell">
        <p className="eyebrow">COMPARE PROJECT SCOPE</p>
        <h2>Want to see how the amount of work affects the price?</h2>
        <p>The pricing page explains the difference between a simple site, a fuller small-business site, and a custom build like Minnlawn.</p>
        <div className="actions">
          <Link className="button button-dark" href="/pricing">See pricing</Link>
          <Link className="button button-light" href="/contact">Request a written estimate</Link>
        </div>
      </section>
    </main>
  );
}
