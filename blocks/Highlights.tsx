import styles from './Highlights.module.css';
import Section, { T_Background, T_Pattern } from '@/components/Section';
import { lilita_one } from 'fonts/fonts';
import { cx } from '../utils/common';
import VideoPlayer from '@/components/VideoPlayer';
import ExploreLink from '@/components/ExploreLink';

export default function Highlights(p: {
  id?: string,
  className?: string,
  title: string,
  subtitle: string,
  highlights: {
    title: string,
    text: string,
    illustration?: any,
    videoSrc?: string,
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

      <ul className={styles.highlights}>
        {p.highlights.map((item, i) => {
          return (
            <li key={item.title} className={styles.highlight}>
              <div className={styles['illustration-container']}>
                <div className={styles['highlight-spotlight']}></div>
                {item.videoSrc ? (
                  <div className={styles['highlight-video']}>
                    <VideoPlayer
                      src={item.videoSrc}
                      autoPlay
                      loop
                      muted
                      aspectRatio="16/9"
                      lazy
                    />
                  </div>
                ) : item.illustration ? (
                  <div className={styles['highlight-illustration']} style={item.illustration}></div>
                ) : null}
              </div>
              <div className={styles['highlight-content']}>
                <h3 className={styles['highlight-title']}>{item.title}</h3>
                <p className={styles['highlight-text']}>{item.text}</p>
                {item.link && (
                  <ExploreLink href={item.link.href} className={styles['highlight-link']}>
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
