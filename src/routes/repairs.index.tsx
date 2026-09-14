import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { CtaPair } from "@/components/site/Cta";
import { Card } from "@/components/site/Cards";
import { repairPages, REPAIR_AVAILABILITY_NOTE, APU_NOTE } from "@/data/services";

export const Route = createFileRoute("/repairs")({
  head: () => ({
    meta: [
      { title: "PS5 Repairs UAE | HDMI, No Power, Board-Level & More" },
      {
        name: "description",
        content:
          "PS5 repair services in Dubai, Sharjah and Ajman: no power, HDMI, USB, microsoldering, chip replacement, reballing, BIOS flashing and liquid metal.",
      },
      { property: "og:title", content: "PS5 Repairs UAE | Free Diagnosis First" },
      {
        property: "og:description",
        content:
          "Board-level and port-level PS5 repairs. Free diagnosis and quote before any work begins.",
      },
    ],
  }),
  component: RepairsIndex,
});

function RepairsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Repairs"
        title="PS5 repairs we carry out"
        description="Each repair below explains the symptoms, what usually causes them, what gets inspected and where the limits are. Diagnosis always comes first."
      >
        <CtaPair source="repairs_hero" />
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repairPages.map((page) => {
            const Icon = page.icon;
            return (
              <Link
                key={page.slug}
                to="/repairs/$slug"
                params={{ slug: page.slug }}
                className="border-border bg-card/50 hover:border-primary/40 hover:bg-card rounded-2xl border p-6 transition-colors"
              >
                <span className="bg-primary/12 text-primary flex size-11 items-center justify-center rounded-xl">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-base font-semibold">{page.title}</h2>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {page.intro}
                </p>
                <span className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read more
                  <ArrowRight className="size-4" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>

        <Card className="mt-8">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {REPAIR_AVAILABILITY_NOTE} {APU_NOTE}
          </p>
        </Card>
      </Section>
    </>
  );
}
