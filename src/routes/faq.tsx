import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaPair } from "@/components/site/Cta";
import { FaqAccordion } from "@/components/site/Accordion";
import { faqs } from "@/data/faqs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "PS5 Repair FAQ | Diagnosis, Costs & What We Repair" },
      {
        name: "description",
        content:
          "Answers about PS5 diagnosis, HDMI and USB repairs, microsoldering, reballing, liquid metal, jailbreaking and repair times.",
      },
      { property: "og:title", content: "PS5 Repair FAQ — UAE" },
      {
        property: "og:description",
        content:
          "Common questions about PS5 repairs, free diagnosis and what we can and can't fix.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="If your question isn't here, message us on WhatsApp and we'll answer it directly."
      />

      <Section>
        <FaqAccordion items={faqs} />
      </Section>

      <Section tone="raised">
        <div className="text-center">
          <SectionHeading
            align="center"
            title="Still not sure?"
            description="Describe what your PS5 is doing and we'll tell you what it likely needs."
          />
          <CtaPair className="mt-8 justify-center" source="faq_footer" />
        </div>
      </Section>
    </>
  );
}
