import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

const principles = [
  {
    number: "01",
    title: "Understand the business first",
    body: "The website or technology should fit the way the business actually works — not force the business to fit the tool.",
  },
  {
    number: "02",
    title: "Keep the technical part understandable",
    body: "Clients should know what is being built, why it matters, and what they need to know to use it confidently.",
  },
  {
    number: "03",
    title: "Build what is useful",
    body: "No unnecessary features, rebuilds, or complexity. The goal is a solution that earns its place in the business.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="shell page-shell">
      <section style={{ maxWidth: "980px" }}>
        <p className="eyebrow">ABOUT PAWCIRCLE LLC</p>
        <h1>Technology built with small businesses in mind.</h1>
        <p className="lede page-lede">
          PawCircle LLC is a Rochester, Minnesota web and technology business founded by Rebecca Aaland. I build professional websites, improve existing sites, and help independent service businesses solve practical technology problems without adding unnecessary complexity.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(280px, .75fr)",
          gap: "24px",
          marginTop: "72px",
          alignItems: "stretch",
        }}
      >
        <article className="detail-card" style={{ padding: "42px" }}>
          <p className="eyebrow">THE STORY</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.3rem)", marginTop: "18px" }}>
            PawCircle grew out of real small-business experience.
          </h2>
          <p>
            I originally started PawCircle as a local pet-care business. Running it gave me a close-up view of what small service businesses deal with every day: serving clients, managing schedules, maintaining a professional online presence, and trying to make technology useful without letting it take over the work.
          </p>
          <p>
            At the same time, I moved deeper into frontend development and began building websites and software of my own. That combination — operating a service business and building technology — became the foundation for what PawCircle LLC is today.
          </p>
        </article>

        <aside
          style={{
            background: "linear-gradient(155deg, #0b1020, #111c32 70%, #17327b)",
            color: "white",
            borderRadius: "18px",
            padding: "42px",
            boxShadow: "0 24px 70px rgba(18, 27, 45, .18)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p className="eyebrow" style={{ color: "var(--cyan)" }}>WHO&apos;S BEHIND IT</p>
            <h2 style={{ fontSize: "2.15rem", lineHeight: 1.05, letterSpacing: "-.04em", margin: "18px 0" }}>
              Rebecca Aaland
            </h2>
            <p style={{ color: "#c6d0e2", fontSize: "1.05rem" }}>
              Developer, small-business owner, and former educator with 18 years of teaching experience.
            </p>
          </div>
          <p style={{ color: "#9eabc0", marginBottom: 0 }}>
            Teaching shaped how I work with technology: break complicated things into clear pieces, explain the why, and never assume someone else&apos;s “simple” is the same as mine.
          </p>
        </aside>
      </section>

      <section className="section" style={{ paddingBottom: "70px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW I WORK</p>
            <h2>Clear thinking before more technology.</h2>
          </div>
          <p>
            The best solution is not always the biggest one. I start with what the business actually needs and build from there.
          </p>
        </div>

        <div className="card-grid">
          {principles.map((principle) => (
            <article className="service-card" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" style={{ marginTop: "20px" }}>
        <p className="eyebrow">WORK WITH PAWCIRCLE</p>
        <h2>Need a website or technology help for your business?</h2>
        <p>Tell me what you&apos;re working on and we can figure out a useful next step.</p>
        <Link className="button button-dark" href="/contact">Start a conversation</Link>
      </section>
    </main>
  );
}
