import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Landmark, Printer, Users } from "lucide-react";
import { TIMELINE } from "../data";
import { EQUIPMENT, PROPRIETOR, SITE } from "../site-config";
import { JsonLd, SectionHeading } from "../components/Primitives";
import { Reveal } from "../components/Motion";

export const metadata: Metadata = {
  title: "About Us & Our Equipment",
  description: `About ${SITE.name} (${SITE.alias}), ${SITE.city} — flex printers, offset and digital presses, cutting plotter, lamination and binding machines. Government printing works since ${SITE.govtSince} under proprietor ${PROPRIETOR.name}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const govtYears = new Date().getFullYear() - SITE.govtSince;

  const equipmentJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Printing equipment at ${SITE.name}`,
    itemListElement: EQUIPMENT.map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: e.name,
      image: `${SITE.url}${e.image}`,
      description: e.description,
    })),
  };

  return (
    <div className="cp-page">
      <JsonLd data={equipmentJsonLd} />
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow={`About ${SITE.name} · ${SITE.alias}`}
          title="A press built on trust, one order at a time"
        />
      </Reveal>
      <div className="cp-about-grid">
        <Reveal>
          <p className="cp-lead">
            {SITE.name}, also known as {SITE.alias}, is a printing and publishing house in{" "}
            {SITE.city}, {SITE.state}, run by proprietor{" "}
            <Link href="/proprietor" style={{ color: "var(--rust)" }}>
              {PROPRIETOR.name}
            </Link>
            . For {govtYears}+ years we have carried out government printing works — flex
            banners, hoardings, publicity boards, official forms, registers and textbooks — for
            departments, district offices and schools, alongside publishing our own list of books.
          </p>
        </Reveal>
        <Reveal delay={120} className="cp-about-side">
          <Landmark size={20} strokeWidth={1.6} />
          <p>
            Government work since {SITE.govtSince}: every order is printed in-house on our own
            machines, checked against the work order, and delivered with proper billing and
            documentation.
          </p>
        </Reveal>
      </div>

      {/* EQUIPMENT */}
      <section style={{ marginTop: 72 }} id="equipment">
        <Reveal>
          <SectionHeading
            eyebrow="Our equipment"
            title="Machines that do the work"
            sub="Flex, offset, digital and finishing — everything under one roof in Sundargarh."
          />
        </Reveal>
        <div className="cp-equip-grid">
          {EQUIPMENT.map((e, i) => (
            <Reveal key={e.name} delay={(i % 3) * 110} className="cp-card cp-equip-card">
              <div className="cp-equip-img">
                <span className="cp-tag">
                  <Printer size={11} strokeWidth={2} /> {e.type}
                </span>
                <Image
                  src={e.image}
                  alt={`${e.name} at ${SITE.name} (${SITE.alias}), ${SITE.city}`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 380px"
                />
              </div>
              <div className="cp-equip-body">
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <ul className="cp-equip-specs">
                  {e.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <h2 className="cp-h3">Our history</h2>
      </Reveal>
      <div className="cp-timeline">
        {TIMELINE.map((t, i) => (
          <Reveal className="cp-timeline-row" key={t.year} delay={i * 60}>
            <span className="cp-mono cp-timeline-year">{t.year}</span>
            <span className="cp-timeline-line" aria-hidden="true" />
            <p>{t.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h2 className="cp-h3">What guides us</h2>
      </Reveal>
      <div className="cp-grid-3">
        {[
          { Icon: Landmark, h: "Public responsibility", p: "Government orders are checked line by line against the work order — accuracy first, speed second." },
          { Icon: BookOpen, h: "Quality printing", p: "Good machines, good inks and careful finishing, so every banner and book looks right and lasts." },
          { Icon: Users, h: "Long relationships", p: "Departments and customers come back to us year after year — we grow trust, not one-off orders." },
        ].map(({ Icon, h, p }, i) => (
          <Reveal key={h} delay={i * 110} className="cp-card cp-value-card">
            <Icon size={20} strokeWidth={1.6} />
            <h4>{h}</h4>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>

      <div className="cp-center-link" style={{ marginTop: 48 }}>
        <Link className="cp-btn cp-btn-primary" href="/contact">
          Place a printing order <ArrowRight size={15} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}
