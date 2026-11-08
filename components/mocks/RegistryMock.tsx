"use client";

import styles from "./Mocks.module.css";
import { cx } from "../../utils/common";
import { useLoop } from "./useLoop";

/**
 * Illustrative agent queries against the planned asset registry. Names and
 * results are made up to show the shape of the API, not real catalogue items.
 */
const QUERIES = [
  {
    kind: "sound",
    query: "upbeat lo-fi bed, 45s, loopable",
    results: [
      { name: "morning-commute.wav", meta: "0:45 · 92 bpm", tier: "Free" },
      { name: "glass-city.wav", meta: "0:48 · 88 bpm", tier: "Pro" },
    ],
  },
  {
    kind: "3d",
    query: "low-poly delivery van, rigged",
    results: [
      { name: "van-lowpoly.glb", meta: "4.2k tris · 2 anims", tier: "Free" },
      { name: "van-stylized.glb", meta: "9.8k tris · PBR", tier: "Pro" },
    ],
  },
  {
    kind: "components",
    query: "animated stat counter, brand colours",
    results: [
      { name: "stat-countup", meta: "motion template · 3s", tier: "Free" },
      { name: "kpi-ring", meta: "motion template · 4s", tier: "Pro" },
    ],
  },
  {
    kind: "video",
    query: "aerial city at dusk, 4k",
    results: [
      { name: "dusk-skyline.mp4", meta: "0:12 · 4k · 24fps", tier: "Pro" },
      { name: "harbor-drone.mp4", meta: "0:09 · 4k · 30fps", tier: "Pro" },
    ],
  },
  {
    kind: "images",
    query: "line icons, logistics set",
    results: [
      { name: "logistics-icons.svg", meta: "48 icons · outline", tier: "Free" },
      { name: "warehouse-illos.svg", meta: "12 scenes · flat", tier: "Pro" },
    ],
  },
];

export default function RegistryMock() {
  // Two ticks per query: the call goes out, then the results land.
  const { ref, tick } = useLoop(QUERIES.length * 2, 1500);
  const q = QUERIES[Math.floor(tick / 2)];
  const answered = tick % 2 === 1;

  return (
    <div ref={ref} className={cx(styles.window, styles.rgWindow)} aria-hidden="true">
      <div className={styles.chrome}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.chromeTitle}>agent · registry</span>
      </div>
      <div className={styles.rgBody}>
        <p className={styles.rgCall}>
          <span className={styles.rgPrompt}>agent ›</span> registry.search(
          <span className={styles.rgString}>&quot;{q.query}&quot;</span>, {"{"} type:{" "}
          <span className={styles.rgString}>&quot;{q.kind}&quot;</span> {"}"})
          {!answered && <span className={styles.rgCaret} />}
        </p>
        <ul className={styles.rgResults}>
          {q.results.map((r, i) => (
            <li
              key={r.name}
              className={cx(styles.rgResult, answered && styles.rgResultShown)}
              style={{ transitionDelay: answered ? `${i * 120}ms` : "0ms" }}
            >
              <span className={styles.rgName}>{r.name}</span>
              <span className={styles.rgMeta}>{r.meta}</span>
              <span className={cx(styles.rgTier, r.tier === "Pro" && styles.rgTierPro)}>
                {r.tier}
              </span>
            </li>
          ))}
        </ul>
        <p className={cx(styles.rgFooter, answered && styles.rgResultShown)}>
          ✓ licensed for this project · pulled into MotionBuff
        </p>
      </div>
    </div>
  );
}
