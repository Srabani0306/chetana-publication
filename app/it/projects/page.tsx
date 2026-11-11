import type { Metadata } from "next";
import { CtaBand, ProjectRows } from "../ItBits";

export const metadata: Metadata = {
  title: "Projects",
  description: "Websites and management systems built and in development at Chetana Publication IT Services.",
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
