import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { CalendarPlus, Check, Copy, Video, X } from "lucide-react";
import { goals, programById, programs } from "@/studio/content";
import { LocalePass, sessionClock, sessionWhen, useApplyLocale, useRegion } from "@/studio/region";
import { useStudio } from "@/studio/studio-context";
import {
  SESSION_TIMES,
  addMinutes,
  formatDayLong,
  formatTime,
  googleCalendarUrl,
  isPast,
  isStudioHeld,
  parseSlotId,
  slotId,
  slotStart,
  trainingDays,
} from "@/studio/time";

type BookDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialProgramId?: string;
  initialSlotId?: string;
};

type Done = {
  name: string;
  programName: string;
  when: string;
  calendarUrl: string;
  summary: string;
};

const STEPS = ["Program", "Hour", "You"] as const;

export function BookDialog({ open, onOpenChange, initialProgramId, initialSlotId }: BookDialogProps) {
  const { meetUrl, bookings, addBooking } = useStudio();
  const { region } = useRegion();
  useApplyLocale();
  const wasOpen = useRef(false);
  const [step, setStep] = useState(0);
  const [programId, setProgramId] = useState("");
  const [chosenSlot, setChosenSlot] = useState("");
  const [dayIso, setDayIso] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState<string>(goals[0]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState<Done | null>(null);
  const [copied, setCopied] = useState(false);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    if (open && !wasOpen.current) {
      const clock = new Date();
      setNow(clock);
      const days = trainingDays(clock);
      setProgramId(initialProgramId ?? "");
      setChosenSlot(initialSlotId ?? "");
      const parsed = initialSlotId ? parseSlotId(initialSlotId) : null;
      setDayIso(parsed?.iso ?? days[0]?.iso ?? "");
      setStep(initialSlotId && initialProgramId ? 2 : initialProgramId ? 1 : 0);
      setError("");
      setDone(null);
      setCopied(false);
    }
    wasOpen.current = open;
  }, [open, initialProgramId, initialSlotId]);

  const days = trainingDays(now);
  const program = programById(programId);
  const taken = new Set(bookings.map((booking) => booking.slotId));

  function slotState(iso: string, time: string): "open" | "held" | "yours" | "past" {
    const id = slotId(iso, time);
    if (isPast(iso, time, now)) return "past";
    if (taken.has(id)) return "yours";
    if (isStudioHeld(id)) return "held";
    return "open";
  }

  function chooseProgram(id: string) {
    setProgramId(id);
    setError("");
    setStep(chosenSlot ? 2 : 1);
  }

  function chooseSlot(id: string) {
    setChosenSlot(id);
    setError("");
    setStep(2);
  }

  function submit() {
    if (!program) {
      setError("Pick a program first.");
      setStep(0);
      return;
    }
    const parsed = parseSlotId(chosenSlot);
    if (!parsed) {
      setError("Pick an hour.");
      setStep(1);
      return;
    }
    const state = slotState(parsed.iso, parsed.time);
    if (state !== "open") {
      setError("That hour is no longer open.");
      setStep(1);
      return;
    }
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      setError("Add the name we should use on the call.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Add an email so the calendar invite has somewhere to live.");
      return;
    }
    const start = slotStart(parsed.iso, parsed.time);
    const end = new Date(start.getTime() + program.minutes * 60 * 1000);
    const when = region
      ? sessionWhen(parsed.iso, parsed.time, program.minutes, region)
      : `${formatDayLong(parsed.iso)} · ${formatTime(parsed.time)}–${formatTime(addMinutes(parsed.time, program.minutes))} IST`;
    const summary = [
      "Jalan — session with Susmit",
      `Name: ${trimmedName}`,
      `Email: ${email.trim()}`,
      `Program: ${program.name}`,
      `When: ${when}`,
      `Goal: ${goal}`,
      note.trim() ? `Note: ${note.trim()}` : "",
      meetUrl ? `Meet: ${meetUrl}` : "Meet: link shared by Susmit before the session",
    ]
      .filter(Boolean)
      .join("\n");

    addBooking({
      programId: program.id,
      slotId: chosenSlot,
      name: trimmedName,
      email: email.trim(),
      goal,
      note: note.trim(),
    });

    const details = [
      `${program.name} with Susmit Jalan.`,
      `Goal: ${goal}.`,
      note.trim() ? `Note: ${note.trim()}` : "",
      meetUrl
        ? `Join Google Meet: ${meetUrl}`
        : "Google Meet link is sent by Susmit before the session.",
      "Camera from the side. Payment is settled directly, not on the website.",
    ]
      .filter(Boolean)
      .join("\n");

    setDone({
      name: trimmedName,
      programName: program.name,
      when,
      summary,
      calendarUrl: googleCalendarUrl({
        title: `Jalan · ${program.name} with Susmit`,
        start,
        end,
        details,
        location: meetUrl || "Google Meet",
      }),
    });
    setError("");
  }

  async function copySummary() {
    if (!done) return;
    try {
      await navigator.clipboard.writeText(done.summary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setError("Copy failed. Select the note and copy it yourself.");
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#0c0b09]/70" />
        <Dialog.Content className="safe-bottom fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl border border-line bg-ink-2 text-ink shadow-none sm:inset-auto sm:top-1/2 sm:left-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl">
          <LocalePass />
          <div className="flex items-start justify-between gap-3 border-b border-line px-4 py-4 sm:px-5">
            <div className="min-w-0">
              <Dialog.Title className="font-display text-2xl leading-tight">
                {done ? "Hour held" : "Book an hour"}
              </Dialog.Title>
              <Dialog.Description className="mt-1 inline-flex items-start gap-2 text-sm text-mist">
                <Video className="mt-0.5 size-4 shrink-0 text-copper" aria-hidden="true" />
                {done ? "Put it on your calendar so it leaves this phone." : `Live on GMeet, Zoom, or FaceTime. Times in ${region?.code ?? "IST"}.`}
              </Dialog.Description>
            </div>
            <Dialog.Close className="btn-soft grid size-11 shrink-0 place-items-center rounded-full text-ink">
              <X className="size-4" aria-hidden="true" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>

          {!done ? (
            <div className="flex gap-2 px-4 pt-4 sm:px-5">
              {STEPS.map((label, index) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => {
                    if (index === 0 || (index === 1 && programId) || (index === 2 && programId && chosenSlot)) {
                      setStep(index);
                      setError("");
                    }
                  }}
                  className={`min-h-11 flex-1 rounded-full border px-2 text-xs tracking-wide ${
                    step === index ? "btn" : "btn-soft"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          ) : null}

          <div className="min-h-0 min-w-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
            {done ? (
              <div className="flex flex-col gap-4">
                <p className="font-display text-3xl leading-tight text-ink" data-no-locale>
                  {done.name.split(" ")[0]}, you’re in.
                </p>
                <p className="text-base leading-relaxed text-ink">
                  {done.programName}
                  <span className="mt-1 block text-mist">{done.when}</span>
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={done.calendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium"
                  >
                    <CalendarPlus className="size-4" aria-hidden="true" />
                    Add to Google Calendar
                  </a>
                  {meetUrl ? (
                    <a
                      href={meetUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-soft inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm"
                    >
                      <Video className="size-4" aria-hidden="true" />
                      Open the Meet room
                    </a>
                  ) : (
                    <p className="rounded-2xl border border-line px-4 py-3 text-sm leading-relaxed text-mist">
                      No standing Meet room is set yet. Susmit sends the link before the session. Add the
                      calendar event so the hour is not only saved on this device.
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={copySummary}
                    className="btn-soft inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm"
                  >
                    {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                    {copied ? "Copied" : "Copy details to send"}
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-mist">
                  Payment is not taken here. This hold lives on this device until you add the calendar event
                  or send the note.
                </p>
              </div>
            ) : null}

            {!done && step === 0 ? (
              <ul className="flex flex-col gap-2">
                {programs.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => chooseProgram(item.id)}
                      className={`flex w-full min-h-11 flex-col items-start gap-1 rounded-2xl border px-4 py-3 text-left ${
                        programId === item.id ? "border-ink bg-bone" : "border-line bg-bone"
                      }`}
                    >
                      <span className="text-xs tracking-wide text-copper">{item.kicker}</span>
                      <span className="font-display text-xl">{item.name}</span>
                      <span className="text-sm text-mist">
                        {item.minutes} min · {item.cadence}
                        {item.monthlyNote ? ` · ${item.monthlyNote}` : ""}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}

            {!done && step === 1 ? (
              <div className="flex min-w-0 flex-col gap-4">
                <div className="relative min-w-0">
                  <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-5 sm:px-5">
                    {days.map((day) => (
                      <button
                        key={day.iso}
                        type="button"
                        onClick={() => setDayIso(day.iso)}
                        className={`min-h-11 shrink-0 rounded-full border px-3.5 text-sm whitespace-nowrap sm:px-4 ${
                          dayIso === day.iso ? "btn" : "btn-soft"
                        }`}
                      >
                        {day.dow} {day.label}
                      </button>
                    ))}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-ink-2 to-transparent" aria-hidden="true" />
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {SESSION_TIMES.map((time) => {
                    const state = slotState(dayIso, time);
                    const id = slotId(dayIso, time);
                    const disabled = state === "held" || state === "past" || state === "yours";
                    const label =
                      state === "held" ? "Held" : state === "past" ? "Passed" : state === "yours" ? "Yours" : "Open";
                    return (
                      <li key={time}>
                        <button
                          type="button"
                          disabled={disabled || !dayIso}
                          onClick={() => chooseSlot(id)}
                          className={`flex min-h-11 w-full flex-col items-start justify-center rounded-2xl border px-3 py-2 text-left disabled:cursor-not-allowed disabled:text-mist ${
                            chosenSlot === id ? "border-ink bg-ink text-bone" : "border-line bg-bone text-ink"
                          }`}
                        >
                          <span className="tabular-nums">{region && dayIso ? sessionClock(dayIso, time, region) : formatTime(time)}</span>
                          <span className="text-xs text-mist">{label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <p className="text-sm text-mist">Sunday is off. Grey hours are already taken.</p>
              </div>
            ) : null}

            {!done && step === 2 ? (
              <form
                className="flex flex-col gap-3"
                onSubmit={(event) => {
                  event.preventDefault();
                  submit();
                }}
              >
                <p className="text-sm text-mist" data-no-locale>
                  {program?.name ?? "Session"}
                  {parseSlotId(chosenSlot) && program && region
                    ? ` · ${sessionWhen(parseSlotId(chosenSlot)?.iso ?? "", parseSlotId(chosenSlot)?.time ?? "06:00", program.minutes, region)}`
                    : parseSlotId(chosenSlot)
                      ? ` · ${formatDayLong(parseSlotId(chosenSlot)?.iso ?? "")} · ${formatTime(parseSlotId(chosenSlot)?.time ?? "06:00")} IST`
                      : null}
                </p>
                <label className="flex flex-col gap-1 text-sm text-mist">
                  Name
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    autoComplete="name"
                    className="min-h-11 rounded-2xl border border-line bg-bone px-3 text-base text-ink"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm text-mist">
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    className="min-h-11 rounded-2xl border border-line bg-bone px-3 text-base text-ink"
                  />
                </label>
                <label className="flex flex-col gap-1 text-sm text-mist">
                  What should change
                  <select
                    value={goal}
                    onChange={(event) => setGoal(event.target.value)}
                    className="min-h-11 rounded-2xl border border-line bg-bone px-3 text-base text-ink"
                  >
                    {goals.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1 text-sm text-mist">
                  Anything we should know
                  <textarea
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    rows={3}
                    className="rounded-2xl border border-line bg-bone px-3 py-3 text-base text-ink"
                    placeholder="Injury, equipment, the room you’ll train in"
                  />
                </label>
                <button
                  type="submit"
                  className="btn inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-medium"
                >
                  Hold this hour
                </button>
              </form>
            ) : null}

            {error ? <p className="mt-3 text-sm text-copper">{error}</p> : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
