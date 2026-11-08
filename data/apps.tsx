import type { ReactNode } from "react";
import {
  FileBuffIcon,
  MotionBuffIcon,
  PaperBuffIcon,
  ScreenBuffIcon,
} from "@/components/AppIcons";

export type T_AppStatus = "live" | "in-progress" | "soon";

export interface T_AppFeature {
  /** Short uppercase label, e.g. "BRAND". */
  label: string;
  title: string;
  text: string;
}

export interface T_App {
  id: string;
  name: string;
  /** Where the app lives. Unreleased apps point at their spotlight on the homepage. */
  href: string;
  /** Off-site subdomain, so links need target/rel and get crawled cross-host. */
  external: boolean;
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
  /** Where it runs, or where it will. */
  platforms: string;
  status: T_AppStatus;
  icon: ReactNode;
  /** Tailwind class for the icon tile background. */
  iconBg: string;
  /** Accent colour for the spotlight (status pill, feature labels, glow). */
  accent: string;
  comingSoon?: boolean;
}

export const STATUS_LABEL: Record<T_AppStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  soon: "Coming soon",
};

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
    external: true,
    tagline: "Files into motion",
    description:
      "Drop in a deck, PDF or doc. The agent writes the story, applies your brand and renders a finished video with narration and captions.",
    headline: "Turn files into motion video",
    pitch:
      "MotionBuff is our agent-native motion studio. Hand it a prompt, slide deck or PDF and it builds the whole video: script, motion graphics, voiceover and captions.",
    features: [
      {
        label: "BRAND",
        title: "Brand rules enforced by the agent",
        text: "Paste a URL or upload a brand kit. Colors, type and logos become a reusable theme the agent never breaks.",
      },
      {
        label: "STORY",
        title: "Edit the outline, not the timeline",
        text: "Change a beat (hook, problem, proof, offer) and the voiceover, captions and motion update with it.",
      },
      {
        label: "DATA",
        title: "Personalized at scale",
        text: "Fill one template from your CRM or BI data. Re-render when the numbers change instead of re-editing.",
      },
      {
        label: "REACH",
        title: "Any language",
        text: "Narration and on-screen text in each viewer's language.",
      },
    ],
    platforms: "Desktop only",
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
    external: true,
    tagline: "Workspace intelligence",
    description:
      "Search and automate your workspace in plain language. Documents, email, chats and events become hand-off tasks for agents.",
    headline: "Your whole workspace, searchable and automated",
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
        title: "Workflows written like a to-do list",
        text: "Describe a task once. FileBuff breaks it into steps and runs it on a schedule.",
      },
      {
        label: "CONNECT",
        title: "Email, meetings, calendar and chats",
        text: "Pulls Microsoft 365, calendars and file storage into one knowledge base.",
      },
      {
        label: "AUDIT",
        title: "Every action on the record",
        text: "Each query, answer and action is logged with timestamps and attribution for compliance review.",
      },
    ],
    platforms: "Web only",
    status: "live",
    icon: <FileBuffIcon />,
    // The mark is a full tile of its own, so no tinted backing.
    iconBg: "bg-transparent",
    accent: "#d97706",
  },
  {
    id: "paperbuff",
    name: "PaperBuff",
    href: "/#paperbuff",
    external: false,
    tagline: "Voice-assisted documents",
    description:
      "Talk to your document and it lays itself out. Automatic typography and layout, with 3D and interactive elements embedded right in the page.",
    headline: "Documents that design themselves",
    pitch:
      "PaperBuff is a document editor you can talk to. Say what you want and the agent writes, restructures and typesets the page. Headings, pull quotes, figures and spacing are handled for you, and pages can hold live 3D models and interactive charts.",
    features: [
      {
        label: "VOICE",
        title: "Edit by speaking",
        text: "“Make the intro shorter and pull out that quote.” The agent edits the page while you watch.",
      },
      {
        label: "LAYOUT",
        title: "Automatic typography",
        text: "Type scale, measure, rhythm and figure placement chosen for readability, on every page.",
      },
      {
        label: "EMBED",
        title: "3D and interactive elements",
        text: "Drop in a 3D model, an animated chart or a live widget that readers can rotate and explore.",
      },
      {
        label: "EXPORT",
        title: "Publish anywhere",
        text: "Share as a web page or export to PDF with the layout intact.",
      },
    ],
    platforms: "Desktop and Web",
    status: "in-progress",
    icon: <PaperBuffIcon />,
    // The mark is a full tile of its own, so no tinted backing.
    iconBg: "bg-transparent",
    accent: "#0284c7",
    comingSoon: true,
  },
  {
    id: "screenbuff",
    name: "ScreenBuff",
    href: "/#screenbuff",
    external: false,
    tagline: "Smart screen recorder",
    description:
      "Record your screen and get a polished product demo or ad. Zooms, callouts, cursor polish and pacing are handled for you.",
    headline: "Screen recordings that edit themselves",
    pitch:
      "ScreenBuff records your screen and turns a rough walkthrough into a product demo worth sharing. It follows the cursor to add zooms, writes callouts for each click, smooths the pointer and trims the dead air, all without opening an editor.",
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
        text: "Export a long demo, a 15-second ad and a vertical social clip from the same recording.",
      },
    ],
    platforms: "Desktop and Web",
    status: "soon",
    icon: <ScreenBuffIcon />,
    // The mark is a full tile of its own, so no tinted backing.
    iconBg: "bg-transparent",
    // Recording red, to match the mark (a step deeper than its #ef4444 face so
    // feature labels set in it keep text contrast on a light page).
    accent: "#dc2626",
    comingSoon: true,
  },
];
