import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Search, ClipboardList, Wrench, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaPair } from "@/components/site/Cta";
import { Card } from "@/components/site/Cards";
import { REPAIR_AVAILABILITY_NOTE } from "@/data/services";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How PS5 Repair Works | Free Diagnosis First — UAE" },
      {
        name: "description",
        content:
          "How our PS5 repair process works: send the symptoms, free diagnosis, a clear quote, your approval, then repair and testing.",
      },
      { property: "og:title", content: "How Our PS5 Repair Process Works" },
      {
        property: "og:description",
        content:
          "Free diagnosis, a clear quote, approval before any work, updates during the repair.",
      },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: MessageCircle,
    title: "You describe the symptoms",
    text: "Message on WhatsApp or send the diagnosis form. Tell us what the console does — no technical knowledge needed. Photos or a short video help but aren't required.",
  },
  {
    icon: Search,
    title: "Free diagnosis",
    text: "The console is inspected and measured to find the actual cause rather than guessing at parts. This costs nothing, whatever the outcome.",
  },
  {
    icon: ClipboardList,
    title: "A clear quote",
    text: "You're told what the fault is, what the repair involves, roughly how long it should take and what it costs. The quote is free too.",
  },
  {
    icon: CheckCircle2,
    title: "Your decision",
    text: "Nothing is repaired until you approve it. If you'd rather not go ahead, that's fine and there's nothing to pay for the diagnosis.",
  },
  {
    icon: Wrench,
    title: "Repair, testing and updates",
    text: "The repair is carried out and the console is tested before it goes back to you, with updates while the work is in progress. A free internal clean is included with qualifying repairs.",
  },
];

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A straightforward repair process"
        description="You don't need to know what's wrong with your PS5. Describe what happens, and the diagnosis does the rest."
      >
        <CtaPair source="how_it_works_hero" />
      </PageHero>

      <Section>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Card className="flex gap-5">
                <span className="bg-primary/12 text-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Step {i + 1}
                  </p>
                  <h2 className="mt-1 text-base font-semibold">{s.title}</h2>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Card>
            </li>
          ))}
        </ol>
        <p className="text-muted-foreground mt-8 text-sm">{REPAIR_AVAILABILITY_NOTE}</p>
      </Section>

      <Section tone="raised">
        <div className="text-center">
          <SectionHeading
            align="center"
            title="Ready to start?"
            description="Send the symptoms now and get your free diagnosis moving."
          />
          <CtaPair className="mt-8 justify-center" source="how_it_works_footer" />
        </div>
      </Section>
    </>
  );
}
