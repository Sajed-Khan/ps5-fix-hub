import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, AlertTriangle, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaPair } from "@/components/site/Cta";
import { Card } from "@/components/site/Cards";
import { FaqAccordion } from "@/components/site/Accordion";
import { findRepairPage } from "@/data/services";
import { faqsByIds } from "@/data/faqs";

export const Route = createFileRoute("/repairs/$slug")({
  loader: ({ params }) => {
    const page = findRepairPage(params.slug);
    if (!page) throw notFound();
    // Icons are React components, so only serialisable fields are returned.
    const { icon: _icon, ...rest } = page;
    return rest;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Repair not found | PS5 Repair Service UAE" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDescription },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDescription },
      ],
    };
  },
  component: RepairDetail,
});

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="h-full">
      <h2 className="text-base font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
            <Check className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function RepairDetail() {
  const page = Route.useLoaderData();
  const faqItems = faqsByIds(page.faqIds);

  return (
    <>
      <PageHero eyebrow="Repair" title={page.heading} description={page.intro}>
        <CtaPair source={`repair_${page.slug}`} problemLabel={page.title.toLowerCase()} />
      </PageHero>

      <Section>
        <div className="grid gap-4 lg:grid-cols-2">
          <List title="Symptoms you might see" items={page.symptoms} />
          <List title="Possible causes" items={page.causes} />
          <List title="What we inspect" items={page.inspect} />
          <List title="What the repair may involve" items={page.involves} />
        </div>

        <Card className="border-primary/25 mt-4">
          <h2 className="flex items-center gap-2 text-base font-semibold">
            <AlertTriangle className="text-primary size-5" aria-hidden="true" />
            Honest limitations
          </h2>
          <ul className="mt-4 space-y-3">
            {page.limitations.map((item) => (
              <li key={item} className="text-muted-foreground text-sm leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {faqItems.length > 0 ? (
        <Section tone="raised">
          <SectionHeading title="Questions about this repair" />
          <div className="mt-8">
            <FaqAccordion items={faqItems} />
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="text-center">
          <SectionHeading
            align="center"
            title="Get a free diagnosis"
            description="Send us the symptoms and we'll tell you what's actually going on before anything is agreed."
          />
          <CtaPair
            className="mt-8 justify-center"
            source={`repair_${page.slug}_footer`}
            problemLabel={page.title.toLowerCase()}
          />
          <div className="mt-8">
            <Link
              to="/repairs"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              All repairs
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
