import styles from './Section.module.css';
import { cx } from '../utils/common';

export type T_Background = 'normal' | 'alternate' | 'accent' | 'accent-alt-1' | 'accent-alt-2' | 'dark' | 'dark-navy' | 'dark-charcoal';
export type T_Pattern = 'none' | 'geometric' | 'dots' | 'lines';

export default function Section(p: {
  id?: string,
  className?: string,
  size?: 'normal' | 'narrow' | 'wide',
  background?: T_Background,
  pattern?: T_Pattern,
  accentLine?: 'top' | 'bottom' | 'both' | 'none',
  children: React.ReactNode,
}) {
  const size = p.size ?? 'normal';
  const background = p.background ?? 'normal';
  const pattern = p.pattern ?? 'none';
  const accentLine = p.accentLine ?? 'none';

  const className = cx(
    styles.container,
    styles[`container-size-${size}`],
    styles[`container-background-${background}`],
    accentLine !== 'none' && styles[`accent-line-${accentLine}`],
    p.className,
  );

  return (
    <section id={p.id} className={className}>
      {pattern !== 'none' && (
        <div className={cx(styles.pattern, styles[`pattern-${pattern}`])} aria-hidden="true" />
      )}
      <div className={styles.content}>
        {p.children}
      </div>
    </section>
  )
}
