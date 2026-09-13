import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle, Gamepad2 } from "lucide-react";
import { Container } from "./Section";
import { DiagnosisButton } from "./Cta";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { business } from "@/config/business";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/repairs", label: "Repairs" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/recent-repairs", label: "Recent Repairs" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="border-border bg-background/85 sticky top-0 z-50 border-b backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold"
            onClick={() => setOpen(false)}
          >
            <span className="bg-primary/15 text-primary flex size-9 items-center justify-center rounded-lg">
              <Gamepad2 className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm sm:text-base">{business.name}</span>
              <span className="text-muted-foreground block text-[11px] font-normal">
                UAE
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const active =
                  item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      aria-current={active ? "page" : undefined}
                      className={`hover:text-foreground rounded-lg px-3 py-2 text-sm transition-colors ${
                        active ? "text-foreground font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on WhatsApp"
              onClick={() => track("whatsapp_cta_clicked", { source: "header" })}
              className="border-border hover:bg-secondary inline-flex size-10 items-center justify-center rounded-lg border transition-colors"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
            </a>
            <div className="hidden sm:block">
              <DiagnosisButton source="header" />
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="border-border hover:bg-secondary inline-flex size-10 items-center justify-center rounded-lg border transition-colors lg:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-border border-t lg:hidden">
          <Container>
            <nav aria-label="Mobile" className="py-3">
              <ul className="flex flex-col">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="text-foreground hover:bg-secondary block rounded-lg px-3 py-3 text-base"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-3 pb-4 sm:hidden">
                <DiagnosisButton source="mobile_menu" className="w-full" size="lg" />
              </div>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
