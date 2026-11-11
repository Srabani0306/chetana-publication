import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Landmark, Quote, UserRound } from "lucide-react";
import { BOOKS } from "../data";
import { CO_FOUNDER, IT_SERVICES, PRINT_SERVICES, PROPRIETOR, SERVICES, SITE } from "../site-config";
import { Eyebrow, SectionHeading } from "../components/Primitives";
import { CountUp, Reveal } from "../components/Motion";
import BookGrid from "../components/BookGrid";
import ItServiceCard from "../components/ItServiceCard";

const CMYK = ["var(--cyan)", "var(--magenta)", "var(--yellow)", "var(--ink)"];
const TICKER_ITEMS = [
  "Our IT Department is now open",
  "Websites · Apps · Training · Digital Marketing",
  "ଆମେ ଏବେ ଡିଜିଟାଲ ଦୁନିଆରେ",
  "Live projects for college students",
];
export default function Home() {
  const govtYears = new Date().getFullYear() - SITE.govtSince;
  const featured = BOOKS.slice(0, 4);
  const govtBooks = BOOKS.filter((b) => b.govt);

  return (
    <div>
      {/* TOP TICKER */}
      <div className="cp-ticker" role="region" aria-label="Announcement: IT Department now open">
        <Link href="/it" className="cp-ticker-badge cp-mono" style={{ textDecoration: "none" }}>
          <i className="cp-ticker-dot" /> NOW OPEN
        </Link>
        <div className="cp-ticker-viewport">
          <div className="cp-ticker-track">
            {[0, 1].map((copy) => (
              <div className="cp-ticker-group" key={copy} aria-hidden={copy === 1}>
                {TICKER_ITEMS.map((t) => (
                  <span className="cp-ticker-item" key={t}>
                    {t}
                    <b className="cp-ticker-sep">✦</b>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* HERO */}
      <section className="cp-hero">
        <div className="cp-blob" style={{ width: 320, height: 320, background: "var(--magenta)", left: -80, top: 20 }} />
        <div className="cp-blob" style={{ width: 260, height: 260, background: "var(--cyan)", right: 40, bottom: 0, animationDelay: "-4s" }} />

        <div className="cp-hero-left">
          <div className="cp-rise" style={{ "--delay": "0ms" } as React.CSSProperties}>
            <Eyebrow>
              {SITE.alias} · {SITE.city}, {SITE.state}
            </Eyebrow>
          </div>
          <h1 className="cp-h1 cp-rise" style={{ "--delay": "120ms" } as React.CSSProperties}>
            Printing &amp;
            <br />
            government works,
            <br />
            <span className="cp-h1-accent">done right for {govtYears}+ years.</span>
          </h1>
          <p className="cp-hero-tagline cp-odia cp-rise" style={{ "--delay": "240ms" } as React.CSSProperties}>
            ଚିନ୍ତାର ଚେତନା, ଶବ୍ଦର ଶକ୍ତି
          </p>
          <p className="cp-lead cp-rise" style={{ "--delay": "340ms" } as React.CSSProperties}>
            {SITE.name} ({SITE.alias}), founded by {PROPRIETOR.name} and {CO_FOUNDER.name}, has handled
            government printing works since {SITE.govtSince} — flex banners, hoardings,
            official forms, registers and textbooks — alongside our own book publication.
          </p>
          <div className="cp-hero-actions cp-rise" style={{ "--delay": "460ms" } as React.CSSProperties}>
            <Link className="cp-btn cp-btn-primary" href="/about">
              Our work &amp; equipment <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <Link className="cp-btn cp-btn-ghost" href="/proprietor">
              <UserRound size={15} strokeWidth={2} /> Meet the proprietor
            </Link>
          </div>
        </div>

        <div className="cp-hero-right cp-rise" style={{ "--delay": "300ms" } as React.CSSProperties}>
          <div className="cp-printer" aria-hidden="true">
            <div className="cp-stamp">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="cp-stamp-circle" d="M60,60 m-48,0 a48,48 0 1,1 96,0 a48,48 0 1,1 -96,0" />
                </defs>
                <text fontSize="10.5" fontFamily="IBM Plex Mono, monospace" letterSpacing="2.4" fill="currentColor">
                  <textPath href="#cp-stamp-circle">GOVT. PRINTING WORKS • SINCE {SITE.govtSince} •</textPath>
                </text>
              </svg>
              <div className="cp-stamp-center">
                <strong>{govtYears}+</strong>
                <span>YEARS</span>
              </div>
            </div>
            <div className="cp-printer-body">
              <div className="cp-printer-head" />
            </div>
            <div className="cp-banner">
              <div className="cp-banner-ink">
                <span className="cp-banner-kicker">{SITE.name} Print</span>
                <span className="cp-banner-title">
                  Banners · Hoardings
                  <br />
                  Govt. Works
                </span>
                <span className="cp-banner-cmyk">
                  {CMYK.map((c) => (
                    <span key={c} style={{ background: c }} />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES MARQUEE */}
      <div className="cp-marquee" aria-label="Our services">
        <div className="cp-marquee-track">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <span className="cp-marquee-item" key={i} aria-hidden={i >= SERVICES.length}>
              <i style={{ background: CMYK[i % 3] }} />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="cp-stats">
        {[
          { n: govtYears, s: "+", l: "years of govt. works" },
          { n: 310, s: "+", l: "titles published" },
          { n: 100, s: "+", l: "govt.-approved books" },
          { n: 6, s: "", l: "printing & finishing machines" },
        ].map((st) => (
          <div className="cp-stat" key={st.l}>
            <span className="cp-stat-n cp-mono">
              <CountUp to={st.n} suffix={st.s} />
            </span>
            <span className="cp-stat-l">{st.l}</span>
          </div>
        ))}
      </section>
      {/* PUBLISHING HOUSE SERVICES */}
      <section className="cp-section" id="services">
        <Reveal>
          <SectionHeading
            eyebrow="Printing & publishing"
            title="What we print and publish"
            sub="Flex, offset, digital and finishing — everything under one roof in Sundargarh."
          />
        </Reveal>
        <div className="cp-equip-grid">
          {PRINT_SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 110} className="cp-card cp-equip-card">
              <div className="cp-equip-img">
                <Image
                  src={s.image}
                  alt={`${s.name} at ${SITE.name} (${SITE.alias}), ${SITE.city}`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 380px"
                />
              </div>
              <div className="cp-equip-body">
                <h3>{s.name}</h3>
                <p>{s.description}</p>
                <ul className="cp-equip-specs">
                  {s.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="cp-center-link">
          <Link className="cp-inline-link cp-inline-link-lg" href="/about#equipment">
            See our machines <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* IT DEPARTMENT */}
      <Reveal as="section" className="cp-ad">
        <div className="cp-ad-inner">
          <div className="cp-ad-badge cp-mono">
            <span className="cp-ad-dot" /> NOW OPEN
          </div>

          <h2 className="cp-ad-title">
            Chetana Publication
            <br />
            <span className="cp-h1-accent">IT Services</span>
          </h2>

          <p className="cp-ad-odia cp-odia">ଆମେ ଏବେ ଡିଜିଟାଲ ଦୁନିଆରେ</p>

          <p className="cp-lead">
            From print to pixels. {SITE.name} now offers technology services, bringing the same
            trust and precision we have shown for {govtYears}+ years to the digital world.
          </p>

          <div className="cp-hero-actions">
            <Link className="cp-btn cp-btn-primary" href="/it">
              Visit IT Department <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <Link className="cp-btn cp-btn-ghost" href="/it/products">
              View software products
            </Link>
          </div>
        </div>

        <div className="cp-ad-art" aria-hidden="true">
          <div className="cp-ad-window">
            <div className="cp-ad-window-bar">
              <i /><i /><i />
            </div>
            <div className="cp-ad-window-body cp-mono">
              <span>&lt;{SITE.alias} /&gt;</span>
              <span className="cp-ad-cursor">_</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* IT SERVICES */}
      <section className="cp-section">
        <Reveal>
          <SectionHeading
            eyebrow="IT Department"
            title="Technology services, under one roof"
            sub="Websites, apps, training and digital marketing — from the team you already trust."
          />
        </Reveal>
        <div className="cp-equip-grid">
          {IT_SERVICES.map((s, i) => (
            <ItServiceCard key={s.slug} service={s} index={i} showFeatures={false} />
          ))}
        </div>
        <div className="cp-center-link">
          <Link className="cp-inline-link cp-inline-link-lg" href="/it/services">
            See all IT services <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>
      </section>
      {/* GOVT BAND */}
      <Reveal className="cp-govt-band">
        <div className="cp-govt-big">
          {govtYears}
          <sup>+</sup>
        </div>
        <div>
          <p className="cp-govt-band-title">Years of trusted government printing works</p>
          <p className="cp-lead">
            Since {SITE.govtSince} we have delivered printing for district offices, government
            departments, schools and public schemes across {SITE.state} — on time, to specification,
            and with proper documentation.
          </p>
          <div className="cp-govt-tags">
            {["Publicity flex & hoardings", "Official forms & registers", "Textbooks", "Scheme banners", "Certificates"].map(
              (t) => (
                <span className="cp-tag cp-tag-govt" key={t}>
                  <Landmark size={11} strokeWidth={2} /> {t}
                </span>
              )
            )}
          </div>
        </div>
      </Reveal>

      {/* FEATURED */}
      <section className="cp-section">
        <Reveal>
          <SectionHeading
            eyebrow="From the catalogue"
            title="Recently on our shelves"
            sub="A working selection from fiction, poetry, and the classroom."
          />
        </Reveal>
        <Reveal delay={120}>
          <BookGrid books={featured} />
        </Reveal>
        <div className="cp-center-link">
          <Link className="cp-inline-link cp-inline-link-lg" href="/books">
            View the full catalogue <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* GOVT WORK */}
      <section className="cp-section cp-govt-section">
        <Reveal>
          <SectionHeading
            eyebrow="Education division"
            title="Trusted by state-board classrooms"
            sub="Textbooks, workbooks and revised curriculum material, printed and delivered for government schools."
          />
        </Reveal>
        <div className="cp-govt-grid">
          <Reveal className="cp-govt-panel">
            <Landmark size={22} strokeWidth={1.6} />
            <p>
              Our government work is ongoing: every academic year we print and revise
              curriculum material to match the latest {SITE.state} syllabus.
            </p>
            <ul className="cp-govt-list">
              <li>Textbooks reviewed by a standing curriculum panel</li>
              <li>Annual syllabus alignment with the Board of Secondary Education, Odisha</li>
              <li>Distribution to schools and district libraries</li>
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <BookGrid books={govtBooks} columns={2} />
          </Reveal>
        </div>
      </section>

      {/* QUOTE */}
      <Reveal as="section" className="cp-quote-section">
        <Quote size={26} strokeWidth={1.4} />
        <p className="cp-quote">&ldquo;{PROPRIETOR.message[0].replace(/^Namaskar\.\s*/, "")}&rdquo;</p>
        <Link href="/proprietor" className="cp-mono cp-quote-attr" style={{ textDecoration: "none" }}>
          — {PROPRIETOR.name}, {PROPRIETOR.role}
        </Link>
      </Reveal>
    </div>
  );
}
