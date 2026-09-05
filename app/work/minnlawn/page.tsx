import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minnlawn Case Study",
  alternates: { canonical: "/work/minnlawn" },
};

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
        <h1>Moving beyond the limits of a template.</h1>
        <p className="lede page-lede">
          Minnlawn already had a functioning website and steady traffic, but the GoDaddy template system limited how clearly the business could present its services, seasonal work, projects, and quote process.
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
            <p className="eyebrow">FULL TESTIMONIAL</p>
            <h2>“The site is now a powerful asset for my business.”</h2>
            <p className="lede-small">
              Yohan shared this feedback after the redesign, performance work, SEO improvements, and launch were complete.
            </p>
            <div className="actions">
              <a className="button button-light" href="https://minnlawn.com" target="_blank" rel="noreferrer">
                See the finished site
              </a>
            </div>
          </div>
          <blockquote className="quote-card">
            <p>
              “My website was in desperate need of a complete overhaul. It was plain, disjointed, and actively costing me potential clients. While my monthly visitor metrics showed decent traffic, the actual leads coming through were minimal, and a total lack of SEO data meant my Google search rankings were taking a heavy hit.
            </p>
            <p>
              Rebecca stepped in as an absolute superhero and completely transformed my online presence into something far better than I could have imagined on my own. She was remarkably attentive to my goals, especially when building out the site&apos;s functionality, like creating a dynamic &quot;In Service Now&quot; section that automatically rotates seasonal offerings based on the calendar month.
            </p>
            <p>
              To top it off, Rebecca ran performance tests comparing my site&apos;s original metrics to the newly launched version. Every single metric improved dramatically, with performance, SEO, and overall site health scores landing near or directly at a perfect 10/10.
            </p>
            <p>
              When it came time to launch, she provided clear, step-by-step instructions for the domain and host transition. Even though the handoff required a few actions on my end, her guidance made the entire process quick, stress-free, and seamless. The site is now a powerful asset for my business, and I will definitely continue working with Rebecca to scale it as my company grows.”
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
