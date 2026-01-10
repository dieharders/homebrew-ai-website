import styles from './Features.module.css';
import Section, { T_Background, T_Pattern } from '@/components/Section';
import { lilita_one } from 'fonts/fonts';
import { cx } from '../utils/common';
import Image from 'next/image';
import ExploreLink from '@/components/ExploreLink';

export default function Features(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  features: {
    title: string,
    text: string,
    illustration?: any,
    icon?: string,
    link?: { text: string; href: string },
  }[],
  background?: T_Background,
  pattern?: T_Pattern,
  accentLine?: 'top' | 'bottom' | 'both' | 'none',
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
      pattern={p.pattern}
      accentLine={p.accentLine}
    >
      <div className={styles.header}>
        <div className={styles.accentLine} />
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
                {item?.link && (
                  <ExploreLink href={item.link.href} className={styles['feature-link']}>
                    {item.link.text}
                  </ExploreLink>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
