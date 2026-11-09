import type { ReactNode } from "react";
import {
  FileBuffIcon,
  MotionBuffIcon,
  PaperBuffIcon,
  ScreenBuffIcon,
} from "@/components/AppIcons";

export type T_AppStatus = "live" | "in-progress" | "soon";

export type T_AppId = "motionbuff" | "filebuff" | "paperbuff" | "screenbuff";

export type T_Platform = "desktop" | "web";

export interface T_AppFeature {
  /** Short uppercase label, e.g. "BRAND". */
  label: string;
  title: string;
  text: string;
}

export interface T_App {
  id: T_AppId;
  name: string;
  /**
   * Where the app lives. Unreleased apps point at their spotlight on the
   * homepage. An absolute URL is an off-site subdomain (see `isExternal`).
   */
  href: string;
  /** Short "what it is" line — used as the header tooltip and the card kicker. */
  tagline: string;
  /** Full sentence used in the suite section and the structured data. */
  description: string;
  /** Spotlight headline — the one-line promise of the app. */
  headline: string;
  /** Spotlight body copy, a little longer than `description`. */
  pitch: string;
  /** What the app does, in detail. Rendered as the spotlight's feature list. */
  features: T_AppFeature[];
  /** Where it runs, or where it will. Labelled by `platformLabel`. */
  platforms: T_Platform[];
  /** Drives every status-dependent label and CTA across the site. */
  status: T_AppStatus;
  icon: ReactNode;
  /** Tailwind class for the icon tile background. */
  iconBg: string;
  /** Accent colour for the spotlight (status pill, feature labels, glow). */
  accent: string;
}

export const STATUS_LABEL: Record<T_AppStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  soon: "Coming soon",
};

/** Off-site subdomain, so links need target/rel and get crawled cross-host. */
export const isExternal = (app: T_App) => /^https?:\/\//.test(app.href);

/** "Desktop only", "Web only" or "Desktop and Web", as shown on the page. */
export function platformLabel(app: T_App) {
  const has = (p: T_Platform) => app.platforms.includes(p);
  if (has("desktop") && has("web")) return "Desktop and Web";
  return has("desktop") ? "Desktop only" : "Web only";
}

/** The same platforms as schema.org `operatingSystem` values. */
export function operatingSystems(app: T_App) {
  return app.platforms
    .map((p) => (p === "desktop" ? "Windows, macOS, Linux" : "Web browser"))
    .join(", ");
}

/**
 * Single source of truth for the app suite — consumed by the header's apps
 * menu, the AppSuite overview and the AppSpotlights on the homepage, so a new
 * app or a renamed one only has to be edited here.
 */
