import styles from "./Plans.module.css";
import Section from "@/components/Section";
import HashLink from "@/components/HashLink";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";

export interface T_Plan {
  name: string;
  price: string;
  cadence?: string;
  text: string;
  includes: string[];
  cta: { text: string; href: string };
  featured?: boolean;
}

export default function Plans(p: {
  id?: string;
  title: string;
  subtitle: string;
  plans: T_Plan[];
}) {
  return (
    <Section id={p.id} background="normal" size="wide">
      <div className={styles.header}>
        <div className={styles.accentLine} />
        <h2 className={cx(lilita_one.className, styles.title)}>{p.title}</h2>
        <p className={styles.subtitle}>{p.subtitle}</p>
      </div>

      <ul className={styles.plans}>
        {p.plans.map((plan) => (
          <li key={plan.name} className={cx(styles.plan, plan.featured && styles.featured)}>
            <span className={styles.name}>{plan.name}</span>
            <p className={styles.price}>
              <span className={lilita_one.className}>{plan.price}</span>
              {plan.cadence && <span className={styles.cadence}>{plan.cadence}</span>}
            </p>
            <p className={styles.text}>{plan.text}</p>
            <ul className={styles.includes}>
              {plan.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <HashLink href={plan.cta.href} className={styles.cta}>
              {plan.cta.text}
            </HashLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
