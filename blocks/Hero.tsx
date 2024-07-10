import { ReactNode } from 'react';
import styles from './Hero.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';

export default function Hero(p: {
  id?: string,
  className?: string,
  title: ReactNode,
  subtitle: string,
  illustration: string,
  children?: React.ReactNode,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className}>
      <div className={styles.header}>
        <div className={styles.title}>{p.title}</div>
        <p className={styles.subtitle}>{p.subtitle}</p>
        <br />
        {p.children && p.children}
      </div>
      <div className={styles.illustration} />
    </Section>
  );
}
