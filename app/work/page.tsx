import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "34px" }}>
        <p className="eyebrow">WORK</p>
        <h1>Real projects, real business needs, useful outcomes.</h1>
        <p className="lede page-lede">
          Selected work showing how PawCircle approaches client websites and software projects from the business need through launch.
        </p>
      </section>

      <section className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">FEATURED CLIENT PROJECT · MINNLAWN</p>
            <h2>Moving beyond the limits of a template.</h2>
            <p className="lede-small">
              Minnlawn already had a functioning website, but the GoDaddy template system limited how clearly the business could present its services, seasonal work, projects, and quote process. The rebuild created a more flexible site around the way Minnlawn actually works.
            </p>
            <p className="lede-small">
              The finished site includes responsive design, clearer service paths, a project gallery, quote functionality, seasonal automation, SEO and schema work, performance tuning, and launch support.
            </p>
            <div className="actions">
              <Link className="button button-light" href="/work/minnlawn">Read the Minnlawn case study</Link>
              <a className="button button-light" href="https://minnlawn.com" target="_blank" rel="noreferrer">Visit Minnlawn website</a>
            </div>
          </div>
          <blockquote className="quote-card">
            <p>“The site is now a powerful asset for my business, and I will definitely continue working with Rebecca to scale it as my company grows.”</p>
            <span>— Yohan, Minnlawn Lawn & Landscape</span>
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
            A separate example of product development: taking a business idea through frontend development, authentication, data, payments, deployment, and launch.
          </p>
        </div>

        <article className="detail-card" style={{ padding: "42px" }}>
          <p className="eyebrow">FULL-STACK MEMBERSHIP APPLICATION</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", margin: "18px 0" }}>
            From business idea to a production application.
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
        <p className="eyebrow">START A PROJECT</p>
        <h2>Have an idea for a project?</h2>
        <p>Tell me what you want to build, update, or improve and we can talk through the possibilities.</p>
        <Link className="button button-dark" href="/contact">Start a conversation</Link>
      </section>
    </main>
  );
}
