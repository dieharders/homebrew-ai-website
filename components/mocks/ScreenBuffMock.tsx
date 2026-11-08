"use client";

import styles from "./Mocks.module.css";
import { cx } from "../../utils/common";
import { useLoop } from "./useLoop";

/**
 * The scripted take. Positions are % of the recorded screen; `zoom` is where
 * ScreenBuff's camera eases in, and `callout` is the label it writes for that
 * moment.
 */
const SHOTS = [
  { x: 40, y: 85, zoom: false, callout: null },
  { x: 88, y: 10, zoom: false, callout: null },
  { x: 88, y: 10, zoom: true, callout: "Create an invoice in one click" },
  { x: 88, y: 10, zoom: true, callout: "Create an invoice in one click" },
  { x: 59, y: 47, zoom: false, callout: null },
  { x: 59, y: 47, zoom: true, callout: "Totals update as you type" },
  { x: 59, y: 47, zoom: true, callout: "Totals update as you type" },
  { x: 40, y: 85, zoom: false, callout: null },
];

const ZOOM = 1.7;
/** Furthest the zoomed screen can pan (in % of its size) before an edge shows. */
const MAX_PAN = ((1 - 1 / ZOOM) / 2) * 100;
const clampPan = (v: number) => Math.max(-MAX_PAN, Math.min(MAX_PAN, v));

/** Pan the focus point toward the centre, then scale about the centre. */
function cameraFor(shot: (typeof SHOTS)[number]) {
  if (!shot.zoom) return "scale(1) translate(0%, 0%)";
  return `scale(${ZOOM}) translate(${clampPan(50 - shot.x)}%, ${clampPan(50 - shot.y)}%)`;
}

/**
 * Animated stand-in for ScreenBuff: a cursor drives a fake app, the camera
 * auto-zooms on each click, callouts appear and the timeline marks the zooms.
 */
export default function ScreenBuffMock() {
  const { ref, tick } = useLoop(SHOTS.length, 1100);
  const shot = SHOTS[tick];
  const clicking = shot.zoom && !SHOTS[tick - 1]?.zoom;
  const seconds = 3 + tick * 2;

  return (
    <div ref={ref} className={cx(styles.window, styles.sbWindow)} aria-hidden="true">
      <div className={styles.chrome}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.chromeTitle}>ScreenBuff — Product demo</span>
        <span className={styles.sbRec}>
          <i /> REC 0:{String(seconds).padStart(2, "0")}
        </span>
      </div>

      <div className={styles.sbViewport}>
        <div
          className={styles.sbScreen}
          style={{ transform: cameraFor(shot) }}
        >
          {/* A generic invoicing app being demoed */}
          <div className={styles.sbApp}>
            <div className={styles.sbSidebar}>
              <span className={styles.sbLogo} />
              <span />
              <span className={styles.sbNavActive} />
              <span />
              <span />
            </div>
            <div className={styles.sbMain}>
              <div className={styles.sbTopbar}>
                <span className={styles.sbHeading}>Invoices</span>
                <span className={cx(styles.sbButton, tick >= 2 && tick < 4 && styles.sbPressed)}>
                  + New invoice
                </span>
              </div>
              <div className={styles.sbCards}>
                <div className={styles.sbCard}>
                  <span>Paid</span>
                  <b>$12,480</b>
                </div>
                <div className={styles.sbCard}>
                  <span>Due</span>
                  <b>$3,120</b>
                </div>
                <div className={styles.sbCard}>
                  <span>Overdue</span>
                  <b>$640</b>
                </div>
              </div>
              <div className={styles.sbTable}>
                <span />
                <span className={cx(tick >= 5 && tick < 7 && styles.sbRowActive)} />
                <span />
                <span />
              </div>
            </div>
          </div>

          <span
            className={cx(styles.sbCursor, clicking && styles.sbClick)}
            style={{ left: `${shot.x}%`, top: `${shot.y}%` }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M4 2l16 10-7 1.5L9.5 21z" fill="#111" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <span className={cx(styles.sbCallout, !!shot.callout && styles.sbCalloutShown)}>
          {shot.callout ?? SHOTS[2].callout}
        </span>
      </div>

      <div className={styles.sbTimeline}>
        <span className={styles.sbTrackLabel}>Zooms</span>
        <div className={styles.sbTrack}>
          <span className={styles.sbSegment} style={{ left: "25%", width: "25%" }} />
          <span className={styles.sbSegment} style={{ left: "62.5%", width: "25%" }} />
          <span
            className={styles.sbPlayhead}
            style={{ left: `${(tick / (SHOTS.length - 1)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
