import {
  BookOpen,
  Boxes,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Library,
  Printer,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  Globe,
  Layout,
  Smartphone,
  Monitor,
  Megaphone,
} from "lucide-react";

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "web-development": Globe,
  "web-design": Layout,
  "mobile-apps": Smartphone,
  "live-projects": GraduationCap,
  "it-training": Monitor,
  "digital-marketing": Megaphone,
};

export type ProductStatus = "Available" | "Beta" | "In development";

export type ItProduct = {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  icon: LucideIcon;
  tagline: string;
  description: string;
  modules: string[];
  forWhom: string[];
  stack: string[];
};

const STACK = ["Next.js", "React", "Node.js", "PostgreSQL"];

export const IT_PRODUCTS: ItProduct[] = [
  {
    slug: "store-inventory",
    name: "Store & Inventory Management",
    category: "Operations",
    status: "Available",
    icon: Boxes,
    tagline: "Know exactly what you have, where it is and when to reorder.",
    description:
      "A complete stock system for shops, godowns, offices and institutions — purchases, issues, stock ledger and alerts in one place.",
    modules: [
      "Item master with categories, units & barcodes",
      "Purchase orders and goods received notes",
      "Issue / requisition with approvals",
      "Multi-store & stock transfer",
      "Low-stock and expiry alerts",
      "Stock ledger, valuation & reports",
    ],
    forWhom: ["Retail shops", "Schools & colleges", "Hospitals", "Government offices"],
    stack: STACK,
  },
  {
    slug: "hrms",
    name: "HRMS & Payroll",
    category: "People",
    status: "Available",
    icon: Users,
    tagline: "Attendance, leave and payroll without spreadsheets.",
    description:
      "Employee records, attendance, leave, shift rosters and salary processing with payslips — configurable for any organisation.",
    modules: [
      "Employee master & documents",
      "Attendance & shift roster",
      "Leave policy & approvals",
      "Payroll, PF / ESI & payslips",
      "Loans, advances & deductions",
      "HR and payroll reports",
    ],
    forWhom: ["Printing presses", "Schools", "Clinics & hospitals", "Small & medium businesses"],
    stack: STACK,
  },
  {
    slug: "library-management",
    name: "Library Management System",
    category: "Education",
    status: "Available",
    icon: Library,
    tagline: "Catalogue, issue, return and fines — all tracked.",
    description:
      "Run a school, college or public library with accession registers, member cards, issue/return, fines and online search.",
    modules: [
      "Book catalogue & accession register",
      "Member & ID card management",
      "Issue, return & renewal",
      "Fine calculation & receipts",
      "Online catalogue search (OPAC)",
      "Barcode scanning & reports",
    ],
    forWhom: ["Schools", "Colleges", "Public libraries", "Institutes"],
    stack: STACK,
  },
  {
    slug: "laboratory-management",
    name: "Laboratory Management System",
    category: "Healthcare & Science",
    status: "Beta",
    icon: FlaskConical,
    tagline: "From sample registration to printed report.",
    description:
      "Manage diagnostic and college laboratories — sample intake, test results, reagents, equipment and report printing.",
    modules: [
      "Patient / sample registration",
      "Test master & rate list",
      "Result entry with reference ranges",
      "Report printing with signatures",
      "Reagent & equipment inventory",
      "Billing and daily collection",
    ],
    forWhom: ["Diagnostic labs", "Hospital labs", "College science labs"],
    stack: STACK,
  },
  {
    slug: "nursing-home",
    name: "Nursing Home Suite",
    category: "Healthcare & Science",
    status: "In development",
    icon: HeartPulse,
    tagline: "Patients, beds, staff and stores in a single system.",
    description:
      "A hospital-grade suite for nursing homes: registration, bed allocation, staff HRMS, pharmacy and store — with billing and discharge.",
    modules: [
      "Patient registration (OPD / IPD)",
      "Bed & ward allocation board",
      "Doctor, nurse & staff HRMS",
      "Pharmacy & store management",
      "Billing, advances & discharge summary",
      "Daily census and revenue reports",
    ],
    forWhom: ["Nursing homes", "Small hospitals", "Clinics"],
    stack: STACK,
  },
  {
    slug: "school-college-erp",
    name: "School & College ERP",
    category: "Education",
    status: "Available",
    icon: GraduationCap,
    tagline: "Admission to alumni — one login for the whole institution.",
    description:
      "Admission, registration, fee collection, attendance, exams and staff HRMS for schools, colleges and coaching institutes.",
    modules: [
      "Online admission & registration",
      "Fee structure, collection & receipts",
      "Student records & ID cards",
      "Attendance, exams & result cards",
      "Staff HRMS and payroll",
      "Certificates (TC, bonafide, etc.)",
    ],
    forWhom: ["Schools", "Colleges", "Coaching centres", "Training institutes"],
    stack: STACK,
  },
  {
    slug: "printing-press-suite",
    name: "Printing Press Suite",
    category: "Printing & Publishing",
    status: "In development",
    icon: Printer,
    tagline: "Estimate, book, print and deliver — with customer reviews.",
    description:
      "Built from our own press experience: store management, estimate management, online booking with a delivery flow, and review & rating.",
    modules: [
      "Store & paper / ink stock management",
      "Estimate & quotation management",
      "Online booking with file upload",
      "Job card, production & delivery flow",
      "Order tracking for customers",
      "Review & rating after delivery",
    ],
    forWhom: ["Printing presses", "Flex & signage shops", "Publishers"],
    stack: STACK,
  },
  {
    slug: "book-store",
    name: "Publisher's Online Book Store",
    category: "Printing & Publishing",
    status: "In development",
    icon: BookOpen,
    tagline: "Sell books online and pay authors fairly.",
    description:
      "A storefront and back-office for publishers: catalogue, cart, orders, stock and author royalty statements.",
    modules: [
      "Book catalogue with previews",
      "Cart, checkout & order tracking",
      "Stock & reprint alerts",
      "Author profiles & royalty statements",
      "Discount and bulk-order pricing",
      "Sales and royalty reports",
    ],
    forWhom: ["Publishers", "Authors", "Book distributors"],
    stack: STACK,
  },
];

