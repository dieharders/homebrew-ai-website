import styles from "./Footer.module.css";
import { Youtube, Mail, Linkedin } from "lucide-react";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";

/** The X (Twitter) mark. Lucide only ships the old bird, and its `X` is a close icon. */
function XLogo(p: { className?: string; size?: number; strokeWidth?: number }) {
  return (
    <svg
      className={p.className}
      width={p.size}
      height={p.size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-7.4 8.5L23.3 22h-6.8l-5.3-7-6.1 7H2l7.9-9.1L1.5 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z" />
    </svg>
  );
}

const links = [
  {
    icon: Youtube,
    label: "YouTube",
    href: "http://www.youtube.com/@OpenBrewAi",
  },
  {
    icon: Mail,
    label: "Contact us",
    href: "mailto:sorob+support@openbrew.ai",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/openbrewai",
  },
  {
    icon: XLogo,
    label: "X",
    href: "https://x.com/OpenBrewAi",
  },
];

export default function Footer(p: {
  id?: string;
  className?: string;
  title: string;
}) {
  const className = cx(styles.container, p.className);

  return (
    <footer id={p.id} className={className}>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={cx("squiggle-accent", styles.accent)} />
          <h2 className={cx(styles.title, lilita_one.className)}>
            GET IN TOUCH
          </h2>
        </div>
        <div className={styles.cards}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <link.icon className={styles.icon} size={32} strokeWidth={1.5} />
              <span className={styles.label}>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()}, {p.title}
      </div>
    </footer>
  );
}
