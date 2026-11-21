/** One night recorded by the bedside counter. Dates are local ISO dates of the morning. */
export type NightSummary = {
  id: string;
  /** Morning date, e.g. "2026-11-20". */
  date: string;
  coughsPerHour: number;
};

export type NightEvent = {
  /** "HH:MM" local time. */
  time: string;
  text: string;
};

export type NightDetail = NightSummary & {
  coughs: number;
  asleepFrom: string;
  asleepTo: string;
  asleepMinutes: number;
  /** Coughs in each clock hour, starting at `firstHour`. */
  hourlyCoughs: number[];
  /** Bedroom humidity (%) for the same hours. */
  hourlyHumidity: number[];
  firstHour: number;
  events: NightEvent[];
};

export type TrendRange = '7' | '30' | '90';

export type Trend = {
  range: TrendRange;
  nightlyCoughsPerHour: number[];
  average: number;
  /** Change vs the previous period of the same length, in % (negative = fewer coughs). */
  changePct: number;
  startLabel: string;
  /** Average coughs per hour by clock hour, 23:00 → 06:00. */
  byHour: number[];
  dryNights: { nights: number; coughsPerHour: number };
  comfortableNights: { nights: number; coughsPerHour: number };
};
