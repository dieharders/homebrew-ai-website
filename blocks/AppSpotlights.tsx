import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import styles from "./AppSpotlights.module.css";
import Section from "@/components/Section";
import RevealMore from "@/components/RevealMore";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";
import { APPS, STATUS_LABEL } from "@/data/apps";

/**
 * One full-width section per app, in `APPS` order, alternating media left and
 * right. Copy comes from data/apps.tsx; the visual for each app is passed in
 * from the page (a video, a placeholder, or an animated mock) keyed by app id.
 *
 * Each section's id is the app id, so `/#paperbuff` etc. land here — the
 * header links unreleased apps to exactly that.
 */
export default function AppSpotlights(p: {
  media: Record<string, ReactNode>;
}) {
  return (
    <>
      {APPS.map((app, i) => {
        const live = app.status === "live";
        const flipped = i % 2 === 1;

        return (
          <Section
            key={app.id}
            id={app.id}
            background={i % 2 === 0 ? "normal" : "alternate"}
            size="wide"
          >
            <article
              className={cx(styles.spotlight, flipped && styles.flipped)}
              style={{ "--app-accent": app.accent } as CSSProperties}
            >
              <div className={styles.intro}>
                <div className={styles.identity}>
                  <span className={cx(styles.icon, app.iconBg)}>{app.icon}</span>
                  <span className={styles.name}>{app.name}</span>
                  <span className={cx(styles.status, styles[`status-${app.status}`])}>
                    {STATUS_LABEL[app.status]}
                  </span>
                </div>

                <h2 className={cx(lilita_one.className, styles.headline)}>
                  {app.headline}
                </h2>
                <p className={styles.pitch}>{app.pitch}</p>
              </div>

              <div className={styles.details}>
                {/* Collapsed visually only: the cards are still in the HTML
                    for crawlers. */}
                <RevealMore
                  buttonClassName={styles.moreToggle}
                  moreLabel="More details"
                  lessLabel="Hide details"
                >
                  <dl className={styles.features}>
                    {app.features.map((f) => (
                      <div key={f.label} className={styles.feature}>
                        <dt>
                          <span className={styles.featureLabel}>{f.label}</span>
                          <span className={styles.featureTitle}>{f.title}</span>
                        </dt>
                        <dd className={styles.featureText}>{f.text}</dd>
                      </div>
                    ))}
                  </dl>
                </RevealMore>

                <div className={styles.footer}>
                  {live ? (
                    <Link
                      href={app.href}
                      target="_blank"
                      rel="noopener"
                      className={styles.cta}
                    >
                      <span className={styles.ctaLabel}>Try {app.name}</span>
                      <span className={styles.platforms}>{app.platforms}</span>
                      <Arrow />
                    </Link>
                  ) : (
                    <Link href="#contact" className={styles.cta}>
                      <span className={styles.ctaLabel}>
                        Get notified at launch
                      </span>
                      <span className={styles.platforms}>{app.platforms}</span>
                      <Arrow />
                    </Link>
                  )}
                </div>
              </div>

              <div className={styles.media}>
                <div className={styles.mediaInner}>{p.media[app.id]}</div>
              </div>
            </article>
          </Section>
        );
      })}
    </>
  );
}

/* Two stacked copies of the arrow inside a round chip: on hover the first
   slides out to the right while the second slides in from the left. */
function Arrow() {
  return (
    <span className={styles.ctaArrow} aria-hidden="true">
      <ArrowGlyph className={styles.arrowOut} />
      <ArrowGlyph className={styles.arrowIn} />
    </span>
  );
}

function ArrowGlyph(p: { className: string }) {
  return (
    <svg
      className={p.className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
