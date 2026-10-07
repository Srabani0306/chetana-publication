import type { Metadata } from "next";
import Image from "next/image";
import { SITE, TEAM } from "../site-config";
import { SectionHeading } from "../components/Primitives";
import { Reveal } from "../components/Motion";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the team behind ${SITE.name} (${SITE.alias}), ${SITE.city}, ${SITE.state}: our founder, co-founder, accountant and IT department head.`,
  alternates: { canonical: "/our-team" },
};

const initials = (name: string) =>
  name
    .replace(/^(Mr|Mrs|Ms|Dr)\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function OurTeamPage() {
  return (
    <div className="cp-page">
      <Reveal>
        <SectionHeading
          as="h1"
          eyebrow={`${SITE.name} · ${SITE.alias}`}
          title="The people behind the press"
          sub={`From the founders to accounts and IT — the team that keeps ${SITE.name} running in ${SITE.city}.`}
        />
      </Reveal>
      <div className="cp-team-grid">
        {TEAM.map((m, i) => (
          <Reveal key={m.role} delay={(i % 2) * 110} className="cp-card cp-team-card">
            <div className="cp-team-photo">
              {m.image ? (
                <Image src={m.image} alt={`${m.name}, ${m.role} of ${SITE.name}`} fill sizes="84px" />
              ) : (
                <span aria-hidden="true">{initials(m.name)}</span>
              )}
            </div>
            <div>
              <h3>{m.name}</h3>
              <p className="cp-team-role">{m.role}</p>
              <p>{m.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
