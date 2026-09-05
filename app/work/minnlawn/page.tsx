import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Minnlawn Case Study" };

const highlights = [
  ["01", "Responsive rebuild", "Reorganized the site around customer questions, service discovery, and mobile use."],
  ["02", "Seasonal automation", "Built an In Service Now section that rotates seasonal offerings automatically by calendar month."],
  ["03", "Lead generation", "Improved calls to action, quote flow, service content, and gallery presentation to support inquiries."],
  ["04", "SEO & performance", "Added SEO/schema work, indexing support, and performance tuning before launch."],
] as const;

export default function MinnlawnCaseStudyPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "54px" }}>
        <p className="eyebrow">CASE STUDY · MINNLAWN LAWN & LANDSCAPE</p>
        <h1>Turning an outdated website into a stronger business asset.</h1>
        <p className="lede page-lede">
          Minnlawn had traffic, but the existing site was not converting that attention into enough leads and did not reflect the quality of the business.
        </p>
        <div className="actions">
          <a className="button button-dark" href="https://minnlawn.com" target="_blank" rel="noreferrer">
            Visit Minnlawn website
          </a>
          <Link className="button button-light" href="/work">Back to selected work</Link>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: "54px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PROJECT</p>
            <h2>A complete rebuild focused on clarity, trust, and easier customer action.</h2>
          </div>
          <p>
            The work covered structure, design, responsive development, seasonal content, quote functionality, SEO, performance, and launch support.
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
            <p className="eyebrow">CLIENT FEEDBACK</p>
            <h2>“The site is now a powerful asset for my business.”</h2>
            <p className="lede-small">
              Yohan specifically highlighted the seasonal functionality, performance improvements, and the step-by-step support through the domain and host transition.
            </p>
            <div className="actions">
              <a className="button button-light" href="https://minnlawn.com" target="_blank" rel="noreferrer">
                See the finished site
              </a>
            </div>
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

      <section className="cta shell">
        <p className="eyebrow">START A PROJECT</p>
        <h2>Have an idea for your website?</h2>
        <p>Tell me what you want your site to do better and we can start there.</p>
        <Link className="button button-dark" href="/contact">Start a conversation</Link>
      </section>
    </main>
  );
}
