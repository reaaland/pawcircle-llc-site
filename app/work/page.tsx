import type { Metadata } from "next";

export const metadata: Metadata = { title: "Work" };

const projects = [
  ["Minnlawn Lawn & Landscape", "Client website", "A full small-business site with responsive design, real project photography, quote functionality, SEO/schema work, gallery, seasonal messaging, performance tuning, and launch support."],
  ["Majerus Outdoor Services", "Client website", "Website strategy and concept direction for a Rochester-area concrete and outdoor-services business, designed to make a first website easy for the owner to understand and review."],
  ["PawCircle Membership", "Product", "A production membership application built with React, Supabase/PostgreSQL, Stripe, authentication, role-based profiles, privacy controls, and payment workflows."],
  ["RouteLedger", "Product in development", "A Next.js business tool that currently turns Google Calendar appointments into reviewable mileage records with duplicate prevention, with income and invoicing planned next."],
] as const;

export default function WorkPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">WORK</p>
      <h1>Real projects, real constraints, useful outcomes.</h1>
      <p className="lede page-lede">PawCircle work spans client websites and products built from practical small-business problems.</p>
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
