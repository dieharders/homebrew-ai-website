import styles from "./Footer.module.css";
import { Youtube, Mail, Github } from "lucide-react";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";

const links = [
  {
    icon: Youtube,
    label: "YouTube",
    href: "http://www.youtube.com/@OpenBrewAi",
  },
  {
    icon: Mail,
    label: "Contact us",
    href: "mailto:openbrewai+support@gmail.com",
  },
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/dieharders/obrew-studio-server",
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
          <div className={styles.accent} />
          <h2 className={cx(styles.title, lilita_one.className)}>GET IN TOUCH</h2>
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
