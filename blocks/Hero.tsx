import { ReactNode } from 'react';
import styles from './Hero.module.css';
import Section from '../components/Section';
import poster from 'public/main-poster.png';
import phone from 'public/phone.png';
import watch from 'public/watch-face.png';
import { cx } from '../utils/common';

export default function Hero(p: {
  id?: string,
  className?: string,
  title: ReactNode,
  subtitle: string,
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
      {/* Poster */}
      <div className={styles.overflow}>
        <a
          href="http://www.youtube.com/@OpenBrewAi"
          target="_blank"
          className={styles.posterContainer}
        >
          <img src={poster.src} className={styles.illustration} />
          <img src={phone.src} className={styles.phone} />
          <img src={watch.src} className={styles.watch} />
        </a>
      </div>
    </Section>
  );
}
