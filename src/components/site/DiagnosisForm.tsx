import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { business } from "@/config/business";
import { track } from "@/lib/analytics";
import { problems } from "@/data/problems";

const models = [
  "PS5 Original Disc",
  "PS5 Original Digital",
  "PS5 Slim Disc",
  "PS5 Slim Digital",
  "PS5 Pro",
  "Not sure",
];

const yesNoUnsure = ["Yes", "No", "Not sure"];

type Errors = Partial<Record<"name" | "phone" | "problem" | "description", string>>;

const field =
  "border-input bg-secondary/40 placeholder:text-muted-foreground w-full rounded-xl border px-4 py-3 text-sm outline-none focus-visible:border-primary";
const labelClass = "mb-2 block text-sm font-medium";

/**
 * Collects the fault details and hands them to WhatsApp as a ready-written
 * message. Nothing is stored on the site.
 */
export function DiagnosisForm({ initialProblem }: { initialProblem?: string }) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    model: models[0],
    problem:
      problems.find((p) => p.id === initialProblem)?.title ?? problems[0].title,
    turnsOn: yesNoUnsure[0],
    display: yesNoUnsure[0],
    previouslyRepaired: yesNoUnsure[1],
    description: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function set(key: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    const digits = values.phone.replace(/[^\d]/g, "");
    if (digits.length < 9)
      next.phone = "Please enter a valid UAE phone number, e.g. 05X XXX XXXX.";
    if (values.description.trim().length < 10)
      next.description = "Please describe the problem in a little more detail.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const message = [
      "PS5 free diagnosis request",
      "",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Model: ${values.model}`,
      `Problem: ${values.problem}`,
      `Turns on: ${values.turnsOn}`,
      `Picture on TV: ${values.display}`,
      `Repaired before: ${values.previouslyRepaired}`,
      "",
      `Details: ${values.description.trim()}`,
    ].join("\n");

    track("diagnosis_submitted", { problem: values.problem });
    window.open(
      `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border-border bg-card/50 rounded-2xl border p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="df-name">
            Your name
          </label>
          <input
            id="df-name"
            className={field}
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "df-name-error" : undefined}
            autoComplete="name"
          />
          {errors.name ? (
            <p id="df-name-error" role="alert" className="text-destructive mt-2 text-xs">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="df-phone">
            Phone / WhatsApp number
          </label>
          <input
            id="df-phone"
            className={field}
            inputMode="tel"
            placeholder="05X XXX XXXX"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "df-phone-error" : undefined}
            autoComplete="tel"
          />
          {errors.phone ? (
            <p
              id="df-phone-error"
              role="alert"
              className="text-destructive mt-2 text-xs"
            >
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="df-model">
            PS5 model
          </label>
          <select
            id="df-model"
            className={field}
            value={values.model}
            onChange={(e) => set("model", e.target.value)}
          >
            {models.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="df-problem">
            What's the problem?
          </label>
          <select
            id="df-problem"
            className={field}
            value={values.problem}
            onChange={(e) => set("problem", e.target.value)}
          >
            {problems.map((p) => (
              <option key={p.id}>{p.title}</option>
            ))}
          </select>
        </div>

        {(
          [
            ["turnsOn", "Does it turn on?"],
            ["display", "Is there a picture on the TV?"],
            ["previouslyRepaired", "Has it been repaired before?"],
          ] as const
        ).map(([key, label]) => (
          <div key={key}>
            <label className={labelClass} htmlFor={`df-${key}`}>
              {label}
            </label>
            <select
              id={`df-${key}`}
              className={field}
              value={values[key]}
              onChange={(e) => set(key, e.target.value)}
            >
              {yesNoUnsure.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        ))}

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="df-description">
            Describe what happens
          </label>
          <textarea
            id="df-description"
            rows={4}
            className={field}
            placeholder="Tell us what the console does, when it started and anything that happened before it."
            value={values.description}
            onChange={(e) => set("description", e.target.value)}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "df-description-error" : undefined}
          />
          {errors.description ? (
            <p
              id="df-description-error"
              role="alert"
              className="text-destructive mt-2 text-xs"
            >
              {errors.description}
            </p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 soft-glow mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-base font-semibold transition-colors sm:w-auto"
      >
        <Send className="size-4" aria-hidden="true" />
        Send on WhatsApp
      </button>

      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
        Your answers open in WhatsApp as a ready-written message. Nothing is stored on
        this website. You can attach photos or a video of the fault directly in the
        chat.
      </p>
    </form>
  );
}
