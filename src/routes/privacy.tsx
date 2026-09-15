import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { business } from "@/config/business";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | PS5 Repair Service UAE" },
      {
        name: "description",
        content:
          "How we handle the information you send us about your PS5 repair. This website stores no form submissions.",
      },
      { property: "og:title", content: "Privacy Policy | PS5 Repair Service UAE" },
      {
        property: "og:description",
        content: "What we do with the details you share when requesting a PS5 repair.",
      },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "What this website collects",
    body: "Nothing is stored on this website. The diagnosis form doesn't send data to a server — it simply opens WhatsApp with your answers written out, and you choose whether to send that message.",
  },
  {
    title: "What we receive when you contact us",
    body: "When you message us on WhatsApp, call or email, we receive your name, phone number, email address where relevant, and whatever you tell us about your console. WhatsApp messages are handled by WhatsApp under its own privacy terms.",
  },
  {
    title: "How that information is used",
    body: "Only to diagnose your console, quote for the repair, keep you updated and complete the work. We don't sell your details and we don't pass them to third parties for marketing.",
  },
  {
    title: "How long it's kept",
    body: "Repair-related messages and records are kept only as long as needed to complete and support the repair. You can ask us to delete your details at any time.",
  },
  {
    title: "Repair photos",
    body: "Photos of repair work may be published on this website. They show hardware only, never your personal data, and we'll ask before publishing anything identifiable to you.",
  },
  {
    title: "Your choices",
    body: `You can ask what we hold, ask for corrections, or ask us to delete it. Contact ${business.email} or message ${business.phone}.`,
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="Short version: this site stores nothing, and we only use what you send us to repair your console."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
