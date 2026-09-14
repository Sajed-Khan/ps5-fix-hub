import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/** Standard page intro used by every inner page. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="circuit-bg border-border border-b">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow ? (
          <p className="text-primary mb-3 text-xs font-semibold tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-3xl font-bold text-balance sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
