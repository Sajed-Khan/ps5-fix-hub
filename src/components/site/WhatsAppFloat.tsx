import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

/** Discreet floating WhatsApp button, present on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_cta_clicked", { source: "floating_button" })}
      aria-label="Message us on WhatsApp"
      className="bg-primary text-primary-foreground hover:bg-primary/90 soft-glow fixed right-4 bottom-4 z-40 inline-flex h-13 items-center gap-2 rounded-full px-4 text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
