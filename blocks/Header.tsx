'use client'

import styles from './Header.module.css';
import Button from '@/components/Button';
import Image from 'next/image';
import EmailIcon from 'public/icon-email.svg';
import YTIcon from 'public/icon-youtube.svg';
import GithubIcon from 'public/icon-github.svg';
import { cx } from '@/utils/common';

export default function Header(p: {
  id?: string,
  className?: string,
  title: string,
}) {
  const id = p.id ?? 'top';

  return (
    <header id={id} className={cx(styles.container, p.className)}>
      <div className={styles.content}>
        <div className={styles.titleGroup} title={p.title}>
          {p.title && <div className={styles.title}>{p.title}</div>}
          <a
            className={styles.titleLink}
            href="https://studio.openbrewai.com"
            title="Download Obrew Studio"
            target="_blank"
          >
            Obrew Studio
          </a>
          <span className={styles.descr}>| Free & Open Source</span>
        </div>
        <div className={styles.links}>
          <Button className={styles.btn} href="http://www.youtube.com/@OpenBrewAi" title="Youtube" onClick={() => { }} size="small" type="custom">
            <Image src={YTIcon} alt="Youtube" height="28" />
          </Button>
          <Button className={styles.btn} href="mailto:openbrewai+support@gmail.com" title="Email" onClick={() => { }} size="small" type="custom">
            <Image src={EmailIcon} alt="Email" height="28" />
          </Button>
          <Button className={styles.btn} href="https://github.com/dieharders/ai-text-server" title="Github" onClick={() => { }} size="small" type="custom">
            <Image src={GithubIcon} alt="Github" height="28" />
          </Button>
        </div>
      </div>
    </header>
  );
}
