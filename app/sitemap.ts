import type { MetadataRoute } from "next";
import { SITE } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/proprietor", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/books", priority: 0.7, changeFrequency: "weekly" },
    { path: "/authors", priority: 0.5, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
