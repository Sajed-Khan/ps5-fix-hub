import { Link } from "@tanstack/react-router";
import { Gamepad2, MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import { Container } from "./Section";
import { business, serviceAreaSentence } from "@/config/business";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

const footerNav = [
  { to: "/repairs", label: "Repairs" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/recent-repairs", label: "Recent Repairs" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-border bg-card/30 mt-8 border-t">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="bg-primary/15 text-primary flex size-9 items-center justify-center rounded-lg">
                <Gamepad2 className="size-5" aria-hidden="true" />
              </span>
              {business.name}
            </div>
            <p className="text-muted-foreground mt-3 text-sm">{business.tagline}</p>
            <p className="text-muted-foreground mt-3 flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              Serving {serviceAreaSentence}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold">Pages</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_cta_clicked", { source: "footer" })}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  WhatsApp {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${business.phoneHref}`}
                  onClick={() => track("phone_clicked", { source: "footer" })}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 break-all transition-colors"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {business.email}
                </a>
              </li>
              <li className="text-muted-foreground inline-flex items-center gap-2">
                <Clock className="size-4" aria-hidden="true" />
                {business.businessHours}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Legal</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-border text-muted-foreground border-t py-6 text-xs leading-relaxed">
          <p>
            Independent repair service. Not affiliated with or endorsed by Sony
            Interactive Entertainment. PlayStation and PS5 are trademarks of their
            respective owners.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
