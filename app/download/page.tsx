import styles from "./page.module.css";
import Header from "@/blocks/Header";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { cx } from "@/utils/common";
import { Gpu, Cpu } from "lucide-react";

// Download links
const DOWNLOADS = {
  windowsCpu:
    "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.WIN.CPU.Setup.zip",
  windowsGpu:
    "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.WIN.CUDA.Setup.zip",
  macos:
    "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.macOS.Setup.zip",
};

// Platform icons
function WindowsIcon() {
  return (
    <svg
      className={styles.platformIcon}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      className={styles.platformIcon}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function DownloadPage() {
  return (
    <div>
      <Header id="top" title="" />
      <main>
        <Section background="dark" className={styles.downloadsSection}>
          {/* Hero Header */}
          <div className={styles.heroHeader}>
            <h1 className={styles.pageTitle}>DOWNLOAD OPENBREW</h1>
            <p className={styles.pageSubtitle}>
              Choose your platform and start using AI locally
            </p>
          </div>

          <div className={styles.cardsContainer}>
            {/* Windows CPU Card */}
            <div className={cx(styles.card, styles.cardWindows)}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconGroup}>
                    <WindowsIcon />
                  </div>
                  <h2 className={styles.cardTitle}>Windows</h2>
                  <span className={styles.cardBadge}>
                    CPU
                    <Cpu className={styles.badgeIcon} />
                  </span>
                </div>
                <p className={styles.cardDescription}>
                  No dedicated GPU required. Runs on any Windows PC or laptop.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Windows 10 / 11</li>
                  <li>No GPU required</li>
                  <li>Lower VRAM usage</li>
                </ul>
                <Button
                  className={styles.cardButton}
                  href={DOWNLOADS.windowsCpu}
                  size="large"
                  type="custom"
                >
                  Download for Windows
                </Button>
              </div>
            </div>

            {/* Windows GPU Card */}
            <div className={cx(styles.card, styles.cardGpu)}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconGroup}>
                    <WindowsIcon />
                  </div>
                  <h2 className={styles.cardTitle}>Windows</h2>
                  <span className={styles.cardBadge}>
                    GPU
                    <Gpu className={styles.badgeIcon} />
                  </span>
                </div>
                <p className={styles.cardDescription}>
                  Accelerate AI with discreet graphics for faster inference.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>NVIDIA RTX recommended</li>
                  <li>CUDA acceleration</li>
                  <li>10x faster than CPU</li>
                </ul>
                <Button
                  className={styles.cardButton}
                  href={DOWNLOADS.windowsGpu}
                  size="large"
                  type="custom"
                >
                  Download for Windows
                </Button>
              </div>
            </div>

            {/* MacOS Card */}
            <div className={cx(styles.card, styles.cardMac)}>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconGroup}>
                    <AppleIcon />
                  </div>
                  <h2 className={styles.cardTitle}>macOS</h2>
                  <span className={styles.cardBadge}>Universal</span>
                </div>
                <p className={styles.cardDescription}>
                  Native Apple Silicon support including Metal acceleration.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Apple M Series optimized</li>
                  <li>Metal GPU acceleration</li>
                  <li>Intel Mac compatible</li>
                </ul>
                <Button
                  className={styles.cardButton}
                  href={DOWNLOADS.macos}
                  size="large"
                  type="custom"
                >
                  Download for Mac
                </Button>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className={styles.systemReqs}>
            <h3>SYSTEM REQUIREMENTS</h3>
            <p>
              4GB RAM minimum &nbsp;•&nbsp; 16GB RAM recommended &nbsp;•&nbsp;
              50GB free disk space &nbsp;•&nbsp; 64-bit OS
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
