import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { SessionNote } from "@/studio/content";

export function ClientAvatar({ name, className = "size-11" }: { name: string; className?: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <span
      className={`grid ${className} shrink-0 place-items-center rounded-full bg-ink text-sm font-extrabold text-bone`}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}

type Slot = "progress" | "training";
type NotePhotos = { progress?: string; training?: string };

const PHOTO_KEY = "jalan-note-photos-v1";

function useNotePhotos() {
  const [photos, setPhotos] = useState<Record<string, NotePhotos>>({});
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(PHOTO_KEY);
      if (raw) setPhotos(JSON.parse(raw) as Record<string, NotePhotos>);
    } catch {
      /* ignore a bad local copy */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(PHOTO_KEY, JSON.stringify(photos));
      setError("");
    } catch {
      setError("This photo is too large to keep on this device.");
    }
  }, [photos, ready]);

  return { photos, setPhotos, error };
}

async function compressImage(file: File) {
  const bitmap = await createImageBitmap(file);
  const max = 960;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  return canvas.toDataURL("image/jpeg", 0.72);
}

function PhotoSlot({
  label,
  src,
  onFile,
  onClear,
}: {
  label: string;
  src?: string;
  onFile: (file: File) => void;
  onClear: () => void;
}) {
  return (
    <div>
      <p className="text-[10px] tracking-widest text-mist">{label}</p>
      <label className="mt-2 block cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(event) => {
            const file = event.target.files?.[0];
            event.target.value = "";
            if (file) onFile(file);
          }}
        />
        {src ? (
          <img src={src} alt="" className="aspect-[4/5] w-full rounded-xl object-cover" />
        ) : (
          <span className="grid aspect-[4/5] w-full place-items-center rounded-xl border border-dashed border-line bg-bone px-2 text-center text-xs text-mist">
            Upload
          </span>
        )}
      </label>
      {src ? (
        <button type="button" onClick={onClear} className="mt-2 text-xs text-mist underline-offset-2 hover:underline">
          Remove
        </button>
      ) : null}
    </div>
  );
}

export function NoteDialog({ note, onClose }: { note: SessionNote | null; onClose: () => void }) {
  const { photos, setPhotos, error } = useNotePhotos();
  const openedAt = useRef(0);
  const onCloseRef = useRef(onClose);
  const [busy, setBusy] = useState<Slot | null>(null);
  onCloseRef.current = onClose;
  if (note && openedAt.current === 0) openedAt.current = Date.now();
  if (!note && openedAt.current !== 0) openedAt.current = 0;

  useEffect(() => {
    if (!note) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onCloseRef.current();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [note]);

  if (!note || typeof document === "undefined") return null;

  const saved = photos[note.name] ?? {};
  const name = note.name;

  async function save(slot: Slot, file: File) {
    setBusy(slot);
    try {
      const data = await compressImage(file);
      setPhotos((current) => ({
        ...current,
        [name]: { ...current[name], [slot]: data },
      }));
    } catch {
      /* leave the slot empty if the file cannot be read */
    } finally {
      setBusy(null);
    }
  }

  function clear(slot: Slot) {
    setPhotos((current) => ({
      ...current,
      [name]: { ...current[name], [slot]: undefined },
    }));
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[80] grid place-items-end bg-[#0c0b09]/75 px-4 py-4 sm:place-items-center"
      role="presentation"
      onPointerDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (Date.now() - openedAt.current < 700) return;
        onClose();
      }}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-label={`${note.name} on ${note.topic ?? "training"}`}
        className="max-h-[88vh] w-full max-w-md overflow-y-auto rounded-2xl border border-line bg-ink-2 px-5 py-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.65)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start gap-3">
          <ClientAvatar name={note.name} className="size-14" />
          <div className="min-w-0 flex-1">
            {note.topic ? <p className="text-[10px] tracking-widest text-copper">{note.topic}</p> : null}
            <p className="font-display text-2xl leading-tight">{note.name}</p>
            <p className="text-sm text-mist">{note.place}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn-soft grid size-10 shrink-0 place-items-center rounded-full"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </div>
        <p className="mt-4 text-base leading-relaxed text-ink">“{note.quote}”</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <PhotoSlot
            label="PROGRESS"
            src={saved.progress}
            onFile={(file) => void save("progress", file)}
            onClear={() => clear("progress")}
          />
          <PhotoSlot
            label="TRAINING"
            src={saved.training}
            onFile={(file) => void save("training", file)}
            onClear={() => clear("training")}
          />
        </div>
        <p className="mt-3 text-xs text-mist">
          {busy ? "Saving photo…" : error || "Saved on this device."}
        </p>
      </article>
    </div>,
    document.body,
  );
}
