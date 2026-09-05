import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">CONTACT</p>
      <h1>Let&apos;s talk about your project.</h1>
      <p className="lede page-lede">
        Tell me a little about your business, what you would like to build or improve, and any timeline you have in mind.
      </p>

      <section
        className="contact-layout"
        aria-label="Contact PawCircle LLC"
        style={{ gridTemplateColumns: "1fr", maxWidth: "860px" }}
      >
        <div className="contact-form-card">
          <p className="eyebrow">PROJECT INQUIRY</p>
          <h2>Send a message.</h2>
          <p className="contact-form-intro">
            Your inquiry is sent directly to PawCircle LLC. I&apos;ll reply to the email address you provide below.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
