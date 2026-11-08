import styles from "./AssetRegistry.module.css";
import Section from "@/components/Section";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";
import RegistryMock from "@/components/mocks/RegistryMock";

const CATEGORIES = [
  { label: "Components", text: "User interfaces and motion templates" },
  { label: "Sound", text: "Music, effects and voice" },
  { label: "3D", text: "Models, scenes and shaders" },
  { label: "Clips", text: "Stock, motion and generated video" },
  { label: "Images", text: "Photos, icons, graphics and illustrations" },
];

/**
 * The asset registry: the shared library every app (and any third-party
 * agent) pulls building blocks from. Planned, so it's framed as what's coming.
 */
export default function AssetRegistry(p: { id?: string }) {
  return (
    <Section id={p.id} background="alternate" size="wide">
      <div className={styles.layout}>
        <div>
          <div className={styles.accentLine} />
          <span className={styles.status}>Planned</span>
          <h2 className={cx(lilita_one.className, styles.title)}>
            AN ASSET REGISTRY BUILT FOR AGENTS
          </h2>
          <p className={styles.lead}>
            There&apos;s no single, agent-friendly source for creative assets. We&apos;re
            building it. Agents working in our apps, or in any third-party app,
            can search the registry and pull what a project needs, already
            licensed and in the right format.
          </p>

          <ul className={styles.categories}>
            {CATEGORIES.map((c) => (
              <li key={c.label} className={styles.category}>
                <span className={styles.categoryLabel}>{c.label}</span>
                <span className={styles.categoryText}>{c.text}</span>
              </li>
            ))}
          </ul>

          <p className={styles.note}>
            Agents are first-class citizens: search, licensing and download all
            happen through an API and MCP, no browser required.
          </p>
        </div>

        <RegistryMock />
      </div>
    </Section>
  );
}
