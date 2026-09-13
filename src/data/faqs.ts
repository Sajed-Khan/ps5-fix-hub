export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "free-diagnosis",
    question: "Is diagnosis free?",
    answer: "Yes. Initial diagnosis and quotation are free.",
  },
  {
    id: "approval",
    question: "Will you repair my PS5 without asking me?",
    answer:
      "No. You are told what the problem is and what the repair will cost before any work begins.",
  },
  {
    id: "no-power",
    question: "Do you repair PS5s that don't turn on?",
    answer:
      "Yes, no-power faults can be diagnosed. Whether the console can be repaired depends on the underlying fault.",
  },
  {
    id: "hdmi",
    question: "Do you replace HDMI ports?",
    answer: "Yes.",
  },
  {
    id: "usb",
    question: "Do you replace USB ports?",
    answer: "Yes.",
  },
  {
    id: "microsoldering",
    question: "Do you perform microsoldering?",
    answer: "Yes, for supported board-level repairs.",
  },
  {
    id: "chips",
    question: "Do you replace chips and components?",
    answer: "Yes, depending on diagnosis and component availability.",
  },
  {
    id: "reballing",
    question: "Do you perform reballing?",
    answer: "Hardware chip reballing is available for supported repairs.",
  },
  {
    id: "apu",
    question: "Do you repair APU faults?",
    answer: "No. APU repairs are currently not offered.",
  },
  {
    id: "liquid-metal",
    question: "Do you replace liquid metal?",
    answer: "Yes. Liquid metal replacement is available as a paid service.",
  },
  {
    id: "jailbreak",
    question: "Do you jailbreak PS5 consoles?",
    answer:
      "Jailbreaking may be available depending on the console's current firmware and software compatibility. It is a separate service to BIOS flashing.",
  },
  {
    id: "clean",
    question: "Do you clean the PS5?",
    answer: "A free internal clean is included with qualifying repairs.",
  },
  {
    id: "how-long",
    question: "How long does a repair take?",
    answer:
      "Repair time depends on the fault, the diagnosis and the availability of replacement components. An estimate is given after diagnosis rather than a fixed turnaround promise.",
  },
  {
    id: "every-ps5",
    question: "Is every PS5 repairable?",
    answer:
      "No. Some faults may be uneconomical, unsupported or impossible to repair. You are told after diagnosis so you can decide what to do next.",
  },
];

export function faqsByIds(ids: string[]): Faq[] {
  return ids
    .map((id) => faqs.find((f) => f.id === id))
    .filter((f): f is Faq => Boolean(f));
}
