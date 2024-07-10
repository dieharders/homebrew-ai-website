import styles from './Header.module.css';
import Button from '../components/Button';
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
        <div className={styles.title} title={p.title}>{p.title}</div>
        <div className={styles.links}>
          <Button href="http://www.youtube.com/@OpenBrewAi" onClick={() => { }} type="secondary">📺YouTube</Button>
          <Button href="mailto:support@openbrewai@gmail.com" onClick={() => { }} type="secondary">📧Email</Button>
          <Button href="https://studio.openbrewai.com" onClick={() => { }} type="secondary">Obrew Studio</Button>
        </div>
      </div>
    </header>
  );
}
