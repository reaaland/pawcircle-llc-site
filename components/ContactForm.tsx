"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          business: String(data.get("business") ?? "").trim(),
          website: String(data.get("website") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          companySite: String(data.get("companySite") ?? "").trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("The contact request could not be sent.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={status === "submitting"}>
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

      <div className="form-grid">
        <label>
          Business name <span className="optional">(optional)</span>
          <input name="business" type="text" autoComplete="organization" />
        </label>
        <label>
          Current website <span className="optional">(optional)</span>
          <input name="website" type="text" autoComplete="url" />
        </label>
      </div>

      <label>
        Project details
        <textarea
          name="message"
          rows={7}
          maxLength={5000}
          placeholder="What would you like to build, update, or improve?"
          required
        />
      </label>

      <label
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        Leave this field empty
        <input name="companySite" type="text" autoComplete="off" tabIndex={-1} />
      </label>

      {status === "success" ? (
        <p className="form-status" role="status">Thanks — your message was sent.</p>
      ) : null}

      {status === "error" ? (
        <p className="form-status" role="alert">The message could not be sent. Please try again in a moment.</p>
      ) : null}

      <button className="button button-dark" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
