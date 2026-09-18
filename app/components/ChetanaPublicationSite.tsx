"use client";

import React, { useEffect, useState, useMemo } from "react";
import {
  BookOpen,
  Users,
  Landmark,
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Star,
  Quote,
  Clock,
  Send,
} from "lucide-react";

/* ---------------------------------------------------------------------
   TYPES
--------------------------------------------------------------------- */

type Book = {
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

type Author = {
  name: string;
  role: string;
  since: number;
  bio: string;
};

type TimelineItem = { year: string; text: string };

type PageId = "home" | "books" | "authors" | "about" | "contact";

/* ---------------------------------------------------------------------
   DATA
--------------------------------------------------------------------- */

const BOOKS: Book[] = [
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

const AUTHORS: Author[] = [
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

const TIMELINE: TimelineItem[] = [
  { year: "1982", text: "Chetana Publication founded in Sundargarh with a single printing press and four titles." },
  { year: "1985", text: "First state-board textbook contract awarded — the beginning of our education division." },
  { year: "1998", text: "Expanded into fiction and poetry, publishing a new generation of Odia writers." },
  { year: "2010", text: "Digitised our full backlist and opened a public catalogue for schools and libraries." },
  { year: "2024", text: "Crossed 100 government-approved titles in active use across state-board classrooms." },
];

const CATEGORIES = ["All", "Fiction", "Poetry", "Educational", "Children's", "Non-fiction"] as const;

const NAV: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "books", label: "Books" },
  { id: "authors", label: "Authors" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

/* ---------------------------------------------------------------------
   SMALL PRIMITIVES
--------------------------------------------------------------------- */

function Seal({ size = 56 }: { size?: number }) {
  return (
    <img
      src="/logo.png"
      alt="Chetana Publication Logo"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="cp-eyebrow">{children}</div>;
}

function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="cp-section-heading">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="cp-h2">{title}</h2>
      {sub && <p className="cp-section-sub">{sub}</p>}
    </div>
  );
}

function BookCard({ book, onOpen }: { book: Book; onOpen: (book: Book) => void }) {
  return (
    <button className="cp-card cp-book-card" onClick={() => onOpen(book)}>
      <div className="cp-book-card-top">
        <span className="cp-mono cp-code">{book.code}</span>
        {book.govt && (
          <span className="cp-tag cp-tag-govt">
            <Landmark size={11} strokeWidth={2} /> Govt. Approved
          </span>
        )}
      </div>
      <h3 className="cp-book-title cp-odia">{book.title}</h3>
      <p className="cp-book-sub">{book.sub}</p>
      <div className="cp-dotted-row">
        <span>{book.author}</span>
        <span className="cp-dots" />
        <span className="cp-mono">₹{book.price}</span>
      </div>
      <div className="cp-book-card-bottom">
        <span className="cp-tag">{book.category}</span>
        <span className="cp-inline-link">
          Details <ArrowUpRight size={13} strokeWidth={2} />
        </span>
      </div>
    </button>
  );
}

/* ---------------------------------------------------------------------
   PAGES
--------------------------------------------------------------------- */

function HomePage({
  go,
  openBook,
}: {
  go: (id: PageId) => void;
  openBook: (book: Book) => void;
}) {
  const featured = BOOKS.slice(0, 4);
  const govtBooks = BOOKS.filter((b) => b.govt);

  return (
    <div>
      {/* HERO */}
      <section className="cp-hero">
        <div className="cp-hero-left">
          <Eyebrow>Est. 1982 · Sundargarh, Odisha</Eyebrow>
          <h1 className="cp-h1">
            Words that stay
            <br />
            in the classroom
            <br />
            <span className="cp-h1-accent">and on the shelf.</span>
          </h1>
          <p className="cp-hero-tagline cp-odia">ଚିନ୍ତାର ଚେତନା, ଶବ୍ଦର ଶକ୍ତି</p>
          <p className="cp-lead">
            Chetana Publication has spent four decades printing what
            Odisha reads first — from state-board textbooks used in
            thousands of classrooms, to the poetry and fiction that outlast
            them.
          </p>
          <div className="cp-hero-actions">
            <button className="cp-btn cp-btn-primary" onClick={() => go("books")}>
              Browse the catalogue <ArrowRight size={15} strokeWidth={2} />
            </button>
            <button className="cp-btn cp-btn-ghost" onClick={() => go("books")}>
              Government-approved titles
            </button>
          </div>
        </div>
        <div className="cp-hero-right">
          
          <div className="cp-hero-stack" aria-hidden="true">
            {["#9C3B26", "#B4863A", "#1F4A45", "#5B4632"].map((c, i) => (
              <div
                key={i}
                className="cp-spine"
                style={{ background: c, transform: `translateX(${i * 14}px) rotate(${i * 1.4 - 2}deg)` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="cp-stats">
        {[
          { n: "43", l: "years in print" },
          { n: "310+", l: "titles published" },
          { n: "100+", l: "govt.-approved books" },
          { n: "60", l: "authors in our list" },
        ].map((s) => (
          <div className="cp-stat" key={s.l}>
            <span className="cp-stat-n cp-mono">{s.n}</span>
            <span className="cp-stat-l">{s.l}</span>
          </div>
        ))}
      </section>

      {/* FEATURED */}
      <section className="cp-section">
        <SectionHeading
          eyebrow="From the catalogue"
          title="Recently on our shelves"
          sub="A working selection from fiction, poetry, and the classroom."
        />
        <div className="cp-grid-4">
          {featured.map((b) => (
            <BookCard key={b.code} book={b} onOpen={openBook} />
          ))}
        </div>
        <div className="cp-center-link">
          <button className="cp-inline-link cp-inline-link-lg" onClick={() => go("books")}>
            View the full catalogue <ArrowRight size={15} strokeWidth={2} />
          </button>
        </div>
      </section>

      {/* GOVT WORK */}
      <section className="cp-section cp-govt-section">
        <SectionHeading
          eyebrow="Education division"
          title="Trusted by state-board classrooms"
          sub="Our government work is ongoing: textbooks, workbooks, and revised
          curriculum material developed and reviewed with the state education board."
        />
        <div className="cp-govt-grid">
          <div className="cp-govt-panel">
            <Landmark size={22} strokeWidth={1.6} />
            <p>
              Chetana currently holds active contracts for state-board
              curriculum material across Standards VI–X, revised each
              academic year to match the latest Odisha syllabus.
            </p>
            <ul className="cp-govt-list">
              <li>Textbooks reviewed by a standing curriculum panel</li>
              <li>Annual syllabus alignment with the Board of Secondary Education, Odisha</li>
              <li>Distribution to schools and district libraries</li>
            </ul>
          </div>
          <div className="cp-grid-2">
            {govtBooks.map((b) => (
              <BookCard key={b.code} book={b} onOpen={openBook} />
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="cp-quote-section">
        <Quote size={26} strokeWidth={1.4} />
        <p className="cp-quote">
          A publishing house is only as good as its willingness to sit with a
          manuscript until it's ready — and to still be printing it forty
          years later.
        </p>
        <span className="cp-mono cp-quote-attr">— Founding note, 1982</span>
      </section>
    </div>
  );
}

function BooksPage({ openBook }: { openBook: (book: Book) => void }) {
  const [cat, setCat] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    return BOOKS.filter((b) => {
      const catOk = cat === "All" || b.category === cat;
      const q = query.trim().toLowerCase();
      const qOk =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.sub.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [cat, query]);

  return (
    <div className="cp-page">
      <SectionHeading
        eyebrow="Catalogue"
        title="Every book in print"
        sub="Search by title or author, or filter by category."
      />

      <div className="cp-catalog-controls">
        <div className="cp-search">
          <Search size={15} strokeWidth={2} />
          <input
            type="text"
            placeholder="Search by title or author…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search books"
          />
        </div>
        <div className="cp-chips">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`cp-chip ${cat === c ? "cp-chip-active" : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="cp-empty">No titles match that search. Try another word or category.</p>
      ) : (
        <div className="cp-grid-4">
          {filtered.map((b) => (
            <BookCard key={b.code} book={b} onOpen={openBook} />
          ))}
        </div>
      )}
    </div>
  );
}

function AuthorsPage() {
  return (
    <div className="cp-page">
      <SectionHeading
        eyebrow="Our writers"
        title="The people behind the list"
        sub="Six of the authors currently publishing with Chetana."
      />
      <div className="cp-grid-3">
        {AUTHORS.map((a) => (
          <div className="cp-card cp-author-card" key={a.name}>
            <div className="cp-author-mark cp-mono">{a.name.charAt(0)}</div>
            <h3 className="cp-author-name">{a.name}</h3>
            <p className="cp-author-role">
              {a.role} · with Chetana since {a.since}
            </p>
            <p className="cp-author-bio">{a.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="cp-page">
      <SectionHeading eyebrow="Since 1982" title="A press built one syllabus, one poem at a time" />
      <div className="cp-about-grid">
        <p className="cp-lead">
          Chetana Publication started in a single rented room in Sundargarh with
          four titles and one printing press. Today we publish across
          fiction, poetry, children's books, and — since 1985 — state-board
          textbooks used in classrooms across Odisha. Our government
          work is ongoing: every academic year, our education division
          revises and reprints titles in step with the state's curriculum.
        </p>
        <div className="cp-about-side">
          <Landmark size={20} strokeWidth={1.6} />
          <p>
            We hold active, renewing contracts with the Board of Secondary
            Education, Odisha for textbook development, review, and
            distribution — work that now accounts for roughly a third of
            our annual list.
          </p>
        </div>
      </div>

      <h3 className="cp-h3">Our history</h3>
      <div className="cp-timeline">
        {TIMELINE.map((t) => (
          <div className="cp-timeline-row" key={t.year}>
            <span className="cp-mono cp-timeline-year">{t.year}</span>
            <span className="cp-timeline-line" aria-hidden="true" />
            <p>{t.text}</p>
          </div>
        ))}
      </div>

      <h3 className="cp-h3">What guides us</h3>
      <div className="cp-grid-3">
        <div className="cp-card cp-value-card">
          <BookOpen size={20} strokeWidth={1.6} />
          <h4>Editorial care</h4>
          <p>Every manuscript passes through the same review a textbook does — nothing is rushed to print.</p>
        </div>
        <div className="cp-card cp-value-card">
          <Landmark size={20} strokeWidth={1.6} />
          <h4>Public responsibility</h4>
          <p>Our board-approved books are held to curriculum accuracy first, design second.</p>
        </div>
        <div className="cp-card cp-value-card">
          <Users size={20} strokeWidth={1.6} />
          <h4>Long relationships</h4>
          <p>Most of our authors have published three or more books with us — we grow lists, not one-offs.</p>
        </div>
      </div>
    </div>
  );
}

function ContactPage() {
  const [form, setForm] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState<boolean>(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="cp-page">
      <SectionHeading eyebrow="Get in touch" title="Visit, write, or call" />
      <div className="cp-contact-grid">
        <div className="cp-contact-info">
          <div className="cp-contact-row">
            <MapPin size={17} strokeWidth={1.8} />
            <div>
              <strong>Office</strong>
              <p>L-231,R.R.I.T Colony,Sundargarh,770002</p>
            </div>
          </div>
          <div className="cp-contact-row">
            <Phone size={17} strokeWidth={1.8} />
            <div>
              <strong>Phone</strong>
              <p>+91 671 234 5678</p>
            </div>
          </div>
          <div className="cp-contact-row">
            <Mail size={17} strokeWidth={1.8} />
            <div>
              <strong>Email</strong>
              <p>editorial@chetanapublication.example</p>
            </div>
          </div>
          <div className="cp-contact-row">
            <Clock size={17} strokeWidth={1.8} />
            <div>
              <strong>Hours</strong>
              <p>Mon–Sat, 10:00–18:00</p>
            </div>
          </div>
        </div>

        <form className="cp-form" onSubmit={submit}>
          {sent ? (
            <div className="cp-form-sent">
              <Send size={22} strokeWidth={1.6} />
              <h3>Message noted</h3>
              <p>Thank you — someone from our editorial desk will write back shortly.</p>
              <button
                type="button"
                className="cp-btn cp-btn-ghost"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <label className="cp-field">
                <span>Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                />
              </label>
              <label className="cp-field">
                <span>Email</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </label>
              <label className="cp-field">
                <span>Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Manuscript queries, school orders, or press enquiries…"
                />
              </label>
              <button type="submit" className="cp-btn cp-btn-primary">
                Send message <ArrowRight size={15} strokeWidth={2} />
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   BOOK MODAL
--------------------------------------------------------------------- */

function BookModal({ book, onClose }: { book: Book | null; onClose: () => void }) {
  if (!book) return null;
  return (
    <div className="cp-modal-backdrop" onClick={onClose}>
      <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cp-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} strokeWidth={2} />
        </button>
        <span className="cp-mono cp-code">{book.code}</span>
        {book.govt && (
          <span className="cp-tag cp-tag-govt" style={{ marginTop: 10 }}>
            <Landmark size={11} strokeWidth={2} /> Govt. Approved
          </span>
        )}
        <h2 className="cp-h2 cp-odia" style={{ marginTop: 10 }}>
          {book.title}
        </h2>
        <p className="cp-book-sub" style={{ fontSize: 15 }}>
          {book.sub}
        </p>
        <div className="cp-dotted-row" style={{ margin: "18px 0" }}>
          <span>{book.author}</span>
          <span className="cp-dots" />
          <span className="cp-mono">₹{book.price}</span>
        </div>
        <p className="cp-lead" style={{ fontSize: 16 }}>
          {book.blurb}
        </p>
        <div className="cp-modal-meta">
          <span>
            <Star size={13} strokeWidth={2} /> {book.category}
          </span>
          <span>Published {book.year}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------
   SHELL
--------------------------------------------------------------------- */

export default function ChetanaPublicationSite() {
  const [page, setPage] = useState<PageId>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  useEffect(() => {
    const linkDefs: Array<{ rel: string; href: string; crossOrigin?: string }> = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Source+Serif+4:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+Oriya:wght@400;500;600;700&display=swap",
      },
    ];
    const created = linkDefs.map((def) => {
      const el = document.createElement("link");
      el.rel = def.rel;
      el.href = def.href;
      if (def.crossOrigin) el.crossOrigin = def.crossOrigin;
      document.head.appendChild(el);
      return el;
    });
    return () => created.forEach((el) => document.head.removeChild(el));
  }, []);

  function go(id: PageId) {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="cp-root">
      <style>{`
        .cp-root {
          --paper: #F6EFDD;
          --paper-dark: #EEE2C4;
          --ink: #2A1F14;
          --ink-soft: #5B4E3D;
          --rust: #9C3B26;
          --rust-dark: #7E2E1C;
          --gold: #B4863A;
          --teal: #1F4A45;
          --line: #D8C9A3;
          background: var(--paper);
          color: var(--ink);
          font-family: 'Source Serif 4', Georgia, serif;
          min-height: 100vh;
          line-height: 1.55;
        }
        .cp-root * { box-sizing: border-box; }
        .cp-mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.02em; }
        .cp-odia { font-family: 'Noto Sans Oriya', 'Source Serif 4', serif; }

        .cp-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 32px; border-bottom: 1px solid var(--line);
          position: sticky; top: 0; background: var(--paper); z-index: 20;
        }
        .cp-brand { display: flex; align-items: center; gap: 10px; cursor: pointer; background: none; border: none; padding: 0; }
        .cp-brand-seal { color: var(--rust); }
        .cp-brand-text { display: flex; flex-direction: column; align-items: flex-start; }
        .cp-brand-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 19px; color: var(--ink); }
        .cp-brand-sub { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-soft); }

        .cp-nav-desktop { display: flex; gap: 6px; align-items: center; }
        .cp-nav-link {
          background: none; border: none; cursor: pointer; font-family: 'Source Serif 4', serif;
          font-size: 15px; color: var(--ink-soft); padding: 8px 14px; border-radius: 3px; position: relative;
        }
        .cp-nav-link:hover { color: var(--ink); }
        .cp-nav-link-active { color: var(--rust); font-weight: 600; }
        .cp-nav-link-active::after {
          content: ""; position: absolute; left: 14px; right: 14px; bottom: 2px; height: 2px; background: var(--rust);
        }
        .cp-menu-btn { display: none; background: none; border: 1px solid var(--line); border-radius: 4px; padding: 8px; cursor: pointer; color: var(--ink); }
        .cp-mobile-nav { display: none; flex-direction: column; padding: 8px 32px 20px; border-bottom: 1px solid var(--line); background: var(--paper); }
        .cp-mobile-nav button { text-align: left; padding: 12px 0; background: none; border: none; font-family: 'Source Serif 4', serif; font-size: 16px; color: var(--ink); border-bottom: 1px solid var(--line); }
        .cp-mobile-nav button:last-child { border-bottom: none; }

        @media (max-width: 820px) {
          .cp-nav-desktop { display: none; }
          .cp-menu-btn { display: inline-flex; }
          .cp-mobile-nav.open { display: flex; }
        }

        .cp-eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--rust); margin-bottom: 12px;
        }
        .cp-h1 { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(34px, 5vw, 54px); line-height: 1.08; margin: 0 0 18px; color: var(--ink); }
        .cp-h1-accent { color: var(--rust); }
        .cp-h2 { font-family: 'Fraunces', serif; font-weight: 600; font-size: clamp(26px, 3.4vw, 34px); margin: 0 0 8px; color: var(--ink); }
        .cp-h3 { font-family: 'Fraunces', serif; font-weight: 600; font-size: 22px; margin: 48px 0 20px; color: var(--ink); }
        .cp-lead { font-size: 17px; color: var(--ink-soft); max-width: 54ch; }
        .cp-hero-tagline { font-style: italic; font-size: 17px; color: var(--teal); margin: 0 0 16px; }

        .cp-section-heading { max-width: 640px; margin-bottom: 36px; }
        .cp-section-sub { color: var(--ink-soft); font-size: 15px; margin-top: 6px; }

        .cp-hero {
          display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 40px; align-items: center;
          padding: 64px 32px 56px; max-width: 1180px; margin: 0 auto;
        }
        .cp-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 26px; }
        .cp-hero-right { position: relative; display: flex; align-items: center; justify-content: center; min-height: 240px; }
        .cp-hero-seal-wrap { color: var(--gold); opacity: 0.9; z-index: 2; }
        .cp-hero-stack { position: absolute; display: flex; }
        .cp-spine { width: 46px; height: 190px; border-radius: 3px; box-shadow: 2px 2px 0 rgba(42,31,20,0.15); }

        .cp-btn {
          display: inline-flex; align-items: center; gap: 8px; font-family: 'Source Serif 4', serif;
          font-size: 15px; padding: 12px 20px; border-radius: 3px; cursor: pointer; border: 1px solid transparent;
        }
        .cp-btn-primary { background: var(--rust); color: var(--paper); }
        .cp-btn-primary:hover { background: var(--rust-dark); }
        .cp-btn-ghost { background: transparent; border-color: var(--ink); color: var(--ink); }
        .cp-btn-ghost:hover { background: var(--paper-dark); }

        .cp-stats {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line);
          border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); max-width: 1180px; margin: 0 auto;
        }
        .cp-stat { background: var(--paper); padding: 28px 20px; display: flex; flex-direction: column; gap: 4px; }
        .cp-stat-n { font-size: 30px; color: var(--rust); }
        .cp-stat-l { font-size: 13px; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.06em; }

        .cp-section { max-width: 1180px; margin: 0 auto; padding: 64px 32px; }
        .cp-page { max-width: 1180px; margin: 0 auto; padding: 56px 32px 80px; }

        .cp-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .cp-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .cp-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        @media (max-width: 980px) { .cp-grid-4 { grid-template-columns: repeat(2, 1fr); } .cp-grid-3 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .cp-grid-4, .cp-grid-3, .cp-grid-2 { grid-template-columns: 1fr; } .cp-hero { grid-template-columns: 1fr; padding-top: 40px; } }

        .cp-card { background: var(--paper); border: 1px solid var(--line); border-radius: 4px; padding: 20px; text-align: left; }
        .cp-book-card { cursor: pointer; display: flex; flex-direction: column; gap: 8px; }
        .cp-book-card:hover { border-color: var(--rust); box-shadow: 3px 3px 0 var(--line); }
        .cp-book-card-top { display: flex; justify-content: space-between; align-items: center; }
        .cp-code { font-size: 11px; color: var(--ink-soft); }
        .cp-book-title { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 600; margin: 0; }
        .cp-book-sub { font-size: 13px; color: var(--ink-soft); margin: 0; }
        .cp-book-card-bottom { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; }

        .cp-dotted-row { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--ink-soft); }
        .cp-dots { flex: 1; border-bottom: 1px dotted var(--line); height: 1px; margin-bottom: 4px; }

        .cp-tag { display: inline-flex; align-items: center; gap: 4px; font-size: 11px; padding: 4px 8px; border-radius: 20px; background: var(--paper-dark); color: var(--ink-soft); }
        .cp-tag-govt { background: rgba(31,74,69,0.12); color: var(--teal); }

        .cp-inline-link { display: inline-flex; align-items: center; gap: 5px; color: var(--rust); font-size: 13px; background: none; border: none; cursor: pointer; padding: 0; font-family: 'Source Serif 4', serif; }
        .cp-inline-link-lg { font-size: 15px; }
        .cp-center-link { display: flex; justify-content: center; margin-top: 30px; }

        .cp-govt-section { background: var(--paper-dark); border-radius: 6px; }
        .cp-govt-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 24px; }
        .cp-govt-panel { background: var(--paper); border: 1px solid var(--line); border-radius: 4px; padding: 24px; display: flex; flex-direction: column; gap: 14px; color: var(--teal); }
        .cp-govt-panel p { color: var(--ink-soft); font-size: 14px; margin: 0; }
        .cp-govt-list { margin: 0; padding-left: 18px; font-size: 13px; color: var(--ink-soft); display: flex; flex-direction: column; gap: 6px; }
        @media (max-width: 820px) { .cp-govt-grid { grid-template-columns: 1fr; } }

        .cp-quote-section { max-width: 720px; margin: 0 auto; padding: 30px 32px 80px; text-align: center; color: var(--rust); display: flex; flex-direction: column; align-items: center; gap: 16px; }
        .cp-quote { font-family: 'Fraunces', serif; font-style: italic; font-size: 22px; color: var(--ink); line-height: 1.5; }
        .cp-quote-attr { font-size: 12px; color: var(--ink-soft); }

        .cp-catalog-controls { display: flex; justify-content: space-between; align-items: center; gap: 20px; flex-wrap: wrap; margin-bottom: 30px; }
        .cp-search { display: flex; align-items: center; gap: 8px; border: 1px solid var(--line); border-radius: 4px; padding: 10px 14px; background: var(--paper); min-width: 240px; color: var(--ink-soft); }
        .cp-search input { border: none; outline: none; background: none; font-family: 'Source Serif 4', serif; font-size: 14px; width: 100%; color: var(--ink); }
        .cp-chips { display: flex; gap: 8px; flex-wrap: wrap; }
        .cp-chip { border: 1px solid var(--line); background: var(--paper); border-radius: 20px; padding: 7px 14px; font-size: 13px; cursor: pointer; color: var(--ink-soft); font-family: 'Source Serif 4', serif; }
        .cp-chip-active { background: var(--ink); border-color: var(--ink); color: var(--paper); }
        .cp-empty { color: var(--ink-soft); padding: 40px 0; text-align: center; }

        .cp-author-card { display: flex; flex-direction: column; gap: 8px; }
        .cp-author-mark { width: 42px; height: 42px; border-radius: 50%; background: var(--paper-dark); display: flex; align-items: center; justify-content: center; font-size: 16px; color: var(--rust); }
        .cp-author-name { font-family: 'Fraunces', serif; font-size: 17px; margin: 4px 0 0; }
        .cp-author-role { font-size: 12px; color: var(--ink-soft); text-transform: uppercase; letter-spacing: 0.04em; }
        .cp-author-bio { font-size: 14px; color: var(--ink-soft); margin: 4px 0 0; }

        .cp-about-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px; align-items: start; margin-bottom: 10px; }
        .cp-about-side { background: var(--paper-dark); border-radius: 4px; padding: 20px; color: var(--teal); display: flex; flex-direction: column; gap: 10px; }
        .cp-about-side p { color: var(--ink-soft); font-size: 14px; margin: 0; }
        @media (max-width: 820px) { .cp-about-grid { grid-template-columns: 1fr; } }

        .cp-timeline { display: flex; flex-direction: column; }
        .cp-timeline-row { display: grid; grid-template-columns: 60px 20px 1fr; align-items: start; padding: 14px 0; border-bottom: 1px solid var(--line); }
        .cp-timeline-year { color: var(--rust); font-size: 13px; }
        .cp-timeline-line { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); margin-top: 6px; justify-self: center; }
        .cp-timeline-row p { margin: 0; font-size: 14px; color: var(--ink-soft); }

        .cp-value-card { display: flex; flex-direction: column; gap: 8px; color: var(--rust); }
        .cp-value-card h4 { font-family: 'Fraunces', serif; margin: 6px 0 0; color: var(--ink); font-size: 16px; }
        .cp-value-card p { font-size: 13px; color: var(--ink-soft); margin: 0; }

        .cp-contact-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 40px; }
        .cp-contact-info { display: flex; flex-direction: column; gap: 22px; }
        .cp-contact-row { display: flex; gap: 12px; color: var(--rust); }
        .cp-contact-row strong { display: block; font-family: 'Fraunces', serif; font-size: 14px; color: var(--ink); }
        .cp-contact-row p { margin: 2px 0 0; font-size: 14px; color: var(--ink-soft); }
        @media (max-width: 820px) { .cp-contact-grid { grid-template-columns: 1fr; } }

        .cp-form { display: flex; flex-direction: column; gap: 16px; background: var(--paper-dark); padding: 26px; border-radius: 6px; }
        .cp-field { display: flex; flex-direction: column; gap: 6px; font-size: 13px; color: var(--ink-soft); }
        .cp-field input, .cp-field textarea {
          border: 1px solid var(--line); border-radius: 4px; padding: 10px 12px; font-family: 'Source Serif 4', serif;
          font-size: 14px; background: var(--paper); color: var(--ink); resize: vertical;
        }
        .cp-field input:focus, .cp-field textarea:focus { outline: 2px solid var(--rust); outline-offset: 1px; }
        .cp-form-sent { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; color: var(--teal); padding: 10px 0; }
        .cp-form-sent h3 { font-family: 'Fraunces', serif; margin: 4px 0 0; color: var(--ink); }
        .cp-form-sent p { color: var(--ink-soft); font-size: 14px; margin: 0 0 10px; }

        .cp-modal-backdrop { position: fixed; inset: 0; background: rgba(42,31,20,0.5); display: flex; align-items: center; justify-content: center; z-index: 50; padding: 20px; }
        .cp-modal { background: var(--paper); max-width: 480px; width: 100%; border-radius: 6px; padding: 30px; position: relative; }
        .cp-modal-close { position: absolute; top: 16px; right: 16px; background: none; border: none; cursor: pointer; color: var(--ink-soft); }
        .cp-modal-meta { display: flex; gap: 16px; font-size: 12px; color: var(--ink-soft); border-top: 1px solid var(--line); padding-top: 14px; }
        .cp-modal-meta span { display: inline-flex; align-items: center; gap: 4px; }

        .cp-footer { border-top: 1px solid var(--line); padding: 40px 32px; margin-top: 40px; }
        .cp-footer-inner { max-width: 1180px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .cp-footer-nav { display: flex; gap: 18px; flex-wrap: wrap; }
        .cp-footer-nav button { background: none; border: none; cursor: pointer; color: var(--ink-soft); font-family: 'Source Serif 4', serif; font-size: 13px; }
        .cp-footer-copy { font-size: 12px; color: var(--ink-soft); }
      `}</style>

      <header className="cp-topbar">
        <button className="cp-brand" onClick={() => go("home")}>
          <span className="cp-brand-seal">
            <Seal size={40} />
          </span>
          <span className="cp-brand-text">
            <span className="cp-brand-name">Chetana Publication</span>
            <span className="cp-brand-sub">Sundargarh · Est. 1982</span>
          </span>
        </button>
        <nav className="cp-nav-desktop">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`cp-nav-link ${page === n.id ? "cp-nav-link-active" : ""}`}
              onClick={() => go(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <button className="cp-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>
      <div className={`cp-mobile-nav ${menuOpen ? "open" : ""}`}>
        {NAV.map((n) => (
          <button key={n.id} onClick={() => go(n.id)}>
            {n.label}
          </button>
        ))}
      </div>

      <main>
        {page === "home" && <HomePage go={go} openBook={setActiveBook} />}
        {page === "books" && <BooksPage openBook={setActiveBook} />}
        {page === "authors" && <AuthorsPage />}
        {page === "about" && <AboutPage />}
        {page === "contact" && <ContactPage />}
      </main>

      <footer className="cp-footer">
        <div className="cp-footer-inner">
          <span className="cp-footer-copy">
            © {new Date().getFullYear()} Chetana Publication, Sundargarh, Odisha. All rights reserved.
          </span>
          <nav className="cp-footer-nav">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => go(n.id)}>
                {n.label}
              </button>
            ))}
          </nav>
        </div>
      </footer>

      <BookModal book={activeBook} onClose={() => setActiveBook(null)} />
    </div>
  );
}