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
          "We usually reply within a few hours.",
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
