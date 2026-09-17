/**
 * Repair case studies and workshop photos.
 *
 * Photos live in /public and are referenced by filename. Only add genuine
 * completed work here — never invent customer details.
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

export type RepairPhoto = {
  src: string;
  alt: string;
  caption: string;
};

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
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** Extra workshop photos for this case (used on the Recent Repairs page). */
  photos?: RepairPhoto[];
  /** true = placeholder layout, shown with an "Example layout" label. */
  isExample?: boolean;
};

export function publicPhoto(filename: string) {
  return `/${encodeURIComponent(filename)}`;
}

function photo(filename: string, caption: string, alt = caption): RepairPhoto {
  return { src: publicPhoto(filename), alt, caption };
}

const southbridgePhotos: RepairPhoto[] = [
  photo(
    "Southbridge faulty chip extracted.jpeg",
    "Faulty southbridge extracted",
    "Faulty PS5 southbridge chip after extraction from the motherboard",
  ),
  photo(
    "Southbridge pads cleaned.jpeg",
    "Pads cleaned",
    "PS5 southbridge BGA pads cleaned after chip removal",
  ),
  photo(
    "Southbridge pads cleaned (2).jpeg",
    "Pads inspected",
    "Second view of cleaned PS5 southbridge pads under the microscope",
  ),
  photo(
    "Southbridge chip cleaned.jpeg",
    "Chip cleaned",
    "PS5 southbridge chip cleaned and prepared for reballing",
  ),
  photo(
    "Southbridge chip balls placed.jpeg",
    "Solder balls placed",
    "Fresh solder balls placed on a PS5 southbridge chip",
  ),
  photo(
    "Southbridge chip reballing.jpeg",
    "Reballing in progress",
    "PS5 southbridge chip during reballing",
  ),
  photo(
    "Southbridge reballed perfectly.jpeg",
    "Reball complete",
    "PS5 southbridge chip after a completed reball",
  ),
];

const ssdPhotos: RepairPhoto[] = [
  photo(
    "SSD controller pads cleaned.jpeg",
    "Controller pads cleaned",
    "PS5 SSD controller pads cleaned on the board",
  ),
  photo(
    "SSD controller reballing.jpeg",
    "Reballing in progress",
    "PS5 SSD controller chip during reballing",
  ),
  photo(
    "SSD controller perfectly reballed.jpeg",
    "Controller reballed",
    "PS5 SSD controller after a completed reball",
  ),
  photo(
    "SSD controller placed perfectly.jpeg",
    "Controller fitted",
    "Reballed PS5 SSD controller seated on the motherboard",
  ),
];

const ramPhotos: RepairPhoto[] = [
  photo(
    "RAM chip reballing.jpeg",
    "RAM reballing",
    "PS5 RAM chip during reballing",
  ),
  photo(
    "RAM chip reballed perfectly.jpeg",
    "RAM reball complete",
    "PS5 RAM chip after a completed reball",
  ),
];

const sbvPhotos: RepairPhoto[] = [
  photo(
    "SBV chip removed.jpeg",
    "SBV chip removed",
    "Faulty SBV chip removed from a PS5 motherboard",
  ),
  photo(
    "SBV chip new placed.jpeg",
    "Replacement SBV fitted",
    "New SBV chip placed on a PS5 motherboard",
  ),
];

const wifiPhotos: RepairPhoto[] = [
  photo(
    "Wifi chip replaced.jpeg",
    "Wi-Fi chip replaced",
    "Replacement Wi-Fi chip fitted on a PS5 motherboard",
  ),
];

const slimPhotos: RepairPhoto[] = [
  photo(
    "PS5 slim diagnosing.jpeg",
    "Slim on the bench",
    "PS5 Slim opened on the bench during diagnosis",
  ),
  photo(
    "PS5 slim cleaned.jpeg",
    "Interior cleaned",
    "PS5 Slim interior after cleaning",
  ),
  photo(
    "PS5 slim repacking.jpeg",
    "Reassembly",
    "PS5 Slim being reassembled after service",
  ),
];

const digitalPhotos: RepairPhoto[] = [
  photo(
    "PS5 digital diagnosing.jpeg",
    "Digital on the bench",
    "PS5 Digital opened for diagnosis",
  ),
  photo(
    "PS5 digital diagnosing (2).jpeg",
    "Board inspection",
    "PS5 Digital motherboard under inspection",
  ),
  photo(
    "PS5 digital voltage injection after diagnosing.png",
    "Voltage injection after diagnosis",
    "Voltage injection on a PS5 Digital after diagnosis",
  ),
];

