import { ReactNode } from 'react';
import styles from './Hero.module.css';
import Section from '../components/Section';
import ObrewLogo from 'public/logo-obrew.svg';
import ClapLogo from 'public/icons/clap.png';
import Button from '../components/Button';
import Image from 'next/image';
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
  const downloadLink = "https://github.com/dieharders/ai-text-server/releases/latest/download/ObrewServer.WIN.Setup.exe"

  return (
    <Section id={p.id} className={className}>
      {/* Title */}
      {/* <div className={styles.header}>
        <div className={styles.title}>{p.title}</div>
        <p className={styles.subtitle}>{p.subtitle}</p>
        {p.children && <div className={styles.children}>{p.children}</div>}
      </div> */}

      <div className={styles.header}>
        <div className={styles.illustrationContainer}>
          {/* Illustration */}
          <div className={styles.logoGroup}>
            <Image src={ObrewLogo} alt="Obrew Studio" height={384} />
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.title}>{p.title}</div>
            <p className={styles.subtitle}>{p.subtitle}</p>
            <Button
              className={styles.btn}
              href={downloadLink}
              onClick={() => { }}
              size="large"
              type="custom"
              location="body"
            >
              <Image src={ClapLogo} alt="clap" width="32" height="32" />&nbsp;Download for Windows
            </Button>
          </div>
        </div>
        {p.children && <div className={styles.children}>{p.children}</div>}
      </div>

      {/* Logo Poster */}
      {/* <div className={styles.logoGroup}>
        <Image src={ObrewLogo} alt="obrew logo" height={384} />
        <Image src={WatchSVG} alt="watch illustration" height={320} />
      </div> */}

      {/* Poster */}
      {/* <div className={styles.overflow}>
        <a
          href="http://www.youtube.com/@OpenBrewAi"
          target="_blank"
          className={styles.posterContainer}
        >
          <img src={poster.src} className={styles.illustration} />
          <img src={phone.src} className={styles.phone} />
          <img src={watch.src} className={styles.watch} />
        </a>
      </div> */}
    </Section>
  );
}
