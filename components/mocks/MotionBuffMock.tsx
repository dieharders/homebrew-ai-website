"use client";

import styles from "./Mocks.module.css";
import { cx } from "../../utils/common";
import { useLoop } from "./useLoop";

const STEPS = [
  { title: "Setting up", sub: "Project, brief and storyboard" },
  { title: "Applying the look", sub: "Brand kit · type, colour and motion" },
  { title: "Writing the story", sub: "Hook, problem, proof, offer" },
  { title: "Building scenes", sub: "Writing and checking each scene" },
  { title: "Voice & captions", sub: "Narration in en-US, es, ja" },
  { title: "Rendering", sub: "1080p · 45 seconds" },
];

const LOG = [
  "brief: deck.pdf → launch video, 45s, tone=confident",
  "brand: acme.com → 3 colours, 2 typefaces, logo",
  "story: 5 beats approved → BRIEF.md",
  "scenes: building 5 of 5 under the motion workflow",
  "voice: narration + captions synced to beats",
  "render: encoding launch-video.mp4 at 1080p",
];

const SCENES = ["Hook", "Problem", "Proof", "Offer", "Close"];

/** Ticks per pipeline step; the loop ends on a "ready" beat before restarting. */
const PER_STEP = 2;
const LENGTH = STEPS.length * PER_STEP + 3;

/**
 * Animated stand-in for MotionBuff's render screen: pipeline steps tick off,
 * the activity log streams and the scene strip fills in.
 */
export default function MotionBuffMock() {
  const { ref, tick } = useLoop(LENGTH, 750);
  const active = Math.min(Math.floor(tick / PER_STEP), STEPS.length);
  const done = active >= STEPS.length;
  const progress = Math.min(tick / (STEPS.length * PER_STEP), 1);
  // Scenes build during step 3 ("Building scenes") and stay built after it.
  const scenesBuilt = Math.max(0, Math.min(SCENES.length, tick - 5));

  return (
    <div ref={ref} className={cx(styles.window, styles.mbWindow)} aria-hidden="true">
      <div className={styles.chrome}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.chromeTitle}>MotionBuff — Launch video</span>
      </div>

      <div className={styles.mbBody}>
        <div className={styles.mbHeader}>
          <div>
            <p className={styles.mbTitle}>
              {done ? "Your video is ready" : "Creating your video…"}
            </p>
            <p className={styles.mbSub}>
              {done
                ? "launch-video.mp4 · 0:45"
                : `Step ${active + 1} of ${STEPS.length} · ${STEPS[active].title}`}
            </p>
          </div>
          <span className={cx(styles.mbChip, done && styles.mbChipDone)}>
            {done ? "Export" : "Cancel"}
          </span>
        </div>
        <div className={styles.mbBar}>
          <div
            className={styles.mbBarFill}
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <div className={styles.mbPanels}>
          <ol className={styles.mbSteps}>
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className={cx(
                  styles.mbStep,
                  i < active && styles.mbStepDone,
                  i === active && styles.mbStepActive,
                )}
              >
                <span className={styles.mbStepIcon}>
                  {i < active ? "✓" : i + 1}
                </span>
                <span>
                  <span className={styles.mbStepTitle}>{s.title}</span>
                  <span className={styles.mbStepSub}>{s.sub}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className={styles.mbLog}>
            <p className={styles.mbLogHead}>Live activity</p>
            {LOG.map((line, i) => (
              <p
                key={line}
                className={cx(styles.mbLogLine, i <= active && styles.mbLogShown)}
              >
                <span className={styles.mbLogTime}>0:{String(4 + i * 7).padStart(2, "0")}</span>
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.mbScenes}>
          {SCENES.map((name, i) => (
            <span
              key={name}
              className={cx(styles.mbScene, i < scenesBuilt && styles.mbSceneBuilt)}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
