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
    return (
      <a className={className} href={p.href} target={p.target} rel={p.rel} title={p.title || ""} onClick={p.onClick}>
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
