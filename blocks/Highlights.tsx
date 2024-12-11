import styles from './Highlights.module.css';
import Section from '../components/Section';
import { cx } from '../utils/common';

export default function Highlights(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  highlights: {
    title: string,
    text: string,
    illustration: any,
  }[],
  background?: 'normal' | 'alternate',
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className} background={p.background}>
      <div className={styles.header}>
        <h2 className={styles.title}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ul className={styles.highlights}>
        {p.highlights.map((item, i) => {
          return (
            <li key={item.title} className={styles.highlight}>
              <div className={styles['illustration-container']}>
                <div className={styles['highlight-spotlight']}></div>
                <div className={styles['highlight-illustration']} style={item.illustration}></div>
              </div>
              <div className={styles['highlight-content']}>
                <h3 className={styles['highlight-title']}>{item.title}</h3>
                <p className={styles['highlight-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
