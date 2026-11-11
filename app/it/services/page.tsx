import type { Metadata } from "next";
import { IT_SERVICES } from "../../site-config";
import { CtaBand, ServiceRow } from "../ItBits";

export const metadata: Metadata = {
  title: "IT Services",
  description: "Website & web app development, web design, mobile apps, live projects for college students, IT training and digital marketing in Sundargarh, Odisha.",
  alternates: { canonical: "/it/services" },
};

export default function ServicesPage() {
  return (
    <div className="it-wrap">
      <section className="it-hero">
        <span className="it-eyebrow">Services</span>
        <h1 className="it-h1" style={{ marginTop: 14 }}>
          Senior teams for every <span className="dim">layer of the stack.</span>
        </h1>
        <p className="it-lead">Websites, apps, training and marketing — one local team in Sundargarh.</p>
      </section>
      <div className="it-rows" style={{ marginTop: 56, borderTop: "1px solid var(--it-line)" }}>
        {IT_SERVICES.map((s, i) => (
          <ServiceRow key={s.slug} service={s} index={i} />
        ))}
      </div>
      <CtaBand />
    </div>
  );
}
