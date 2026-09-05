import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PawCircle LLC",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    number: "01",
    title: "Start with your goals",
    body: "What should visitors understand about your business, trust about your work, and be able to do next?",
  },
  {
    number: "02",
    title: "See ideas before the build",
    body: "For Small Business and Custom projects, I create visual website concepts so you can compare directions before development begins.",
  },
  {
    number: "03",
    title: "Build around your business",
    body: "The site should reflect how your business actually works, be easy to use on phones and computers, and give customers a clear next step.",
  },
  {
    number: "04",
    title: "Review at key stages",
    body: "You review the important decisions and give feedback at defined checkpoints while I handle the design, development, and technical details.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="shell page-shell">
      <section style={{ maxWidth: "980px" }}>
        <p className="eyebrow">ABOUT PAWCIRCLE LLC</p>
        <h1>A small web business built around practical help and clear communication.</h1>
        <p className="lede page-lede">
          PawCircle LLC is a Rochester, Minnesota web business founded by Rebecca Aaland. I build professional websites, improve existing sites, and help independent service businesses make their online tools work better without making the process harder than it needs to be.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(280px, .75fr)",
          gap: "24px",
          marginTop: "72px",
          alignItems: "start",
        }}
      >
        <article className="detail-card" style={{ padding: "42px" }}>
          <p className="eyebrow">THE STORY</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.3rem)", marginTop: "18px" }}>
            PawCircle grew out of real small-business experience.
          </h2>
          <p>
            I originally started PawCircle as a local pet-care business. Running it gave me a close-up view of what small service businesses deal with every day: serving clients, managing schedules, maintaining a professional online presence, and trying to make online tools useful without letting them take over the work.
          </p>
          <p>
            At the same time, I moved deeper into web development and began building websites and software of my own. That combination — operating a service business and building practical online tools — became the foundation for what PawCircle LLC is today.
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
            gap: "26px",
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
          <p style={{ color: "#9eabc0", margin: 0 }}>
            Teaching shaped how I approach this work: break complicated things into clear pieces, explain why something matters, and never assume someone else&apos;s “simple” is the same as mine.
          </p>
        </aside>
      </section>

      <section className="section" style={{ paddingBottom: "70px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW I WORK</p>
            <h2>What is your vision for your website?</h2>
          </div>
          <p>
            I start by understanding what you want the site to communicate, how you want customers to use it, and what success should look like for your business. We collaborate at the important decision points, without making you manage the technical work.
          </p>
        </div>

        <div className="detail-grid" style={{ marginTop: 0 }}>
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
        <h2>Want to see how the process and pricing work before you reach out?</h2>
        <p>Start with the pricing page, then send the project details when you are ready.</p>
        <div className="actions">
          <Link className="button button-dark" href="/pricing">See pricing & process</Link>
          <Link className="button button-light" href="/contact">Request a written estimate</Link>
        </div>
      </section>
    </main>
  );
}
