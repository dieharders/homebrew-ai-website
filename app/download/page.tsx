import styles from './page.module.css';
import Header from '@/blocks/Header';
import Footer from '@/blocks/Footer';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { lilita_one } from 'fonts/fonts';
import { cx } from '@/utils/common';
import data from '@/global/global.json';

// Download links
const DOWNLOADS = {
  windowsCpu: "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.WIN.Setup.zip",
  windowsGpu: "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.WIN.CUDA.Setup.zip",
  macos: "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.MAC.Setup.zip",
};

// Bear creature for Windows CPU (reliable, sturdy)
function BearCreature() {
  return (
    <svg className={styles.creature} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <circle cx="25" cy="25" r="12" fill="currentColor" opacity="0.8" />
      <circle cx="75" cy="25" r="12" fill="currentColor" opacity="0.8" />
      <circle cx="25" cy="25" r="6" fill="currentColor" opacity="0.4" />
      <circle cx="75" cy="25" r="6" fill="currentColor" opacity="0.4" />
      {/* Head */}
      <circle cx="50" cy="50" r="35" fill="currentColor" opacity="0.9" />
      {/* Snout */}
      <ellipse cx="50" cy="62" rx="14" ry="10" fill="currentColor" opacity="0.5" />
      {/* Eyes */}
      <circle cx="38" cy="45" r="5" fill="white" opacity="0.9" />
      <circle cx="62" cy="45" r="5" fill="white" opacity="0.9" />
      <circle cx="39" cy="46" r="2.5" fill="#222" />
      <circle cx="63" cy="46" r="2.5" fill="#222" />
      {/* Nose */}
      <ellipse cx="50" cy="58" rx="5" ry="3.5" fill="#222" />
      {/* Mouth */}
      <path d="M 45 65 Q 50 70 55 65" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

// Dragon creature for Windows GPU (powerful, gaming)
function DragonCreature() {
  return (
    <svg className={styles.creature} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Horns */}
      <path d="M 25 35 L 15 10 L 30 30" fill="currentColor" opacity="0.7" />
      <path d="M 75 35 L 85 10 L 70 30" fill="currentColor" opacity="0.7" />
      {/* Spikes */}
      <path d="M 35 20 L 40 5 L 45 20" fill="currentColor" opacity="0.5" />
      <path d="M 55 20 L 60 5 L 65 20" fill="currentColor" opacity="0.5" />
      {/* Head */}
      <ellipse cx="50" cy="50" rx="32" ry="28" fill="currentColor" opacity="0.9" />
      {/* Snout */}
      <ellipse cx="50" cy="68" rx="18" ry="12" fill="currentColor" opacity="0.7" />
      {/* Eyes */}
      <ellipse cx="35" cy="42" rx="7" ry="5" fill="#111" />
      <ellipse cx="65" cy="42" rx="7" ry="5" fill="#111" />
      <ellipse cx="37" cy="42" rx="3" ry="2" fill="#ff6b00" />
      <ellipse cx="67" cy="42" rx="3" ry="2" fill="#ff6b00" />
      {/* Nostrils */}
      <circle cx="43" cy="65" r="3" fill="#111" opacity="0.6" />
      <circle cx="57" cy="65" r="3" fill="#111" opacity="0.6" />
      {/* Smoke from nostrils */}
      <circle cx="40" cy="58" r="2" fill="white" opacity="0.3" />
      <circle cx="60" cy="58" r="2" fill="white" opacity="0.3" />
      {/* Scales pattern */}
      <path d="M 30 55 Q 35 52 40 55" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M 60 55 Q 65 52 70 55" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
    </svg>
  );
}

// Phoenix creature for MacOS (elegant, premium)
function PhoenixCreature() {
  return (
    <svg className={styles.creature} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Crown feathers */}
      <path d="M 50 25 L 50 5 L 55 22" fill="currentColor" opacity="0.8" />
      <path d="M 40 28 L 35 10 L 45 25" fill="currentColor" opacity="0.6" />
      <path d="M 60 28 L 65 10 L 55 25" fill="currentColor" opacity="0.6" />
      <path d="M 32 35 L 22 20 L 38 32" fill="currentColor" opacity="0.4" />
      <path d="M 68 35 L 78 20 L 62 32" fill="currentColor" opacity="0.4" />
      {/* Head */}
      <ellipse cx="50" cy="50" rx="28" ry="25" fill="currentColor" opacity="0.9" />
      {/* Beak */}
      <path d="M 50 55 L 42 68 L 50 75 L 58 68 Z" fill="#ff9500" opacity="0.9" />
      <path d="M 50 55 L 50 75" stroke="#cc7000" strokeWidth="1" />
      {/* Eyes */}
      <ellipse cx="38" cy="45" rx="6" ry="7" fill="white" opacity="0.95" />
      <ellipse cx="62" cy="45" rx="6" ry="7" fill="white" opacity="0.95" />
      <circle cx="39" cy="46" r="3.5" fill="#111" />
      <circle cx="63" cy="46" r="3.5" fill="#111" />
      <circle cx="40" cy="45" r="1.5" fill="white" />
      <circle cx="64" cy="45" r="1.5" fill="white" />
      {/* Wing hints */}
      <path d="M 15 60 Q 25 50 30 55" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M 85 60 Q 75 50 70 55" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.5" />
      {/* Flame glow */}
      <circle cx="50" cy="50" r="30" fill="url(#phoenixGlow)" opacity="0.2" />
      <defs>
        <radialGradient id="phoenixGlow">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// Platform icons
function WindowsIcon() {
  return (
    <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GpuIcon() {
  return (
    <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" opacity="0.5" />
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M7 9h2v6H7zM11 9h2v6h-2zM15 9h2v6h-2z" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg className={styles.platformIcon} viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="6" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="9" y="9" width="6" height="6" fill="currentColor" />
      {/* Pins */}
      <path d="M8 4v2M12 4v2M16 4v2M8 18v2M12 18v2M16 18v2M4 8h2M4 12h2M4 16h2M18 8h2M18 12h2M18 16h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DownloadPage() {
  return (
    <div>
      <Header id="top" title="" />
      <main>
        <Section background="normal" className={styles.downloadsSection}>
          <div className={styles.cardsContainer}>
            {/* Windows CPU Card */}
            <div className={cx(styles.card, styles.cardWindows)}>
              {/* <div className={styles.cardBackground}>
                <BearCreature />
              </div> */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconGroup}>
                    <WindowsIcon />
                    <CpuIcon />
                  </div>
                  <h2 className={styles.cardTitle}>Windows</h2>
                  <span className={styles.cardBadge}>CPU</span>
                </div>
                <p className={styles.cardDescription}>
                  No dedicated GPU required. Runs on any Windows PC or Laptop.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Works on Windows 10/11</li>
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
              {/* <div className={styles.cardBackground}>
                <DragonCreature />
              </div> */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconGroup}>
                    <WindowsIcon />
                    <GpuIcon />
                  </div>
                  <h2 className={styles.cardTitle}>Windows</h2>
                  <span className={styles.cardBadge}>NVIDIA GPU</span>
                </div>
                <p className={styles.cardDescription}>
                  Accelerate AI with your NVIDIA graphics card enabling faster processing.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>NVIDIA RTX recommended</li>
                  <li>GPU Acceleration</li>
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
              {/* <div className={styles.cardBackground}>
                <PhoenixCreature />
              </div> */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconGroup}>
                    <AppleIcon />
                  </div>
                  <h2 className={styles.cardTitle}>MacOS</h2>
                  <span className={styles.cardBadge}>Metal • Universal</span>
                </div>
                <p className={styles.cardDescription}>
                  Native Apple Silicon support with Metal acceleration. Works on all Macs.
                </p>
                <ul className={styles.cardFeatures}>
                  <li>Apple M1+ optimized</li>
                  <li>Intel Mac compatible</li>
                  <li>Metal GPU acceleration</li>
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

          <div className={styles.systemReqs}>
            <h3>Download Obrew</h3>
            <p className={styles.subtitle}>Choose your Operating System and get started.</p>
            <br />
            <h3>System Requirements</h3>
            <p>4GB RAM minimum<br />16GB RAM recommended<br />50GB free disk space<br />64-bit OS</p>
          </div>
        </Section>
      </main>
    </div>
  );
}
