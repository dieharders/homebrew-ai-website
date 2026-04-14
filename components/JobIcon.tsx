import {
  Cpu,
  MonitorSmartphone,
  Server,
  Landmark,
  ChartNoAxesCombined,
} from "lucide-react";
import type { JobIcon as JobIconType } from "@/data/jobs";

const iconMap = {
  harness: Cpu,
  interface: MonitorSmartphone,
  backend: Server,
  architect: Landmark,
  operations: ChartNoAxesCombined,
} satisfies Record<JobIconType, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>>;

export default function JobIcon({
  icon,
  size = 24,
}: {
  icon: JobIconType;
  size?: number;
}) {
  const Icon = iconMap[icon];
  return <Icon size={size} strokeWidth={1.5} className="text-[var(--accent-dark)]" />;
}
