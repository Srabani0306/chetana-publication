import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { IT_SERVICES, SITE } from "../../../site-config";
import { CtaBand } from "../../ItBits";
import { JsonLd } from "../../../components/Primitives";
import { breadcrumbJsonLd } from "../../../seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return IT_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = IT_SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.name, description: s.description, alternates: { canonical: `/it/services/${s.slug}` } };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const s = IT_SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <div className="it-wrap">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            description: s.description,
            serviceType: s.name,
            url: `${SITE.url}/it/services/${s.slug}`,
            provider: { "@id": `${SITE.url}/#it` },
            areaServed: [{ "@type": "AdministrativeArea", name: "Sundargarh" }, { "@type": "State", name: "Odisha" }],
          },
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "IT Services", path: "/it" },
            { name: s.name, path: `/it/services/${s.slug}` },
          ]),
        ]}
      />
      <section className="it-hero">
        <Link href="/it/services" className="it-crumb">
          <ArrowLeft size={14} /> All services
        </Link>
        <h1 className="it-h1" style={{ fontSize: "clamp(34px,5vw,64px)" }}>{s.name}</h1>
        <p className="it-lead">{s.description}</p>
        <div className="it-detail">
          <div className="it-panel">
            <h3>What&apos;s included</h3>
            <ul className="it-list">
              {s.features.map((f) => (
                <li key={f}>
                  <Check size={16} /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="it-detail-img">
            <Image src={s.image} alt={`${s.name} — ${SITE.name} IT Services`} fill sizes="(max-width:900px) 100vw, 440px" priority />
          </div>
        </div>
      </section>
      <CtaBand title={`Need ${s.name.toLowerCase()}?`} />
    </div>
  );
}
