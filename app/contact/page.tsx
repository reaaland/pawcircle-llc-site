import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">CONTACT</p>
      <h1>Let&apos;s make your technology work better.</h1>
      <p className="lede page-lede">
        Need a new website, improvements to an existing one, or help with a frustrating workflow? Tell me what you are trying to accomplish. You do not need to know the technical solution first.
      </p>

      <section className="contact-layout" aria-label="Contact PawCircle LLC">
        <div className="contact-card contact-info-card">
          <div>
            <p className="eyebrow">WAYS I CAN HELP</p>
            <h2>What are you working on?</h2>
            <p>
              A new or outdated website · website updates and maintenance · quote or contact forms · mobile and accessibility improvements · SEO and performance · small-business technology workflows and integrations
            </p>
          </div>
          <div>
            <p className="eyebrow">PREFER EMAIL?</p>
            <h2>Send a message directly.</h2>
            <p>
              Write to <a className="text-link" href="mailto:pawcirclellc@gmail.com">pawcirclellc@gmail.com</a> and I will get back to you.
            </p>
          </div>
        </div>

        <div className="contact-form-card">
          <p className="eyebrow">START HERE</p>
          <h2>Tell me about your project.</h2>
          <p className="contact-form-intro">
            A few sentences about your business, what you need, and what is not working is plenty. I can help figure out the technical part from there.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
