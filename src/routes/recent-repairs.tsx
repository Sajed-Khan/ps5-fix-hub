import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaPair } from "@/components/site/Cta";
import { RepairCaseCard, BeforeAfter } from "@/components/site/Cards";
import { repairCases, galleryPairs } from "@/data/repairs";

export const Route = createFileRoute("/recent-repairs")({
  head: () => ({
    meta: [
      { title: "Recent PS5 Repairs | Case Examples — UAE" },
      {
        name: "description",
        content:
          "How we document each PS5 repair: reported fault, diagnosis, repair carried out and result. Real cases are added as they're completed.",
      },
      { property: "og:title", content: "Recent PS5 Repairs & Before/After Examples" },
      {
        property: "og:description",
        content:
          "Clearly documented PS5 repair cases — reported fault, diagnosis, repair and result.",
      },
    ],
  }),
  component: RecentRepairs,
});

function RecentRepairs() {
  return (
    <>
      <PageHero
        eyebrow="Recent repairs"
        title="Repair cases, documented honestly"
        description="We're a new service, so rather than pad this page out we show exactly how each repair is recorded. Every entry below is a clearly labelled example, and real cases replace them as they're completed."
      >
        <CtaPair source="recent_repairs_hero" />
      </PageHero>

      <Section>
        <SectionHeading title="Case examples" />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {repairCases.map((c) => (
            <RepairCaseCard key={c.reference} item={c} />
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <SectionHeading
          title="Before & after"
          description="Photo placeholders for now — real repair photos slot straight into these layouts."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {galleryPairs.map((pair) => (
            <BeforeAfter key={pair.id} pair={pair} />
          ))}
        </div>
      </Section>
    </>
  );
}
