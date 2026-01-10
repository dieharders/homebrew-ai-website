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

          {/* Feature card - File Search */}
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
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            }
            title="File Search & Synthesis"
            description="Find anything instantly with AI-powered semantic search across all your documents."
            link={{ text: "Learn more", href: "#features" }}
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
            title="100% On-Device"
            description="Zero data leakage. Your files never leave your machine. Enterprise-grade security built in."
            link={{ text: "Security details", href: "#security" }}
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
            title="Lightning Fast"
            description="Instant responses powered by local AI models. No network latency, no waiting."
            link={{ text: "See benchmarks", href: "#performance" }}
          />
        </div>
      </div>
    </section>
  );
}
