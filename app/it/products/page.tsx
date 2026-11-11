import type { Metadata } from "next";
import { IT_PRODUCTS } from "../it-data";
import { CtaBand, ProductCard } from "../ItBits";

export const metadata: Metadata = {
  title: "Software Products",
  description: "Store & inventory, HRMS, library, laboratory, nursing home, school & college ERP and printing press management software from Chetana Publication IT Services.",
  alternates: { canonical: "/it/products" },
};

export default function ProductsPage() {
  const categories = Array.from(new Set(IT_PRODUCTS.map((p) => p.category)));
  return (
    <div className="it-wrap">
      <section className="it-hero">
        <span className="it-eyebrow">Products</span>
        <h1 className="it-h1" style={{ marginTop: 14 }}>
          Management software <span className="dim">built for real institutions.</span>
        </h1>
        <p className="it-lead">
          Pick a product — we configure it to your workflow, deploy it, train your staff and support it.
        </p>
      </section>
      {categories.map((c) => (
        <section className="it-section" key={c} style={{ paddingTop: 56 }}>
          <span className="it-eyebrow">{c}</span>
          <div className="it-grid">
            {IT_PRODUCTS.filter((p) => p.category === c).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </section>
      ))}
      <CtaBand title="Need something that isn't listed?" />
    </div>
  );
}