export const APPS: T_App[] = [
  {
    id: "motionbuff",
    name: "MotionBuff",
    href: "https://motionbuff.openbrew.ai",
    tagline: "Files into motion",
    description:
      "Drop in a deck, PDF or doc. The agent writes the story, applies your brand and renders a finished video with narration and captions.",
    headline: "Turn files into motion video",
    pitch:
      "MotionBuff is the agent-native motion studio. Give it a prompt, slide deck or PDF and it builds the whole video: script, motion graphics, voiceover and captions.",
    features: [
      {
        label: "BRAND",
        title: "Brand rules enforced by agent",
        text: "Paste a URL or brand kit, extract color, type and logos the agent never forgets.",
      },
      {
        label: "STORY",
        title: "Edit the outline not timeline",
        text: "Change a beat (hook, problem, proof, offer) and the voiceover, captions, motion update with it.",
      },
      {
        label: "DATA",
        title: "Personalized at scale",
        text: "Auto update videos from your CRM data, instead of re-editing.",
      },
      {
        label: "REACH",
        title: "Any language, any voice",
        text: "Narration and on-screen text in each viewer's language.",
      },
    ],
    platforms: ["desktop"],
    status: "live",
    icon: <MotionBuffIcon />,
    // The mark is a full tile of its own, so no tinted backing.
    iconBg: "bg-transparent",
    // The mark's own violet (its deepest gradient stop), dark enough for
    // feature labels set in it to keep text contrast on a light page.
    accent: "#7c3aed",
  },
  {
    id: "filebuff",
    name: "FileBuff",
    href: "https://filebuff.openbrew.ai",
    tagline: "Workspace intelligence",
    description:
      "Search and automate your workspace in plain language. Documents, email, chats and events become hand-off tasks for agents.",
    headline: "Your workspace, searchable and automated",
    pitch:
      "FileBuff reads across your documents, email, chats and calendar, then turns what it finds into tasks an agent can carry out. It runs on your own hardware, so sensitive files never leave the building.",
    features: [
      {
        label: "SEARCH",
        title: "Ask in plain language",
        text: "Search by meaning across thousands of files and get answers with source citations.",
      },
      {
        label: "AUTOMATE",
        title: "Workflows like a to-do list",
        text: "Describe a task once. FileBuff breaks it into steps and runs it on a schedule.",
      },
      {
        label: "CONNECT",
        title: "Email, meetings, chats",
        text: "Pull your Microsoft 365, calendar and file data into one knowledge base.",
      },
      {
        label: "AUDIT",
        title: "Every action on the record",
        text: "Each query, answer and action is logged and attributed for review.",
      },
    ],
    platforms: ["web"],
    status: "live",
    icon: <FileBuffIcon />,
    // The mark is a full tile of its own, so no tinted backing.
    iconBg: "bg-transparent",
    // The midpoint of the mark's hexagon gradient (#ea580c → #f59e0b → #fde68a).
    // Chosen for brand match over contrast: white text on it is ~2.2:1.
    accent: "#f59e0b",
  },
  {
    id: "paperbuff",
    name: "PaperBuff",
    href: "/#paperbuff",
    tagline: "Voice-powered documents",
    description:
      "Talk to your document and it styles itself. Automatic typography and layout, with 3D and interactive elements embedded right in the page.",
    headline: "Documents that design themselves",
    pitch:
      "PaperBuff is a document editor you can talk to. Say what you want, the agent restructures the page. Headings, pull quotes, figures and spacing are handled for you. Pages can hold 3D models and interactive charts.",
    features: [
      {
        label: "VOICE",
        title: "Edit by speaking",
        text: "Describe a change and watch the agent work. Make small edits with voice 'gestures'.",
      },
      {
        label: "LAYOUT",
        title: "Automatic typography",
        text: "Type scale, measure, rhythm and figure placement chosen for readability, on every page.",
      },
      {
        label: "EMBED",
        title: "3D and interactive elements",
        text: "Drop a 3D model, animated chart or widget for readers to interact with.",
      },
      {
        label: "EXPORT",
        title: "Publish anywhere",
        text: "Share as a web page or export to PDF with the layout intact.",
      },
    ],
    platforms: ["desktop", "web"],
    status: "soon",
    icon: <PaperBuffIcon />,
    // The mark is a full tile of its own, so no tinted backing.
    iconBg: "bg-transparent",
    // sky-700: a step deeper than the mark's #0284c7 (~4.1:1) so the small
    // status pill and feature labels set in it pass AA on a light page.
    accent: "#0369a1",
  },
  {
    id: "screenbuff",
    name: "ScreenBuff",
    href: "/#screenbuff",
    tagline: "Smart screen recorder",
    description:
      "Record your screen and get a polished product demo or ad. Zooms, callouts, cursor polish and pacing are handled for you.",
    headline: "Screen recordings that edit themselves",
    pitch:
      "ScreenBuff records your screen and turns a rough walkthrough into a product demo worth sharing. It follows the cursor to add zooms, writes callouts for each click, smooths the pointer and trims the dead air automatically.",
    features: [
      {
        label: "ZOOM",
        title: "Auto-zoom on every click",
        text: "The camera follows the action and eases in where it matters.",
      },
      {
        label: "CALLOUTS",
        title: "Annotations written for you",
        text: "Each step gets a short, accurate label based on what's on screen.",
      },
      {
        label: "POLISH",
        title: "Cursor and pacing cleanup",
        text: "Jittery pointers are smoothed and long pauses are trimmed.",
      },
      {
        label: "REUSE",
        title: "One take, many cuts",
        text: "Export ad, vertical social or shorts from one recording.",
      },
    ],
    platforms: ["desktop", "web"],
    status: "soon",
    icon: <ScreenBuffIcon />,
    // The mark is a full tile of its own, so no tinted backing.
    iconBg: "bg-transparent",
    // Recording red, to match the mark (a step deeper than its #ef4444 face so
    // feature labels set in it keep text contrast on a light page).
    accent: "#dc2626",
  },
];
