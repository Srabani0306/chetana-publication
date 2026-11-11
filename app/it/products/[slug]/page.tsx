import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { IT_PRODUCTS } from "../../it-data";
import { CtaBand } from "../../ItBits";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return IT_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = IT_PRODUCTS.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.name, description: `${p.tagline} ${p.description}`, alternates: { canonical: `/it/products/${p.slug}` } };
}

export default async function ProductDetail({ params }: Props) {
  const { slug } = await params;
  const p = IT_PRODUCTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const Icon = p.icon;

  return (
    <div className="it-wrap">
      <section className="it-hero">
        <Link href="/it/products" className="it-crumb">
          <ArrowLeft size={14} /> All products
        </Link>
        <div className="it-prod-head" style={{ marginBottom: 20 }}>
          <span className="it-prod-tile" style={{ width: 72, height: 72, borderRadius: 20 }}>
            <Icon size={34} strokeWidth={1.6} />
          </span>
          <span className="it-status">{p.category} · {p.status}</span>
        </div>
        <h1 className="it-h1" style={{ fontSize: "clamp(34px,5vw,64px)" }}>{p.name}</h1>
        <p className="it-lead">{p.tagline} {p.description}</p>

        <div className="it-detail">
          <div className="it-panel">
            <h3>Modules &amp; features</h3>
            <ul className="it-list">
              {p.modules.map((m) => (
                <li key={m}>
                  <Check size={16} /> {m}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="it-panel">
              <h3>Built for</h3>
              <div className="it-chips">
                {p.forWhom.map((w) => (
                  <span className="it-chip" key={w}>{w}</span>
                ))}
              </div>
            </div>
            <div className="it-panel">
              <h3>Technology</h3>
              <div className="it-chips">
                {p.stack.map((t) => (
                  <span className="it-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title={`Interested in ${p.name}?`} />
    </div>
  );
}
