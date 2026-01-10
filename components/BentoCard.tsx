import styles from "./BentoCard.module.css";
import { cx } from "../utils/common";
import ExploreLink from "./ExploreLink";

export type BentoCardVariant = "light" | "dark" | "accent";
export type BentoCardSize = "small" | "medium" | "large";

interface BentoCardProps {
  variant?: BentoCardVariant;
  size?: BentoCardSize;
  className?: string;
  illustration?: React.ReactNode;
  title?: string;
  description?: string;
  link?: { text: string; href: string };
  children?: React.ReactNode;
}

export default function BentoCard({
  variant = "light",
  size = "medium",
  className,
  illustration,
  title,
  description,
  link,
  children,
}: BentoCardProps) {
  return (
    <div
      className={cx(
        styles.card,
        styles[`card-${variant}`],
        styles[`card-${size}`],
        className
      )}
    >
      {illustration && (
        <div className={styles.illustration}>{illustration}</div>
      )}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
        {link && (
          <ExploreLink
            href={link.href}
            variant={variant === "dark" ? "light" : "default"}
            className={styles.link}
          >
            {link.text}
          </ExploreLink>
        )}
      </div>
    </div>
  );
}
