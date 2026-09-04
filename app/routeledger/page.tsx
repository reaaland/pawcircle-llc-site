import type { Metadata } from "next";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = { title: siteConfig.product.workingName };

export default function RouteLedgerPage() {
  return (
    <main className="shell page-shell">
      <p className="eyebrow">PAWCIRCLE PRODUCT · IN DEVELOPMENT</p>
      <h1>{siteConfig.product.workingName}</h1>
      <p className="lede page-lede">Track the work, the miles, and the money without turning your business into an accounting project.</p>
      {siteConfig.product.isWorkingTitle ? (
        <p className="lede-small">
          RouteLedger is the current working title while PawCircle evaluates a more distinctive final product name that reflects the broader product beyond mileage.
        </p>
      ) : null}

      <section className="route-flow" aria-label="RouteLedger product flow">
        <div><span>1</span><strong>Calendar appointment</strong><p>Start with work you already scheduled.</p></div>
        <div><span>2</span><strong>Mileage + expected income</strong><p>Build useful records from the appointment instead of entering everything again.</p></div>
        <div><span>3</span><strong>Quick review</strong><p>Confirm what happened and fix exceptions.</p></div>
        <div><span>4</span><strong>Simple records</strong><p>Keep useful mileage, income, expense, and invoice information together.</p></div>
      </section>

      <div className="detail-grid">
        <article className="detail-card"><h2>Current V1</h2><p>Google Calendar → workday routes → mileage calculation → human review → duplicate prevention → mileage record.</p></article>
        <article className="detail-card"><h2>Next direction</h2><p>Client and service rates tied to calendar appointments so the product can propose expected income before you approve it.</p></article>
        <article className="detail-card"><h2>Later</h2><p>Simple expense entry, clean business summaries, and lightweight invoicing. Bank integrations remain optional rather than foundational.</p></article>
        <article className="detail-card"><h2>Design rule</h2><p>No accounting jargon, no endless setup, no audit-like daily experience, and no bombardment of upgrade prompts.</p></article>
      </div>
    </main>
  );
}
