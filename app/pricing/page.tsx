import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Pricing",
  description:
    "Starting prices for PawCircle LLC websites, website improvements, ongoing care, and custom online business help.",
  alternates: { canonical: "/pricing" },
};

const websitePlans = [
  {
    label: "SIMPLE WEBSITE",
    title: "Simple Website",
    price: "$1,500",
    summary:
      "For a business that needs a clean, professional website without a large custom build.",
    details: [
      "A smaller site with the core pages customers need",
      "Mobile-friendly design",
      "Basic search setup",
      "Contact form",
      "Launch support",
    ],
  },
  {
    label: "SMALL BUSINESS WEBSITE",
    title: "Small Business Website",
    price: "$2,500",
    summary:
      "For a business that needs a fuller website with clearer services, stronger organization, and a more polished customer experience.",
    details: [
      "Custom multi-page design",
      "Visual website concepts before development begins",
      "Clearer service and customer paths",
      "Contact or quote form",
      "Foundational SEO and launch setup",
    ],
  },
  {
    label: "CUSTOM BUSINESS WEBSITE",
    title: "Custom Business Website",
    price: "$4,500",
    summary:
      "For a business that needs a larger build with custom features, integrations, deeper search work, or more involved setup.",
    details: [
      "Custom multi-page design and development",
      "Visual website concepts before development begins",
      "Custom forms, features, or integrations",
      "More detailed SEO, performance, or Google setup",
      "More involved launch and transition support",
    ],
  },
] as const;

const existingSiteOptions = [
  {
    title: "Website Refresh",
    price: "$750",
    text: "For a site that already has a solid foundation but needs clearer content, design cleanup, better mobile layouts, stronger calls to action, or other focused improvements.",
  },
  {
    title: "Small Website Updates",
    price: "$150",
    text: "For a clearly defined change such as updating text or photos, adding a service, fixing links, or making another small improvement.",
  },
  {
    title: "Website Care",
    price: "$99/month",
    text: "For businesses that want ongoing help with content changes, routine checks, small improvements, and questions after launch. Larger changes are quoted separately.",
  },
  {
    title: "Full Website Rebuild",
    price: "Uses the website tiers above",
    text: "For an existing site where the current builder, template, layout, or structure is getting in the way of what the business needs.",
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Start with your business",
    text: "I learn what you do, what your customers need, and what you want the website to help you accomplish.",
  },
  {
    number: "02",
    title: "See ideas before the build",
    text: "Small Business and Custom projects include visual website concepts so you can compare directions before development begins.",
  },
  {
    number: "03",
    title: "Review at key stages",
    text: "You will review the important decisions and give feedback at defined checkpoints while I handle the design, development, and technical details.",
  },
  {
    number: "04",
    title: "Know what is included",
    text: "We agree on the scope, price, and payment schedule before work begins. If a new request changes the cost or timeline, I will tell you before doing the extra work.",
  },
  {
    number: "05",
    title: "Bring the business pieces",
    text: "You provide the business information, logo, photos, and service details you already have. If a project needs significant writing, photo sourcing, or content cleanup, we will include that in the scope.",
  },
  {
    number: "06",
    title: "Plan the timeline together",
    text: "The timeline depends on the size of the project and how quickly content and feedback are available. We will agree on a realistic schedule before the build starts.",
  },
  {
    number: "07",
    title: "Launch with support",
    text: "I handle the website launch work we agreed on and make sure you know what happens next. Ongoing changes can move into Website Care or be quoted separately.",
  },
  {
    number: "08",
    title: "Keep costs clear",
    text: "Domains, hosting, paid plugins, or other third-party services are separate unless your quote says they are included. I will explain those costs before you need to pay for them.",
  },
] as const;

