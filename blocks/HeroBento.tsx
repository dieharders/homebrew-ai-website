import styles from './HeroBento.module.css';
import { cx } from '@/utils/common';
import Button from '@/components/Button';
import BentoCard from '@/components/BentoCard';
import VideoPlayer from '@/components/VideoPlayer';
import ExploreLink from '@/components/ExploreLink';

interface Stat {
  value: string;
  label: string;
}

interface HeroBentoProps {
  headline: string;
  tagline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  videoSrc?: string;
  stats?: Stat[];
  className?: string;
}

export default function HeroBento({
  headline,
  tagline,
  primaryCTA,
  secondaryCTA,
  videoSrc,
  stats,
  className,
}: HeroBentoProps) {
  return (
    <section className={cx(styles.container, className)}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.content}>
        <div className={styles.grid}>
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

          {/* Feature card - File Search */}
          <BentoCard
            variant="light"
            size="medium"
            className={styles.featureCard}
            illustration={
              <div className={styles.featureIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            }
            title="File Search & Synthesis"
            description="Find anything instantly with AI-powered semantic search across all your documents."
            link={{ text: 'Learn more', href: '#features' }}
          />

          {/* Dark CTA card - Enterprise */}
          <BentoCard
            variant="dark"
            size="medium"
            className={styles.darkCard}
            illustration={
              <div className={styles.darkCardIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            }
            title="100% On-Device"
            description="Zero data leakage. Your files never leave your machine. Enterprise-grade security built in."
            link={{ text: 'Security details', href: '#security' }}
          />

          {/* Video preview card */}
          {videoSrc && (
            <div className={styles.videoCard}>
              <VideoPlayer
                src={videoSrc}
                autoPlay
                loop
                muted
                aspectRatio="16/9"
              />
              <div className={styles.videoLabel}>
                <span>See FileBuff in Action</span>
                <ExploreLink href="#demo">Watch full demo</ExploreLink>
              </div>
            </div>
          )}

          {/* Stats card */}
          {stats && stats.length > 0 && (
            <div className={styles.statsCard}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
