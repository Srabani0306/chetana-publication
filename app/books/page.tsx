import type { Metadata } from "next";
import { SITE } from "../site-config";
import { SectionHeading } from "../components/Primitives";
import BooksCatalog from "../components/BooksCatalog";

export const metadata: Metadata = {
  title: "Books Catalogue",
  description: `Books published by ${SITE.name} (${SITE.alias}), ${SITE.city} — fiction, Odia poetry, children's books and government-approved textbooks.`,
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <div className="cp-page">
      <SectionHeading
        as="h1"
        eyebrow="Catalogue"
        title="Every book in print"
        sub="Search by title or author, or filter by category."
      />
      <BooksCatalog />
    </div>
  );
}
