import type { Metadata } from "next";
import { IT_SITE, SITE } from "../../site-config";
import { CtaBand, ProjectRows } from "../ItBits";

export const metadata: Metadata = {
  title: "Projects",
  description: `Websites and management systems built and in development by ${IT_SITE.name} in ${SITE.city}, Odisha.`,
  alternates: { canonical: "/it/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="it-wrap">
      <section className="it-hero">
        <span className="it-eyebrow">Projects</span>
        <h1 className="it-h1" style={{ marginTop: 14 }}>
          Work we are proud <span className="dim">of — and building.</span>
        </h1>
      </section>
      <div style={{ marginTop: 48, borderTop: "1px solid var(--it-line)" }}>
        <ProjectRows />
      </div>
      <CtaBand />
    </div>
  );
}
