import { business } from "@/config/business";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I'd like a free diagnosis for my PS5. The problem I'm having is:";

/** Builds a wa.me link with a prefilled message. */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** "Hi, I'd like a free diagnosis for my PS5. I'm having an HDMI / no display problem." */
export function whatsappUrlForProblem(problemLabel?: string): string {
  if (!problemLabel) return whatsappUrl();
  const article = /^[aeiou]/i.test(problemLabel) ? "an" : "a";
  return whatsappUrl(
    `Hi, I'd like a free diagnosis for my PS5. I'm having ${article} ${problemLabel} problem.`,
  );
}
