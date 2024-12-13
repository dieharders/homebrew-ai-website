'use client'

import styles from './SubscribeInput.module.css';
import Button from './Button';
import { cx } from '../utils/common';

export default function SubscribeInput(p: {
  location?: 'body' | 'accent',
  className?: string,
  actionText?: string,
  placeholder?: string,
  onAction?: () => void,
  link?: string,
}) {
  const actionText = p.actionText ?? 'Join early access';
  const placeholder = p.placeholder ?? 'your@email.com';
  const location = p.location ?? 'body';

  const className = cx(
    styles.container,
    styles[`container-location-${location}`],
    p.className,
  );

  return (
    <form method="GET" action="/api/subscribe">
      <div className={cx(styles.subscribe, className)}>
        <input className={styles.input} name="email" type="email" required placeholder={placeholder} />
        <Button className={styles.button} onClick={p.onAction} href={p.link} size="large" location="highlight">{actionText}</Button>
      </div>
    </form>
  )
}
