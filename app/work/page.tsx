import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Work & Case Studies",
  description:
    "See PawCircle LLC client website and software case studies, including Majerus Outdoor Services, Minnlawn Lawn & Landscape, and the PawCircle Membership product.",
  alternates: { canonical: "/work" },
};

const minnlawnScreenshot = "https://www.rebeccaiaaland.com/MinnLawn.png";
const pawCircleScreenshot = "https://www.rebeccaiaaland.com/pawcircle-homepage.png";
const mosLiveScreenshot =
  "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmosmajerus.com?w=1600";

export default function WorkPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "34px" }}>
        <p className="eyebrow">WORK</p>
        <h1>A closer look at the work behind the finished site.</h1>
        <p className="lede page-lede">
          These examples show what the business needed, what changed, and why some projects involve more planning and technical work than others.
        </p>
      </section>

      <section className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">FEATURED CLIENT PROJECT · MINNLAWN</p>
            <h2>Moving beyond the limits of a template.</h2>
            <p className="lede-small">
              Minnlawn already had a functioning website, but the GoDaddy template system limited how clearly the business could present its services, seasonal work, projects, and quote process. The rebuild gave me more control over the design and features so the site could better match the way Minnlawn actually works.
            </p>
            <p className="lede-small">
              The finished site includes mobile-friendly design, clearer service paths, a project gallery, quote functionality, seasonal updates that change automatically, Google review integration, Google Cloud/API setup, SEO and search setup, performance testing, and launch support.
            </p>
            <div className="actions">
              <Link className="button button-light" href="/work/minnlawn">Read the Minnlawn case study</Link>
              <a className="button button-light" href="https://minnlawn.com" target="_blank" rel="noreferrer">Visit Minnlawn website</a>
            </div>
          </div>

          <div style={{ display: "grid", gap: "18px" }}>
            <div className="detail-card" style={{ padding: "0", overflow: "hidden" }}>
              <img
                src={minnlawnScreenshot}
                alt="Minnlawn Lawn & Landscape website homepage"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
            <blockquote className="quote-card">
              <p>
                “Rebecca stepped in as an absolute superhero and completely transformed my online presence into something far better than I could have imagined on my own. Every single metric improved dramatically. The site is now a powerful asset for my business.”
              </p>
              <span>— Yohan, Minnlawn Lawn & Landscape</span>
              <Link
                href="/work/minnlawn#testimonial"
                style={{ display: "block", marginTop: "24px", color: "#58c9ff", fontWeight: 800 }}
              >
                Read Yohan&apos;s full testimonial →
              </Link>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: "80px", paddingBottom: "70px" }}>
        <div className="section-heading" style={{ marginBottom: "34px" }}>
          <div>
            <p className="eyebrow">CLIENT PROJECT · MAJERUS OUTDOOR SERVICES</p>
            <h2>A professional website for an owner-operated service business.</h2>
          </div>
          <p>
            MOS is a good example of a polished small-business website where the value comes from clear structure, custom visual direction, responsive design, project proof, and making it easy for a potential customer to understand the services and take the next step.
          </p>
        </div>

        <div className="split-grid">
          <div className="detail-card" style={{ padding: "0", overflow: "hidden" }}>
            <img
              src={mosLiveScreenshot}
              alt="Live screenshot of the Majerus Outdoor Services website homepage"
              loading="lazy"
              style={{ display: "block", width: "100%", aspectRatio: "16 / 9", objectFit: "cover", objectPosition: "top" }}
            />
            <div style={{ padding: "30px" }}>
              <p className="eyebrow">SMALL BUSINESS WEBSITE EXAMPLE</p>
              <h2 style={{ marginTop: "12px" }}>Majerus Outdoor Services</h2>
              <p>
                The site organizes concrete and outdoor services into clearer customer paths, uses a professional contractor-focused visual system, presents project work as proof, and supports a straightforward contact and estimate experience on desktop and mobile.
              </p>
              <div className="actions">
                <Link className="button button-dark" href="/work/mos">Read the MOS case study</Link>
              </div>
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

      <section className="section shell" style={{ paddingTop: "40px", paddingBottom: "70px" }}>
        <div className="section-heading" style={{ marginBottom: "34px" }}>
          <div>
            <p className="eyebrow">SOFTWARE PROJECT</p>
            <h2>PawCircle Membership</h2>
          </div>
          <p>
            A different kind of project: taking a business idea through design, development, accounts, data, payments, testing, and launch.
          </p>
        </div>

        <article className="detail-card" style={{ padding: "0", overflow: "hidden" }}>
          <img
            src={pawCircleScreenshot}
            alt="PawCircle Membership portfolio-demo homepage"
            loading="lazy"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
          <div style={{ padding: "42px" }}>
            <p className="eyebrow">FULL-STACK MEMBERSHIP APPLICATION</p>
            <h2 style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)", margin: "18px 0" }}>
              From business idea to a working membership application.
            </h2>
            <p className="lede-small">
              Built with React, Supabase/PostgreSQL, Stripe, authentication, role-based profiles, privacy controls, payment workflows, and Vercel deployment.
            </p>
            <div className="actions">
              <Link className="button button-dark" href="/work/pawcircle">Read the PawCircle case study</Link>
              <a className="button button-light" href="https://www.pawcirclemembership.com" target="_blank" rel="noreferrer">View live project</a>
            </div>
          </div>
        </article>
      </section>

      <section className="cta shell">
        <p className="eyebrow">COMPARE PROJECT SCOPE</p>
        <h2>Want to see how the amount of work affects the price?</h2>
        <p>The pricing page compares a simple sample concept with a real small-business client project like MOS and a more advanced custom build like Minnlawn.</p>
        <div className="actions">
          <Link className="button button-dark" href="/pricing">See pricing</Link>
          <Link className="button button-light" href="/contact">Request a written estimate</Link>
        </div>
      </section>
    </main>
  );
}
