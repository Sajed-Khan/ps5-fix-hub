import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaPair } from "@/components/site/Cta";
import { RepairCaseCard, RepairGalleryBlock } from "@/components/site/Cards";
import { repairCases, repairGalleries } from "@/data/repairs";

export const Route = createFileRoute("/recent-repairs")({
  head: () => ({
    meta: [
      { title: "Recent PS5 Repairs | Case Examples — UAE" },
      {
        name: "description",
        content:
          "How we document each PS5 repair: reported fault, diagnosis, repair carried out and result. Workshop photos grouped by the job — southbridge, SSD controller, RAM, and more.",
      },
      { property: "og:title", content: "Recent PS5 Repairs & Workshop Photos" },
      {
        property: "og:description",
        content:
          "Documented PS5 repair cases — reported fault, diagnosis, repair and result — with workshop photos for each job.",
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
        description="Each case below is a completed job from the bench: what was reported, what we found, what was repaired, and the result. Workshop photos for every job sit underneath."
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
          title="Workshop photos"
          description="Photos grouped by the repair — for example every SSD controller shot sits together under that job, rather than as a before-and-after pair."
        />
        <div className="mt-8 space-y-4">
          {repairGalleries.map((gallery) => (
            <RepairGalleryBlock key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </Section>
    </>
  );
}
