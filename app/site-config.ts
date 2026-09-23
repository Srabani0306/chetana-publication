/* ---------------------------------------------------------------------
   SITE CONFIG — edit business details, proprietor info, and equipment
   here. Every page, the SEO metadata, sitemap and robots read from this.
--------------------------------------------------------------------- */

export const SITE = {
  // TODO: replace with your real domain once it is live (or set NEXT_PUBLIC_SITE_URL).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chetana-publication.vercel.app/",
  name: "Chetana Publication",
  alias: "Saransha",
  tagline: "Flex Printing, Publication & Government Printing Works",
  govtSince: 2011,
  city: "Sundargarh",
  state: "Odisha",
  address: {
    street: "L-231, R.R.I.T Colony",
    city: "Sundargarh",
    region: "Odisha",
    postalCode: "770002",
    country: "IN",
  },
  // TODO: replace with your real phone number and email.
  phone: "+91 671 234 5678",
  email: "rknayak.saransha@gmail.com",
  hours: "Mon–Sat, 10:00–19:00",
};

export const PROPRIETOR = {
  name: "Rama Krishna Nayak",
  role: "Proprietor",
  // Replace public/images/proprietor.svg with a real photo (e.g. proprietor.jpg) and update this path.
  image: "/images/rk.jpg",
  address: "L-231, R.R.I.T Colony, Sundargarh, Odisha – 770002",
  phone: SITE.phone,
  email: SITE.email,
  experience: `${new Date().getFullYear() - SITE.govtSince}+ years in government printing works`,
  message: [
    "Namaskar. When I started this work, I had one simple goal — whatever leaves our press with our name on it must be correct, clean, and delivered on the day it was promised.",
    "For more than fifteen years we have carried out printing works for government departments, district offices, schools and institutions across Odisha — flex banners, hoardings, official forms, registers, textbooks and publicity material. Every order, big or small, gets the same care.",
    "Our team and machines are ready for large-format flex printing, offset printing, binding and finishing under one roof, so our clients never have to run from shop to shop. Thank you to every department and customer who has trusted Chetana Publication and Saransha. We look forward to serving you.",
  ],
};

export type Equipment = {
  name: string;
  type: string;
  image: string;
  description: string;
  specs: string[];
};

// Replace each image in public/images/equipment/ with a real photo of your machine and update the path.
export const EQUIPMENT: Equipment[] = [
  {
    name: "Large-Format Flex Printer",
    type: "Solvent printing",
    image: "/images/equipment/flex-printer.svg",
    description:
      "Our main machine for flex banners, hoardings and government publicity boards — weather-resistant prints that last outdoors.",
    specs: ["Up to 10 ft print width", "Outdoor solvent inks", "Banners, hoardings, backdrops"],
  },
  {
    name: "Eco-Solvent Printer",
    type: "High-resolution printing",
    image: "/images/equipment/eco-solvent-printer.svg",
    description:
      "Sharp, vivid indoor prints for standees, star flex, vinyl stickers and office signage.",
    specs: ["Photo-quality output", "Vinyl, star flex, backlit", "Indoor signage & standees"],
  },
  {
    name: "Offset Printing Machine",
    type: "Bulk printing",
    image: "/images/equipment/offset-machine.svg",
    description:
      "For large runs of books, official forms, registers, letterheads and pamphlets at consistent quality.",
    specs: ["Multi-colour offset", "Books, forms & registers", "High-volume runs"],
  },
  {
    name: "Digital Colour Press",
    type: "Short-run printing",
    image: "/images/equipment/digital-press.svg",
    description:
      "Quick-turnaround colour printing for certificates, ID cards, brochures and visiting cards.",
    specs: ["Fast turnaround", "Certificates & ID cards", "Brochures & cards"],
  },
  {
    name: "Vinyl Cutting Plotter",
    type: "Precision cutting",
    image: "/images/equipment/cutting-plotter.svg",
    description:
      "Cuts vinyl lettering, radium stickers and vehicle graphics with clean, precise edges.",
    specs: ["Radium & vinyl lettering", "Vehicle graphics", "Sign boards"],
  },
  {
    name: "Lamination & Binding Unit",
    type: "Finishing",
    image: "/images/equipment/lamination-binding.svg",
    description:
      "Lamination, perfect binding, spiral binding and paper cutting — so every job leaves finished and ready to use.",
    specs: ["Hot & cold lamination", "Perfect & spiral binding", "Hydraulic paper cutting"],
  },
];

export const SERVICES = [
  "Flex Banners",
  "Hoardings",
  "Govt. Publicity Boards",
  "Vinyl & Star Flex",
  "Book Printing",
  "Official Forms & Registers",
  "Textbooks",
  "Certificates",
  "Visiting Cards",
  "Radium Stickers",
  "Lamination",
  "Binding",
];

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/proprietor", label: "Proprietor" },
  { href: "/books", label: "Books" },
  { href: "/authors", label: "Authors" },
  { href: "/contact", label: "Contact" },
] as const;
