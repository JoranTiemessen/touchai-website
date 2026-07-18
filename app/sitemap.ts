import type { MetadataRoute } from "next";
import { getPublishedPosts } from "./blog/posts";

// Vernieuw elk uur zodat nieuw gepubliceerde posts vanzelf in de sitemap komen.
export const revalidate = 3600;

const BASE = "https://www.touchaiagency.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/about", "/blog", "/privacy", "/terms"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
