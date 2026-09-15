import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaPair } from "@/components/site/Cta";
import { Card } from "@/components/site/Cards";
import { DiagnosisForm } from "@/components/site/DiagnosisForm";
import { business, serviceAreaSentence } from "@/config/business";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PS5 Repair Service | WhatsApp, Phone & Email — UAE" },
      {
        name: "description",
        content:
          "Message us on WhatsApp, call or email about your PS5. Serving Dubai, Sharjah and Ajman, with messages answered any time.",
      },
      { property: "og:title", content: "Contact Our PS5 Repair Service — UAE" },
      {
        property: "og:description",
        content:
          "WhatsApp, phone or email. Describe the fault and get a free diagnosis.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="WhatsApp is the quickest way to reach us — you can send photos or a short video of the fault straight into the chat."
      >
        <CtaPair source="contact_hero" />
      </PageHero>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <MessageCircle className="text-primary size-5" aria-hidden="true" />
            <h2 className="mt-4 text-base font-semibold">WhatsApp</h2>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_cta_clicked", { source: "contact_page" })}
              className="text-muted-foreground hover:text-foreground mt-2 inline-block text-sm transition-colors"
            >
              {business.phone}
            </a>
          </Card>

          <Card>
            <Phone className="text-primary size-5" aria-hidden="true" />
            <h2 className="mt-4 text-base font-semibold">Phone</h2>
            <a
              href={`tel:${business.phoneHref}`}
              onClick={() => track("phone_clicked", { source: "contact_page" })}
              className="text-muted-foreground hover:text-foreground mt-2 inline-block text-sm transition-colors"
            >
              {business.phone}
            </a>
          </Card>

          <Card>
            <Mail className="text-primary size-5" aria-hidden="true" />
            <h2 className="mt-4 text-base font-semibold">Email</h2>
            <a
              href={`mailto:${business.email}`}
              className="text-muted-foreground hover:text-foreground mt-2 inline-block text-sm break-all transition-colors"
            >
              {business.email}
            </a>
          </Card>

          <Card>
            <Clock className="text-primary size-5" aria-hidden="true" />
            <h2 className="mt-4 text-base font-semibold">Hours</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              {business.businessHours}
            </p>
          </Card>
        </div>

        <Card className="mt-4">
          <div className="flex gap-3">
            <MapPin className="text-primary mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-base font-semibold">Where we work</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                Serving {serviceAreaSentence}. There is no public drop-off address, and
                collection or delivery isn't offered at the moment — message us and
                we'll arrange the handover with you directly.
              </p>
            </div>
          </div>
        </Card>
      </Section>

      <Section tone="raised">
        <SectionHeading
          title="Send your details"
          description="Fill this in and it opens WhatsApp with everything written out, ready to send."
        />
        <div className="mt-8">
          <DiagnosisForm />
        </div>
      </Section>
    </>
  );
}
