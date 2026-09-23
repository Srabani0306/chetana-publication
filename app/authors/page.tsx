import type { Metadata } from "next";
import { AUTHORS } from "../data";
import { SITE } from "../site-config";
import { SectionHeading } from "../components/Primitives";
import { Reveal } from "../components/Motion";

export const metadata: Metadata = {
  title: "Our Authors",
  description: `Writers publishing with ${SITE.name} (${SITE.alias}), ${SITE.city}, ${SITE.state}.`,
  alternates: { canonical: "/authors" },
};

export default function AuthorsPage() {
  return (
    <div className="cp-page">
      <SectionHeading
        as="h1"
        eyebrow="Our writers"
        title="The people behind the list"
        sub="Six of the authors currently publishing with Chetana."
      />
      <div className="cp-grid-3">
        {AUTHORS.map((a, i) => (
          <Reveal className="cp-card cp-author-card" key={a.name} delay={(i % 3) * 110}>
            <div className="cp-author-mark cp-mono">{a.name.charAt(0)}</div>
            <h3 className="cp-author-name">{a.name}</h3>
            <p className="cp-author-role">
              {a.role} · with Chetana since {a.since}
            </p>
            <p className="cp-author-bio">{a.bio}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
