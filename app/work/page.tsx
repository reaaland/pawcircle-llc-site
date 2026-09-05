import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "34px" }}>
        <p className="eyebrow">WORK</p>
        <h1>Real projects, real business needs, useful outcomes.</h1>
        <p className="lede page-lede">
          Selected client and software work showing practical problem solving, responsive development, and attention to the details small businesses depend on.
        </p>
      </section>

      <section className="section shell" style={{ paddingTop: "34px", paddingBottom: "58px" }}>
        <article className="detail-card" style={{ padding: "42px" }}>
          <p className="eyebrow">CLIENT WEBSITE · MINNLAWN LAWN & LANDSCAPE</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", margin: "18px 0" }}>
            Turning an outdated website into a stronger business asset.
          </h2>
          <p className="lede-small">
            Minnlawn&apos;s rebuild included responsive design, clearer service paths, a project gallery, quote functionality, seasonal automation, SEO/schema work, performance tuning, and launch support.
          </p>
          <blockquote style={{ margin: "30px 0 0", padding: "24px 0 0", borderTop: "1px solid var(--line)" }}>
            <p style={{ fontSize: "1.28rem", lineHeight: 1.45, margin: 0 }}>
              “The site is now a powerful asset for my business, and I will definitely continue working with Rebecca to scale it as my company grows.”
            </p>
            <span style={{ display: "block", marginTop: "12px", color: "var(--muted)" }}>
              — Yohan, Minnlawn Lawn & Landscape
            </span>
          </blockquote>
          <div className="actions">
            <Link className="button button-dark" href="/work/minnlawn">Read Minnlawn case study</Link>
            <a className="button button-light" href="https://minnlawn.com" target="_blank" rel="noreferrer">
              Visit Minnlawn website
            </a>
          </div>
        </article>
      </section>

      <section className="section shell" style={{ paddingTop: "18px", paddingBottom: "70px" }}>
        <article className="detail-card" style={{ padding: "42px" }}>
          <p className="eyebrow">SOFTWARE DEVELOPMENT · PAWCIRCLE MEMBERSHIP</p>
          <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", margin: "18px 0" }}>
            From business idea to a production membership application.
          </h2>
          <p className="lede-small">
            A full-stack membership product built with React, Supabase/PostgreSQL, Stripe, authentication, role-based profiles, privacy controls, payment workflows, and Vercel deployment.
          </p>
          <div className="actions">
            <Link className="button button-dark" href="/work/pawcircle">Read PawCircle case study</Link>
            <a className="button button-light" href="https://www.pawcirclemembership.com" target="_blank" rel="noreferrer">
              View live project
            </a>
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
