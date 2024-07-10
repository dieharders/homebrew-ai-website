import styles from './SubscribeInput.module.css';
import Button from './Button';
import cx from '../utils/cx';

export default function SubscribeInput(p: {
  location?: 'body' | 'accent',
  className?: string,
  actionText?: string,
  placeholder?: string,
  onAction?: () => void,
  link?: string,
}) {
  const actionText = p.actionText ?? 'Join early access';
  const placeholder = p.placeholder ?? 'your@company.com';
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
        <input className={styles.foo} name="b_3951c19vtqb9xa0we_9rv293" tabIndex={-1} defaultValue="" />
        <Button className={styles.button} onClick={p.onAction} href={p.link} size="large" location="body">{actionText}</Button>
      </div>
    </form>
  )
}
