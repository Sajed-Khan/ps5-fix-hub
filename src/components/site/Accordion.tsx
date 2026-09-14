import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faqs";

/** Keyboard-accessible FAQ accordion built on native buttons. */
export function FaqAccordion({ items }: { items: Faq[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-border border-border divide-y overflow-hidden rounded-2xl border">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div key={item.id} className="bg-card/40">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-panel-${item.id}`}
                id={`faq-button-${item.id}`}
                onClick={() => setOpenId(open ? null : item.id)}
                className="hover:bg-secondary/40 flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium transition-colors"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={`text-muted-foreground size-5 shrink-0 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            {open ? (
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-button-${item.id}`}
                className="text-muted-foreground px-5 pb-5 text-sm leading-relaxed"
              >
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
