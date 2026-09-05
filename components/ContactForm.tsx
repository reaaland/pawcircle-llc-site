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
          projectType: String(data.get("projectType") ?? "").trim(),
          budget: String(data.get("budget") ?? "").trim(),
          timeline: String(data.get("timeline") ?? "").trim(),
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
          <input name="website" type="text" autoComplete="url" placeholder="https://" />
        </label>
      </div>

      <div className="form-grid">
        <label>
          What do you need?
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Choose the closest option</option>
            <option value="Simple website">A simple new website</option>
            <option value="Small business website">A fuller small-business website</option>
            <option value="Custom business website">A custom business website</option>
            <option value="Website refresh">Improvements to an existing website</option>
            <option value="Small website update">A small website update</option>
            <option value="Website care">Ongoing website care</option>
            <option value="Custom online help">Forms, Google tools, automation, or other online help</option>
            <option value="Not sure">I&apos;m not sure yet</option>
          </select>
        </label>

        <label>
          Approximate budget
          <select name="budget" defaultValue="" required>
            <option value="" disabled>Choose a range</option>
            <option value="Under $750">Under $750</option>
            <option value="$750–$1,499">$750–$1,499</option>
            <option value="$1,500–$2,499">$1,500–$2,499</option>
            <option value="$2,500–$4,499">$2,500–$4,499</option>
            <option value="$4,500+">$4,500+</option>
            <option value="Not sure">I&apos;m not sure yet</option>
          </select>
        </label>
      </div>

      <label>
        Timing <span className="optional">(optional)</span>
        <select name="timeline" defaultValue="">
          <option value="">Choose one if you know</option>
          <option value="As soon as practical">As soon as practical</option>
          <option value="Within 1–2 months">Within 1–2 months</option>
          <option value="Within 3–6 months">Within 3–6 months</option>
          <option value="Flexible / planning ahead">Flexible / planning ahead</option>
        </select>
      </label>

      <label>
        Project details
        <textarea
          name="message"
          rows={7}
          maxLength={5000}
          placeholder="What would you like to build, update, or improve? If something about your current website is frustrating you, tell me that too."
          required
        />
      </label>

      <p className="form-note">You do not need to know the technical terms. Describe the business problem in your own words.</p>

      <label
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        Leave this field empty
        <input name="companySite" type="text" autoComplete="off" tabIndex={-1} />
      </label>

      {status === "success" ? (
        <p className="form-status" role="status">Thanks — your project details were sent. I&apos;ll reply by email.</p>
      ) : null}

      {status === "error" ? (
        <p className="form-status" role="alert">The message could not be sent. Please try again in a moment.</p>
      ) : null}

      <button className="button button-dark" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a written estimate"}
      </button>
    </form>
  );
}