export const repairCases: RepairCase[] = [
  {
    reference: "PS5-1041",
    model: "PS5 Original",
    problemTitle: "Southbridge reball",
    reported: "Console would not boot reliably after HDMI and power-related faults.",
    diagnosis: "Southbridge BGA failure confirmed after board-level inspection.",
    repair:
      "Faulty southbridge extracted, pads and chip cleaned, then reballed and refitted.",
    result: "Console completed power-on and function testing after reassembly.",
    date: "2026-08-14",
    status: "Completed",
    beforeImage: southbridgePhotos[0].src,
    afterImage: southbridgePhotos[6].src,
    beforeAlt: southbridgePhotos[0].alt,
    afterAlt: southbridgePhotos[6].alt,
    beforeLabel: "Chip extracted",
    afterLabel: "Reball complete",
    photos: southbridgePhotos,
  },
  {
    reference: "PS5-1042",
    model: "PS5 Original",
    problemTitle: "SSD controller replacement",
    reported: "Storage-related errors and the console failing to initialise the SSD.",
    diagnosis: "SSD controller solder joints had failed; pads on the board were intact.",
    repair:
      "Controller pads cleaned, chip reballed and the SSD controller seated back on the board.",
    result: "Drive initialised correctly and the console completed testing.",
    date: "2026-08-22",
    status: "Completed",
    beforeImage: ssdPhotos[0].src,
    afterImage: ssdPhotos[3].src,
    beforeAlt: ssdPhotos[0].alt,
    afterAlt: ssdPhotos[3].alt,
    beforeLabel: "Pads cleaned",
    afterLabel: "Controller fitted",
    photos: ssdPhotos,
  },
  {
    reference: "PS5-1043",
    model: "PS5 Original",
    problemTitle: "RAM chip reball",
    reported: "Unstable boot and crashes during startup.",
    diagnosis: "RAM BGA joints identified as the cause after diagnosis.",
    repair: "Affected RAM chip reballed and refitted to the board.",
    result: "Console booted stably through extended testing.",
    date: "2026-08-28",
    status: "Completed",
    beforeImage: ramPhotos[0].src,
    afterImage: ramPhotos[1].src,
    beforeAlt: ramPhotos[0].alt,
    afterAlt: ramPhotos[1].alt,
    beforeLabel: "Reballing",
    afterLabel: "Reball complete",
    photos: ramPhotos,
  },
  {
    reference: "PS5-1044",
    model: "PS5 Original",
    problemTitle: "SBV chip replacement",
    reported: "No power after a board-level fault on the power rail.",
    diagnosis: "Failed SBV chip confirmed on the motherboard.",
    repair: "Faulty SBV chip removed and a replacement chip fitted.",
    result: "Power rails restored and the console completed testing.",
    date: "2026-09-02",
    status: "Completed",
    beforeImage: sbvPhotos[0].src,
    afterImage: sbvPhotos[1].src,
    beforeAlt: sbvPhotos[0].alt,
    afterAlt: sbvPhotos[1].alt,
    beforeLabel: "Chip removed",
    afterLabel: "New chip placed",
    photos: sbvPhotos,
  },
  {
    reference: "PS5-1045",
    model: "PS5 Original",
    problemTitle: "Wi-Fi chip replacement",
    reported: "Console would not see wireless networks.",
    diagnosis: "On-board Wi-Fi chip had failed; antenna connections were intact.",
    repair: "Failed Wi-Fi chip removed and a replacement chip fitted.",
    result: "Wireless networks detected and a test connection completed.",
    date: "2026-09-05",
    status: "Completed",
    afterImage: wifiPhotos[0].src,
    afterAlt: wifiPhotos[0].alt,
    afterLabel: "Chip replaced",
    photos: wifiPhotos,
  },
  {
    reference: "PS5-1046",
    model: "PS5 Slim",
    problemTitle: "Slim diagnosis, clean and reassembly",
    reported: "Loud fan and heat during longer sessions.",
    diagnosis: "Dust build-up inside the Slim confirmed on the bench.",
    repair: "Console diagnosed, internally cleaned and packed back together.",
    result: "Fan noise reduced and the console completed a heat test after reassembly.",
    date: "2026-09-09",
    status: "Completed",
    beforeImage: slimPhotos[0].src,
    afterImage: slimPhotos[1].src,
    beforeAlt: slimPhotos[0].alt,
    afterAlt: slimPhotos[1].alt,
    beforeLabel: "On the bench",
    afterLabel: "Cleaned",
    photos: slimPhotos,
  },
  {
    reference: "PS5-1047",
    model: "PS5 Original Digital",
    problemTitle: "Digital no-power diagnosis",
    reported: "Digital edition completely dead, no lights or fan spin.",
    diagnosis:
      "Board opened for inspection; voltage injection used after diagnosis to trace the fault.",
    repair: "No-power diagnosis carried out on the Digital motherboard.",
    result: "Fault isolated on the bench so a repair quote could be given.",
    date: "2026-09-12",
    status: "Completed",
    beforeImage: digitalPhotos[0].src,
    afterImage: digitalPhotos[2].src,
    beforeAlt: digitalPhotos[0].alt,
    afterAlt: digitalPhotos[2].alt,
    beforeLabel: "Diagnosing",
    afterLabel: "Voltage injection",
    photos: digitalPhotos,
  },
];

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
    id: "southbridge",
    title: "Southbridge reball",
    beforeLabel: "Faulty chip extracted",
    afterLabel: "Reball complete",
    beforeImage: southbridgePhotos[0].src,
    afterImage: southbridgePhotos[6].src,
    beforeAlt: southbridgePhotos[0].alt,
    afterAlt: southbridgePhotos[6].alt,
  },
  {
    id: "ssd",
    title: "SSD controller replacement",
    beforeLabel: "Pads cleaned",
    afterLabel: "Controller fitted",
    beforeImage: ssdPhotos[0].src,
    afterImage: ssdPhotos[3].src,
    beforeAlt: ssdPhotos[0].alt,
    afterAlt: ssdPhotos[3].alt,
  },
  {
    id: "ram",
    title: "RAM chip reball",
    beforeLabel: "Reballing",
    afterLabel: "Reball complete",
    beforeImage: ramPhotos[0].src,
    afterImage: ramPhotos[1].src,
    beforeAlt: ramPhotos[0].alt,
    afterAlt: ramPhotos[1].alt,
  },
  {
    id: "sbv",
    title: "SBV chip replacement",
    beforeLabel: "Chip removed",
    afterLabel: "New chip placed",
    beforeImage: sbvPhotos[0].src,
    afterImage: sbvPhotos[1].src,
    beforeAlt: sbvPhotos[0].alt,
    afterAlt: sbvPhotos[1].alt,
  },
  {
    id: "slim",
    title: "PS5 Slim clean",
    beforeLabel: "On the bench",
    afterLabel: "Interior cleaned",
    beforeImage: slimPhotos[0].src,
    afterImage: slimPhotos[1].src,
    beforeAlt: slimPhotos[0].alt,
    afterAlt: slimPhotos[1].alt,
  },
  {
    id: "digital",
    title: "PS5 Digital diagnosis",
    beforeLabel: "Diagnosing",
    afterLabel: "Voltage injection",
    beforeImage: digitalPhotos[0].src,
    afterImage: digitalPhotos[2].src,
    beforeAlt: digitalPhotos[0].alt,
    afterAlt: digitalPhotos[2].alt,
  },
];

