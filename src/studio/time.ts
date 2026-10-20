const IST_MS = (5 * 60 + 30) * 60 * 1000;

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

export const SESSION_TIMES = ["06:00", "07:15", "12:30", "18:00", "19:15", "20:30"] as const;

export type IstParts = {
  y: number;
  m: number;
  d: number;
  dow: number;
  hh: number;
  mm: number;
};

export function istParts(date: Date): IstParts {
  const shifted = new Date(date.getTime() + IST_MS);
  return {
    y: shifted.getUTCFullYear(),
    m: shifted.getUTCMonth(),
    d: shifted.getUTCDate(),
    dow: shifted.getUTCDay(),
    hh: shifted.getUTCHours(),
    mm: shifted.getUTCMinutes(),
  };
}

export function isoFromParts(parts: IstParts): string {
  const month = String(parts.m + 1).padStart(2, "0");
  const day = String(parts.d).padStart(2, "0");
  return `${parts.y}-${month}-${day}`;
}

export type TrainingDay = {
  iso: string;
  dow: string;
  label: string;
};

export function trainingDays(now: Date, count = 6): TrainingDay[] {
  const parts = istParts(now);
  let cursor = Date.UTC(parts.y, parts.m, parts.d) - IST_MS;
  const days: TrainingDay[] = [];
  while (days.length < count) {
    const dayParts = istParts(new Date(cursor));
    if (dayParts.dow !== 0) {
      days.push({
        iso: isoFromParts(dayParts),
        dow: DOW[dayParts.dow] ?? "Day",
        label: `${dayParts.d} ${MONTHS[dayParts.m] ?? ""}`,
      });
    }
    cursor += 24 * 60 * 60 * 1000;
  }
  return days;
}

export function slotId(iso: string, time: string): string {
  return `${iso}|${time}`;
}

export function parseSlotId(id: string): { iso: string; time: string } | null {
  const [iso, time] = id.split("|");
  if (!iso || !time) return null;
  return { iso, time };
}

export function slotStart(iso: string, time: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  return new Date(Date.UTC(y ?? 0, (m ?? 1) - 1, d ?? 1, hh ?? 0, mm ?? 0) - IST_MS);
}

export function isPast(iso: string, time: string, now: Date): boolean {
  return slotStart(iso, time).getTime() <= now.getTime();
}

export function isStudioHeld(id: string): boolean {
  let hash = 2166136261;
  for (let i = 0; i < id.length; i += 1) {
    hash ^= id.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) % 7 === 0;
}

export function addMinutes(hhmm: string, mins: number): string {
  const [h, m] = hhmm.split(":").map(Number);
  const total = (h ?? 0) * 60 + (m ?? 0) + mins;
  const hh = Math.floor(total / 60) % 24;
  const mm = total % 60;
  return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
}

export function formatTime(hhmm: string): string {
  const [hRaw, mRaw] = hhmm.split(":").map(Number);
  const h = hRaw ?? 0;
  const m = mRaw ?? 0;
  const suffix = h >= 12 ? "pm" : "am";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hr} ${suffix}` : `${hr}:${String(m).padStart(2, "0")} ${suffix}`;
}

export function formatDayLong(iso: string): string {
  const start = slotStart(iso, "12:00");
  const parts = istParts(start);
  return `${DOW[parts.dow] ?? ""} ${parts.d} ${MONTHS[parts.m] ?? ""}`;
}

function calendarStamp(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

export function googleCalendarUrl(options: {
  title: string;
  start: Date;
  end: Date;
  details: string;
  location: string;
}): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: options.title,
    dates: `${calendarStamp(options.start)}/${calendarStamp(options.end)}`,
    details: options.details,
    location: options.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function cleanMeetUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:") return null;
    if (url.hostname !== "meet.google.com") return null;
    if (!url.pathname || url.pathname === "/") return null;
    return url.toString();
  } catch {
    return null;
  }
}
