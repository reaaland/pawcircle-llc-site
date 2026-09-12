import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Majerus Outdoor Services Website Case Study",
  description:
    "See how PawCircle LLC designed and built a responsive website for Majerus Outdoor Services with clearer services, project proof, a stronger contact path, and a professional local-business identity.",
  alternates: { canonical: "/work/mos" },
};

const highlights = [
  [
    "01",
    "Visual direction",
    "Explored multiple design directions, then refined the site toward a mature contractor identity built around concrete, steel-blue tones, and a restrained orange accent.",
  ],
  [
    "02",
    "Responsive multi-page build",
    "Built a website structure that stays clear and usable across desktop, tablet, and mobile screens, with navigation designed for smaller devices too.",
  ],
  [
    "03",
    "Services & project proof",
    "Organized concrete and outdoor services into clearer paths and created space for project work to do the trust-building instead of relying on generic marketing language.",
  ],
  [
    "04",
    "Contact & search foundation",
    "Made the next step easy to understand and supported the site with foundational local-search structure and launch setup appropriate to the project scope.",
  ],
] as const;

export default function MosCaseStudyPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "54px" }}>
        <p className="eyebrow">CASE STUDY · MAJERUS OUTDOOR SERVICES</p>
        <h1>Giving an owner-operated service business a clearer, more professional online presence.</h1>
        <p className="lede page-lede">
          Majerus Outdoor Services needed a website that could present concrete and outdoor services clearly, build trust quickly, and feel like a real local business rather than a generic contractor template. I worked with Jason to shape the visual direction, organize the content, and build the site around the questions potential customers are likely to have.
        </p>
        <div className="actions">
          <Link className="button button-dark" href="/pricing">See the Small Business Website tier</Link>
          <Link className="button button-light" href="/work">Back to selected work</Link>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: "54px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PROJECT</p>
            <h2>A professional site built around clarity, trust, and straightforward service.</h2>
          </div>
          <p>
            MOS is an owner-operated Rochester-area business. The website needed to make a broad service mix easier to understand without making the company feel like a large franchise. The finished direction keeps the focus on craftsmanship, direct communication, real work, and an easy path to request an estimate.
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

      <section className="section shell" style={{ paddingTop: "30px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE DESIGN DIRECTION</p>
            <h2>Different from Minnlawn by design.</h2>
          </div>
          <p>
            The project uses a stronger contractor-focused visual system with steel blue, concrete gray, white, and restrained orange accents. The goal was not to reuse a house style, but to give MOS an identity that fits the business while keeping the site practical and easy to use.
          </p>
        </div>

        <div className="detail-card" style={{ padding: "0", overflow: "hidden" }}>
          <img
            src="/mos-project-preview.svg"
            alt="Majerus Outdoor Services website project preview in steel blue, concrete gray, white, and orange"
            loading="lazy"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </div>
      </section>

      <section id="testimonial" className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">CLIENT REVIEW</p>
            <h2>“She made what seemed stressful very simple and thorough.”</h2>
            <p className="lede-small">
              Jason shared this review after working together on the MOS website. For me, that is an important part of the result: the finished site should be professional, but the process should also feel manageable to the business owner.
            </p>
            <div className="actions">
              <Link className="button button-light" href="/contact">Talk about a website</Link>
            </div>
          </div>
          <blockquote className="quote-card">
            <p>
              “Fast, professional service. Rebecca was great to work with. She made, what seemed to me, to be a stressful job, very simple and thorough. I would definitely recommend her.”
            </p>
            <span>— Jason Majerus, Majerus Outdoor Services · Google review</span>
          </blockquote>
        </div>
      </section>

      <section className="cta shell">
        <p className="eyebrow">PROJECT SCOPE & PRICING</p>
        <h2>MOS is a good example of the Small Business Website tier.</h2>
        <p>
          It shows how a fuller custom business site can have its own visual identity, multiple service paths, project proof, responsive behavior, and a professional customer experience without needing the more advanced integrations and automation found in a larger custom build.
        </p>
        <div className="actions">
          <Link className="button button-dark" href="/pricing">Compare website tiers</Link>
          <Link className="button button-light" href="/contact">Request a written estimate</Link>
        </div>
      </section>
    </main>
  );
}
