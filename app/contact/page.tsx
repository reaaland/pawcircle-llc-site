import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Project Estimate",
  description:
    "Request a written website estimate from PawCircle LLC. Share your project, budget, and timing by email — no phone call required to get started.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">PROJECT INQUIRY</p>
      <h1>Tell me what you need, and I&apos;ll start with a written response.</h1>
      <p className="lede page-lede">
        No phone call is required to get started. Share the basics about your business, what you want to build or improve, your budget range, and your timing. I&apos;ll review it and respond by email with questions or a next step.
      </p>
      <p style={{ marginTop: "22px" }}>
        Not sure what your budget should be? <Link className="text-link" href="/pricing"><strong>See starting prices first →</strong></Link>
      </p>

      <section
        aria-label="Contact PawCircle LLC"
        style={{ maxWidth: "860px", marginTop: "56px" }}
      >
        <div className="contact-form-card">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
