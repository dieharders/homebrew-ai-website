'use client'

import { ReactNode } from 'react';
import styles from './Hero.module.css';
import Section from '@/components/Section';
import Button from '@/components/Button';
import ObrewLogo from 'public/logo-obrew.svg';
import ClapLogo from 'public/icons/clap.png';
import Image from 'next/image';
import { lilita_one } from 'fonts/fonts';
import { cx } from '../utils/common';

export default function Hero(p: {
  id?: string,
  className?: string,
  title?: ReactNode | string,
  subtitle: string,
  children?: ReactNode,
}) {
  const className = cx(
    styles.container,
    p.className
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
            {p.title && <h1 className={cx(styles.title, lilita_one.className)}>{p.title}</h1>}
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
