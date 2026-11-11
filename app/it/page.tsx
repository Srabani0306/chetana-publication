import Link from "next/link";
import { ArrowRight, Boxes, HeartPulse, Smartphone, Globe, GraduationCap } from "lucide-react";
import { IT_PROCESS, IT_SERVICES, IT_SITE, SITE } from "../site-config";
import { CountUp, Reveal } from "../components/Motion";
import { IT_PRODUCTS } from "./it-data";
import { CtaBand, ProductCard, ProjectRows, SectionHead, ServiceRow } from "./ItBits";

export default function ItHome() {
  return (
    <div className="it-wrap">
      <section className="it-hero">
        <div className="it-hero-grid">
          <div>
            <span className="it-pill cp-rise">
              <i /> Now open · {SITE.city}, {SITE.state}
            </span>
            <h1 className="it-h1 cp-rise" style={{ "--delay": "100ms" } as React.CSSProperties}>
              Software &amp; digital teams for <span className="dim">every part of your institution.</span>
            </h1>
            <p className="it-lead cp-rise" style={{ "--delay": "220ms" } as React.CSSProperties}>
              {IT_SITE.name} builds websites, apps and management systems — HRMS, inventory, library, laboratory,
              nursing home, school &amp; college and printing press — backed by {SITE.name}&apos;s decades of trust.
            </p>
            <div className="it-actions cp-rise" style={{ "--delay": "340ms" } as React.CSSProperties}>
              <Link href="/it/products" className="it-btn it-btn-dark">
                Explore products <ArrowRight size={15} />
              </Link>
              <Link href="/it/services" className="it-btn it-btn-light">
                Our services
              </Link>
            </div>
          </div>

          <div className="it-hero-art" aria-hidden="true">
            <div className="it-orb" />
            <div className="it-float"><span className="ic" style={{ background: "#115E56" }}><Globe size={17} /></span>Web apps</div>
            <div className="it-float"><span className="ic" style={{ background: "#C2327A" }}><Smartphone size={17} /></span>Mobile apps</div>
            <div className="it-float"><span className="ic" style={{ background: "#1C8FB8" }}><Boxes size={17} /></span>Inventory</div>
            <div className="it-float"><span className="ic" style={{ background: "#B8860B" }}><GraduationCap size={17} /></span>School ERP</div>
            <div className="it-float"><span className="ic" style={{ background: "#0E1116" }}><HeartPulse size={17} /></span>Nursing home</div>
          </div>
        </div>

        <div className="it-stats">
          {[
            { n: IT_SERVICES.length, l: "IT services" },
            { n: IT_PRODUCTS.length, l: "software products" },
            { n: new Date().getFullYear() - SITE.govtSince, s: "+", l: "years of business trust" },
            { n: 1, l: "local team, one roof" },
          ].map((s) => (
            <div className="it-stat" key={s.l}>
              <b>
                <CountUp to={s.n} suffix={s.s ?? ""} />
              </b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="it-section">
        <SectionHead
          eyebrow="Services"
          title="Senior help for every layer of your digital work."
          href="/it/services"
          hrefLabel="All services"
        />
        <div className="it-rows">
          {IT_SERVICES.map((s, i) => (
            <ServiceRow key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="it-section">
        <SectionHead
          eyebrow="Products"
          title="Ready-to-customise software for your institution."
          sub="Choose a product, we configure and deploy it for you."
          href="/it/products"
          hrefLabel="All products"
        />
        <div className="it-grid">
          {IT_PRODUCTS.slice(0, 6).map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </section>

      <section className="it-section">
        <SectionHead eyebrow="Projects" title="What we are building." href="/it/projects" hrefLabel="All projects" />
        <ProjectRows limit={3} />
      </section>

      <section className="it-section">
        <SectionHead eyebrow="How we work" title="Simple, transparent process." />
        <div className="it-steps">
          {IT_PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 100} className="it-step">
              <b>{p.step}</b>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
