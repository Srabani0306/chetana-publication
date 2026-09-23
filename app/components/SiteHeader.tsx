"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "../site-config";
import { Seal } from "./Primitives";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className={`cp-topbar ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="cp-brand" onClick={() => setMenuOpen(false)}>
          <span className="cp-brand-seal">
            <Seal size={40} />
          </span>
          <span className="cp-brand-text">
            <span className="cp-brand-name">{SITE.name}</span>
            <span className="cp-brand-sub">
              {SITE.alias} · {SITE.city}
            </span>
          </span>
        </Link>
        <nav className="cp-nav-desktop" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`cp-nav-link ${isActive(n.href) ? "cp-nav-link-active" : ""}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="cp-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>
      <nav className={`cp-mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
            {n.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
