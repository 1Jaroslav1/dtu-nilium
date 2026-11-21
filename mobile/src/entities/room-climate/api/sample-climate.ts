import type { OvernightClimate, RoomClimate } from '../model/humidity';

/** SAMPLE DATA ONLY: stands in for the smart-home link until it exists. */

export function getRoomClimate(): RoomClimate {
  return {
    temperatureC: 21.0,
    humidity: 46,
    updatedMinutesAgo: 2,
    humidityLast24h: [49, 48, 48, 47, 46, 45, 44, 43, 42, 41, 40, 38, 36, 34, 37, 40, 43, 45, 46, 46, 47, 47, 46, 46, 46],
  };
}

export function getOvernightClimate(): OvernightClimate {
  return { temperatureC: 19.5, lowestHumidity: 34, humidifierMinutes: 130 };
}

export function getHomeConnection() {
  return { system: 'Home Assistant', device: 'Bedside counter', lastSync: '07:02', connected: true };
}
