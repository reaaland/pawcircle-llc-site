import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Work" };

const minnLawnHighlights = [
  ["01", "Responsive rebuild", "A clearer, modern site structure designed around real customer questions and mobile use."],
  ["02", "Seasonal automation", "An In Service Now section that rotates seasonal offerings automatically by calendar month."],
  ["03", "Lead flow", "Quote functionality, gallery presentation, calls to action, and service content built to turn visits into inquiries."],
  ["04", "Search & performance", "SEO/schema work, indexing support, performance tuning, and near-perfect post-launch site-health scores."],
] as const;

export default function WorkPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "46px" }}>
        <p className="eyebrow">WORK</p>
        <h1>Real projects, real constraints, useful outcomes.</h1>
        <p className="lede page-lede">
          Selected client and software work showing practical problem solving, responsive development, and attention to the details small businesses depend on.
        </p>
      </section>

      <section className="section shell" style={{ paddingTop: "46px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">CASE STUDY · MINNLAWN LAWN & LANDSCAPE</p>
            <h2>Turning an outdated website into a working business asset.</h2>
          </div>
          <p>
            Minnlawn came in with decent website traffic but weak lead generation, limited search visibility, and a site that no longer reflected the business.
          </p>
        </div>

        <div className="route-flow">
          {minnLawnHighlights.map(([number, title, description]) => (
            <div key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">CLIENT FEEDBACK</p>
            <h2>“The site is now a powerful asset for my business.”</h2>
            <p className="lede-small">
              The finished site combined custom design, seasonal functionality, a stronger quote path, SEO and schema work, performance tuning, and a guided domain-and-host transition.
            </p>
          </div>
          <blockquote className="quote-card">
            <p>
              “My website was in desperate need of a complete overhaul. It was plain, disjointed, and actively costing me potential clients. Rebecca stepped in as an absolute superhero and completely transformed my online presence into something far better than I could have imagined on my own.”
            </p>
            <p>
              “She was remarkably attentive to my goals, especially when building out the site&apos;s functionality, like creating a dynamic ‘In Service Now’ section that automatically rotates seasonal offerings based on the calendar month.”
            </p>
            <p>
              “When it came time to launch, she provided clear, step-by-step instructions for the domain and host transition. Her guidance made the entire process quick, stress-free, and seamless.”
            </p>
            <span>— Yohan, Minnlawn Lawn & Landscape</span>
          </blockquote>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SOFTWARE DEVELOPMENT</p>
            <h2>PawCircle Membership</h2>
          </div>
          <p>
            A production membership application built with React, Supabase/PostgreSQL, Stripe, authentication, role-based profiles, privacy controls, and payment workflows.
          </p>
        </div>

        <div className="project-grid">
          <a
            className="project-card"
            href="https://www.pawcirclemembership.com"
            target="_blank"
            rel="noreferrer"
            aria-label="View the PawCircle Membership live project"
          >
            <span>FULL-STACK PRODUCT</span>
            <h3>From idea to production</h3>
            <p>
              Product planning, frontend development, authentication, payments, profile systems, database work, deployment, and launch troubleshooting.
            </p>
            <strong style={{ marginTop: "24px" }}>View live project →</strong>
          </a>
          <a
            className="project-card"
            href="https://rebeccaaaland.com/work/pawcircle"
            target="_blank"
            rel="noreferrer"
            aria-label="Read the PawCircle Membership case study"
          >
            <span>CASE STUDY</span>
            <h3>How the product was built</h3>
            <p>
              See the development story, technical decisions, and lessons behind taking PawCircle Membership from concept through production.
            </p>
            <strong style={{ marginTop: "24px" }}>Read the case study →</strong>
          </a>
        </div>
      </section>

      <section className="cta shell">
        <p className="eyebrow">START A PROJECT</p>
        <h2>Have an idea for a project?</h2>
        <p>Tell me what you want to build, update, or improve and we can talk through the possibilities.</p>
        <Link className="button button-dark" href="/contact">Start a conversation</Link>
      </section>
    </main>
  );
}
