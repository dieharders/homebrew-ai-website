import type { MetadataRoute } from "next";

const SITE = "https://www.openbrew.ai";

/**
 * This sitemap lists www.openbrew.ai URLs ONLY. The app subdomains
 * (filebuff.openbrew.ai, motionbuff.openbrew.ai) are deliberately absent:
 * each one now ships its own sitemap, declared in its own robots.txt.
 *
 * Do not re-add them here. Cross-host <loc> entries are only honored when
 * every host is verified with the search engine doing the reading, and that
 * is not portable across engines — Google accepts them under a DNS-verified
 * Domain property, but Bing requires each host verified as its own site in
 * Webmaster Tools and otherwise drops the entries (or flags the whole
 * sitemap as cross-domain). Same-host sitemaps are honored everywhere.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE}/download`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/buy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE}/jobs`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE}/company`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
