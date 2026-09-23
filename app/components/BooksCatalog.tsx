"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { BOOKS, CATEGORIES } from "../data";
import BookGrid from "./BookGrid";

export default function BooksCatalog() {
  const [cat, setCat] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    return BOOKS.filter((b) => {
      const catOk = cat === "All" || b.category === cat;
      const q = query.trim().toLowerCase();
      const qOk =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.sub.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [cat, query]);

  return (
    <>
      <div className="cp-catalog-controls">
        <div className="cp-search">
          <Search size={15} strokeWidth={2} />
          <input
            type="text"
            placeholder="Search by title or author…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search books"
          />
        </div>
        <div className="cp-chips">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`cp-chip ${cat === c ? "cp-chip-active" : ""}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="cp-empty">No titles match that search. Try another word or category.</p>
      ) : (
        <BookGrid books={filtered} />
      )}
    </>
  );
}
