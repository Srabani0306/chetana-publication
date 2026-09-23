"use client";

import { useState } from "react";
import { ArrowUpRight, Landmark, Star, X } from "lucide-react";
import type { Book } from "../data";

function BookCard({ book, onOpen }: { book: Book; onOpen: (book: Book) => void }) {
  return (
    <button className="cp-card cp-book-card" onClick={() => onOpen(book)}>
      <div className="cp-book-card-top">
        <span className="cp-mono cp-code">{book.code}</span>
        {book.govt && (
          <span className="cp-tag cp-tag-govt">
            <Landmark size={11} strokeWidth={2} /> Govt. Approved
          </span>
        )}
      </div>
      <h3 className="cp-book-title cp-odia">{book.title}</h3>
      <p className="cp-book-sub">{book.sub}</p>
      <div className="cp-dotted-row">
        <span>{book.author}</span>
        <span className="cp-dots" />
        <span className="cp-mono">₹{book.price}</span>
      </div>
      <div className="cp-book-card-bottom">
        <span className="cp-tag">{book.category}</span>
        <span className="cp-inline-link">
          Details <ArrowUpRight size={13} strokeWidth={2} />
        </span>
      </div>
    </button>
  );
}

function BookModal({ book, onClose }: { book: Book | null; onClose: () => void }) {
  if (!book) return null;
  return (
    <div className="cp-modal-backdrop" onClick={onClose}>
      <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cp-modal-close" onClick={onClose} aria-label="Close">
          <X size={18} strokeWidth={2} />
        </button>
        <span className="cp-mono cp-code">{book.code}</span>
        {book.govt && (
          <span className="cp-tag cp-tag-govt" style={{ marginTop: 10 }}>
            <Landmark size={11} strokeWidth={2} /> Govt. Approved
          </span>
        )}
        <h2 className="cp-h2 cp-odia" style={{ marginTop: 10 }}>
          {book.title}
        </h2>
        <p className="cp-book-sub" style={{ fontSize: 15 }}>
          {book.sub}
        </p>
        <div className="cp-dotted-row" style={{ margin: "18px 0" }}>
          <span>{book.author}</span>
          <span className="cp-dots" />
          <span className="cp-mono">₹{book.price}</span>
        </div>
        <p className="cp-lead" style={{ fontSize: 16 }}>
          {book.blurb}
        </p>
        <div className="cp-modal-meta">
          <span>
            <Star size={13} strokeWidth={2} /> {book.category}
          </span>
          <span>Published {book.year}</span>
        </div>
      </div>
    </div>
  );
}

export default function BookGrid({ books, columns = 4 }: { books: Book[]; columns?: 2 | 4 }) {
  const [active, setActive] = useState<Book | null>(null);
  return (
    <>
      <div className={columns === 2 ? "cp-grid-2" : "cp-grid-4"}>
        {books.map((b) => (
          <BookCard key={b.code} book={b} onOpen={setActive} />
        ))}
      </div>
      <BookModal book={active} onClose={() => setActive(null)} />
    </>
  );
}
