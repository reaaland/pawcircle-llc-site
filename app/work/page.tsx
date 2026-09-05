import type { Metadata } from "next";

export const metadata: Metadata = { title: "Work" };

const projects = [
  ["Minnlawn Lawn & Landscape", "Client website", "A full small-business site with responsive design, real project photography, quote functionality, SEO/schema work, gallery, seasonal messaging, performance tuning, and launch support."],
  ["PawCircle Membership", "Software development", "A production membership application built with React, Supabase/PostgreSQL, Stripe, authentication, role-based profiles, privacy controls, and payment workflows."],
] as const;

export default function WorkPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">WORK</p>
      <h1>Real projects, real constraints, useful outcomes.</h1>
      <p className="lede page-lede">Selected client and software work showing practical problem solving, responsive development, and attention to the details small businesses depend on.</p>
      <div className="work-list">
        {projects.map(([title, type, description]) => (
          <article key={title} className="work-row">
            <span>{type}</span>
            <div><h2>{title}</h2><p>{description}</p></div>
          </article>
        ))}
      </div>
    </main>
  );
}
