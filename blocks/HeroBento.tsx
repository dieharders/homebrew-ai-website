import styles from "./HeroBento.module.css";
import { cx } from "@/utils/common";
import Button from "@/components/Button";
import BentoCard from "@/components/BentoCard";
import VideoPlayer from "@/components/VideoPlayer";

interface HeroBentoProps {
  headline: string;
  tagline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  videoSrc?: string;
  className?: string;
}

export default function HeroBento({
  headline,
  tagline,
  primaryCTA,
  secondaryCTA,
  videoSrc,
  className,
}: HeroBentoProps) {
  return (
    <section className={cx(styles.container, className)}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.gridHeader}>
            {/* Main headline area */}
            <div className={styles.headlineArea}>
              <h1 className={styles.headline}>{headline}</h1>
              <p className={styles.tagline}>{tagline}</p>
              <div className={styles.actions}>
                <Button
                  href={primaryCTA.href}
                  type="primary"
                  size="large"
                  location="body"
                >
                  {primaryCTA.text}
                </Button>
                {secondaryCTA && (
                  <Button
                    href={secondaryCTA.href}
                    type="secondary"
                    size="large"
                    location="body"
                  >
                    {secondaryCTA.text}
                  </Button>
                )}
              </div>
            </div>

            {/* Video preview card */}
            {videoSrc && (
              <div className={styles.videoCard}>
                <VideoPlayer
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  aspectRatio="1/1"
                />
              </div>
            )}
          </div>

          <div className={styles.cardGroup}>
            {/* Feature card - The app suite */}
            <BentoCard
              variant="light"
              size="medium"
              className={styles.featureCard}
              illustration={
                <div className={styles.featureIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
              }
              title="AI-Native Tools"
              description="Tools to automate, design and transform your ideas into results."
              link={{ text: "See the apps", href: "#apps" }}
            />

            {/* CTA card - Enterprise */}
            <BentoCard
              variant="light"
              size="medium"
              className={styles.darkCard}
              illustration={
                <div className={styles.darkCardIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              }
              title="Bring Your Own AI"
              description="Your agents can use our tools to perform work for you."
              link={{ text: "More features", href: "#features" }}
            />

            {/* Performance card */}
            <BentoCard
              variant="light"
              size="medium"
              className={styles.performanceCard}
              illustration={
                <div className={styles.performanceIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
              }
              title="Automated Workspaces"
              description="Use workflows to draft email, setup meetings, or process vital data."
              link={{ text: "Find out how", href: "#use-cases" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
