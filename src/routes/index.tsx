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
import heroImage from "@/assets/ps5-repair-hero.jpg";
import hdmiImage from "@/assets/ps5-hdmi-repair.jpg";
import cleaningImage from "@/assets/ps5-cleaning.jpg";
import microsolderingImage from "@/assets/ps5-microsoldering.jpg";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

const repairHighlights = [
  {
    src: hdmiImage,
    title: "HDMI port work",
    detail: "Inspected under magnification",
    alt: "Close-up of a PS5 HDMI port on a motherboard at a repair bench",
  },
  {
    src: microsolderingImage,
    title: "Microsoldering",
    detail: "Fine board-level work",
    alt: "Technician carrying out microsoldering on a PS5 motherboard",
  },
  {
    src: cleaningImage,
    title: "Internal cleaning",
    detail: "Included with qualifying repairs",
    alt: "Open PS5 being cleaned around its fan and heatsink",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-border relative overflow-hidden border-b bg-card/25">
        <div className="pointer-events-none absolute inset-0 circuit-bg opacity-60" />
        <Container className="max-w-7xl py-4 sm:py-7 lg:py-9">
          <div className="border-border bg-card relative grid min-h-[540px] overflow-hidden rounded-2xl border shadow-2xl lg:grid-cols-12">
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 sm:px-10 lg:col-span-7 lg:px-14 lg:py-14">
              <p className="border-primary/25 bg-primary/10 text-primary mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase">
                <span className="bg-primary size-2 rounded-full" aria-hidden="true" />
                Independent PS5 repair — UAE
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.04] text-balance sm:text-5xl lg:text-6xl">
                PS5 repair service <span className="text-primary">in the UAE.</span>
              </h1>
              <p className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
                Not sure what's wrong? Describe the symptoms. We'll diagnose the fault
                free, provide a clear quote, and wait for your approval before any repair.
              </p>
              <CtaPair className="mt-7" source="hero" />
              <ul className="border-border text-muted-foreground mt-8 grid gap-x-6 gap-y-3 border-t pt-6 text-sm sm:grid-cols-2">
                {trustPoints.map((p) => (
                  <li key={p.label} className="flex items-center gap-2.5">
                    <p.icon className="text-primary size-4 shrink-0" aria-hidden="true" />
                    {p.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative min-h-[380px] overflow-hidden lg:col-span-5 lg:min-h-full">
              <img
                src={heroImage}
                alt="Technician performing precision board-level work on a PS5 motherboard"
                width={1024}
                height={1536}
                fetchPriority="high"
                className="hero-image-drift absolute inset-0 size-full object-cover object-center"
              />
              <div className="from-card absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent max-lg:hidden" />
              <div className="from-card/90 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
              <div className="border-border bg-card/80 absolute right-5 bottom-5 left-5 flex items-center gap-3 rounded-xl border p-3 backdrop-blur-md sm:right-7 sm:bottom-7 sm:left-7">
                <img
                  src={microsolderingImage}
                  alt="Detailed view of PS5 motherboard microsoldering"
                  width={1200}
                  height={800}
                  className="size-14 shrink-0 rounded-lg object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">Board-level diagnosis</p>
                  <p className="text-muted-foreground mt-0.5 font-mono text-[11px] uppercase">
                    Inspected first · quoted before repair
                  </p>
                </div>
              </div>
              <div className="text-primary/70 absolute top-6 right-6 font-mono text-[10px] leading-relaxed uppercase">
                No power<br />HDMI · USB<br />Microsoldering
              </div>
            </div>
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
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {repairHighlights.map((item) => (
            <figure key={item.title} className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="from-background/95 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-4 pt-12 pb-4">
                <span className="block text-sm font-semibold">{item.title}</span>
                <span className="text-muted-foreground mt-0.5 block text-xs">{item.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
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
