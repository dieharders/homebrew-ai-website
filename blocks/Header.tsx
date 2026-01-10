'use client'

import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Button from '@/components/Button';
import Image from 'next/image';
import EmailIcon from 'public/icon-email.svg';
import YTIcon from 'public/icon-youtube.svg';
import GithubIcon from 'public/icon-github.svg';
import ObrewLogo from 'public/badge.png';
import { cx } from '@/utils/common';
import SecondaryNav, { NavItem } from './SecondaryNav';

const defaultNavItems: NavItem[] = [
  { label: 'Features', href: '/#features' },
  { label: 'Use Cases', href: '/#use-cases' },
  { label: 'Docs', href: 'https://github.com/dieharders/obrew-studio-server' },
  { label: 'Download', href: '/download' },
];

export default function Header(p: {
  id?: string,
  className?: string,
  title: string,
  showSecondaryNav?: boolean,
  navItems?: NavItem[],
  ctaButton?: { text: string; href: string },
}) {
  const id = p.id ?? 'top';
  const showSecondaryNav = p.showSecondaryNav ?? true;
  const navItems = p.navItems ?? defaultNavItems;
  const ctaButton = p.ctaButton ?? { text: 'Get Started', href: '/download' };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id={id} className={cx(styles.container, isScrolled && styles.scrolled, p.className)}>
      <div className={styles.primaryNav}>
        <div className={styles.content}>
          <div className={styles.titleGroup} title={p.title}>
            {p.title && <div className={styles.title}>{p.title}</div>}
            <Image src={ObrewLogo} alt="OpenBrew" height={28} className={styles.logo} />
            <a
              className={styles.titleLink}
              href="https://www.openbrew.ai"
              title="OpenBrew.AI"
              target="_self"
            >
              OpenBrew
            </a>
          </div>
          <div className={styles.links}>
            <Button className={styles.btn} href="http://www.youtube.com/@OpenBrewAi" title="Youtube" onClick={() => { }} size="small" type="custom">
              <Image src={YTIcon} alt="Youtube" height="28" />
            </Button>
            <Button className={styles.btn} href="mailto:openbrewai+support@gmail.com" title="Email" onClick={() => { }} size="small" type="custom">
              <Image src={EmailIcon} alt="Email" height="28" />
            </Button>
            <Button className={styles.btn} href="https://github.com/dieharders/obrew-studio-server" title="Github" onClick={() => { }} size="small" type="custom">
              <Image src={GithubIcon} alt="Github" height="28" />
            </Button>
          </div>
        </div>
      </div>
      <SecondaryNav items={navItems} ctaButton={ctaButton} />
    </header>
  );
}
