import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { CO_FOUNDER, NAV, PROPRIETOR, SITE } from "../site-config";

export default function PublicationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="cp-root">
      <SiteHeader />
      <main>{children}</main>
      <footer className="cp-footer">
        <div className="cp-footer-inner">
          <span className="cp-footer-copy">
            © {new Date().getFullYear()} {SITE.name} ({SITE.alias}), {SITE.address.street}, {SITE.city},{" "}
            {SITE.state}. Founder & Proprietor: {PROPRIETOR.name}. Co-Founder: {CO_FOUNDER.name}.
          </span>
          <nav className="cp-footer-nav" aria-label="Footer">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
