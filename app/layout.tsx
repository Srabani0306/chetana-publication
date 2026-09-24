import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import "./site.css";
import "./animations.css";
import SiteHeader from "./components/SiteHeader";
import { JsonLd } from "./components/Primitives";
import { NAV, PROPRIETOR, SITE } from "./site-config";

const years = new Date().getFullYear() - SITE.govtSince;
const description = `${SITE.name} (${SITE.alias}), ${SITE.city}, ${SITE.state} — flex printing, banners, hoardings, book publication and government printing works for ${years}+ years. Proprietor: ${PROPRIETOR.name}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} (${SITE.alias}) | Flex Printing & Govt. Printing Works, ${SITE.city} — ${PROPRIETOR.name}`,
    template: `%s | ${SITE.name} (${SITE.alias})`,
  },
  description,
  applicationName: SITE.name,
  authors: [{ name: PROPRIETOR.name }],
  creator: PROPRIETOR.name,
  publisher: SITE.name,
  keywords: [
    PROPRIETOR.name,
    "Ramakrishna Nayak",
    "Rama Krishna Nayak Sundargarh",
    SITE.alias,
    `${SITE.alias} Sundargarh`,
    `${SITE.alias} flex printing`,
    SITE.name,
    "Chetana Publications",
    "Printing",
    "RK Nayak",
    "Ramakrishna Nayak",
    "Rama krishna Nayak",
    "sundargarh press",
    "famous press",
    "Chetana Publication Sundargarh",
    "Chetana Publications Sundargarh",
    "flex printing Sundargarh",
    "flex banner printing Odisha",
    "government printing works Odisha",
    "govt printing Sundargarh",
    "hoarding printing Sundargarh",
    "book publication Odisha",
    "offset printing Sundargarh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: `${SITE.name} (${SITE.alias})`,
    title: `${SITE.name} (${SITE.alias}) — Flex Printing & Govt. Works since ${SITE.govtSince}`,
    description,
    images: [{ url: "/images/logo/chetana-publications-monogram-cp.png", alt: `${SITE.name} logo` }],
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} (${SITE.alias})`,
    description,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  // After adding the site in Google Search Console, paste the verification code here:
  // verification: { google: "YOUR-CODE" },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#9C3B26",
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      alternateName: [SITE.alias, `${SITE.name} ${SITE.alias}`, `${SITE.name}s`],
      description,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      image: `${SITE.url}/logo.png`,
      telephone: SITE.phone,
      email: SITE.email,
      foundingDate: "1982",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
      areaServed: { "@type": "State", name: "Odisha" },
      openingHours: "Mo-Sa 10:00-19:00", // keep in sync with SITE.hours
      founder: { "@id": `${SITE.url}/#proprietor` },
      knowsAbout: ["Printing","Flex printing", "Government printing works", "Book publication", "Offset printing"],
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}/#proprietor`,
      name: PROPRIETOR.name,
      alternateName: "Ramakrishna Nayak",
      jobTitle: `${PROPRIETOR.role}, ${SITE.name} (${SITE.alias})`,
      image: `${SITE.url}${PROPRIETOR.image}`,
      url: `${SITE.url}/proprietor`,
      worksFor: { "@id": `${SITE.url}/#business` },
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        addressCountry: SITE.address.country,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: `${SITE.name} (${SITE.alias})`,
      publisher: { "@id": `${SITE.url}/#business` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="5-QNmJtFZYXWkRiRcDefTxtxYDAJ8iwzHBQTdN1g9Qw" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+Oriya:wght@400;500;600;700&display=swap"
        />
        <JsonLd data={businessJsonLd} />
      </head>
      <body>
        <div className="cp-root">
          <SiteHeader />
          <main>{children}</main>
          <footer className="cp-footer">
            <div className="cp-footer-inner">
              <span className="cp-footer-copy">
                © {new Date().getFullYear()} {SITE.name} ({SITE.alias}), {SITE.address.street},{" "}
                {SITE.city}, {SITE.state}. Proprietor: {PROPRIETOR.name}.
              </span>
              <nav className="cp-footer-nav" aria-label="Footer">
                {NAV.map((n) => (
                  <Link key={n.href} href={n.href}>
                    {n.label}
                  </Link>
                ))}
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
