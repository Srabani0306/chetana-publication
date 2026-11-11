import type { MetadataRoute } from "next";
import { IT_SERVICES, SITE } from "./site-config";
import { IT_PRODUCTS } from "./it/it-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/proprietor", priority: 0.9, changeFrequency: "monthly" },
    { path: "/our-team", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/books", priority: 0.7, changeFrequency: "weekly" },
    { path: "/authors", priority: 0.5, changeFrequency: "monthly" },
  ];

  const itRoutes = [
    "/it", "/it/services", "/it/products", "/it/projects", "/it/contact",
    ...IT_SERVICES.map((s) => `/it/services/${s.slug}`),
    ...IT_PRODUCTS.map((p) => `/it/products/${p.slug}`),
  ].map((path) => ({ path, priority: path === "/it" ? 0.9 : 0.7, changeFrequency: "monthly" as const }));

  return [...routes, ...itRoutes].map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
