import styles from './Break.module.css';
import Section from '../components/Section';
import { cx } from '../utils/common';
import Button from '../components/Button';

export default function Break(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  action?: string,
  actionHref?: string,
  illustration: any
  onActionClick?(): void,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} size="narrow" background="accent-alt">
      <div className={styles.content}>
        {/* Poster */}
        <div className={styles.illustration} style={p.illustration} />
        <div className={styles.header}>
          <h1 className={styles.title}>{p.title}</h1>
          <p className={styles.subtitle}>{p.subtitle}</p>
        </div>
        {p.action && <Button href={p.actionHref} onClick={p.onActionClick} size="large" location="accent">{p.action}</Button>}
      </div>
    </Section>
  );
}
