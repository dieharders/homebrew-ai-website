import styles from './Roadmap.module.css';
import Section from '../components/Section';
import { cx } from '../utils/common';
import { ReactNode } from 'react';

export default function Features(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  children?: ReactNode[],
  background?: 'normal' | 'alternate',
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section
      id={p.id}
      className={className}
      background={p.background}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      {p?.children &&
        <div className={styles.childrenContainer}>
          {p?.children.map(i => <div className={styles.child}>{i}</div>)}
        </div>
      }
    </Section>
  );
}
