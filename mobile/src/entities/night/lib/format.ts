const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function parse(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

/** "Thursday 20 November" */
export function formatMorning(iso: string): string {
  const d = parse(iso);
  return `${DAYS[d.getUTCDay()]} ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
}

/** "19–20 November" (the evening and the morning of a night) */
export function formatNightRange(iso: string): string {
  const d = parse(iso);
  const prev = new Date(d.getTime() - 86400000);
  return prev.getUTCMonth() === d.getUTCMonth()
    ? `${prev.getUTCDate()}–${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`
    : `${prev.getUTCDate()} ${MONTHS[prev.getUTCMonth()]} – ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
}

/** "7 Nov" */
export function formatShort(iso: string): string {
  const d = parse(iso);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()].slice(0, 3)}`;
}

/** 450 → "7 h 30 min" */
export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

/** 23 → "23", 0 → "00" */
export function formatHour(hour: number): string {
  return String(hour % 24).padStart(2, '0');
}