export type ItProject = {
  title: string;
  type: string;
  status: "Live" | "In development" | "Planned";
  summary: string;
  tags: string[];
  href?: string;
};

// Replace / extend with real client work as projects are delivered.
export const IT_PROJECTS: ItProject[] = [
  {
    title: "Chetana Publication Website",
    type: "Website",
    status: "Live",
    summary: "The company website: catalogue, authors, team, equipment and contact — built with Next.js and optimised for local search.",
    tags: ["Next.js", "SEO", "Responsive"],
    href: "/",
  },
  {
    title: "Press Estimate & Online Booking Portal",
    type: "Web app",
    status: "In development",
    summary: "Customers request an estimate, upload artwork, confirm the order and follow it through printing to delivery, then rate the job.",
    tags: ["Estimate", "Booking", "Delivery flow", "Reviews"],
  },
  {
    title: "Nursing Home Management System",
    type: "Web app",
    status: "In development",
    summary: "Patient registration, bed allocation, staff HRMS and pharmacy store for a small hospital.",
    tags: ["Registration", "Bed allocation", "HRMS", "Store"],
  },
  {
    title: "School Admission & Fee Collection",
    type: "Web app",
    status: "Planned",
    summary: "Online admission forms, registration numbers, fee receipts and defaulter reports for a school or college.",
    tags: ["Admission", "Fees", "Receipts"],
  },
  {
    title: "Library & Lab Management",
    type: "Web app",
    status: "Planned",
    summary: "Issue/return with fines for a college library, and sample-to-report workflow for its laboratory.",
    tags: ["Library", "Laboratory", "Reports"],
  },
];

export const IT_NAV = [
  { href: "/it", label: "Home" },
  { href: "/it/services", label: "Services" },
  { href: "/it/products", label: "Products" },
  { href: "/it/projects", label: "Projects" },
  { href: "/it/contact", label: "Contact" },
] as const;
