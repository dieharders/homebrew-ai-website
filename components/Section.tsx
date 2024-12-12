import styles from './Section.module.css';
import { cx } from '../utils/common';

export type T_Background = 'normal' | 'alternate' | 'accent' | 'accent-alt-1' | 'accent-alt-2';

export default function Section(p: {
  id?: string,
  className?: string,
  size?: 'normal' | 'narrow',
  background?: T_Background,
  children: React.ReactNode,
}) {
  const size = p.size ?? 'normal';
  const background = p.background ?? 'normal';

  const className = cx(
    styles.container,
    styles[`container-size-${size}`],
    styles[`container-background-${background}`],
    p.className,
  );

  return (
    <section id={p.id} className={className}>
      <div className={styles.content}>
        {p.children}
      </div>
    </section>
  )
}