export type RepairGallery = {
  id: string;
  title: string;
  description: string;
  photos: RepairPhoto[];
};

/** Grouped workshop photos for the Recent Repairs page (not before/after pairs). */
export const repairGalleries: RepairGallery[] = [
  {
    id: "ssd-controller",
    title: "SSD controller replacement",
    description:
      "Pads cleaned, controller reballed and the chip seated back on the board.",
    photos: ssdPhotos,
  },
  {
    id: "southbridge",
    title: "Southbridge reball",
    description:
      "Faulty southbridge extracted, pads cleaned, solder balls placed and the chip reballed.",
    photos: southbridgePhotos,
  },
  {
    id: "ram",
    title: "RAM chip reball",
    description: "RAM chip reballing through to a completed reball.",
    photos: ramPhotos,
  },
  {
    id: "sbv",
    title: "SBV chip replacement",
    description: "Failed SBV chip removed and a replacement fitted.",
    photos: sbvPhotos,
  },
  {
    id: "wifi",
    title: "Wi-Fi chip replacement",
    description: "On-board Wi-Fi chip replaced on the motherboard.",
    photos: wifiPhotos,
  },
  {
    id: "slim",
    title: "PS5 Slim service",
    description: "Slim diagnosed, cleaned internally and packed back together.",
    photos: slimPhotos,
  },
  {
    id: "digital",
    title: "PS5 Digital diagnosis",
    description:
      "Digital edition opened for diagnosis, then voltage injection after the fault was traced.",
    photos: digitalPhotos,
  },
];
