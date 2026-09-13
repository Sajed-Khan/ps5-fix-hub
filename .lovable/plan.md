# PS5 Repair Service Website — UAE

A complete, mobile-first repair website whose single job is: broken PS5 → understand it can maybe be fixed → message WhatsApp or send a free diagnosis request.

## One technical note up front

The brief asks for Next.js. This platform builds on a very similar React framework (TanStack Start) with the same capabilities: server rendering, per-page SEO metadata, file-based pages, TypeScript, Tailwind. Everything in the brief is achievable; only the framework name differs. No Next.js-specific feature is lost.

## Business details used

- WhatsApp / phone: +971 56 954 2265
- Email: leon.khan.3200@gmail.com
- Hours: 24/7
- Service areas: Ajman, Sharjah, Dubai
- No collection, delivery or public drop-off address — the site will not show a location or claim one
- No prices except a clearly marked "paid service" note for liquid metal; no warranty duration stated (left as a blank to fill in later)
- No reviews yet: the reviews section shows an honest "we're building our repair history" message
- Recent repairs and before/after gallery ship with clearly labelled example placeholders, structured so real photos and case details drop straight in

## How the diagnosis form works

Requests go straight to WhatsApp. The form collects name, phone, PS5 model, problem, turns-on, display, previously-repaired and a description, then opens WhatsApp with all of it written out as a neat message ready to send. Nothing is stored and no photo/video upload is offered, since there is nowhere to send files — customers can attach photos directly in the WhatsApp chat instead, and the site says so. If you later want requests saved and photos uploaded, that can be added without redoing the form.

## Pages

- `/` — home, in the order set out in the brief: hero, trust bar, "What's wrong with your PS5?" selector, services, free diagnosis, how it works, recent repairs, before & after, straightforward process, reviews, FAQ, final CTA
- `/repairs` plus `/repairs/no-power`, `/hdmi`, `/usb`, `/microsoldering`, `/chip-replacement`, `/reballing`, `/bios-flashing`, `/liquid-metal` — each with symptoms, possible causes, what we inspect, what the repair may involve, limitations, relevant FAQ, both CTAs
- `/how-it-works`, `/recent-repairs`, `/faq`, `/contact`
- `/diagnosis` — stripped-back landing page for Facebook/Instagram ads
- `/privacy`, `/terms`

## Look and feel

Near-black navy background, charcoal sections, white text, electric-blue accents, light-grey secondary text, a very subtle circuit-trace texture, rounded cards with thin borders, generous spacing, restrained hover fades. Technical and clean — not gaming-clan, not cyberpunk. Designed at 320px first and up.

Header is sticky with Home / Repairs / How It Works / Recent Repairs / FAQ / Contact, a "Get Free Diagnosis" button and a WhatsApp button; hamburger menu on mobile. A discreet floating WhatsApp button follows the page on every screen, carrying the selected problem into the opening message.

## Claims and wording rules baked in

No "#1", "best", "expert", "trusted by thousands", no invented stats, reviews, experience or prices. Free diagnosis, free quote, approval before any repair, updates during the repair, free internal clean with qualifying repairs. Liquid metal is paid. APU repairs are not offered. BIOS flashing and jailbreaking stay separate services, with jailbreaking dependent on firmware compatibility. Repair availability always framed as "depends on diagnosis and console condition". Footer carries the independence disclaimer; no Sony logos.

## Technical notes

- All business details live in one `src/config/business.ts` (name, phone, WhatsApp, email, hours, service areas, liquid metal paid flag, warranty placeholder, social links). Every component reads from it.
- Content as typed data files: `services.ts`, `faqs.ts`, `repairs.ts` (case studies), `reviews.ts`, `serviceAreas.ts`, `problems.ts` — shaped so a database or admin screen can replace the source later without touching the UI.
- Shared components: Header, Footer, WhatsAppFloat, CtaPair, ProblemCard, ServiceCard, RepairCaseCard, BeforeAfter, Accordion (keyboard-accessible), DiagnosisForm, Section wrappers.
- Per-page titles, descriptions, canonical links, Open Graph and Twitter tags; `sitemap.xml` route; `robots.txt`; LocalBusiness/ProfessionalService structured data with only truthful fields — no ratings.
- Form validated client-side with clear, announced error messages; UAE +971 phone handling.
- Analytics kept as a single thin `track()` helper with named events (WhatsApp click, diagnosis started, form submitted, phone click, service viewed), no provider wired in yet.
- Accessibility: semantic landmarks, labelled inputs, visible focus rings, accessible accordion and mobile menu, descriptive alt text, contrast-checked palette.
- Repair tracking (`/track/...`) and an admin dashboard are not built; data shapes include a status field and reference so they can be added later.

## Images

Generated placeholder visuals in the site's dark/blue style for the hero, before/after pairs and social preview, each clearly labelled as an example and easy to swap for real repair photos.
