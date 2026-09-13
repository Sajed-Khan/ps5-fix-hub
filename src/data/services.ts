import {
  PowerOff,
  MonitorX,
  Usb,
  CircuitBoard,
  Cpu,
  Layers,
  HardDriveDownload,
  Unlock,
  Wind,
  Droplets,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/** Short list used for the "PS5 Repair Services" grid. */
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Links to a dedicated repair page when one exists. */
  slug?: string;
  /** Shown as a small badge on the card. */
  note?: string;
};

export const services: Service[] = [
  {
    title: "No-Power Diagnosis & Repair",
    description:
      "Consoles that show no sign of life are inspected to find where the power path stops.",
    icon: PowerOff,
    slug: "no-power",
  },
  {
    title: "HDMI Port Replacement",
    description:
      "Damaged or loose HDMI ports are removed and replaced, then tested for a stable picture.",
    icon: MonitorX,
    slug: "hdmi",
  },
  {
    title: "USB Port Replacement",
    description: "Bent, pushed-in or non-working USB ports replaced and tested.",
    icon: Usb,
    slug: "usb",
  },
  {
    title: "Microsoldering",
    description:
      "Fine component-level soldering work under magnification for supported board faults.",
    icon: CircuitBoard,
    slug: "microsoldering",
  },
  {
    title: "Board-Level Repair",
    description:
      "Motherboard fault-finding using measurements rather than guesswork or part swapping.",
    icon: Wrench,
    slug: "microsoldering",
  },
  {
    title: "Chip / Component Replacement",
    description:
      "Individual failed components replaced where the part is available and the board allows it.",
    icon: Cpu,
    slug: "chip-replacement",
  },
  {
    title: "Hardware Chip Reballing",
    description: "Reballing is available for supported chips and supported repairs.",
    icon: Layers,
    slug: "reballing",
  },
  {
    title: "BIOS Flashing",
    description:
      "BIOS/NOR work for supported situations. This is a separate service to jailbreaking.",
    icon: HardDriveDownload,
    slug: "bios-flashing",
  },
  {
    title: "Jailbreaking",
    description:
      "A separate software service. Availability depends entirely on your console's current firmware.",
    icon: Unlock,
    note: "Firmware dependent",
  },
  {
    title: "Internal Cleaning",
    description:
      "Dust removal and internal clean. Included free with qualifying repair work.",
    icon: Wind,
    note: "Free with qualifying repairs",
  },
  {
    title: "Liquid Metal Replacement",
    description:
      "Inspection and replacement of the PS5's liquid metal thermal interface.",
    icon: Droplets,
    slug: "liquid-metal",
    note: "Paid service",
  },
];

export const REPAIR_AVAILABILITY_NOTE =
  "Repair availability depends on diagnosis and the condition of the console.";

export const APU_NOTE = "APU repairs are currently not offered.";

/** Full content for the individual repair landing pages. */
export type RepairPage = {
  slug: string;
  title: string;
  /** Page heading */
  heading: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  symptoms: string[];
  causes: string[];
  inspect: string[];
  involves: string[];
  limitations: string[];
  /** FAQ ids from data/faqs.ts shown on this page */
  faqIds: string[];
  icon: LucideIcon;
};

