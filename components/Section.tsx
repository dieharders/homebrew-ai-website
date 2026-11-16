import styles from './Section.module.css';
import { cx } from '../utils/common';

// 'normal' and 'alternate' are the pale butter and pale foam grounds; 'butter'
// and 'foam' are their full-strength versions, for sections that should pop.
export type T_Background = 'normal' | 'alternate' | 'butter' | 'foam' | 'accent' | 'accent-alt-1' | 'accent-alt-2' | 'dark' | 'dark-navy' | 'dark-charcoal';
// 'doodle' is the brand pattern, in a tile pre-tinted to the ground.
export type T_Pattern = 'none' | 'doodle' | 'geometric' | 'dots' | 'lines';

// The grounds that set a --doodle-tile. Any other ground has no tile for it.
const INKED_GROUNDS: ReadonlySet<T_Background> = new Set(['normal', 'alternate', 'butter', 'foam']);

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
  const inked = INKED_GROUNDS.has(background);
  // Doodle by default where it shows; never on a ground with no tile for it.
  const requested = p.pattern ?? (inked ? 'doodle' : 'none');
  const pattern = requested === 'doodle' && !inked ? 'none' : requested;
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
      {pattern === 'doodle' && <div className="doodle-ground" aria-hidden="true" />}
      {pattern !== 'none' && pattern !== 'doodle' && (
        <div className={cx(styles.pattern, styles[`pattern-${pattern}`])} aria-hidden="true" />
      )}
      <div className={styles.content}>
        {p.children}
      </div>
    </section>
  )
}
