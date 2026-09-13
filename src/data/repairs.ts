/**
 * Repair case studies.
 *
 * Every entry here is shown publicly, so only add genuine completed repairs.
 * The entries below are marked `isExample: true` and render with a clear
 * "Example layout" label — replace them with real cases and set the flag to
 * false (or remove it) once you have photos and details.
 *
 * Photos: drop real images into src/assets and import them, then set
 * beforeImage / afterImage to the imported value.
 */

export type RepairStatus =
  | "Received"
  | "Diagnosing"
  | "Awaiting Customer Approval"
  | "Repairing"
  | "Testing"
  | "Ready for Collection"
  | "Completed"
  | "Unable to Repair";

export type RepairCase = {
  /** Public reference, e.g. "PS5-1042". Never include customer details. */
  reference: string;
  model: string;
  problemTitle: string;
  reported: string;
  diagnosis: string;
  repair: string;
  /** Only state a successful outcome when the repair genuinely succeeded. */
  result: string;
  /** ISO date */
  date: string;
  status: RepairStatus;
  beforeImage?: string;
  afterImage?: string;
  beforeAlt: string;
  afterAlt: string;
  additionalImages?: string[];
  /** true = placeholder layout, shown with an "Example layout" label. */
  isExample?: boolean;
};

export const repairCases: RepairCase[] = [
  {
    reference: "PS5-1001",
    model: "PS5 Original Disc",
    problemTitle: "No Power",
    reported: "Console completely dead.",
    diagnosis: "Faulty board-level component identified.",
    repair: "Faulty component replaced using microsoldering.",
    result: "Console powers on and completed testing.",
    date: "2026-01-12",
    status: "Completed",
    beforeAlt: "PS5 motherboard before a board-level no-power repair",
    afterAlt: "The same PS5 motherboard after the component was replaced",
    isExample: true,
  },
  {
    reference: "PS5-1002",
    model: "PS5 Slim Disc",
    problemTitle: "HDMI / No Display",
    reported: "No picture on the TV; HDMI port felt loose.",
    diagnosis: "HDMI port physically damaged, board pads intact.",
    repair: "Damaged port removed and a replacement port fitted.",
    result: "Picture and sound confirmed stable during testing.",
    date: "2026-01-20",
    status: "Completed",
    beforeAlt: "A damaged PS5 HDMI port before replacement",
    afterAlt: "A newly fitted PS5 HDMI port after replacement",
    isExample: true,
  },
  {
    reference: "PS5-1003",
    model: "PS5 Original Digital",
    problemTitle: "Overheating",
    reported: "Loud fan and shutdowns during longer sessions.",
    diagnosis: "Heavy dust build-up and displaced liquid metal.",
    repair: "Internal clean and liquid metal replacement (paid service).",
    result: "Temperatures and fan behaviour checked after reassembly.",
    date: "2026-02-02",
    status: "Completed",
    beforeAlt: "A dust-filled PS5 heatsink before cleaning",
    afterAlt: "The same PS5 heatsink after cleaning and liquid metal replacement",
    isExample: true,
  },
];

/** Before & after gallery pairs. Replace alt text and images with real work. */
export type GalleryPair = {
  id: string;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage?: string;
  afterImage?: string;
  beforeAlt: string;
  afterAlt: string;
  isExample?: boolean;
};

export const galleryPairs: GalleryPair[] = [
  {
    id: "hdmi",
    title: "HDMI Port Replacement",
    beforeLabel: "Damaged HDMI",
    afterLabel: "Replaced HDMI",
    beforeAlt: "Close-up of a bent and damaged PS5 HDMI port",
    afterAlt: "Close-up of a cleanly fitted replacement PS5 HDMI port",
    isExample: true,
  },
  {
    id: "usb",
    title: "USB Port Replacement",
    beforeLabel: "Damaged USB",
    afterLabel: "New USB Port",
    beforeAlt: "A broken PS5 USB port before replacement",
    afterAlt: "A new PS5 USB port fitted to the board",
    isExample: true,
  },
  {
    id: "clean",
    title: "Internal Clean",
    beforeLabel: "Dirty Console",
    afterLabel: "Cleaned Console",
    beforeAlt: "Dust build-up inside a PS5 before cleaning",
    afterAlt: "The same PS5 interior after a full internal clean",
    isExample: true,
  },
  {
    id: "board",
    title: "Board-Level Microsoldering",
    beforeLabel: "Board Damage",
    afterLabel: "Microsoldering Repair",
    beforeAlt: "Damaged area of a PS5 motherboard before repair",
    afterAlt: "The repaired motherboard area after microsoldering work",
    isExample: true,
  },
];
