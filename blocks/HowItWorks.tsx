import styles from "./HowItWorks.module.css";
import Section from "@/components/Section";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";

export interface T_Step {
  label: string;
  title: string;
  text: string;
  /** The step OpenBrew owns — drawn in the accent colour. */
  highlight?: boolean;
}

/**
 * The agent pipeline as a row of steps joined by arrows: who asks, what model
 * thinks, which OpenBrew app does the work, what comes out.
 */
export default function HowItWorks(p: {
  id?: string;
  title: string;
  subtitle: string;
  steps: T_Step[];
  footnote?: string;
}) {
  return (
    <Section id={p.id} background="dark-navy" size="wide">
      <div className={styles.header}>
        <div className={styles.accentLine} />
        <h2 className={cx(lilita_one.className, styles.title)}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ol className={styles.steps}>
        {p.steps.map((s) => (
          <li key={s.label} className={cx(styles.step, s.highlight && styles.highlight)}>
            <span className={styles.label}>{s.label}</span>
            <span className={styles.stepTitle}>{s.title}</span>
            <span className={styles.text}>{s.text}</span>
          </li>
        ))}
      </ol>

      {p.footnote && <p className={styles.footnote}>{p.footnote}</p>}
    </Section>
  );
}
