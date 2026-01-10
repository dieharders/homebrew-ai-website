import styles from "./page.module.css";
import Header from "@/blocks/Header";
import Section from "@/components/Section";
import Button from "@/components/Button";
import {
  Search,
  Workflow,
  ClipboardList,
  Sparkles,
  Plug,
  Shield,
} from "lucide-react";

const FILEBUFF_URL = "https://filebuff.openbrew.ai";

export default function SponsorPage() {
  return (
    <div>
      <Header id="top" title="" />
      <main>
        <Section background="dark" className={styles.sponsorSection}>
          {/* Hero Header */}
          <div className={styles.heroHeader}>
            <span className={styles.eyebrow}>Sponsorship</span>
            <h1 className={styles.pageTitle}>FILEBUFF</h1>
            <p className={styles.pageSubtitle}>
              The Intelligence That Stays With You
            </p>
            <p className={styles.pageDescription}>
              Scale your workforce with on-device GenAI. FileBuff is a smart
              file manager purpose-built for government and defense teams
              working on large projects.
            </p>
          </div>

          {/* Features Grid */}
          <div className={styles.featuresGrid}>
            <FeatureCard
              icon={<Search />}
              title="File Search & Synthesis"
              description="Natural language document search helps you find exactly what you need across your entire organization."
            />
            <FeatureCard
              icon={<Workflow />}
              title="Workflow Automation"
              description="Automate time-intensive tasks and streamline your team's processes."
            />
            <FeatureCard
              icon={<ClipboardList />}
              title="Automatic Audit Trail"
              description="Complete transparency with built-in tracking of all AI interactions and decisions."
            />
            <FeatureCard
              icon={<Sparkles />}
              title="Ambient Intelligence"
              description="Always-on AI assistance that works in the background, ready when you need it."
            />
            <FeatureCard
              icon={<Plug />}
              title="Seamless Integrations"
              description="Connect with Teams, Outlook, SharePoint, and your existing infrastructure."
            />
            <FeatureCard
              icon={<Shield />}
              title="Zero Attack Surface"
              description="On-device processing means zero external connections, zero data leakage, and zero new vulnerabilities."
            />
          </div>

          {/* Value Proposition */}
          <div className={styles.valueSection}>
            <h2 className={styles.valueTitle}>Why Sponsor?</h2>
            <p className={styles.valueText}>
              Your sponsorship helps us build the next generation of secure,
              on-device AI tools for teams that handle sensitive information.
              FileBuff runs entirely within your perimeter—no cloud, no external
              APIs, no data leaving your network.
            </p>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>0</span>
                <span className={styles.statLabel}>External Connections</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>0</span>
                <span className={styles.statLabel}>Data Leakage</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>0</span>
                <span className={styles.statLabel}>New Attack Surface</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <Button
              className={styles.ctaButton}
              href={FILEBUFF_URL}
              size="large"
              type="custom"
            >
              Learn More About FileBuff
            </Button>
          </div>
        </Section>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}
