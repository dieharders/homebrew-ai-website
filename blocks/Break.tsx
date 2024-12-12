import styles from './Break.module.css';
import Section, { T_Background } from '../components/Section';
import { cx } from '../utils/common';
import Button, { T_Location } from '../components/Button';

export default function Break(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  action?: string,
  actionHref?: string,
  location?: T_Location,
  background?: T_Background,
  illustration: any
  onActionClick?(): void,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} size="narrow" background={p.background || "accent-alt-1"}>
      <div className={styles.content}>
        {/* Poster */}
        <div className={styles.illustration} style={p.illustration} />
        <div className={styles.header}>
          <h1 className={styles.title}>{p.title}</h1>
          <p className={styles.subtitle}>{p.subtitle}</p>
        </div>
        {p.action && <Button href={p.actionHref} onClick={p.onActionClick} size="xl" type="primary" location={p.location || "accent"}>{p.action}</Button>}
      </div>
    </Section>
  );
}
