import type { ReactNode } from "react";
import {
  FileBuffIcon,
  MotionBuffIcon,
  PaperBuffIcon,
  ScreenBuffIcon,
} from "@/components/AppIcons";

export interface T_App {
  id: string;
  name: string;
  /** Where the app lives. Unreleased apps point back home. */
  href: string;
  /** Off-site subdomain, so links need target/rel and get crawled cross-host. */
  external: boolean;
  /** Short "what it is" line — used as the header tooltip and the card kicker. */
  tagline: string;
  /** Full sentence used in the suite section and the structured data. */
  description: string;
  icon: ReactNode;
  /** Tailwind class for the icon tile background. */
  iconBg: string;
  comingSoon?: boolean;
}

/**
 * Single source of truth for the app suite — consumed by the header's apps
 * menu and the AppSuite section on the homepage, so a new app or a renamed
 * one only has to be edited here.
 */
export const APPS: T_App[] = [
  {
    id: "filebuff",
    name: "FileBuff",
    href: "https://filebuff.openbrew.ai",
    external: true,
    tagline: "Workspace intelligence",
    description:
      "Search and automate your workspace in plain language. Documents, email, chats and events become hand off tasks for agents.",
    icon: <FileBuffIcon />,
    iconBg: "bg-amber-100",
  },
  {
    id: "motionbuff",
    name: "MotionBuff",
    href: "https://motionbuff.openbrew.ai",
    external: true,
    tagline: "Automated video production",
    description:
      "Turn a prompt into a finished video. Script, motion graphics, narration and captions produced for you — no manual editing, no production crew.",
    icon: <MotionBuffIcon />,
    iconBg: "bg-orange-100",
  },
  {
    id: "paperbuff",
    name: "PaperBuff",
    href: "/",
    external: false,
    tagline: "Reactive Documents",
    description:
      "Edit and share rich text documents that are pleasant to read. Smart documents automatically apply beautiful typography and layout.",
    icon: <PaperBuffIcon />,
    iconBg: "bg-sky-100",
    comingSoon: true,
  },
  {
    id: "screenbuff",
    name: "ScreenBuff",
    href: "/",
    external: false,
    tagline: "Smart Screen Recorder",
    description:
      "Record your screen and produce captivating product showcases or ads. Zooms, callouts, cursor polish and pacing, all handled for you.",
    icon: <ScreenBuffIcon />,
    iconBg: "bg-purple-100",
    comingSoon: true,
  },
];
