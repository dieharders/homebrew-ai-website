import styles from './Features.module.css';
import Section from '@/components/Section';
import { lilita_one } from 'fonts/fonts';
import { cx } from '../utils/common';
import Image from 'next/image';

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
        <h2 className={cx(lilita_one.className, styles.title)}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ul className={styles.features}>
        {p.features.map((item, i) => {
          return (
            <li key={item.title} className={styles.feature}>
              {item?.illustration && <div className={styles['feature-illustration']} style={item?.illustration} />}
              {item?.icon && <Image className={styles.icon} src={item?.icon} alt="icon" width={100} height={100} />}
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
