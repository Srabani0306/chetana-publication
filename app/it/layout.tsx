import type { Metadata } from "next";
import Link from "next/link";
import "./it.css";
import ItHeader from "./ItHeader";
import { IT_SITE, SITE } from "../site-config";
import { IT_NAV } from "./it-data";
import { IT_KEYWORDS } from "../seo";

export const metadata: Metadata = {
  title: {
    default: `${IT_SITE.name} — ${IT_SITE.tagline}`,
    template: `%s | ${IT_SITE.name}`,
  },
  description: `${IT_SITE.name} — website & app development, ERP and management software (HRMS, inventory, library, laboratory, nursing home, school & college), IT training and digital marketing in ${SITE.city}, ${SITE.state}.`,
  keywords: IT_KEYWORDS,
  alternates: { canonical: "/it" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: IT_SITE.name,
    title: `${IT_SITE.name} — Software Company in ${SITE.city}, ${SITE.state}`,
    description: `Website, mobile app and ERP software development, IT training and digital marketing in ${SITE.city}, ${SITE.state}.`,
    images: [{ url: "/images/logo/chetana-publications-monogram-cp.png", alt: `${IT_SITE.name} logo` }],
  },
};

export default function ItLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="it-root">
      <ItHeader />
      <main>{children}</main>
      <footer className="it-footer">
        <div className="it-footer-inner">
          <div>
            <strong>{IT_SITE.name}</strong>
            <p>
              A department of {SITE.name} ({SITE.alias}), {SITE.address.street}, {SITE.city}, {SITE.state} –{" "}
              {SITE.address.postalCode}
            </p>
            <p>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
          <nav aria-label="IT footer">
            {IT_NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href="/">Printing &amp; Publishing</Link>
          </nav>
        </div>
        <p className="it-copy">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
