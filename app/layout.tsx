import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./site.css";
import "./animations.css";
import { JsonLd } from "./components/Primitives";
import { CO_FOUNDER, IT_SITE, PROPRIETOR, SITE } from "./site-config";
import { IT_KEYWORDS, PRINT_KEYWORDS } from "./seo";

const years = new Date().getFullYear() - SITE.govtSince;
const description = `${SITE.name} (${SITE.alias}), ${SITE.city}, ${SITE.state} — flex printing, banners, hoardings, book publication and government printing works for ${years}+ years. Founder & Proprietor: ${PROPRIETOR.name}. Co-Founder: ${CO_FOUNDER.name}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} (${SITE.alias}) | Flex Printing & Govt. Printing Works, ${SITE.city} — ${PROPRIETOR.name}`,
    template: `%s | ${SITE.name} (${SITE.alias})`,
  },
  description,
  applicationName: SITE.name,
  authors: [{ name: PROPRIETOR.name }, { name: CO_FOUNDER.name }],
  creator: PROPRIETOR.name,
  publisher: SITE.name,
  keywords: [...new Set([...PRINT_KEYWORDS, ...IT_KEYWORDS, SITE.alias, `${SITE.alias} Sundargarh`, `${SITE.alias} flex printing`])],
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
      // Approximate town-centre coordinates for Sundargarh — replace with the exact pin from Google Maps.
      geo: { "@type": "GeoCoordinates", latitude: 22.1167, longitude: 84.0333 },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.name}, ${SITE.address.street}, ${SITE.city}`)}`,
      areaServed: [
        { "@type": "City", name: "Sundargarh" },
        { "@type": "AdministrativeArea", name: "Sundargarh District" },
        { "@type": "State", name: "Odisha" },
      ],
      openingHours: "Mo-Sa 10:00-19:00", // keep in sync with SITE.hours
      founder: [{ "@id": `${SITE.url}/#proprietor` }, { "@id": `${SITE.url}/#cofounder` }],
      knowsAbout: ["Printing", "Printing press", "Flex printing", "Offset printing", "Government printing works", "Book publication", "Hoardings", "Vinyl and radium stickers"],
      // After creating profiles, add them: sameAs: ["https://g.page/...", "https://www.facebook.com/...", "https://www.instagram.com/..."],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#it`,
      name: IT_SITE.name,
      alternateName: ["Chetana IT Services", "Chetana IT Department", `${SITE.name} IT`],
      description: `Software company in ${SITE.city}, ${SITE.state}: website and mobile app development, ERP and management software, IT training and digital marketing.`,
      url: `${SITE.url}/it`,
      image: `${SITE.url}/logo.png`,
      telephone: SITE.phone,
      email: SITE.email,
      parentOrganization: { "@id": `${SITE.url}/#business` },
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: 22.1167, longitude: 84.0333 },
      areaServed: [
        { "@type": "City", name: "Sundargarh" },
        { "@type": "State", name: "Odisha" },
      ],
      employee: [{ "@id": `${SITE.url}/#it-head` }],
      knowsAbout: ["Software development", "Website development", "Mobile app development", "ERP software", "School management software", "HRMS", "IT training", "Digital marketing"],
    },
    {
      "@type": "Person",
      "@id": `${SITE.url}/#it-head`,
      name: "Srabani Satadala",
      jobTitle: `Chief – IT Department, ${SITE.name}`,
      url: `${SITE.url}/our-team`,
      worksFor: { "@id": `${SITE.url}/#it` },
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
      "@type": "Person",
      "@id": `${SITE.url}/#cofounder`,
      name: CO_FOUNDER.name,
      alternateName: "Sarojini Mohanty",
      jobTitle: `${CO_FOUNDER.role}, ${SITE.name} (${SITE.alias})`,
      url: `${SITE.url}/proprietor`,
      worksFor: { "@id": `${SITE.url}/#business` },
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
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
        />
        <meta name="google-site-verification" content="5-QNmJtFZYXWkRiRcDefTxtxYDAJ8iwzHBQTdN1g9Qw" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+Oriya:wght@400;500;600;700&display=swap"
        />
        <JsonLd data={businessJsonLd} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
