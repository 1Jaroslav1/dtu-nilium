export type HumidityStatus = 'dry' | 'comfortable' | 'humid';

/** Comfortable bedroom humidity range, in %. */
export const COMFORT_RANGE = { from: 40, to: 60 } as const;

export function humidityStatus(percent: number): HumidityStatus {
  if (percent < COMFORT_RANGE.from) return 'dry';
  if (percent > COMFORT_RANGE.to) return 'humid';
  return 'comfortable';
}

export type RoomClimate = {
  temperatureC: number;
  humidity: number;
  updatedMinutesAgo: number;
  /** Hourly humidity for the last 24 h, oldest first (25 points: 12:00 → now). */
  humidityLast24h: number[];
};

export type OvernightClimate = {
  temperatureC: number;
  lowestHumidity: number;
  humidifierMinutes: number;
};
