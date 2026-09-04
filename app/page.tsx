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
    title: "Simple business tools",
    body: "Practical software designed around real service-business workflows — starting with RouteLedger for mileage, income, expenses, and invoicing.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">ROCHESTER, MINNESOTA · SMALL-BUSINESS TECHNOLOGY</p>
          <h1>Practical technology for independent service businesses.</h1>
          <p className="lede">
            Websites that help customers find you. Business tools that make the work easier.
            No unnecessary complexity, jargon, or constant upselling.
          </p>
          <div className="actions">
            <Link className="button button-dark" href="/services">Explore services</Link>
            <Link className="button button-light" href="/routeledger">Meet RouteLedger</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="PawCircle LLC focus areas">
          <p className="panel-label">Built around real work</p>
          <div className="panel-row"><span>Web</span><strong>Clear, responsive customer experiences</strong></div>
          <div className="panel-row"><span>Tools</span><strong>Simple workflows for the back office</strong></div>
          <div className="panel-row"><span>Support</span><strong>Ongoing help without the runaround</strong></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT PAWCIRCLE DOES</p>
            <h2>Less software friction. More useful technology.</h2>
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

      <section className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">PRODUCT IN DEVELOPMENT</p>
            <h2>RouteLedger</h2>
            <p className="lede-small">
              A calm, low-friction business companion for mobile and solo service businesses — starting with calendar-connected mileage and expanding into expected income, expenses, and simple invoicing.
            </p>
            <Link className="text-link" href="/routeledger">See the product vision →</Link>
          </div>
          <div className="quote-card">
            <p>“Open it. Record the work. Get your numbers. Leave.”</p>
            <span>RouteLedger product principle</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Built for real businesses.</h2>
          </div>
          <Link className="text-link" href="/work">View work →</Link>
        </div>
        <div className="project-grid">
          <article className="project-card">
            <span>CLIENT WEBSITE</span>
            <h3>Minnlawn Lawn & Landscape</h3>
            <p>Responsive service-business website, gallery, quote flow, SEO, schema, performance tuning, and launch support.</p>
          </article>
          <article className="project-card">
            <span>CLIENT WEBSITE</span>
            <h3>Majerus Outdoor Services</h3>
            <p>Website strategy and visual direction for a Rochester concrete and outdoor-services company. Build phase pending client selection.</p>
          </article>
          <article className="project-card">
            <span>PRODUCT</span>
            <h3>RouteLedger</h3>
            <p>Calendar-connected mileage automation with review and duplicate prevention, expanding toward simple business financial tracking.</p>
          </article>
        </div>
      </section>

      <section className="cta shell">
        <p className="eyebrow">START SIMPLE</p>
        <h2>Need a website or a technology problem untangled?</h2>
        <p>Tell me what is getting in the way. We can figure out the smallest useful solution.</p>
        <Link className="button button-dark" href="/contact">Start a conversation</Link>
      </section>
    </main>
  );
}
