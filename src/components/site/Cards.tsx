import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { Problem } from "@/data/problems";
import type { Service } from "@/data/services";
import type { RepairCase, GalleryPair, RepairGallery, RepairPhoto } from "@/data/repairs";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { ImageModal } from "./ImageModal";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-border bg-card/50 rounded-2xl border p-6 transition-colors",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ExampleBadge() {
  return (
    <span className="border-border text-muted-foreground inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase">
      Example layout
    </span>
  );
}

/** "What's wrong with your PS5?" selector card. */
export function ProblemCard({ problem }: { problem: Problem }) {
  const Icon = problem.icon;
  const body = (
    <>
      <span className="bg-primary/12 text-primary mb-4 flex size-11 items-center justify-center rounded-xl">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <span className="block text-base font-semibold">{problem.title}</span>
      <span className="text-muted-foreground mt-2 block text-sm leading-relaxed">
        {problem.description}
      </span>
      <span className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
        {problem.repairSlug ? "See this repair" : "Tell us about it"}
        <ArrowRight className="size-4" aria-hidden="true" />
      </span>
    </>
  );

  const className =
    "border-border bg-card/50 hover:border-primary/40 hover:bg-card flex flex-col rounded-2xl border p-6 text-left transition-colors";

  if (problem.repairSlug) {
    return (
      <Link
        to="/repairs/$slug"
        params={{ slug: problem.repairSlug }}
        onClick={() => track("repair_service_viewed", { problem: problem.id })}
        className={className}
      >
        {body}
      </Link>
    );
  }

  return (
    <Link to="/diagnosis" search={{ problem: problem.id }} className={className}>
      {body}
    </Link>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="bg-primary/12 text-primary flex size-11 items-center justify-center rounded-xl">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {service.note ? (
          <span className="border-border text-muted-foreground rounded-full border px-2.5 py-1 text-[11px]">
            {service.note}
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-base font-semibold">{service.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {service.description}
      </p>
      {service.slug ? (
        <span className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
          Learn more
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      ) : null}
    </>
  );

  if (service.slug) {
    return (
      <Link
        to="/repairs/$slug"
        params={{ slug: service.slug }}
        onClick={() => track("repair_service_viewed", { service: service.title })}
        className="border-border bg-card/50 hover:border-primary/40 hover:bg-card block rounded-2xl border p-6 transition-colors"
      >
        {inner}
      </Link>
    );
  }

  return <Card>{inner}</Card>;
}

export function RepairCaseCard({ item }: { item: RepairCase }) {
  const shots = [
    item.beforeImage
      ? {
          src: item.beforeImage,
          alt: item.beforeAlt ?? "Repair photo",
          label: item.beforeLabel ?? "Before",
        }
      : null,
    item.afterImage
      ? {
          src: item.afterImage,
          alt: item.afterAlt ?? "Repair photo",
          label: item.afterLabel ?? "After",
        }
      : null,
  ].filter((shot): shot is { src: string; alt: string; label: string } => Boolean(shot));

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-muted-foreground font-mono text-xs">
          {item.reference}
        </span>
        {item.isExample ? <ExampleBadge /> : null}
      </div>
      <h3 className="mt-3 text-base font-semibold">{item.problemTitle}</h3>
      <p className="text-muted-foreground mt-1 text-sm">{item.model}</p>
      {shots.length > 0 ? (
        <div className={cn("mt-4 grid gap-2", shots.length > 1 ? "grid-cols-2" : "grid-cols-1")}>
          {shots.map((shot) => (
            <figure key={shot.src}>
              <ImageModal src={shot.src} alt={shot.alt}>
                <button
                  type="button"
                  className="border-border block w-full cursor-zoom-in overflow-hidden rounded-xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`Open ${shot.label} image`}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="aspect-4/3 size-full object-cover"
                  />
                </button>
              </ImageModal>
              <figcaption className="text-muted-foreground mt-1.5 text-[11px]">
                {shot.label}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
      <dl className="mt-4 space-y-3 text-sm">
        {[
          ["Reported", item.reported],
          ["Diagnosis", item.diagnosis],
          ["Repair", item.repair],
          ["Result", item.result],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-foreground text-xs font-semibold tracking-wide uppercase">
              {label}
            </dt>
            <dd className="text-muted-foreground mt-1 leading-relaxed">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="text-primary mt-4 inline-flex items-center gap-1.5 text-xs font-medium">
        <Check className="size-4" aria-hidden="true" />
        {item.status}
      </p>
    </Card>
  );
}

/** Before / after pair. Renders labelled placeholders until real photos exist. */
export function BeforeAfter({ pair }: { pair: GalleryPair }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold">{pair.title}</h3>
        {pair.isExample ? <ExampleBadge /> : null}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {(
          [
            [pair.beforeLabel, pair.beforeImage, pair.beforeAlt],
            [pair.afterLabel, pair.afterImage, pair.afterAlt],
          ] as const
        ).map(([label, src, alt]) => (
          <figure key={label}>
            {src ? (
              <ImageModal src={src} alt={alt}>
                <button
                  type="button"
                  className="border-border bg-secondary/40 circuit-bg flex aspect-4/3 w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`Open ${label} image`}
                >
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                </button>
              </ImageModal>
            ) : (
              <div className="border-border bg-secondary/40 circuit-bg flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl border">
                <span className="text-muted-foreground px-3 text-center text-[11px]">
                  Photo coming soon
                </span>
              </div>
            )}
            <figcaption className="text-muted-foreground mt-2 text-xs">
              {label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Card>
  );
}

export function RepairPhotoGrid({ photos }: { photos: RepairPhoto[] }) {
  return (
    <div
      className={cn(
        "mt-4 grid gap-3",
        photos.length === 1 ? "grid-cols-1 sm:max-w-md" : "grid-cols-2 lg:grid-cols-4",
      )}
    >
      {photos.map((photo) => (
        <figure key={photo.src}>
          <ImageModal src={photo.src} alt={photo.alt}>
            <button
              type="button"
              className="border-border block w-full cursor-zoom-in overflow-hidden rounded-xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`Open ${photo.caption} image`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="aspect-4/3 size-full object-cover"
              />
            </button>
          </ImageModal>
          <figcaption className="text-muted-foreground mt-1.5 text-xs leading-snug">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function RepairGalleryBlock({ gallery }: { gallery: RepairGallery }) {
  return (
    <Card>
      <h3 className="text-base font-semibold">{gallery.title}</h3>
      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
        {gallery.description}
      </p>
      <RepairPhotoGrid photos={gallery.photos} />
    </Card>
  );
}
