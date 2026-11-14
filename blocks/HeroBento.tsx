import styles from "./HeroBento.module.css";
import { cx } from "@/utils/common";
import Button from "@/components/Button";
import HashLink from "@/components/HashLink";
import VideoPlayer from "@/components/VideoPlayer";

interface HeroBentoProps {
  headline: string;
  /** Part of `headline` to set on a strip of butter tape, e.g. "FOR AGENTS". */
  highlight?: string;
  tagline: string;
  /** Small sticker above the headline, e.g. which apps are live. */
  kicker?: { text: string; href: string };
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  videoSrc?: string;
  className?: string;
}

/** Keeps hyphenated words like "TOOL-CHAIN" from breaking at the hyphen. */
function NoBreakHyphens(p: { text: string }) {
  return p.text.split(/(\S+-\S+)/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className={styles.nowrap}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/** Splits the headline around `highlight` so that phrase can be taped. */
function Headline(p: { text: string; highlight?: string }) {
  const at = p.highlight ? p.text.indexOf(p.highlight) : -1;
  if (!p.highlight || at < 0) return <NoBreakHyphens text={p.text} />;
  return (
    <>
      <NoBreakHyphens text={p.text.slice(0, at)} />
      <span className={styles.tape}>{p.highlight}</span>
      <NoBreakHyphens text={p.text.slice(at + p.highlight.length)} />
    </>
  );
}

export default function HeroBento({
  headline,
  highlight,
  tagline,
  kicker,
  primaryCTA,
  secondaryCTA,
  videoSrc,
  className,
}: HeroBentoProps) {
  return (
    <section className={cx(styles.container, className)}>
      {/* Ground decoration: two foam blobs in the corners, with the doodle
          pattern multiplied over both the ground and the blobs. */}
      <div className={styles.decor} aria-hidden="true">
        <svg className={cx(styles.blob, styles.blobA)} viewBox="0 0 200 200">
          <path d="M44.6,-58.3C57.5,-49.4,67.1,-35.3,71.4,-19.5C75.7,-3.7,74.6,13.8,67.4,28C60.2,42.2,46.8,53.1,31.6,61.2C16.4,69.3,-0.6,74.6,-17.4,71.6C-34.2,68.6,-50.8,57.3,-61.7,42C-72.6,26.7,-77.8,7.4,-74.4,-10.1C-71,-27.6,-59,-43.3,-44.2,-52C-29.4,-60.7,-11.8,-62.4,3.6,-66.7C19,-71,31.7,-67.2,44.6,-58.3Z" transform="translate(100 100)" />
        </svg>
        <svg className={cx(styles.blob, styles.blobB)} viewBox="0 0 200 200">
          <path d="M39.9,-49.6C53.3,-41.6,66.9,-30.6,71.6,-16.5C76.3,-2.4,72.1,14.8,63.6,28.8C55.1,42.8,42.3,53.6,27.5,60.6C12.7,67.6,-4.1,70.8,-21.1,67.4C-38.1,64,-55.3,54,-65.5,38.9C-75.7,23.8,-78.9,3.6,-73.6,-13.4C-68.3,-30.4,-54.5,-44.2,-39.6,-51.9C-24.7,-59.6,-8.6,-61.2,4.7,-66.7C18,-72.2,26.5,-57.6,39.9,-49.6Z" transform="translate(100 100)" />
        </svg>
        <div className={styles.pattern} />
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          {kicker && (
            <HashLink href={kicker.href} className={styles.kicker}>
              <span className={styles.liveDot} aria-hidden="true" />
              {kicker.text}
            </HashLink>
          )}
          <h1 className={styles.headline}>
            <Headline text={headline} highlight={highlight} />
          </h1>
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

        {videoSrc && (
          <div className={styles.stage}>
            <div className={styles.videoCard}>
              <VideoPlayer
                src={videoSrc}
                autoPlay
                loop
                muted
                aspectRatio="1/1"
                rounded={false}
              />
            </div>
            {/* The mascot, stuck on the corner of the card like a sticker. */}
            <img
              src="/cup-icon.svg"
              alt=""
              aria-hidden="true"
              width={327}
              height={308}
              className={styles.mascot}
              draggable={false}
            />
          </div>
        )}
      </div>
    </section>
  );
}
