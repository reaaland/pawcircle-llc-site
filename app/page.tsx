import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Small-business websites",
    body: "Professional, responsive sites built around what customers need to know and what the business needs them to do next.",
  },
  {
    number: "02",
    title: "Website care & improvements",
    body: "Ongoing maintenance, content updates, forms, SEO basics, accessibility, performance, and focused improvements without needless rebuilding.",
  },
  {
    number: "03",
    title: "Practical technology help",
    body: "Help untangling forms, Google tools, website workflows, integrations, and other small-business technology problems without unnecessary complexity.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">ROCHESTER, MINNESOTA · SMALL-BUSINESS TECHNOLOGY</p>
          <h1>Practical websites and technology for independent service businesses.</h1>
          <p className="lede">
            Clear websites, useful improvements, and ongoing support built around how a small business actually works.
            No unnecessary complexity, jargon, or constant upselling.
          </p>
          <div className="actions">
            <Link className="button button-dark" href="/services">Explore services</Link>
            <Link className="button button-light" href="/work">See selected work</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="PawCircle LLC focus areas">
          <p className="panel-label">Built around real work</p>
          <div className="panel-row"><span>Web</span><strong>Clear, responsive customer experiences</strong></div>
          <div className="panel-row"><span>Care</span><strong>Maintenance and improvements that keep sites useful</strong></div>
          <div className="panel-row"><span>Support</span><strong>Practical technology help without the runaround</strong></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT PAWCIRCLE DOES</p>
            <h2>Useful technology without making your business harder to run.</h2>
          </div>
          <p>
            PawCircle LLC grew from running a real service business and building technology to solve real operating problems.
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
            <h2>Built for real businesses and real constraints.</h2>
          </div>
          <p>Choose a project to see what was built, why it mattered, and how the finished work performs.</p>
        </div>
        <div className="project-grid">
          <Link className="project-card" href="/work/minnlawn" aria-label="Read the Minnlawn Lawn & Landscape case study">
            <span>CLIENT WEBSITE · CASE STUDY</span>
            <h3>Minnlawn Lawn & Landscape</h3>
            <p>Responsive service-business website, gallery, quote flow, SEO, schema, performance tuning, and launch support.</p>
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

      <section className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">CLIENT RESULT · MINNLAWN</p>
            <h2>A website should become a business asset, not another thing to babysit.</h2>
            <p className="lede-small">
              Minnlawn&apos;s rebuild combined a clearer customer path with seasonal automation, quote functionality, SEO work, performance tuning, and launch support.
            </p>
            <div className="actions">
              <Link className="button button-light" href="/work/minnlawn">Read the case study</Link>
              <a className="button button-light" href="https://minnlawn.com" target="_blank" rel="noreferrer">Visit Minnlawn site</a>
            </div>
          </div>
          <blockquote className="quote-card">
            <p>“The site is now a powerful asset for my business, and I will definitely continue working with Rebecca to scale it as my company grows.”</p>
            <span>— Yohan, Minnlawn Lawn & Landscape</span>
          </blockquote>
        </div>
      </section>

      <section className="cta shell">
        <p className="eyebrow">START SIMPLE</p>
        <h2>Need a website, updates to an existing site, or help untangling a technology problem?</h2>
        <p>Tell me what you&apos;d like to build, update, or improve.</p>
        <Link className="button button-dark" href="/contact">Start a conversation</Link>
      </section>
    </main>
  );
}
