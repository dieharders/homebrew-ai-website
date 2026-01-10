import Link from 'next/link';
import styles from './Button.module.css';
import { cx } from '../utils/common';

export type T_Location = 'body' | 'accent' | 'highlight';

export default function Button(p: {
  size?: 'xl' | 'large' | 'normal' | 'small',
  type?: 'primary' | 'secondary' | 'custom',
  location?: T_Location,
  title?: string,
  href?: string,
  target?: '_blank' | '_self',
  rel?: string,
  onClick?(): void,
  className?: string,
  children: React.ReactNode,
}) {
  const size = p.size ?? 'normal';
  const type = p.type ?? 'primary';
  const location = p.location ?? 'body';

  const className = cx(
    styles.container,
    styles[`container-size-${size}`],
    type !== 'custom' && styles[`container-type-${type}`],
    styles[`container-location-${location}`],
    p.className,
  );

  if (p.href) {
    // Use Next.js Link for internal navigation (faster client-side routing)
    const isInternal = p.href.startsWith('/') || p.href.startsWith('#');

    if (isInternal && !p.target) {
      return (
        <Link className={className} href={p.href} title={p.title || ""} onClick={p.onClick}>
          {p.children}
        </Link>
      );
    }

    // Use regular anchor for external links or when target is specified
    return (
      <a className={className} href={p.href} target={p.target} rel={p.rel} title={p.title || ""} onClick={p.onClick}>
        {p.children}
      </a>
    );
  }

  return (
    <button className={className} onClick={p.onClick}>
      {p.children}
    </button>
  )
}
