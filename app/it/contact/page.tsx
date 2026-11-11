import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { IT_SITE, SITE } from "../../site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${IT_SITE.name}, ${SITE.address.street}, ${SITE.city}, ${SITE.state}.`,
  alternates: { canonical: "/it/contact" },
};

export default function ItContact() {
  const cards = [
    { Icon: Phone, t: "Call", v: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    { Icon: Mail, t: "Email", v: SITE.email, href: `mailto:${SITE.email}?subject=IT%20enquiry` },
    { Icon: MapPin, t: "Visit", v: `${SITE.address.street}, ${SITE.city}, ${SITE.state} – ${SITE.address.postalCode}`, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.name}, ${SITE.city}`)}` },
  ];
  return (
    <div className="it-wrap">
      <section className="it-hero">
        <span className="it-eyebrow">Contact</span>
        <h1 className="it-h1" style={{ marginTop: 14 }}>
          Let&apos;s talk <span className="dim">about your project.</span>
        </h1>
        <p className="it-lead">
          <Clock size={15} style={{ verticalAlign: "-2px" }} /> {SITE.hours}
        </p>
      </section>
      <div className="it-contact-grid">
        {cards.map(({ Icon, t, v, href }) => (
          <a key={t} className="it-contact-card" href={href} target={t === "Visit" ? "_blank" : undefined} rel="noopener noreferrer">
            <Icon size={22} />
            <strong>{t}</strong>
            <span>{v}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
