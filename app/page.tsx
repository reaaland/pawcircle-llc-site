import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  {
    number: "01",
    title: "Small-business websites",
    body: "Professional websites built around what customers need to know, what they need to trust, and what you want them to do next.",
  },
  {
    number: "02",
    title: "Website care & improvements",
    body: "Updates, maintenance, forms, search basics, accessibility, performance, and focused improvements without rebuilding more than necessary.",
  },
  {
    number: "03",
    title: "Help with online business tools",
    body: "Forms, Google tools, simple automations, and help connecting the online systems you already use so they work better together.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">ROCHESTER, MINNESOTA · WEB DESIGN & ONLINE TOOLS</p>
          <h1>Websites built around how your business actually works.</h1>
          <p className="lede">
            I design and build websites, improve existing sites, and help with the online tools behind them for independent service businesses in Minnesota and beyond. Clear pricing, a collaborative process, and no unnecessary technical jargon.
          </p>
          <div className="actions">
            <Link className="button button-dark" href="/pricing">See starting prices</Link>
            <Link className="button button-light" href="/work">See selected work</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="PawCircle LLC focus areas">
          <p className="panel-label">Built around your business</p>
          <div className="panel-row"><span>Build</span><strong>Clear websites that work well on phones and computers</strong></div>
          <div className="panel-row"><span>Improve</span><strong>Focused updates when your current site can still do the job</strong></div>
          <div className="panel-row"><span>Support</span><strong>Help with forms, Google tools, and online workflows</strong></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT PAWCIRCLE DOES</p>
            <h2>Websites and online tools built around the way your business works.</h2>
          </div>
          <p>
            That can mean a new website, a better version of the one you already have, easier contact or quote forms, help with Google tools, or simple automation.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading" style={{ marginBottom: "36px" }}>
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Work built around real business needs.</h2>
          </div>
          <p>See examples of how I approach a client website and a larger software project.</p>
        </div>
        <div className="project-grid">
          <Link className="project-card" href="/work/minnlawn" aria-label="Read the Minnlawn Lawn & Landscape case study">
            <span>CLIENT WEBSITE · CASE STUDY</span>
            <h3>Minnlawn Lawn & Landscape</h3>
            <p>A custom rebuild that moved beyond the limits of a GoDaddy template, with clearer service paths, seasonal content, quote functionality, Google integration, search work, performance testing, and launch support.</p>
            <p><em>“The site is now a powerful asset for my business.” — Yohan, Minnlawn Lawn & Landscape</em></p>
            <strong style={{ marginTop: "24px" }}>View Minnlawn case study →</strong>
          </Link>
          <Link className="project-card" href="/work/pawcircle" aria-label="Read the PawCircle Membership case study">
            <span>SOFTWARE DEVELOPMENT · CASE STUDY</span>
            <h3>PawCircle Membership</h3>
            <p>A production membership application built with React, Supabase, Stripe, authentication, role-based profiles, and payment workflows.</p>
            <strong style={{ marginTop: "24px" }}>View PawCircle case study →</strong>
          </Link>
        </div>
      </section>

      <section className="cta shell">
        <p className="eyebrow">START WITH THE DETAILS</p>
        <h2>Want to know whether your project fits your budget before we talk?</h2>
        <p>See the starting prices, then send the project details when you are ready. No phone call is required to get started.</p>
        <div className="actions">
          <Link className="button button-dark" href="/pricing">See pricing</Link>
          <Link className="button button-light" href="/contact">Request a written estimate</Link>
        </div>
      </section>
    </main>
  );
}
