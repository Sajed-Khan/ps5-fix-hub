import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { business } from "@/config/business";
import { APU_NOTE, REPAIR_AVAILABILITY_NOTE } from "@/data/services";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Repair Terms & Conditions | PS5 Repair Service UAE" },
      {
        name: "description",
        content:
          "Our PS5 repair terms: free diagnosis, approval before work, data and warranty terms, and the limits of what can be repaired.",
      },
      { property: "og:title", content: "Repair Terms & Conditions — PS5 Repair UAE" },
      {
        property: "og:description",
        content: "How our PS5 repairs work, and what we can and cannot promise.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const sections = [
    {
      title: "Diagnosis and quotes",
      body: "Diagnosis and the quote that follows it are free. You are told what the fault is and what the repair costs before anything is carried out.",
    },
    {
      title: "Your approval",
      body: "No repair work begins without your approval of the quoted cost. If you decide not to proceed, there is nothing to pay for the diagnosis.",
    },
    {
      title: "What can be repaired",
      body: `${REPAIR_AVAILABILITY_NOTE} ${APU_NOTE} Some faults may be uneconomical, unsupported or impossible to repair, and you will be told if that is the case.`,
    },
    {
      title: "Repair times",
      body: "Timeframes depend on the fault and on the availability of replacement components. Any estimate given after diagnosis is an estimate, not a fixed deadline.",
    },
    {
      title: "Your data and storage",
      body: "Board-level repairs can affect stored data. Back up anything important before handing the console over — we cannot guarantee that games, saves or accounts will be preserved.",
    },
    {
      title: "Liquid metal and cleaning",
      body: "A free internal clean is included with qualifying repairs. Liquid metal replacement is a separate paid service and is not included free.",
    },
    {
      title: "BIOS flashing and jailbreaking",
      body: "BIOS flashing and jailbreaking are separate services. Jailbreaking availability depends entirely on your console's current firmware and software compatibility.",
    },
    {
      title: "Warranty",
      body:
        business.warrantyInformation ??
        "Warranty terms for completed repairs are confirmed in writing with your quote before work begins.",
    },
    {
      title: "Independence",
      body: "We are an independent repair service. We are not affiliated with, authorised by or endorsed by Sony Interactive Entertainment.",
    },
    {
      title: "Questions",
      body: `Ask us anything about these terms on ${business.phone} or ${business.email}.`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Repair terms & conditions"
        description="Plain terms covering diagnosis, approval, data, warranty and the limits of what can be repaired."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
