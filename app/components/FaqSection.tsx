import { faqJsonLd, type Faq } from "../seo";
import { JsonLd } from "./Primitives";

/** Visible FAQ (answers real search questions) + matching FAQPage JSON-LD. */
export default function FaqSection({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section className="seo-faq" aria-labelledby="seo-faq-title">
      <JsonLd data={faqJsonLd(faqs)} />
      <h2 id="seo-faq-title">{title}</h2>
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}
