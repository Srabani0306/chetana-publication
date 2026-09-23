/* Catalogue data shared by the home, books and authors pages. */

export type Book = {
  code: string;
  title: string;
  sub: string;
  author: string;
  category: string;
  price: number;
  year: number;
  govt: boolean;
  blurb: string;
};

export type Author = {
  name: string;
  role: string;
  since: number;
  bio: string;
};

export type TimelineItem = { year: string; text: string };

export const BOOKS: Book[] = [
  {
    code: "CP-014",
    title: "ସୂର୍ଯ୍ୟମୁଖୀ",
    sub: "Sunflower — Collected Poems",
    author: "Anita Mohanty",
    category: "Poetry",
    price: 250,
    year: 2022,
    govt: false,
    blurb:
      "A quiet, luminous collection tracing a woman's inner seasons — grief, work, and the small defiant joys of ordinary days.",
  },
  {
    code: "CP-021",
    title: "The Silent Ledger",
    sub: "A Novel",
    author: "Rajiv Patnaik",
    category: "Fiction",
    price: 399,
    year: 2023,
    govt: false,
    blurb:
      "A Sundargarh accountant discovers a decades-old discrepancy that unravels his family's history — and his city's.",
  },
  {
    code: "CP-002",
    title: "Basic Science",
    sub: "Standard VIII · Odisha Board Curriculum",
    author: "Prof. Vinayak Nayak",
    category: "Educational",
    price: 180,
    year: 2024,
    govt: true,
    blurb:
      "Fully aligned to the Board of Secondary Education, Odisha syllabus, with revised diagrams and chapter-end practice sets.",
  },
  {
    code: "CP-005",
    title: "ଓଡ଼ିଆ ବ୍ୟାକରଣ ସହଜ",
    sub: "Odia Grammar Made Simple",
    author: "Dr. S. Panda",
    category: "Educational",
    price: 150,
    year: 2023,
    govt: true,
    blurb:
      "A classroom staple for two decades — clear rules, worked examples, and board-pattern exercises.",
  },
  {
    code: "CP-033",
    title: "ବାଳକଥା ସଂଗ୍ରହ",
    sub: "Tales for Young Readers",
    author: "Meera Rath",
    category: "Children's",
    price: 120,
    year: 2021,
    govt: false,
    blurb:
      "Twelve gentle stories for early readers, illustrated in warm watercolour, about kindness and curiosity.",
  },
  {
    code: "CP-017",
    title: "ଇତିହାସର ପୃଷ୍ଠା",
    sub: "Pages of History",
    author: "Dr. S. Panda",
    category: "Non-fiction",
    price: 450,
    year: 2020,
    govt: false,
    blurb:
      "A sweeping, readable account of Odisha's social history, drawn from a decade of archival research.",
  },
  {
    code: "CP-009",
    title: "ମନର ବନ୍ଧନ",
    sub: "Knots of the Mind — Poems",
    author: "Kavita Behera",
    category: "Poetry",
    price: 300,
    year: 2019,
    govt: false,
    blurb:
      "Spare, exacting verse on memory and distance, from one of Odia poetry's most understated voices.",
  },
  {
    code: "CP-041",
    title: "Civics for Citizens",
    sub: "Standard X · Odisha Board Curriculum",
    author: "Prof. Vinayak Nayak",
    category: "Educational",
    price: 200,
    year: 2024,
    govt: true,
    blurb:
      "Approved for classroom use across the state, covering the constitution, governance, and civic duty.",
  },
];

export const AUTHORS: Author[] = [
  {
    name: "Anita Mohanty",
    role: "Poet",
    since: 2011,
    bio: "Anita writes in the gaps between housework and half-finished tea, and has published three collections with Chetana since 2011.",
  },
  {
    name: "Rajiv Patnaik",
    role: "Novelist",
    since: 2018,
    bio: "A former bank auditor turned full-time writer, Rajiv sets his fiction in the ledgers and back offices of ordinary institutions.",
  },
  {
    name: "Meera Rath",
    role: "Children's Author",
    since: 2015,
    bio: "Meera has written eleven picture books for Chetana and runs weekend storytelling sessions at schools across Sundargarh.",
  },
  {
    name: "Dr. S. Panda",
    role: "Historian",
    since: 2009,
    bio: "A retired professor of history, Dr. Panda has spent fifteen years cataloguing Odisha's colonial-era municipal records.",
  },
  {
    name: "Prof. Vinayak Nayak",
    role: "Textbook Author",
    since: 2006,
    bio: "Vinayak has authored or revised over twenty state-board textbooks and chairs Chetana's curriculum review panel.",
  },
  {
    name: "Kavita Behera",
    role: "Essayist & Poet",
    since: 2013,
    bio: "Kavita's essays on rural life have appeared widely; her poetry collections are studied in three university syllabi.",
  },
];

export const TIMELINE: TimelineItem[] = [
  { year: "1990", text: "Chetana Publication founded in Sundargarh with a single printing press and four titles." },
 
  { year: "2010", text: "Digitised our full backlist and opened a public catalogue for schools and libraries." },
  { year: "2011", text: "Began government printing works — forms, registers and publicity material for district offices." },
  { year: "2015", text: "Installed large-format flex printing; now producing banners and hoardings for government schemes." },
  { year: "2024", text: "Crossed 100 government-approved titles in active use across state-board classrooms." },
];

export const CATEGORIES = ["All", "Fiction", "Poetry", "Educational", "Children's", "Non-fiction"] as const;
