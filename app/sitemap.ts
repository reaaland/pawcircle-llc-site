import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site";

const routes = [
  "",
  "/services",
  "/work",
  "/work/minnlawn",
  "/work/pawcircle",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/work/") ? 0.7 : 0.8,
  }));
}
