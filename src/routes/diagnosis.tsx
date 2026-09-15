import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { WhatsAppButton } from "@/components/site/Cta";
import { DiagnosisForm } from "@/components/site/DiagnosisForm";
import { findProblem } from "@/data/problems";
import { serviceAreaSentence } from "@/config/business";

type DiagnosisSearch = { problem?: string };

export const Route = createFileRoute("/diagnosis")({
  validateSearch: (search: Record<string, unknown>): DiagnosisSearch => ({
    problem: typeof search.problem === "string" ? search.problem : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Free PS5 Diagnosis | Tell Us the Symptoms — UAE" },
      {
        name: "description",
        content:
          "Get a free PS5 diagnosis and quote. Describe the symptoms and we'll tell you what's wrong before anything is repaired.",
      },
      { property: "og:title", content: "Free PS5 Diagnosis — UAE" },
      {
        property: "og:description",
        content:
          "Describe the symptoms, get a free diagnosis and a quote, then decide whether to go ahead.",
      },
    ],
  }),
  component: DiagnosisPage,
});

const points = [
  "Diagnosis and the quote that follows are free",
  "Nothing is repaired until you approve the cost",
  "You're told plainly if a console can't be repaired",
];

function DiagnosisPage() {
  const { problem } = Route.useSearch();
  const selected = findProblem(problem);

  return (
    <>
      <PageHero
        eyebrow="Free diagnosis"
        title={
          selected
            ? `Free diagnosis — ${selected.title}`
            : "Get your free PS5 diagnosis"
        }
        description={`Answer a few quick questions about your console and we'll come back to you with what's actually wrong. Serving ${serviceAreaSentence}.`}
      >
        <ul className="grid gap-3 text-sm sm:grid-cols-3">
          {points.map((p) => (
            <li key={p} className="text-muted-foreground flex items-start gap-2">
              <CheckCircle2
                className="text-primary mt-0.5 size-4 shrink-0"
                aria-hidden="true"
              />
              {p}
            </li>
          ))}
        </ul>
      </PageHero>

      <Section>
        <DiagnosisForm initialProblem={problem} />
        <div className="mt-6">
          <p className="text-muted-foreground mb-3 text-sm">
            Prefer to just message us instead?
          </p>
          <WhatsAppButton
            source="diagnosis_page"
            problemLabel={selected?.whatsappLabel}
          />
        </div>
      </Section>
    </>
  );
}
