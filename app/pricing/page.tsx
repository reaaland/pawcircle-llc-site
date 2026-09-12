import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Pricing",
  description:
    "Starting prices for PawCircle LLC websites, website improvements, ongoing care, and custom online business help.",
  alternates: { canonical: "/pricing" },
};

const mosLiveScreenshot =
  "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmosmajerus.com?w=1600";

const pricingCategories = [
  {
    title: "New websites",
    text: "Starting-price tiers for new business websites, from simple sites to custom builds.",
    href: "#new-websites",
  },
  {
    title: "Existing website help",
    text: "Refreshes, focused updates, and rebuild options for a site you already have.",
    href: "#existing-websites",
  },
  {
    title: "Website care",
    text: "Ongoing help with routine changes, checks, questions, and small improvements.",
    href: "#website-care",
  },
  {
    title: "Custom online help",
    text: "Forms, Google tools, simple automation, and other work quoted by scope.",
    href: "#custom-help",
  },
] as const;

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
    example: {
      badge: "SAMPLE CONCEPT",
      title: "Willow Wellness Center",
      text: "A light, polished wellness-center concept showing how a smaller website can still feel custom, thoughtful, and professional.",
      note: "Concept example created to show the design and scope of this package. Not a client project.",
      image: "/willow-wellness-sample.svg",
      imageAlt: "Willow Wellness Center sample website concept in a light cream, sage, and dusty-blue design",
      href: null,
    },
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
    example: {
      badge: "CLIENT EXAMPLE",
      title: "Majerus Outdoor Services",
      text: "A responsive multi-page website for an owner-operated Rochester-area concrete and outdoor-services business, with clear service paths, project proof, and an easier contact and quote experience.",
      note: "Real client project. The difference from the Simple tier is the amount of content, planning, and custom organization—not the level of care or professionalism.",
      image: mosLiveScreenshot,
      imageAlt: "Live screenshot of the Majerus Outdoor Services website homepage",
      href: "/work/mos",
    },
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
    example: {
      badge: "CLIENT EXAMPLE",
      title: "Minnlawn Lawn & Landscape",
      text: "A custom rebuild with seasonal automation, quote functionality, Google review integration, deeper SEO and search setup, performance work, and domain and hosting transition support.",
      note: "Real client project. The higher price reflects the extra features, integrations, testing, search work, and launch support behind the finished site.",
      image: "/minnlawn-project-preview.svg",
      imageAlt: "Minnlawn Lawn and Landscape custom website project preview in green, charcoal, and white",
      href: "/work/minnlawn",
    },
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
    text: "For an existing site where the current platform, template, layout, or structure is getting in the way of what the business needs.",
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
      <section className="shell page-shell" style={{ paddingBottom: "34px" }}>
        <p className="eyebrow">PRICING</p>
        <h1>Clear starting prices before you reach out.</h1>
        <p className="lede page-lede">
          I want you to have a realistic idea of cost before we spend time discussing a project. These are starting prices, so the final price depends on what your project actually needs. Once I understand the scope, I will give you a written price before work begins.
        </p>
      </section>

      <nav className="shell pricing-category-nav" aria-label="Pricing categories">
        <div className="pricing-category-heading">
          <p className="eyebrow">PRICING BY SERVICE</p>
          <h2>Choose what you need.</h2>
          <p>Jump straight to the kind of help you are looking for.</p>
        </div>
        <div className="pricing-category-grid">
          {pricingCategories.map((category) => (
            <a className="pricing-category-card" href={category.href} key={category.title}>
              <strong>{category.title}</strong>
              <span>{category.text}</span>
              <b aria-hidden="true">↓</b>
            </a>
          ))}
        </div>
      </nav>

      <section id="new-websites" className="section shell pricing-section pricing-anchor" style={{ paddingTop: "42px" }}>
        <div className="section-heading">
          <div>
            <p className="eyebrow">NEW WEBSITES</p>
            <h2>Choose the level that looks closest to what you need.</h2>
          </div>
          <p>
            Every tier is designed to look professional and work well. The difference is scope: how much content, planning, custom functionality, search work, and launch support the project needs.
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

              <div className="pricing-tier-example">
                <img src={plan.example.image} alt={plan.example.imageAlt} loading="lazy" />
                <div className="pricing-tier-example-copy">
                  <p className="pricing-example-badge">{plan.example.badge}</p>
                  <h3>{plan.example.title}</h3>
                  <p>{plan.example.text}</p>
                  <p className="pricing-example-note">{plan.example.note}</p>
                  {plan.example.href ? (
                    <Link className="pricing-example-link" href={plan.example.href}>
                      See this example →
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">SCOPE, NOT QUALITY</p>
            <h2>MOS and Minnlawn show why two professional sites can belong in different tiers.</h2>
            <p className="lede-small">
              Majerus Outdoor Services is a good Small Business Website example: a polished multi-page site with custom visual direction, clearer service organization, project proof, responsive layouts, a strong contact path, and foundational search setup.
            </p>
            <p className="lede-small">
              Minnlawn moves into the Custom Business Website tier because the project added more advanced layers behind the design: seasonal automation, quote functionality, Google review integration and Google Cloud/API setup, deeper SEO and schema work, performance testing, and domain and hosting transition support.
            </p>
            <p className="lede-small">
              Both are professional client websites. The higher tier is not a better-looking website by definition; it simply includes more planning, functionality, integrations, testing, and technical setup.
            </p>
            <div className="actions">
              <Link className="button button-light" href="/work/mos">See the MOS case study</Link>
              <Link className="button button-light" href="/work/minnlawn">See the Minnlawn case study</Link>
            </div>
          </div>
          <div className="quote-card pricing-example-card">
            <p className="eyebrow">PROFESSIONAL AT EVERY LEVEL</p>
            <h3>Smaller scope should never mean lower standards.</h3>
            <p>
              A Simple Website can still be thoughtful, responsive, polished, and built around the business. As the scope grows, the price reflects the additional pages, decisions, features, integrations, search work, testing, and launch support—not a change in how seriously I take the project.
            </p>
          </div>
        </div>
      </section>

      <section id="existing-websites" className="section shell pricing-anchor">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ALREADY HAVE A WEBSITE?</p>
            <h2>You may only need improvements — not a full rebuild.</h2>
          </div>
          <p>
            I will look at what you already have before recommending the bigger option. Sometimes a focused refresh is enough. Other times the current website platform or template limits what can realistically be changed.
          </p>
        </div>

        <div className="detail-grid pricing-existing-grid">
          {existingSiteOptions.map((option) => (
            <article
              className="detail-card"
              key={option.title}
              id={option.title === "Website Care" ? "website-care" : undefined}
            >
              <p className="pricing-label">STARTING AT</p>
              <h2>{option.title}</h2>
              <p className="pricing-inline-price">{option.price}</p>
              <p>{option.text}</p>
            </article>
          ))}
        </div>

        <aside className="template-note">
          <p className="eyebrow">IF YOUR CURRENT SITE USES A WEBSITE PLATFORM</p>
          <h2>Some website platforms limit what can be changed.</h2>
          <p>
            Services like GoDaddy, Wix, and Squarespace can limit how much the design, features, SEO, or integrations can be changed. I can improve a site within those limits, but bigger changes may require rebuilding the site in a way that gives me more control over the design and features.
          </p>
          <p>
            If your current platform restricts the changes you want, I will explain what can realistically be improved before recommending a rebuild.
          </p>
        </aside>
      </section>

      <section id="custom-help" className="section shell pricing-anchor" style={{ paddingTop: "20px" }}>
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
