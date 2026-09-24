import type { Metadata } from "next";
import Image from "next/image";
import { Briefcase, Clock, Mail, MapPin, Phone, Quote, Users } from "lucide-react";
import { CO_FOUNDER, PROPRIETOR, SITE } from "../site-config";
import { Eyebrow } from "../components/Primitives";
import { Reveal } from "../components/Motion";

export const metadata: Metadata = {
  title: `${PROPRIETOR.name} — ${PROPRIETOR.role}`,
  description: `${PROPRIETOR.name}, ${PROPRIETOR.role} of ${SITE.name} (${SITE.alias}), ${SITE.city}, ${SITE.state}. ${PROPRIETOR.experience}: flex printing, hoardings and government printing works.`,
  alternates: { canonical: "/proprietor" },
  openGraph: {
    type: "profile",
    url: "/proprietor",
    title: `${PROPRIETOR.name} — ${PROPRIETOR.role}, ${SITE.name} (${SITE.alias})`,
    images: [{ url: PROPRIETOR.image, alt: PROPRIETOR.name }],
    description: `${PROPRIETOR.name} (${PROPRIETOR.role}) and ${CO_FOUNDER.name} (${CO_FOUNDER.role}) of ${SITE.name}, ${SITE.city}.`,
  },
};

export default function ProprietorPage() {
  const govtYears = new Date().getFullYear() - SITE.govtSince;

  const details = [
    { Icon: Briefcase, label: "Business", value: `${SITE.name} (${SITE.alias})` },
    { Icon: Users, label: CO_FOUNDER.role, value: CO_FOUNDER.name },
    { Icon: MapPin, label: "Address", value: PROPRIETOR.address },
    { Icon: Phone, label: "Phone", value: PROPRIETOR.phone, href: `tel:${PROPRIETOR.phone.replace(/\s/g, "")}` },
    { Icon: Mail, label: "Email", value: PROPRIETOR.email, href: `mailto:${PROPRIETOR.email}` },
    { Icon: Clock, label: "Experience", value: PROPRIETOR.experience },
  ];

  return (
    <div className="cp-page">
      <section className="cp-prop-hero">
        <div className="cp-rise" style={{ "--delay": "100ms" } as React.CSSProperties}>
          <div className="cp-prop-photo-wrap">
            <div className="cp-prop-ring" aria-hidden="true" />
            <div className="cp-prop-photo">
              <Image
                src={PROPRIETOR.image}
                alt={`${PROPRIETOR.name}, ${PROPRIETOR.role} of ${SITE.name} (${SITE.alias}), ${SITE.city}`}
                fill
                priority
                sizes="(max-width: 820px) 90vw, 380px"
              />
            </div>
            <div className="cp-prop-badge">
              <strong>{govtYears}+ yrs</strong>
              <span>Govt. printing works</span>
            </div>
          </div>
        </div>

        <div>
          <div className="cp-rise" style={{ "--delay": "0ms" } as React.CSSProperties}>
            <Eyebrow>Meet the proprietor</Eyebrow>
          </div>
          <h1 className="cp-prop-name cp-rise" style={{ "--delay": "120ms" } as React.CSSProperties}>
            {PROPRIETOR.name}
          </h1>
          <p className="cp-prop-role cp-rise" style={{ "--delay": "200ms" } as React.CSSProperties}>
            {PROPRIETOR.role} · {SITE.name} · {SITE.alias}
            <br />
            with {CO_FOUNDER.role} {CO_FOUNDER.name}
          </p>
          <div className="cp-prop-details">
            {details.map(({ Icon, label, value, href }, i) => (
              <div
                className="cp-contact-row cp-rise"
                key={label}
                style={{ "--delay": `${300 + i * 90}ms` } as React.CSSProperties}
              >
                <Icon size={17} strokeWidth={1.8} />
                <div>
                  <strong>{label}</strong>
                  <p>{href ? <a href={href}>{value}</a> : value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="cp-prop-message">
        <Quote strokeWidth={1.6} />
        <Eyebrow>A message from the proprietor</Eyebrow>
        {PROPRIETOR.message.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
        <div className="cp-prop-sign">— {PROPRIETOR.name} &amp; {CO_FOUNDER.name}</div>
      </Reveal>
    </div>
  );
}
