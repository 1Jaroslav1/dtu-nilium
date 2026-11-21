import type { NightDetail, NightSummary, Trend, TrendRange } from '../model/types';

/**
 * SAMPLE DATA ONLY: stands in for the device / backend until it exists.
 * Every number on the patient screens comes from here.
 */

const LAST_14 = [12.1, 13.4, 10.2, 11.8, 14.6, 12.9, 9.1, 10.7, 11.3, 13.8, 12.2, 10.4, 11.0, 9.4];

function isoDate(daysBeforeLast: number): string {
  const d = new Date(Date.UTC(2026, 10, 20 - daysBeforeLast));
  return d.toISOString().slice(0, 10);
}

const LAST_NIGHT: NightDetail = {
  id: '2026-11-20',
  date: '2026-11-20',
  coughsPerHour: 9.4,
  coughs: 142,
  asleepFrom: '23:10',
  asleepTo: '06:40',
  asleepMinutes: 450,
  firstHour: 23,
  hourlyCoughs: [12, 9, 14, 38, 27, 18, 15, 9],
  hourlyHumidity: [44, 41, 37, 34, 40, 45, 46, 46],
  events: [
    { time: '01:40', text: 'Air got dry (34%). The humidifier switched on.' },
    { time: '02:00', text: 'Most coughing: 38 coughs in one hour.' },
    { time: '03:50', text: 'Humidity back to 45%. The humidifier switched off.' },
    { time: '06:40', text: 'Woke up. Night saved and sent to your study team.' },
  ],
};

export function getRecentNights(count = 14): NightSummary[] {
  const values = LAST_14.slice(-count);
  return values.map((coughsPerHour, i) => {
    const date = isoDate(values.length - 1 - i);
    return { id: date, date, coughsPerHour };
  });
}

export function getLastNight(): NightDetail {
  return LAST_NIGHT;
}

/** Any night by id; nights other than the last reuse its shape, scaled to their rate. */
export function getNight(id: string): NightDetail | undefined {
  if (id === LAST_NIGHT.id) return LAST_NIGHT;
  const summary = getRecentNights().find((n) => n.id === id);
  if (!summary) return undefined;
  const scale = summary.coughsPerHour / LAST_NIGHT.coughsPerHour;
  const hourlyCoughs = LAST_NIGHT.hourlyCoughs.map((c) => Math.round(c * scale));
  return {
    ...LAST_NIGHT,
    ...summary,
    coughs: hourlyCoughs.reduce((a, b) => a + b, 0),
    hourlyCoughs,
    events: [],
  };
}

export function averageCoughsPerHour(nights: NightSummary[]): number {
  if (nights.length === 0) return 0;
  const sum = nights.reduce((a, n) => a + n.coughsPerHour, 0);
  return Math.round((sum / nights.length) * 10) / 10;
}

const TREND_CONFIG: Record<TrendRange, { n: number; base: number; seed: number; changePct: number; start: string }> = {
  '7': { n: 7, base: 10.9, seed: 3, changePct: -8, start: '14 Nov' },
  '30': { n: 30, base: 11.4, seed: 1, changePct: -12, start: '22 Oct' },
  '90': { n: 90, base: 12.5, seed: 5, changePct: -5, start: '23 Aug' },
};

export function getTrend(range: TrendRange): Trend {
  const c = TREND_CONFIG[range];
  const nightly: number[] = [];
  for (let i = 0; i < c.n; i++) {
    const v =
      c.base + 2.6 * Math.sin((i + c.seed) * 1.7) + 1.4 * Math.cos((i + c.seed) * 0.9) - (i / c.n) * 1.2;
    nightly.push(Math.max(5, Math.round(v * 10) / 10));
  }
  const average = Math.round((nightly.reduce((a, b) => a + b, 0) / nightly.length) * 10) / 10;
  return {
    range,
    nightlyCoughsPerHour: nightly,
    average,
    changePct: c.changePct,
    startLabel: c.start,
    byHour: [6.2, 7.8, 9.9, 15.1, 14.2, 10.3, 8.4, 6.9],
    dryNights: { nights: 11, coughsPerHour: 13.1 },
    comfortableNights: { nights: 19, coughsPerHour: 8.7 },
  };
}
