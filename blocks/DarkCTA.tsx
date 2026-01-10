import styles from './DarkCTA.module.css';
import { cx } from '@/utils/common';
import Section from '@/components/Section';
import Button from '@/components/Button';

interface DarkCTAProps {
  id?: string;
  label?: string;
  title: string;
  subtitle?: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  className?: string;
}

export default function DarkCTA({
  id,
  label,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  className,
}: DarkCTAProps) {
  return (
    <Section
      id={id}
      background="dark-navy"
      size="wide"
      pattern="geometric"
      accentLine="top"
      className={cx(styles.section, className)}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {label && <span className={styles.label}>{label}</span>}
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.actions}>
          <Button
            href={primaryButton.href}
            type="primary"
            size="large"
            location="accent"
          >
            {primaryButton.text}
          </Button>
          {secondaryButton && (
            <Button
              href={secondaryButton.href}
              type="secondary"
              size="large"
              location="accent"
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
