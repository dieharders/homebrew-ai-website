import styles from './Button.module.css';
import { cx } from '../utils/common';

export default function Button(p: {
  size?: 'large' | 'normal',
  type?: 'primary' | 'secondary' | 'custom',
  location?: 'body' | 'accent',
  href?: string,
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
    return (
      <a className={className} href={p.href} target="_blank" onClick={p.onClick}>
        {p.children}
      </a>
    )
  }

  return (
    <button className={className} onClick={p.onClick}>
      {p.children}
    </button>
  )
}
