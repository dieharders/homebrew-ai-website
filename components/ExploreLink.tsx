import Link from 'next/link';
import styles from './ExploreLink.module.css';
import { cx } from '../utils/common';

interface ExploreLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'light';
  reverse?: boolean;
}

export default function ExploreLink({
  href,
  children,
  className,
  variant = 'default',
  reverse = false,
}: ExploreLinkProps) {
  const arrow = (
    <svg
      className={cx(styles.arrow, reverse ? styles.arrowReverse : undefined)}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );

  return (
    <Link
      href={href}
      className={cx(styles.link, styles[variant], className)}
    >
      {reverse && arrow}
      <span>{children}</span>
      {!reverse && arrow}
    </Link>
  );
}
