import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SITE, type ItService } from "../site-config";
import { Reveal } from "./Motion";

export default function ItServiceCard({
  service,
  index,
  showFeatures = true,
}: {
  service: ItService;
  index: number;
  showFeatures?: boolean;
}) {
  return (
    <Reveal delay={(index % 3) * 110} className="cp-card cp-it-card">
      <div className="cp-it-img">
        <span className="cp-tag">{service.short}</span>
        <Image
          src={service.image}
          alt={`${service.name} by ${SITE.name} IT Department, ${SITE.city}`}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 980px) 50vw, 380px"
        />
      </div>
      <div className="cp-it-body">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        {showFeatures && (
          <ul className="cp-it-features">
            {service.features.map((f) => (
              <li key={f}>
                <Check size={13} strokeWidth={2.5} /> {f}
              </li>
            ))}
          </ul>
        )}
        <Link className="cp-inline-link" href={`/it/services/${service.slug}`}>
          Learn more <ArrowRight size={14} strokeWidth={2} />
        </Link>
      </div>
    </Reveal>
  );
}
