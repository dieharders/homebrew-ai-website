import styles from "./AssetRegistry.module.css";
import Section, { type T_Background } from "@/components/Section";
import { lilita_one } from "fonts/fonts";
import { cx } from "../utils/common";
import RegistryMock from "@/components/mocks/RegistryMock";
import { STATUS_LABEL } from "@/data/apps";

const CATEGORIES = ["UI", "Sound", "3D", "Video", "Images"];

/**
 * The asset registry: the shared library every app (and any third-party
 * agent) pulls building blocks from. Planned, so it's framed as what's coming.
 */
export default function AssetRegistry(p: {
  id?: string;
  background?: T_Background;
}) {
  return (
    <Section id={p.id} background={p.background ?? "alternate"} size="wide">
      <div className={styles.layout}>
        <div>
          {/* <div className={styles.accentLine} /> */}
          <div className={styles.identity}>
            {/* The registry's mark. Decorative: the heading below names it. Loaded as an image,
                like the app marks, so its gradient ids can't clash with the page's. */}
            <img
              src="/icons/registry.svg"
              alt=""
              aria-hidden
              width={44}
              height={44}
              className={styles.icon}
              draggable={false}
            />
            <span className={styles.status}>
              {STATUS_LABEL["in-progress"]}
            </span>
          </div>
          <h2 className={cx(lilita_one.className, styles.title)}>
            The asset registry built for agents
          </h2>
          <p className={styles.lead}>
            One agent-friendly source for creative assets. Agents can search the
            registry and pull down exactly what a project needs.
          </p>

          <ul className={styles.categories}>
            {CATEGORIES.map((c) => (
              <li key={c} className={styles.category}>
                {c}
              </li>
            ))}
          </ul>

          <p className={styles.note}>
            Agents have the power to: search, license, download, modify
          </p>
        </div>

        <RegistryMock />
      </div>
    </Section>
  );
}