export const repairPages: RepairPage[] = [
  {
    slug: "no-power",
    title: "No Power",
    heading: "PS5 No Power Repair",
    metaTitle: "PS5 No Power Repair UAE | Free Diagnosis & Quote",
    metaDescription:
      "PS5 dead or not turning on? We diagnose no-power faults free and quote before any repair. Dubai, Sharjah and Ajman.",
    intro:
      "A PS5 that shows no light, no fan and no reaction to the power button has lost power somewhere along the board. Finding where is the job of diagnosis.",
    symptoms: [
      "No light, no fan spin and no beep when the power button is pressed",
      "A single beep then nothing",
      "The console reacts only sometimes",
      "Power light appears briefly then the console dies",
    ],
    causes: [
      "A faulty power supply unit",
      "A shorted or failed component on the motherboard",
      "Damage following a power surge or liquid exposure",
      "A damaged power button board or its cable",
    ],
    inspect: [
      "Input power and the power supply output",
      "The main power rails on the motherboard",
      "Any shorted lines drawing abnormal current",
      "Visible physical, liquid or heat damage",
    ],
    involves: [
      "Measuring the power path to find where it stops",
      "Replacing a failed component with microsoldering where possible",
      "Replacing the power supply where that is the cause",
      "Testing the console before it is returned",
    ],
    limitations: [
      "No-power faults have many possible causes — nothing is promised before diagnosis.",
      APU_NOTE,
      "Some boards are too damaged to repair economically. You'll be told if that's the case.",
    ],
    faqIds: ["no-power", "free-diagnosis", "every-ps5", "how-long"],
    icon: PowerOff,
  },
  {
    slug: "hdmi",
    title: "HDMI / No Display",
    heading: "PS5 HDMI Port Repair",
    metaTitle: "PS5 HDMI Repair UAE | Port Replacement & Free Diagnosis",
    metaDescription:
      "No signal or a damaged HDMI port on your PS5? Free diagnosis and quote before any HDMI repair. Dubai, Sharjah and Ajman.",
    intro:
      "No picture doesn't always mean a broken HDMI port. The port, the chip that drives it, and the cable or TV input can all produce the same symptom.",
    symptoms: [
      "The console turns on but the TV shows no signal",
      "Picture flickers, drops out or only works at certain angles",
      "The HDMI port is visibly bent, loose or pushed in",
      "Picture works on one TV but not another",
    ],
    causes: [
      "Physical damage to the HDMI port from a knocked cable",
      "A failed HDMI encoder chip or nearby component",
      "Board damage around the port from a previous impact",
      "A faulty cable or TV input (worth ruling out first)",
    ],
    inspect: [
      "The port itself and its solder joints under magnification",
      "Output signals from the HDMI chip",
      "The board area around the port for cracks or damage",
      "The console with a known-good cable and display",
    ],
    involves: [
      "Removing the damaged port and fitting a replacement",
      "Repairing damaged pads or traces where needed",
      "Replacing the HDMI chip where diagnosis points to it",
      "Testing picture and sound before completion",
    ],
    limitations: [
      "A no-signal symptom does not automatically mean the port has failed.",
      REPAIR_AVAILABILITY_NOTE,
      "Heavy board damage around the port may make repair uneconomical.",
    ],
    faqIds: ["hdmi", "free-diagnosis", "microsoldering", "how-long"],
    icon: MonitorX,
  },
  {
    slug: "usb",
    title: "USB Ports",
    heading: "PS5 USB Port Repair",
    metaTitle: "PS5 USB Port Repair UAE | Free Diagnosis & Quote",
    metaDescription:
      "Broken or dead PS5 USB ports replaced. Free diagnosis and quote before work begins. Dubai, Sharjah and Ajman.",
    intro:
      "USB ports take daily wear from charging cables and headsets. A port can be physically damaged, or the fault can sit behind it on the board.",
    symptoms: [
      "A controller won't charge or connect through the cable",
      "The port is loose, pushed in or physically broken",
      "One port works and another doesn't",
      "Connected devices are not recognised",
    ],
    causes: [
      "Physical damage from a cable being knocked or pulled",
      "A failed protection component behind the port",
      "Damage to the board where the port is mounted",
      "Wear from repeated plugging and unplugging",
    ],
    inspect: [
      "The port and its solder joints",
      "Power delivery and data lines to the port",
      "Any shorted components behind the port",
      "Each port individually with a known-good cable",
    ],
    involves: [
      "Removing the damaged port and fitting a replacement",
      "Repairing pads or traces damaged by the old port",
      "Replacing failed components behind the port",
      "Testing charging and data on each port",
    ],
    limitations: [
      "Board damage behind the port can make a repair more involved than a simple port swap.",
      REPAIR_AVAILABILITY_NOTE,
    ],
    faqIds: ["usb", "free-diagnosis", "clean", "how-long"],
    icon: Usb,
  },
  {
    slug: "microsoldering",
    title: "Microsoldering & Board Repair",
    heading: "PS5 Microsoldering & Board-Level Repair",
    metaTitle: "PS5 Microsoldering & Board Repair UAE | Free Diagnosis",
    metaDescription:
      "Component-level PS5 motherboard diagnosis and microsoldering for supported faults. Free diagnosis and quote first.",
    intro:
      "Board-level repair means finding the individual component that has failed, instead of replacing the whole motherboard. It is measurement work, done under magnification.",
    symptoms: [
      "The console is dead with no obvious external damage",
      "The board shows signs of liquid or heat damage",
      "A previous repair attempt has left damage behind",
      "Faults that other repairers declined as unfixable",
    ],
    causes: [
      "A shorted or failed component on a power rail",
      "Corrosion following liquid exposure",
      "Damaged pads or traces from impact or prior work",
      "Component failure from long-term heat",
    ],
    inspect: [
      "Current draw and rail voltages across the board",
      "The board under magnification for corrosion and damage",
      "Individual components suspected from the measurements",
      "Any earlier repair work present on the board",
    ],
    involves: [
      "Isolating the faulty component through measurement",
      "Removing and replacing it with fine soldering work",
      "Rebuilding damaged pads or traces where feasible",
      "Testing the console fully before completion",
    ],
    limitations: [
      APU_NOTE,
      "Some components are not individually replaceable or are not obtainable.",
      "Boards with widespread corrosion or damage may be beyond economical repair.",
    ],
    faqIds: ["microsoldering", "chips", "apu", "every-ps5"],
    icon: CircuitBoard,
  },
  {
    slug: "chip-replacement",
    title: "Chip & Component Replacement",
    heading: "PS5 Chip & Component Replacement",
    metaTitle: "PS5 Chip Replacement UAE | Board-Level Component Repair",
    metaDescription:
      "Failed PS5 chips and board components replaced where diagnosis supports it and the part is available. Free diagnosis.",
    intro:
      "When diagnosis points to a specific chip, that chip can often be replaced rather than the whole board — provided the part is available.",
    symptoms: [
      "A fault that diagnosis traces to one specific chip",
      "Visible damage or burning around a component",
      "A console dead after liquid or surge damage",
      "Repeated failure of the same function",
    ],
    causes: [
      "Component failure from heat, surge or liquid",
      "Physical damage from impact or prior repair work",
      "Age-related failure of a specific part",
    ],
    inspect: [
      "Measurements around the suspected chip",
      "Its supporting components and power supply",
      "The board area for collateral damage",
      "Availability of a suitable replacement part",
    ],
    involves: [
      "Removing the failed chip with controlled heat",
      "Cleaning and preparing the board pads",
      "Fitting and reflowing the replacement",
      "Testing the repaired function before completion",
    ],
    limitations: [
      "Availability of the specific component determines whether repair is possible.",
      APU_NOTE,
      REPAIR_AVAILABILITY_NOTE,
    ],
    faqIds: ["chips", "reballing", "apu", "how-long"],
    icon: Cpu,
  },
  {
    slug: "reballing",
    title: "Chip Reballing",
    heading: "PS5 Hardware Chip Reballing",
    metaTitle: "PS5 Chip Reballing UAE | Board-Level Repair & Free Diagnosis",
    metaDescription:
      "Hardware chip reballing for supported PS5 repairs. Diagnosis and quote are free before any work is agreed.",
    intro:
      "Reballing means removing a chip, renewing its solder balls and refitting it. It is used for supported repairs where diagnosis indicates a connection problem under the chip.",
    symptoms: [
      "Intermittent faults that change with heat or movement",
      "A fault that diagnosis traces to connections under a chip",
      "Problems following a previous heat-based repair attempt",
    ],
    causes: [
      "Solder joint fatigue under a chip after long-term heat cycling",
      "Poor earlier rework leaving weak joints",
      "Board stress from impact",
    ],
    inspect: [
      "Board behaviour when the suspect area is warmed or cooled",
      "Signals to and from the chip",
      "The chip's condition and whether it is a supported candidate",
    ],
    involves: [
      "Removing the chip with controlled profile heat",
      "Cleaning the board pads and the chip",
      "Applying new solder balls and refitting",
      "Testing across a full session before completion",
    ],
    limitations: [
      "Reballing is offered only for supported chips and supported repairs.",
      APU_NOTE,
      "Reballing is not a guaranteed fix and is only used where diagnosis supports it.",
    ],
    faqIds: ["reballing", "apu", "microsoldering", "every-ps5"],
    icon: Layers,
  },
  {
    slug: "bios-flashing",
    title: "BIOS Flashing",
    heading: "PS5 BIOS Flashing",
    metaTitle: "PS5 BIOS Flashing UAE | Board-Level Service",
    metaDescription:
      "PS5 BIOS/NOR flashing for supported situations. A separate service to jailbreaking. Free diagnosis and quote.",
    intro:
      "BIOS flashing is board-level work on the console's stored data, used in specific repair situations such as after a board or drive change. It is a separate service to jailbreaking.",
    symptoms: [
      "Errors after a motherboard or disc drive change",
      "Corrupted stored console data identified during diagnosis",
      "Specific error codes that point to the stored data",
    ],
    causes: [
      "Data corruption after a failed update or power loss",
      "Mismatched parts following an earlier repair",
      "Damage to the chip that stores the data",
    ],
    inspect: [
      "The error behaviour and any codes shown",
      "The stored data and whether it can be read",
      "Whether the underlying hardware fault is fixed first",
    ],
    involves: [
      "Reading and backing up the existing data where possible",
      "Repairing or rewriting the data where supported",
      "Testing the console before completion",
    ],
    limitations: [
      "This is a separate service to jailbreaking and is not the same thing.",
      "Not all situations can be corrected this way.",
      REPAIR_AVAILABILITY_NOTE,
    ],
    faqIds: ["jailbreak", "chips", "how-long", "every-ps5"],
    icon: HardDriveDownload,
  },
  {
    slug: "liquid-metal",
    title: "Liquid Metal",
    heading: "PS5 Liquid Metal Inspection & Replacement",
    metaTitle: "PS5 Liquid Metal Replacement UAE | Paid Service",
    metaDescription:
      "PS5 liquid metal inspection and replacement, offered as a paid service. Diagnosis and quote are free.",
    intro:
      "The PS5 uses liquid metal as the thermal interface between its main chip and the heatsink. Over time, or after the console has been opened or handled badly, it can need inspection or replacement.",
    symptoms: [
      "The console runs hot or the fan is constantly loud",
      "Shutdowns during longer gaming sessions",
      "The console has been opened or worked on before",
      "Heat warnings shown on screen",
    ],
    causes: [
      "Liquid metal spread or displaced over time",
      "A previous repair where it was disturbed",
      "Dust build-up restricting cooling alongside it",
    ],
    inspect: [
      "Console temperatures and fan behaviour",
      "The state of the existing liquid metal",
      "Dust build-up in the heatsink and fan",
      "The board around the chip for any residue",
    ],
    involves: [
      "Careful disassembly and removal of the old material",
      "Cleaning and masking the surrounding board area",
      "Applying fresh liquid metal correctly",
      "Reassembly, testing and a thermal check",
    ],
    limitations: [
      "This is a paid service — it is not included free with other repairs.",
      "It is maintenance work, not a promise of improved performance.",
      "Overheating can have other causes; diagnosis comes first.",
    ],
    faqIds: ["liquid-metal", "clean", "free-diagnosis", "how-long"],
    icon: Droplets,
  },
];

export function findRepairPage(slug: string): RepairPage | undefined {
  return repairPages.find((p) => p.slug === slug);
}
