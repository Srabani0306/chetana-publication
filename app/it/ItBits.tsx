import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { SITE, type ItService } from "../site-config";
import { Reveal } from "../components/Motion";
import { IT_PROJECTS, SERVICE_ICONS, type ItProduct } from "./it-data";

export function SectionHead({
  eyebrow,
  title,
  sub,
  href,
  hrefLabel,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  href?: string;
  hrefLabel?: string;
}) {
  return (
    <Reveal>
      <div className="it-sec-head">
        <div>
          <span className="it-eyebrow">{eyebrow}</span>
          <h2 className="it-h2">{title}</h2>
          {sub && <p className="it-lead">{sub}</p>}
        </div>
        {href && (
          <Link href={href} className="it-btn it-btn-light">
            {hrefLabel} <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export function ServiceRow({ service, index }: { service: ItService; index: number }) {
  const Icon = SERVICE_ICONS[service.slug];
  return (
    <Reveal delay={(index % 3) * 70}>
      <Link href={`/it/services/${service.slug}`} className="it-row">
        <span className="it-row-ic">{Icon && <Icon size={20} strokeWidth={1.8} />}</span>
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <div className="it-tags">
            {service.features.slice(0, 3).map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>
        <span className="it-view">
          View <ArrowRight size={15} />
        </span>
      </Link>
    </Reveal>
  );
}

export function ProductCard({ product, index }: { product: ItProduct; index: number }) {
  const Icon = product.icon;
  return (
    <Reveal delay={(index % 3) * 90} className="it-card it-prod">
      <div className="it-prod-head">
        <span className="it-prod-tile">
          <Icon size={26} strokeWidth={1.7} />
        </span>
        <div>
          <h3>{product.name}</h3>
          <span className="it-status">{product.status}</span>
        </div>
      </div>
      <p>{product.description}</p>
      <div className="it-chips">
        {product.modules.slice(0, 3).map((m) => (
          <span className="it-chip" key={m}>
            {m.split(" ").slice(0, 3).join(" ")}
          </span>
        ))}
      </div>
      <Link href={`/it/products/${product.slug}`} className="it-open">
        Open <ArrowRight size={14} />
      </Link>
    </Reveal>
  );
}

export function ProjectRows({ limit }: { limit?: number }) {
  const list = limit ? IT_PROJECTS.slice(0, limit) : IT_PROJECTS;
  return (
    <div>
      {list.map((p, i) => (
        <Reveal key={p.title} delay={i * 70}>
          <div className="it-proj">
            <div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="it-tags">
                {[p.type, ...p.tags].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              {p.href && (
                <Link href={p.href} className="it-open" style={{ marginTop: 14 }}>
                  Visit <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
            <span className={`it-badge ${p.status === "In development" ? "dev" : p.status === "Planned" ? "plan" : ""}`}>
              {p.status}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CtaBand({ title = "Have a project in mind?" }: { title?: string }) {
  return (
    <Reveal className="it-cta">
      <h2>{title}</h2>
      <p>Tell us what you need. We reply with a plan, timeline and quote — in English or Odia.</p>
      <div className="it-actions">
        <Link href="/it/contact" className="it-btn it-btn-dark">
          Start a project <ArrowRight size={15} />
        </Link>
        <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="it-btn it-btn-light">
          <Phone size={15} /> {SITE.phone}
        </a>
      </div>
    </Reveal>
  );
}
