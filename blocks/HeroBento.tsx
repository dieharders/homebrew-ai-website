import styles from "./HeroBento.module.css";
import { cx } from "@/utils/common";
import Button from "@/components/Button";
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
        </div>
      </div>
    </section>
  );
}
