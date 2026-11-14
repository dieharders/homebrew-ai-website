import Link from "next/link";
import styles from "./AppSuite.module.css";
import Section, { T_Background, T_Pattern } from "@/components/Section";
import HashLink from "@/components/HashLink";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";
import {
  APPS,
  STATUS_LABEL,
  isExternal,
  operatingSystems,
} from "@/data/apps";

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
      "OpenBrew.ai builds agent-native creative apps for video, documents, screen recordings and workspace automation.",
    makesOffer: APPS.map((app) => ({
      "@type": "Offer",
      // Unreleased apps are announced on the page, so list them as upcoming.
      availability:
        app.status === "live"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: app.name,
        applicationCategory: "BusinessApplication",
        description: app.description,
        url: isExternal(app) ? app.href : `${SITE}/#${app.id}`,
        operatingSystem: operatingSystems(app),
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
        <div className={cx("squiggle-accent", styles.accentLine)} />
        <h2 className={cx(lilita_one.className, styles.title)}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ul className={styles.apps}>
        {APPS.map((app) => {
          const linkProps = isExternal(app)
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

              <div className={styles["app-footer"]}>
                <HashLink href={`#${app.id}`} className={styles["app-link"]}>
                  See details
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
                </HashLink>
                {app.status === "live" ? (
                  <Link
                    href={app.href}
                    className={styles["app-visit"]}
                    {...linkProps}
                  >
                    Visit {app.name}
                  </Link>
                ) : (
                  <span className={styles["app-badge"]}>
                    {STATUS_LABEL[app.status]}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
