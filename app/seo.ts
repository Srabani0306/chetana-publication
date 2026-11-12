import { CO_FOUNDER, IT_SITE, PROPRIETOR, SITE } from "./site-config";

/* Shared SEO data: keyword sets, FAQs and JSON-LD helpers. */

const people = [
  PROPRIETOR.name,
  "Ramakrishna Nayak",
  "Rama Krishna Nayak Sundargarh",
  "RK Nayak",
  "R.K Nayak Sundargarh",
  CO_FOUNDER.name,
  "Sarojini Mohanty",
  "Sarojini Mohanty Sundargarh",
  "Srabani Satadala",
  "Srabani Satadala Sundargarh",
  "Srabani Satadala IT",
];

export const PRINT_KEYWORDS = [
  ...people,
  SITE.name,
  "Chetana Publication",
  "Chetana Publications",
  "Chetana Publication Sundargarh",
  "Chetana Publication Odisha",
  "best printing press in Odisha",
  "best printing press in Sundargarh",
  "printing press in Sundargarh",
  "printing press in Odisha",
  "press in Sundargarh",
  "sundargarh press",
  "famous press in Odisha",
  "offset printing press Odisha",
  "offset printing Sundargarh",
  "flex printing Sundargarh",
  "flex printing in Odisha",
  "flex banner printing Odisha",
  "flex board printing near me",
  "hoarding printing Sundargarh",
  "vinyl printing Sundargarh",
  "radium sticker Sundargarh",
  "government printing works Odisha",
  "govt printing press Sundargarh",
  "book publication Odisha",
  "book publishers in Odisha",
  "book printing Sundargarh",
  "visiting card printing Sundargarh",
  "ID card printing Sundargarh",
  "certificate printing Sundargarh",
  "lamination and binding Sundargarh",
  "trophy and awards Sundargarh",
  "T-shirt printing Sundargarh",
  "ସୁନ୍ଦରଗଡ଼ ପ୍ରେସ",
  "ଚେତନା ପ୍ରକାଶନୀ",
];

export const IT_KEYWORDS = [
  ...people,
  IT_SITE.name,
  "best software company in Odisha",
  "best software company in Sundargarh",
  "software company in Sundargarh",
  "software company in Odisha",
  "IT company in Sundargarh",
  "IT company in Odisha",
  "IT services Sundargarh",
  "website development Sundargarh",
  "website development company Odisha",
  "web design Sundargarh",
  "mobile app development Odisha",
  "ERP software Odisha",
  "school management software Odisha",
  "college ERP Odisha",
  "HRMS software Odisha",
  "inventory management software Odisha",
  "library management software",
  "hospital nursing home software Odisha",
  "printing press management software",
  "live project for college students Odisha",
  "BCA MCA B.Tech project training Sundargarh",
  "computer training institute Sundargarh",
  "digital marketing Sundargarh",
  "SEO services Sundargarh",
];

export type Faq = { q: string; a: string };

const years = new Date().getFullYear() - SITE.govtSince;

export const PRINT_FAQ: Faq[] = [
  {
    q: "Which is the best printing press in Sundargarh, Odisha?",
    a: `${SITE.name} (${SITE.alias}) at ${SITE.address.street}, ${SITE.city} is a trusted printing press in Sundargarh, serving government departments, schools and businesses across Odisha for ${years}+ years with flex, offset and digital printing.`,
  },
  {
    q: "Do you do flex printing and hoardings in Sundargarh and across Odisha?",
    a: "Yes. We print flex banners, hoardings, star flex, vinyl, backlit boards, standees and government publicity boards on large-format solvent and eco-solvent printers, and deliver across Odisha.",
  },
  {
    q: "Do you handle government printing works?",
    a: `Yes. We have carried out government printing works since ${SITE.govtSince} — official forms, registers, textbooks, certificates and publicity material for district offices, schools and institutions in Odisha.`,
  },
  {
    q: "Who is the owner of Chetana Publication?",
    a: `${PROPRIETOR.name} (${SITE.alias}) is the Founder & Proprietor, and ${CO_FOUNDER.name} is the Co-Founder of ${SITE.name}.`,
  },
  {
    q: "Where is Chetana Publication located and how do I contact you?",
    a: `${SITE.address.street}, ${SITE.city}, ${SITE.state} – ${SITE.address.postalCode}. Call ${SITE.phone} or email ${SITE.email}. Open ${SITE.hours}.`,
  },
  {
    q: "Do you publish books for authors?",
    a: "Yes. We publish and print books — fiction, Odia poetry, children's books and textbooks — from manuscript to finished, bound copies.",
  },
];

export const IT_FAQ: Faq[] = [
  {
    q: "Which is the best software company in Sundargarh, Odisha?",
    a: `${IT_SITE.name}, a department of ${SITE.name} in ${SITE.city}, builds websites, mobile apps and ERP / management software for businesses, schools, colleges, hospitals and government offices across Odisha.`,
  },
  {
    q: "What software and IT services do you offer in Odisha?",
    a: "Website and web-app development, website design, Android and iOS apps, store & inventory, HRMS, library, laboratory, nursing home, school & college ERP and printing-press management software, plus IT training and digital marketing.",
  },
  {
    q: "Do you offer live projects and training for college students?",
    a: "Yes. We guide B.Tech, BCA and MCA students on real live projects with mentoring, documentation and a completion certificate, and run hands-on computer and IT training.",
  },
  {
    q: "Who heads the IT department?",
    a: `Srabani Satadala is Chief of the IT Department at ${SITE.name}, working under Founder & Proprietor ${PROPRIETOR.name}.`,
  },
  {
    q: "How can I contact your IT team?",
    a: `Visit ${SITE.address.street}, ${SITE.city}, ${SITE.state} – ${SITE.address.postalCode}, call ${SITE.phone} or email ${SITE.email}.`,
  },
];

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}
