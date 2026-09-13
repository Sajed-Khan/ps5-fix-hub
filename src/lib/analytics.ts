/**
 * Privacy-conscious analytics shim.
 *
 * No provider is wired in yet. When one is added, forward the event here and
 * every CTA on the site starts reporting without further changes.
 */

export type AnalyticsEvent =
  | "whatsapp_cta_clicked"
  | "phone_clicked"
  | "diagnosis_started"
  | "diagnosis_submitted"
  | "repair_service_viewed";

type Props = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...props });
  }
  if (import.meta.env.DEV) {
    console.debug("[analytics]", event, props);
  }
}
