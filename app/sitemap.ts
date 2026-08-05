import type { MetadataRoute } from "next";

const SITE = "https://www.openbrew.ai";

/**
 * The app subdomains are separate deployments that nothing else links to in
 * crawlable markup, so listing them here is Google's main route to finding
 * them. Cross-host entries are only honored when every host is verified in
 * Search Console — a DNS-verified Domain property on openbrew.ai covers all
 * of these at once.
 */
const APP_SUBDOMAINS = [
  "https://filebuff.openbrew.ai",
  "https://motionbuff.openbrew.ai",
];

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
      url: `${SITE}/sponsor`,
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
    ...APP_SUBDOMAINS.map((url) => ({
      url,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
