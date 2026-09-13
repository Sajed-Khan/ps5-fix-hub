/**
 * Real customer reviews only. The section renders an honest empty state while
 * this array is empty — never add placeholder or invented feedback here.
 */
export type Review = {
  id: string;
  firstName: string;
  /** 1-5 */
  rating: number;
  review: string;
  /** ISO date, e.g. "2026-01-14" */
  date: string;
  repairType: string;
};

export const reviews: Review[] = [];
