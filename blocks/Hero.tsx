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
    </Section>
  );
}
