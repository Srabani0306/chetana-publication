"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { IT_SITE, SITE } from "../site-config";
import { IT_NAV } from "./it-data";

export default function ItHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/it" ? pathname === "/it" : pathname.startsWith(href));

  return (
    <header className="it-header">
      <div className="it-header-inner">
        <Link href="/it" className="it-brand" onClick={() => setOpen(false)}>
          <span className="it-brand-mark">CP</span>
          <span className="it-brand-text">
            <strong>{SITE.name}</strong>
            <span>Software · Web · {IT_SITE.short}</span>
          </span>
        </Link>

        <nav className="it-nav" aria-label="IT Department">
          {IT_NAV.map((n) => (
            <Link key={n.href} href={n.href} className={isActive(n.href) ? "active" : ""}>
              {n.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="it-back">
          Printing &amp; Publishing <ArrowUpRight size={14} />
        </Link>

        <button className="it-menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className={`it-mobile-nav ${open ? "open" : ""}`} aria-label="IT Department mobile">
        {IT_NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </Link>
        ))}
        <Link href="/" onClick={() => setOpen(false)}>
          ← Printing &amp; Publishing site
        </Link>
      </nav>
    </header>
  );
}
