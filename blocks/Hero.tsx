import { ReactNode } from 'react';
import styles from './Hero.module.css';
import Section from '../components/Section';
import cx from '../utils/cx';
import SubscribeInput from '../components/SubscribeInput';

export default function Hero(p: {
  id?: string,
  className?: string,
  children: ReactNode,
  subtitle: string,
  illustration: string,
  subscribePlaceholder?: string,
  subscribeActionText?: string,
  subscribeAction?: () => void,
  subscribeLink?: string,
}) {
  const className = cx(
    styles.container,
    p.className,
  );

  return (
    <Section id={p.id} className={className}>
      <div className={styles.header}>
        <div className={styles.title}>{p.children}</div>
        <p className={styles.subtitle}>{p.subtitle}</p>
        {p.subscribeActionText && <SubscribeInput className={styles.subscribe} placeholder={p.subscribePlaceholder} onAction={p?.subscribeAction} link={p.subscribeLink} actionText={p.subscribeActionText} />}
      </div>
      <div className={styles.illustration} />
    </Section>
  );
}
