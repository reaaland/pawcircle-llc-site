import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">CONTACT</p>
      <h1>Let&apos;s talk about your project.</h1>
      <p className="lede page-lede">
        Tell me a little about your business, what you would like to build or improve, and any timeline you have in mind.
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
