import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">CONTACT</p>
      <h1>Start with the problem.</h1>
      <p className="lede page-lede">
        You do not need to know the technical solution before reaching out. Describe what your business needs to do better.
      </p>

      <section className="contact-layout" aria-label="Contact PawCircle LLC">
        <div className="contact-card contact-info-card">
          <div>
            <h2>Good reasons to reach out</h2>
            <p>
              New website · outdated site · quote/contact flow · mobile problems · ongoing maintenance · a small-business technology workflow that is getting in the way
            </p>
          </div>
          <div>
            <h2>Email directly</h2>
            <p>
              Prefer your own email app? Write to <a className="text-link" href="mailto:pawcirclellc@gmail.com">pawcirclellc@gmail.com</a>.
            </p>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Tell me what is getting in the way.</h2>
          <p className="contact-form-intro">A short description is enough to start. I can help work out the technical part with you.</p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
