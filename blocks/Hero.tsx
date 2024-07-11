import { ReactNode } from 'react';
import styles from './Hero.module.css';
import Section from '../components/Section';
import poster from 'public/poster-head.png'
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

  const posterStyle = {
    backgroundImage: `url(${poster.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <Section id={p.id} className={className}>
      <div className={styles.header}>
        <div className={styles.title}>{p.title}</div>
        <p className={styles.subtitle}>{p.subtitle}</p>
        <br />
        {p.children && p.children}
      </div>
      {/* Poster */}
      <a
        href="http://www.youtube.com/@OpenBrewAi"
        target="_blank"
      >
        <div className={styles.illustration} style={posterStyle} />
      </a>
    </Section>
  );
}
