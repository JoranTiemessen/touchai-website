import type { MetadataRoute } from "next";
import { getPublishedPosts } from "./blog/posts";

// Vernieuw elk uur zodat nieuw gepubliceerde posts vanzelf in de sitemap komen.
export const revalidate = 3600;

const BASE = "https://www.touchaiagency.com";
// Vaste datum van de laatste inhoudelijke wijziging; werk dit bij als de pagina's veranderen.
const SITE_UPDATED = new Date("2026-10-13");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ["", "/about", "/blog", "/privacy", "/terms"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: SITE_UPDATED,
    priority: path === "" ? 1 : 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
