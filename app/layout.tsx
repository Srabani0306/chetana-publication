import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chetana Publication",
  description: "Publishers of fiction, poetry, and books since 1982.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}