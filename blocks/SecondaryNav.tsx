'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SecondaryNav.module.css';
import { cx } from '@/utils/common';
import Button from '@/components/Button';

export interface NavItem {
  label: string;
  href: string;
}

interface SecondaryNavProps {
  items: NavItem[];
  ctaButton?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function SecondaryNav({
  items,
  ctaButton,
  className,
}: SecondaryNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cx(styles.container, className)}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <span className={styles.brandIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z"/>
            </svg>
          </span>
          <span className={styles.brandName}>FileBuff</span>
        </div>
        <ul className={styles.navList}>
          {items.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={cx(styles.navLink, isActive && styles.navLinkActive)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {ctaButton && (
          <Button
            href={ctaButton.href}
            type="primary"
            size="small"
            location="body"
          >
            {ctaButton.text}
          </Button>
        )}
      </div>
    </nav>
  );
}
