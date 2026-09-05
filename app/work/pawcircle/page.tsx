import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PawCircle Membership Case Study",
  alternates: { canonical: "/work/pawcircle" },
};

const highlights = [
  ["01", "Product planning", "Defined the membership experience, user roles, account flows, and launch requirements."],
  ["02", "Frontend development", "Built the responsive React experience and the member-facing application flows."],
  ["03", "Data & authentication", "Used Supabase/PostgreSQL for profiles, authentication, account data, and application state."],
  ["04", "Payments & launch", "Integrated Stripe payments, deployed the product, and handled production launch troubleshooting."],
] as const;

export default function PawCircleCaseStudyPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "54px" }}>
        <p className="eyebrow">CASE STUDY · PAWCIRCLE MEMBERSHIP</p>
        <h1>From business idea to a production membership application.</h1>
        <p className="lede page-lede">
          PawCircle Membership was designed and built as a real production product, combining frontend development, authentication, database work, payments, user profiles, and deployment.
        </p>
        <div className="actions">
          <a className="button button-dark" href="https://www.pawcirclemembership.com" target="_blank" rel="noreferrer">
            View live project
          </a>
          <Link className="button button-light" href="/work">Back to selected work</Link>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: "54px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE BUILD</p>
            <h2>A full product, not just a static website.</h2>
          </div>
          <p>
            The project required product thinking, technical implementation, launch decisions, and learning how each part of the system affected the others.
          </p>
        </div>

        <div className="route-flow">
          {highlights.map(([number, title, description]) => (
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
            <p className="eyebrow">WHY IT MATTERS</p>
            <h2>Built around a real operating problem.</h2>
            <p className="lede-small">
              The project reflects how I approach client work today: understand the business need first, then build the solution around that need instead of adding complexity for its own sake.
            </p>
          </div>
          <div className="quote-card">
            <p>
              React · Supabase/PostgreSQL · Stripe · authentication · role-based profiles · privacy controls · payment workflows · Vercel deployment
            </p>
          </div>
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
