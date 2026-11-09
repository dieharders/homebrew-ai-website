import styles from "./VideoPlaceholder.module.css";
import { cx } from "../utils/common";

/**
 * Stand-in for a video that hasn't been recorded yet. Sized like the real
 * player so swapping in the mp4 later doesn't shift the layout.
 *
 * To replace one: drop the file in /public under the name shown on the
 * placeholder (`file`) and pass it as `videoSrc` / `src` instead.
 */
export default function VideoPlaceholder(p: {
  /** What the finished video will show. */
  label: string;
  /** Intended filename in /public, shown so it's obvious what to add. */
  file?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  className?: string;
}) {
  return (
    <div
      className={cx(styles.container, p.className)}
      style={{ aspectRatio: p.aspectRatio ?? "16/9" }}
      role="img"
      aria-label={`Video coming soon: ${p.label}`}
    >
      <div className={styles.play} aria-hidden="true">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <p className={styles.label}>{p.label}</p>
      <p className={styles.meta}>
        Video coming soon
        {p.file && <span className={styles.file}>{p.file}</span>}
      </p>
    </div>
  );
}