export default function PricingPage() {
  return (
    <main>
      <section className="shell page-shell" style={{ paddingBottom: "58px" }}>
        <p className="eyebrow">PRICING</p>
        <h1>Clear starting prices before you reach out.</h1>
        <p className="lede page-lede">
          I want you to have a realistic idea of cost before we spend time discussing a project. These are starting prices, so the final price depends on what your project actually needs. Once I understand the scope, I will give you a written price before work begins.
        </p>
      </section>

      <section className="section shell pricing-section" style={{ paddingTop: "30px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">NEW WEBSITES</p>
            <h2>Choose the level that looks closest to what you need.</h2>
          </div>
          <p>
            A simple informational site takes less time than a site with custom forms, Google tools, automation, deeper SEO work, or special features. The price grows with the amount of planning and work involved.
          </p>
        </div>

        <div className="pricing-grid">
          {websitePlans.map((plan) => (
            <article className="pricing-card" key={plan.title}>
              <p className="pricing-label">{plan.label}</p>
              <h2>{plan.title}</h2>
              <p className="pricing-price">Starting at <strong>{plan.price}</strong></p>
              <p>{plan.summary}</p>
              <ul>
                {plan.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">WHY SOME PROJECTS COST MORE</p>
            <h2>Minnlawn is a good example of a Custom Business Website.</h2>
            <p className="lede-small">
              Minnlawn already had a website, but the rebuild involved much more than changing the look. The project included service restructuring, seasonal content that changes automatically, quote functionality, Google review integration and Google Cloud/API setup, SEO and behind-the-scenes search setup including schema, sitemap, and robots files, performance testing, and domain and hosting transition support.
            </p>
            <p className="lede-small">
              Those extra layers of planning, setup, testing, and custom work are what move a project into the higher price range.
            </p>
            <p className="lede-small">
              As I complete more client projects, I will add examples here so you can compare different project sizes and see what moved them into each price range.
            </p>
            <div className="actions">
              <Link className="button button-light" href="/work/minnlawn">See the Minnlawn case study</Link>
            </div>
          </div>
          <div className="quote-card pricing-example-card">
            <p className="eyebrow">A SIMPLE WAY TO THINK ABOUT IT</p>
            <h3>A bigger price should come with a clear reason.</h3>
            <p>
              More pages alone do not tell the whole story. Custom features, integrations, content work, search setup, troubleshooting, and launch support can all add time to a project. I will explain what is adding to the cost before we move forward.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ALREADY HAVE A WEBSITE?</p>
            <h2>You may only need improvements — not a full rebuild.</h2>
          </div>
          <p>
            I will look at what you already have before recommending the bigger option. Sometimes a focused refresh is enough. Other times the current website builder or template limits what can realistically be changed.
          </p>
        </div>

        <div className="detail-grid pricing-existing-grid">
          {existingSiteOptions.map((option) => (
            <article className="detail-card" key={option.title}>
              <p className="pricing-label">STARTING AT</p>
              <h2>{option.title}</h2>
              <p className="pricing-inline-price">{option.price}</p>
              <p>{option.text}</p>
            </article>
          ))}
        </div>

        <aside className="template-note">
          <p className="eyebrow">WORKING WITH A TEMPLATE-BASED SITE</p>
          <h2>Some website builders simply do not allow every kind of change.</h2>
          <p>
            Some website builders limit how much the layout, features, SEO, or integrations can be changed. I can improve the site within those limits, but bigger changes may require rebuilding it in a way that gives me more control over the design and features.
          </p>
          <p>
            If your current platform restricts the changes you want, I will explain what can realistically be improved before recommending a rebuild.
          </p>
        </aside>
      </section>

      <section className="section shell" style={{ paddingTop: "20px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">CUSTOM ONLINE HELP</p>
            <h2>Forms, Google tools, simple automation, and other custom work.</h2>
          </div>
          <p>
            This work is quoted by scope because a small setup and a custom workflow can be very different amounts of work. I will tell you the expected cost before I begin.
          </p>
        </div>
      </section>

      <section className="section shell" style={{ paddingTop: "20px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT TO EXPECT WHEN WE WORK TOGETHER</p>
            <h2>A collaborative process with clear steps and boundaries.</h2>
          </div>
          <p>
            We will collaborate at key stages of the project. You will help shape the direction, and I will guide the project and handle the technical work.
          </p>
        </div>

        <div className="expectation-grid">
          {processSteps.map((step) => (
            <article className="expectation-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="pricing-note">
          <h2>One more thing: your project should stay understandable.</h2>
          <p>
            I will explain what I am doing in plain language. You do not need to learn web development, SEO, APIs, or hosting just to have a good website. When a technical decision matters to your business, I will explain why.
          </p>
          <p>
            Your business content and accounts stay yours. Any project-specific ownership details and third-party services will be written into the project scope before we begin.
          </p>
        </div>
      </section>

      <section className="cta shell">
        <p className="eyebrow">REQUEST A WRITTEN ESTIMATE</p>
        <h2>See a price range that fits what you need?</h2>
        <p>
          Tell me about the project through the form. No phone call is required to get started. I can review what you need and respond by email.
        </p>
        <Link className="button button-dark" href="/contact">Request an estimate</Link>
      </section>
    </main>
  );
}
