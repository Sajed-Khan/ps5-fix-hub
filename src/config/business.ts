/**
 * Single source of truth for business details.
 * Every component reads from here — never hardcode contact info elsewhere.
 */

export type ServiceArea = {
  name: string;
  /** Only set active: true for places the business actually serves. */
  active: boolean;
};

export const business = {
  name: "PS5 Repair Service",
  tagline: "PS5 Repair Service — UAE",
  country: "United Arab Emirates",

  /** Digits only, international format. Used to build wa.me links. */
  whatsappNumber: "971569542265",
  /** Display + tel: link */
  phone: "+971 56 954 2265",
  phoneHref: "+971569542265",
  email: "sajed619007@gmail.com",

  businessHours: "We usually reply within a few hours.",

  /** No public workshop address. Leave empty unless a real one exists. */
  address: "",
  googleMapsUrl: "",

  serviceAreas: [
    { name: "Dubai", active: true },
    { name: "Sharjah", active: true },
    { name: "Ajman", active: true },
  ] as ServiceArea[],

  /** No collection/delivery/drop-off is offered yet. */
  collectionAvailable: false,

  socialLinks: {
    facebook: "",
    instagram: "",
  },

  /**
   * Liquid metal replacement is a paid service.
   * Leave price null until a real price is set — never invent one.
   */
  liquidMetalPrice: null as string | null,

  /**
   * Warranty terms are not defined yet. Fill this in to have it appear
   * automatically on the Repair Terms page.
   */
  warrantyInformation: null as string | null,
} as const;

export const activeServiceAreas = business.serviceAreas.filter((a) => a.active);

export const serviceAreaSentence = activeServiceAreas
  .map((a) => a.name)
  .join(", ")
  .replace(/, ([^,]*)$/, " and $1");
