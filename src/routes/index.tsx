import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Clock,
  MessageCircle,
  ClipboardList,
  Search,
  Wrench,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Section, SectionHeading, Container } from "@/components/site/Section";
import { CtaPair } from "@/components/site/Cta";
import { ProblemCard, ServiceCard, RepairCaseCard, BeforeAfter, Card } from "@/components/site/Cards";
import { FaqAccordion } from "@/components/site/Accordion";
import { problems } from "@/data/problems";
import { services, REPAIR_AVAILABILITY_NOTE } from "@/data/services";
import { repairCases, galleryPairs } from "@/data/repairs";
import { faqs } from "@/data/faqs";
import { reviews } from "@/data/reviews";
import { serviceAreaSentence, business } from "@/config/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PS5 Repair Service UAE | Free Diagnosis & Quote" },
      {
        name: "description",
        content:
          "Independent PS5 repair in Dubai, Sharjah and Ajman. Free diagnosis, a clear quote and your approval before any work starts.",
      },
      {
        property: "og:title",
        content: "PS5 Repair Service UAE | Free Diagnosis & Quote",
      },
      {
        property: "og:description",
        content:
          "Describe the symptoms, get a free diagnosis and a quote, then decide. PS5 repairs across Dubai, Sharjah and Ajman.",
      },
    ],
  }),
  component: Home,
});

const trustPoints = [
  { icon: Search, label: "Free diagnosis" },
  { icon: ClipboardList, label: "Free quote before any work" },
  { icon: ShieldCheck, label: "Nothing done without your approval" },
  { icon: Clock, label: business.businessHours },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Tell us the symptoms",
    text: "Message on WhatsApp or send the diagnosis form. You don't need to know what's wrong.",
  },
  {
    icon: Search,
    title: "Free diagnosis",
    text: "The console is inspected and tested to find the actual cause, not a guess.",
  },
  {
    icon: ClipboardList,
    title: "Quote and your decision",
    text: "You're told what it needs and what it costs. Nothing goes ahead until you say yes.",
  },
  {
    icon: Wrench,
    title: "Repair and testing",
    text: "The repair is carried out and the console is tested, with updates along the way.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="circuit-bg border-border border-b">
        <Container>
          <div className="py-16 sm:py-24">
            <p className="text-primary mb-4 text-xs font-semibold tracking-[0.18em] uppercase">
              PS5 repair — {serviceAreaSentence}
            </p>
            <h1 className="max-w-3xl text-3xl font-bold text-balance sm:text-5xl md:text-6xl">
              Your PS5 isn't working. Let's find out why — free.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
              Describe the symptoms in your own words. We diagnose the fault, tell you
              what the repair involves and what it costs, then you decide whether to go
              ahead.
            </p>
            <CtaPair className="mt-8" source="hero" />
            <ul className="text-muted-foreground mt-8 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((p) => (
                <li key={p.label} className="flex items-center gap-2">
                  <p.icon className="text-primary size-4 shrink-0" aria-hidden="true" />
                  {p.label}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Problem selector */}
      <Section id="problems">
        <SectionHeading
          eyebrow="Start here"
          title="What's wrong with your PS5?"
          description="Pick whatever sounds closest. If nothing fits, choose “Other problem” and just describe what happens."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <ProblemCard key={p.id} problem={p} />
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="raised" id="services">
        <SectionHeading
          eyebrow="Services"
          title="PS5 repair services"
          description={REPAIR_AVAILABILITY_NOTE}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </Section>

      {/* Free diagnosis */}
      <Section>
        <div className="border-border bg-card/50 circuit-bg rounded-3xl border p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Free diagnosis, no obligation
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Diagnosis and the quote that follows cost nothing. If you decide not to go
              ahead after hearing what's wrong, that's completely fine.
            </p>
            <CtaPair className="mt-7" source="diagnosis_band" />
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section tone="raised">
        <SectionHeading
          eyebrow="How it works"
          title="Four straightforward steps"
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Card className="h-full">
                <span className="bg-primary/12 text-primary flex size-11 items-center justify-center rounded-xl">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-muted-foreground mt-4 text-xs font-semibold tracking-wide uppercase">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 text-base font-semibold">{s.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {s.text}
                </p>
              </Card>
            </li>
          ))}
        </ol>
        <Link
          to="/how-it-works"
          className="text-primary mt-8 inline-flex items-center gap-1.5 text-sm font-medium"
        >
          Read the full process
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Section>

      {/* Recent repairs */}
      <Section>
        <SectionHeading
          eyebrow="Recent repairs"
          title="Examples of the work"
          description="We're a new service building up our public repair history. The cases below are clearly labelled examples of how each repair is documented — real cases replace them as they're completed."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {repairCases.map((c) => (
            <RepairCaseCard key={c.reference} item={c} />
          ))}
        </div>
      </Section>

      {/* Before & after */}
      <Section tone="raised">
        <SectionHeading
          eyebrow="Before & after"
          title="Before and after gallery"
          description="Photo placeholders for now — real repair photos drop straight into these layouts."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {galleryPairs.map((pair) => (
            <BeforeAfter key={pair.id} pair={pair} />
          ))}
        </div>
      </Section>

      {/* Straightforward process / promises */}
      <Section>
        <SectionHeading
          eyebrow="What you can expect"
          title="No surprises at any point"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Diagnosis is free, and so is the quote that follows it.",
            "No repair begins until you have approved the cost.",
            "You get updates while the repair is in progress.",
            "A free internal clean is included with qualifying repairs.",
            "If a console can't be repaired, you're told plainly.",
            "Liquid metal replacement is offered as a paid service.",
          ].map((text) => (
            <Card key={text} className="flex gap-3">
              <CheckCircle2
                className="text-primary mt-0.5 size-5 shrink-0"
                aria-hidden="true"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section tone="raised">
        <SectionHeading eyebrow="Reviews" title="Customer reviews" />
        {reviews.length === 0 ? (
          <Card className="mt-8 max-w-2xl">
            <Sparkles className="text-primary size-5" aria-hidden="true" />
            <p className="mt-4 text-sm leading-relaxed">
              We're a new repair service and we're building our review history
              honestly. Rather than show invented feedback, this space stays empty
              until real customers have left theirs.
            </p>
          </Card>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <Card key={r.id}>
                <p className="text-sm leading-relaxed">“{r.review}”</p>
                <p className="text-muted-foreground mt-4 text-xs">
                  {r.firstName} — {r.repairType}
                </p>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10">
          <FaqAccordion items={faqs.slice(0, 8)} />
        </div>
        <Link
          to="/faq"
          className="text-primary mt-8 inline-flex items-center gap-1.5 text-sm font-medium"
        >
          See all questions
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Section>

      {/* Final CTA */}
      <Section tone="raised">
        <div className="text-center">
          <SectionHeading
            align="center"
            title="Tell us what your PS5 is doing"
            description="You don't need to diagnose it yourself. Describe the symptoms and we'll take it from there."
          />
          <CtaPair className="mt-8 justify-center" source="final_cta" />
        </div>
      </Section>
    </>
  );
}
