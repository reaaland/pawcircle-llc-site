import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">ABOUT PAWCIRCLE LLC</p>
      <h1>A technology business shaped by actually running a service business.</h1>
      <div className="prose-grid">
        <div>
          <p>PawCircle began in pet care. Running a local service business meant managing clients, schedules, travel, payments, changing needs, and the everyday friction that comes with tools that were not built for how small operators actually work.</p>
          <p>That experience led to building software, websites, and better workflows — first for PawCircle, then for other service businesses.</p>
        </div>
        <div>
          <p>Today, PawCircle LLC focuses on professional small-business websites, ongoing website care, focused improvements, and practical technology help for independent service businesses.</p>
          <p>The goal is not to make technology feel impressive. The goal is to make it useful, understandable, and easier to live with.</p>
        </div>
      </div>
    </main>
  );
}
