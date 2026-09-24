import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { CO_FOUNDER, PROPRIETOR, SITE } from "../site-config";
import { SectionHeading } from "../components/Primitives";
import { Reveal } from "../components/Motion";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE.name} (${SITE.alias}), ${SITE.address.street}, ${SITE.city}, ${SITE.state} ${SITE.address.postalCode} — proprietor ${PROPRIETOR.name}. Flex printing and government printing orders.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const rows = [
    { Icon: UserRound, label: "Founder & Proprietor", value: PROPRIETOR.name },
    { Icon: UserRound, label: "Co-Founder", value: CO_FOUNDER.name },
    { Icon: MapPin, label: "Office", value: `${SITE.address.street}, ${SITE.city}, ${SITE.state} – ${SITE.address.postalCode}` },
    { Icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
    { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
    { Icon: Clock, label: "Hours", value: SITE.hours },
  ];

  return (
    <div className="cp-page">
      <SectionHeading as="h1" eyebrow="Get in touch" title="Visit, write, or call" />
      <div className="cp-contact-grid">
        <div className="cp-contact-info">
          {rows.map(({ Icon, label, value, href }, i) => (
            <Reveal className="cp-contact-row" key={label} delay={i * 80}>
              <Icon size={17} strokeWidth={1.8} />
              <div>
                <strong>{label}</strong>
                <p>{href ? <a href={href} style={{ color: "inherit" }}>{value}</a> : value}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
