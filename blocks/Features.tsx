import styles from './Features.module.css';
import Section from '../components/Section';
import { cx } from '../utils/common';

export default function Features(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  features: {
    title: string,
    text: string,
    illustration?: any,
    icon?: string
  }[],
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

      <ul className={styles.features}>
        {p.features.map((item, i) => {
          return (
            <li key={item.title} className={styles.feature}>
              {item?.illustration && <div className={styles['feature-illustration']} style={item?.illustration} />}
              {item?.icon && <div className={styles.icon}>{item?.icon}</div>}
              <div className={styles['feature-content']}>
                <h3 className={styles['feature-title']}>{item.title}</h3>
                <p className={styles['feature-text']}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
