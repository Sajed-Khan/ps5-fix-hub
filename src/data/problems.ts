import {
  PowerOff,
  MonitorX,
  Usb,
  Thermometer,
  CircuitBoard,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

export type ProblemId =
  | "no-power"
  | "hdmi"
  | "usb"
  | "overheating"
  | "board-level"
  | "other";

export type Problem = {
  id: ProblemId;
  title: string;
  /** Short lowercase phrase used inside the WhatsApp message. */
  whatsappLabel: string;
  description: string;
  icon: LucideIcon;
  /** Matching repair page, where one exists. */
  repairSlug?: string;
};

export const problems: Problem[] = [
  {
    id: "no-power",
    title: "No Power",
    whatsappLabel: "no power",
    description: "PS5 completely dead or not turning on.",
    icon: PowerOff,
    repairSlug: "no-power",
  },
  {
    id: "hdmi",
    title: "HDMI / No Display",
    whatsappLabel: "HDMI / no display",
    description: "No signal, intermittent display or a physically damaged HDMI port.",
    icon: MonitorX,
    repairSlug: "hdmi",
  },
  {
    id: "usb",
    title: "USB Problems",
    whatsappLabel: "USB port",
    description: "Broken or non-functioning USB ports.",
    icon: Usb,
    repairSlug: "usb",
  },
  {
    id: "overheating",
    title: "Overheating",
    whatsappLabel: "overheating",
    description: "Excessive heat, shutdowns or cooling-related problems.",
    icon: Thermometer,
    repairSlug: "liquid-metal",
  },
  {
    id: "board-level",
    title: "Board-Level Fault",
    whatsappLabel: "board-level",
    description: "Component-level motherboard diagnosis.",
    icon: CircuitBoard,
    repairSlug: "microsoldering",
  },
  {
    id: "other",
    title: "Other Problem",
    whatsappLabel: "other",
    description: "For customers who don't know what is wrong.",
    icon: HelpCircle,
  },
];

export function findProblem(id?: string | null): Problem | undefined {
  return problems.find((p) => p.id === id);
}
