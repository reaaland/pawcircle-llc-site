import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">CONTACT</p>
      <h1>Have a project in mind?</h1>
      <p className="lede page-lede">
        Need a new website, updates to an existing site, ongoing maintenance, or help with a small-business technology project? Send a few details and we can start there.
      </p>

      <section className="contact-layout" aria-label="Contact PawCircle LLC">
        <div className="contact-card contact-info-card">
          <div>
            <p className="eyebrow">PROJECT TYPES</p>
            <h2>Websites, improvements, and practical tech help.</h2>
            <p>
              New websites · redesigns and updates · maintenance · forms and integrations · SEO, performance, and accessibility · small-business technology support
            </p>
          </div>
          <div>
            <p className="eyebrow">EMAIL</p>
            <h2>Prefer to email directly?</h2>
            <p>
              Reach me at <a className="text-link" href="mailto:pawcirclellc@gmail.com">pawcirclellc@gmail.com</a>.
            </p>
          </div>
        </div>

        <div className="contact-form-card">
          <p className="eyebrow">PROJECT INQUIRY</p>
          <h2>Tell me about your project.</h2>
          <p className="contact-form-intro">
            Share a little about your business and what you would like to build, update, or improve.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
