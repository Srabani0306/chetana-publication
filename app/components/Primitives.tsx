import Image from "next/image";

export function Seal({ size = 56 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Chetana Publication Logo"
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="cp-eyebrow">{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <div className="cp-section-heading">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="cp-h2">{title}</Heading>
      {sub && <p className="cp-section-sub">{sub}</p>}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
