import { Link } from "@tanstack/react-router";
import { MessageCircle, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { whatsappUrlForProblem } from "@/lib/whatsapp";

type Size = "default" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const sizes: Record<Size, string> = {
  default: "h-11 text-sm",
  lg: "h-12 text-base sm:h-13",
};

/** Primary CTA: Get Free Diagnosis */
export function DiagnosisButton({
  label = "Get Free Diagnosis",
  problemId,
  size = "default",
  className,
  source,
}: {
  label?: string;
  problemId?: string;
  size?: Size;
  className?: string;
  source?: string;
}) {
  return (
    <Link
      to="/diagnosis"
      search={problemId ? { problem: problemId } : {}}
      onClick={() => track("diagnosis_started", { source, problem: problemId })}
      className={cn(
        base,
        sizes[size],
        "bg-primary text-primary-foreground hover:bg-primary/90 soft-glow",
        className,
      )}
    >
      <Wrench className="size-4" aria-hidden="true" />
      {label}
    </Link>
  );
}

/** Secondary CTA: WhatsApp Us */
export function WhatsAppButton({
  label = "WhatsApp Us",
  problemLabel,
  size = "default",
  className,
  source,
}: {
  label?: string;
  problemLabel?: string;
  size?: Size;
  className?: string;
  source?: string;
}) {
  return (
    <a
      href={whatsappUrlForProblem(problemLabel)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_cta_clicked", { source, problem: problemLabel })}
      className={cn(
        base,
        sizes[size],
        "border-border bg-secondary/60 hover:bg-secondary text-foreground border",
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}

/** The standard primary + secondary CTA pair used across the site. */
export function CtaPair({
  problemId,
  problemLabel,
  size = "lg",
  className,
  source,
  primaryLabel,
  secondaryLabel,
}: {
  problemId?: string;
  problemLabel?: string;
  size?: Size;
  className?: string;
  source?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <DiagnosisButton
        label={primaryLabel}
        problemId={problemId}
        size={size}
        source={source}
      />
      <WhatsAppButton
        label={secondaryLabel}
        problemLabel={problemLabel}
        size={size}
        source={source}
      />
    </div>
  );
}
