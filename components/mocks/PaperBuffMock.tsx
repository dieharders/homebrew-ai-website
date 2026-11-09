"use client";

import styles from "./Mocks.module.css";
import { cx } from "../../utils/common";
import { useLoop } from "./useLoop";

/**
 * Each phase is one spoken command and the page state it produces. Phases are
 * cumulative: the layout from phase 1 stays when the quote arrives in phase 2.
 */
const COMMANDS = [
  "“Start a field report on the coastal survey.”",
  "“Make it easy to read.”",
  "“Pull out the key finding as a quote.”",
  "“Add the 3D scan of the reef.”",
];

// Longest command, so the hidden sizing copies reserve room for the widest pill.
const LONGEST_COMMAND = COMMANDS.reduce((a, b) => (b.length > a.length ? b : a));

/**
 * Animated stand-in for PaperBuff: a plain draft is typeset, given a pull
 * quote and then an embedded, rotating 3D figure, one voice command at a time.
 */
export default function PaperBuffMock() {
  const { ref, tick } = useLoop(COMMANDS.length * 2, 1300);
  const phase = Math.floor(tick / 2);
  // First half of each phase is "listening", second half is the result.
  const listening = tick % 2 === 0;
  const applied = listening ? phase - 1 : phase;

  // The page grows and shrinks as each command lands. To keep that from
  // shoving the rest of the page around, every phase's layout is rendered
  // invisibly in the same grid cell: the cell sizes to the tallest one at
  // whatever width it's given, and the live window animates inside it.
  return (
    <div ref={ref} className={styles.pbSlot} aria-hidden="true">
      {COMMANDS.map((_, i) => (
        <Window
          key={i}
          applied={i}
          listening={false}
          command={LONGEST_COMMAND}
          className={styles.pbGhost}
        />
      ))}
      <Window
        applied={applied}
        listening={listening}
        command={COMMANDS[phase]}
        className={cx(styles.pbLive, tick === 0 && styles.pbReset)}
      />
    </div>
  );
}

function Window(p: {
  applied: number;
  listening: boolean;
  command: string;
  className?: string;
}) {
  const { applied, listening } = p;
  return (
    <div className={cx(styles.window, styles.pbWindow, p.className)}>
      <div className={cx(styles.chrome, styles.chromeLight)}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.chromeTitle}>PaperBuff — Coastal survey.pdoc</span>
      </div>

      <div className={styles.pbStage}>
        <div className={cx(styles.pbPage, applied >= 1 && styles.pbTypeset)}>
          <p className={styles.pbKicker}>Field report · Oct 2026</p>
          <p className={styles.pbTitle}>Reef recovery along the northern shelf</p>
          <p className={styles.pbDek}>
            Six weeks of survey data, and what it says about the next decade.
          </p>

          <div className={styles.pbColumns}>
            <div className={styles.pbCol}>
              <span className={styles.pbLine} />
              <span className={styles.pbLine} />
              <span className={styles.pbLine} />
              <span className={cx(styles.pbLine, styles.pbLineShort)} />
              <blockquote className={cx(styles.pbQuote, applied >= 2 && styles.pbShown)}>
                Coral cover rose 18% where the new moorings went in.
              </blockquote>
              <span className={styles.pbLine} />
              <span className={cx(styles.pbLine, styles.pbLineShort)} />
            </div>
            <div className={styles.pbCol}>
              <figure className={cx(styles.pbFigure, applied >= 3 && styles.pbShown)}>
                <div className={styles.pbCubeWrap}>
                  <div className={styles.pbCube}>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <figcaption>Drag to rotate · reef scan</figcaption>
              </figure>
              <span className={styles.pbLine} />
              <span className={styles.pbLine} />
              <span className={cx(styles.pbLine, styles.pbLineShort)} />
            </div>
          </div>
        </div>

        <div className={cx(styles.pbVoice, listening && styles.pbListening)}>
          <span className={styles.pbMic}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
            </svg>
          </span>
          <span className={styles.pbWave}>
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className={styles.pbCommand}>{p.command}</span>
        </div>
      </div>
    </div>
  );
}
