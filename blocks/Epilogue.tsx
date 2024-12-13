import styles from './Epilogue.module.css';
import Section, { T_Background } from '@/components/Section';
import { cx } from '../utils/common';

export default function Epilogue(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle1: string,
  subtitle2: string,
  illustration: any,
  background?: T_Background,
  children?: React.ReactNode,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} background={p.background}>
      <div className={styles.illustrationContainer}>
        <div className={styles.glow}></div>
        <div className={styles.illustration} style={p.illustration}></div>
      </div>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <h4 className={styles.subtitle1}>{p.subtitle1}</h4>
        {p.children}
        <p className={styles.subtitle2}>{p.subtitle2}</p>
      </div>
    </Section>
  );
}
