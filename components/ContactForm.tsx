"use client";

import { FormEvent, useState } from "react";

const BUSINESS_EMAIL = "pawcirclellc@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const business = String(form.get("business") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(`PawCircle LLC project inquiry${business ? ` — ${business}` : ""}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        business ? `Business: ${business}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    setStatus("Opening your email app with the message ready to send.");
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label>
        Business name <span className="optional">(optional)</span>
        <input name="business" type="text" autoComplete="organization" />
      </label>

      <label>
        Project details
        <textarea name="message" rows={7} required />
      </label>

      <button className="button button-dark" type="submit">Prepare email</button>
      <p className="form-note">This opens your email app with your message filled in and ready to send.</p>
      {status ? <p className="form-status" role="status">{status}</p> : null}
    </form>
  );
}
