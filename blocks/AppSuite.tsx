import Link from "next/link";
import styles from "./AppSuite.module.css";
import Section, { T_Background, T_Pattern } from "@/components/Section";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";
import { APPS } from "@/data/apps";

const SITE = "https://www.openbrew.ai";

/**
 * The suite of OpenBrew apps, rendered as real in-body anchors to each
 * subdomain. The header's apps menu links to the same places but is
 * display:none until opened — this section is the crawlable, human-visible
 * path between openbrew.ai and the app subdomains, and the JSON-LD below
 * states the same relationship in a machine-readable form.
 */
export default function AppSuite(p: {
  id?: string;
  className?: string;
  title: string;
  subtitle: string;
  background?: T_Background;
  pattern?: T_Pattern;
  accentLine?: "top" | "bottom" | "both" | "none";
}) {
  const className = cx(styles.container, p.className);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OpenBrew.ai",
    url: SITE,
    description:
      "OpenBrew.ai builds a suite of AI-native apps that run on your own hardware and work together to get work done.",
    makesOffer: APPS.map((app) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: app.name,
        applicationCategory: "BusinessApplication",
        description: app.description,
        url: app.external ? app.href : SITE,
        operatingSystem: "Windows, macOS, Linux",
        publisher: { "@type": "Organization", name: "OpenBrew.ai", url: SITE },
      },
    })),
  };

  return (
    <Section
      id={p.id}
      className={className}
      background={p.background}
      pattern={p.pattern}
      accentLine={p.accentLine}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className={styles.header}>
        <div className={styles.accentLine} />
        <h2 className={cx(lilita_one.className, styles.title)}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ul className={styles.apps}>
        {APPS.map((app) => {
          const linkProps = app.external
            ? { target: "_blank", rel: "noopener" }
            : {};

          return (
            <li key={app.id} className={styles.app}>
              <div className={styles["app-head"]}>
                <span className={cx(styles["app-icon"], app.iconBg)}>
                  {app.icon}
                </span>
                <div>
                  <h3 className={styles["app-name"]}>{app.name}</h3>
                  <p className={styles["app-tagline"]}>{app.tagline}</p>
                </div>
              </div>

              <p className={styles["app-text"]}>{app.description}</p>

              {app.comingSoon ? (
                <span className={styles["app-badge"]}>Coming soon</span>
              ) : (
                <Link
                  href={app.href}
                  className={styles["app-link"]}
                  {...linkProps}
                >
                  Visit {app.name}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
