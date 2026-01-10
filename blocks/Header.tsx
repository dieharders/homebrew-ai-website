'use client'

import { useEffect, useState } from 'react';
import styles from './Header.module.css';
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
  navItems?: NavItem[],
  ctaButton?: { text: string; href: string },
}) {
  const id = p.id ?? 'top';
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
      <SecondaryNav items={navItems} ctaButton={ctaButton} />
    </header>
  );
}
