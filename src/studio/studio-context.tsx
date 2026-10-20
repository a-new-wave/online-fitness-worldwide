import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { STUDIO_MEET_URL } from "@/studio/content";
import { cleanMeetUrl } from "@/studio/time";

const STORAGE_KEY = "jalan-studio-v1";

export type Booking = {
  id: string;
  programId: string;
  slotId: string;
  name: string;
  email: string;
  goal: string;
  note: string;
  createdAt: string;
};

type Stored = {
  meetUrl?: unknown;
  bookings?: unknown;
};

type StudioValue = {
  hydrated: boolean;
  meetUrl: string;
  setMeetUrl: (url: string) => void;
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, "id" | "createdAt">) => Booking;
  removeBooking: (id: string) => void;
};

const StudioContext = createContext<StudioValue | null>(null);

function isBooking(value: unknown): value is Booking {
  if (!value || typeof value !== "object") return false;
  const booking = value as Booking;
  return (
    typeof booking.id === "string" &&
    typeof booking.programId === "string" &&
    typeof booking.slotId === "string" &&
    typeof booking.name === "string" &&
    typeof booking.email === "string" &&
    typeof booking.goal === "string" &&
    typeof booking.note === "string" &&
    typeof booking.createdAt === "string"
  );
}

export function StudioProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [meetUrl, setMeetUrlState] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Stored;
        if (typeof parsed.meetUrl === "string") setMeetUrlState(parsed.meetUrl);
        if (Array.isArray(parsed.bookings)) setBookings(parsed.bookings.filter(isBooking));
      }
    } catch {
      /* ignore a bad local copy */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ meetUrl, bookings }));
  }, [hydrated, meetUrl, bookings]);

  const value = useMemo<StudioValue>(() => {
    const baked = cleanMeetUrl(STUDIO_MEET_URL) ?? "";
    const saved = cleanMeetUrl(meetUrl) ?? "";
    return {
      hydrated,
      meetUrl: saved || baked,
      setMeetUrl: (url: string) => setMeetUrlState(url.trim()),
      bookings,
      addBooking: (booking) => {
        const next: Booking = {
          ...booking,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
        };
        setBookings((current) => [next, ...current]);
        return next;
      },
      removeBooking: (id: string) => {
        setBookings((current) => current.filter((booking) => booking.id !== id));
      },
    };
  }, [hydrated, meetUrl, bookings]);

  return <StudioContext.Provider value={value}>{children}</StudioContext.Provider>;
}

export function useStudio(): StudioValue {
  const value = useContext(StudioContext);
  if (!value) throw new Error("useStudio must be used inside StudioProvider");
  return value;
}
