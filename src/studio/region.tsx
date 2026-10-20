import { createContext, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { translateCopy } from "@/lib/translate.functions";
import { hindiOf } from "@/studio/hindi";
import { slotStart } from "@/studio/time";

export const REGIONS = [
  { code: "IST", lang: "en-IN", label: "English (India)", short: "EN · IN", timeZone: "Asia/Kolkata", spell: "gb" },
  { code: "SGT", lang: "en-SG", label: "English (Singapore)", short: "EN · SG", timeZone: "Asia/Singapore", spell: "gb" },
  { code: "GST", lang: "en-AE", label: "English (UAE)", short: "EN · AE", timeZone: "Asia/Dubai", spell: "gb" },
  { code: "CET", lang: "en-GB", label: "English (UK)", short: "EN · UK", timeZone: "Europe/Berlin", spell: "gb" },
  { code: "ET", lang: "en-US", label: "English (US)", short: "EN · US", timeZone: "America/New_York", spell: "us" },
] as const;

export type RegionCode = (typeof REGIONS)[number]["code"];
export type Region = (typeof REGIONS)[number];

const STORAGE_KEY = "jalan-english";
const LANG_KEY = "jalan-lang";

export type Script = "en" | "hi";

const PAIRS: ReadonlyArray<readonly [string, string]> = [
  ["programs", "programmes"],
  ["program", "programme"],
  ["canceled", "cancelled"],
  ["canceling", "cancelling"],
  ["traveled", "travelled"],
  ["traveling", "travelling"],
  ["gray", "grey"],
  ["color", "colour"],
  ["colors", "colours"],
  ["center", "centre"],
  ["centers", "centres"],
  ["theater", "theatre"],
  ["favorite", "favourite"],
  ["favorites", "favourites"],
  ["favor", "favour"],
  ["organized", "organised"],
  ["organize", "organise"],
  ["recognized", "recognised"],
  ["recognize", "recognise"],
  ["defense", "defence"],
  ["labeled", "labelled"],
  ["modeled", "modelled"],
  ["aging", "ageing"],
  ["toward", "towards"],
];

function matchCase(sample: string, target: string): string {
  if (sample === sample.toUpperCase()) return target.toUpperCase();
  const first = sample.charAt(0);
  if (first && first === first.toUpperCase()) return target.charAt(0).toUpperCase() + target.slice(1);
  return target;
}

export function spell(input: string, kind: Region["spell"]): string {
  const pairs = PAIRS.filter(([us, gb]) => us !== gb).sort((a, b) => Math.max(b[0].length, b[1].length) - Math.max(a[0].length, a[1].length));
  let out = input;
  for (const [us, gb] of pairs) {
    const from = kind === "us" ? gb : us;
    const to = kind === "us" ? us : gb;
    out = out.replace(new RegExp(`\\b${from}\\b`, "gi"), (found) => matchCase(found, to));
  }
  return out;
}

function worthSending(value: string): boolean {
  const text = value.trim();
  if (text.length < 3 || text.length > 1800) return false;
  if (!/[a-z]/i.test(text)) return false;
  if (text.includes("§§§") || text.includes("@")) return false;
  return true;
}

function usableTranslation(source: string, translated: string, target: string): boolean {
  if (!translated || translated === source) return false;
  if (target === "hi") {
    if (!/[\u0900-\u097F]/.test(translated)) return false;
    if (translated.length > source.length * 2.4 + 24) return false;
    return true;
  }
  if (Math.abs(translated.length - source.length) > Math.max(16, source.length * 0.4)) return false;
  if (/[^\u0000-\u024f\u2000-\u206f]/.test(translated)) return false;
  return true;
}

type RegionValue = {
  region: Region | null;
  setRegion: (code: RegionCode) => void;
  script: Script;
  setScript: (script: Script) => void;
  tx: (value: string) => string;
};

const RegionContext = createContext<RegionValue | null>(null);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<Region | null>(null);
  const [script, setScriptState] = useState<Script>("en");
  const [google, setGoogle] = useState<Record<string, string>>({});
  const regionRef = useRef(region);
  const scriptRef = useRef(script);
  const queued = useRef(new Set<string>());
  const timer = useRef(0);
  regionRef.current = region;
  scriptRef.current = script;

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const match = REGIONS.find((item) => item.code === saved);
    if (match) setRegionState(match);
    if (window.localStorage.getItem(LANG_KEY) === "hi") setScriptState("hi");
  }, []);

  useEffect(() => {
    document.documentElement.lang = script === "hi" ? "hi" : (region?.lang ?? "en");
  }, [region, script]);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  const value = useMemo<RegionValue>(() => {
    const targetOf = () => (scriptRef.current === "hi" ? "hi" : regionRef.current?.lang ?? null);
    const flush = () => {
      const target = targetOf();
      if (!target) return;
      const texts = [...queued.current];
      queued.current.clear();
      if (!texts.length) return;
      const chunks: string[][] = [];
      for (let index = 0; index < texts.length; index += 8) chunks.push(texts.slice(index, index + 8));
      Promise.all(chunks.map((chunk) => translateCopy({ data: { texts: chunk, target } })))
        .then((groups) => {
          if (targetOf() !== target) return;
          setGoogle((prev) => {
            const next = { ...prev };
            let changed = false;
            groups.forEach((group, groupIndex) => {
              const chunk = chunks[groupIndex] ?? [];
              chunk.forEach((source, index) => {
                const raw = group.texts[index] ?? source;
                const chosen = usableTranslation(source, raw, target) ? raw : source;
                if (next[source] !== chosen) {
                  next[source] = chosen;
                  changed = true;
                }
              });
            });
            return changed ? next : prev;
          });
        })
        .catch(() => {
          setGoogle((prev) => {
            const next = { ...prev };
            let changed = false;
            for (const source of texts) {
              if (next[source] === undefined) {
                next[source] = source;
                changed = true;
              }
            }
            return changed ? next : prev;
          });
        });
    };

    const queue = (source: string) => {
      if (google[source] !== undefined || !worthSending(source) || queued.current.has(source)) return;
      queued.current.add(source);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(flush, 60);
    };

    return {
      region,
      script,
      setScript: (next) => {
        if (next === script) return;
        setGoogle({});
        queued.current.clear();
        window.clearTimeout(timer.current);
        setScriptState(next);
        if (next === "hi") window.localStorage.setItem(LANG_KEY, "hi");
        else window.localStorage.removeItem(LANG_KEY);
      },
      setRegion: (code) => {
        if (script !== "hi") {
          setGoogle({});
          queued.current.clear();
          window.clearTimeout(timer.current);
        }
        setRegionState((current) => {
          if (current?.code === code) {
            window.localStorage.removeItem(STORAGE_KEY);
            return null;
          }
          const next = REGIONS.find((item) => item.code === code) ?? null;
          if (next) window.localStorage.setItem(STORAGE_KEY, next.code);
          else window.localStorage.removeItem(STORAGE_KEY);
          return next;
        });
      },
      tx: (source) => {
        if (!source) return source;
        if (script === "hi") {
          const known = hindiOf(source);
          if (known) return known;
          queue(source);
          const base = google[source] && google[source] !== source ? google[source] : source;
          return base;
        }
        const current = region;
        if (!current) return source;
        queue(source);
        const base = google[source] && google[source] !== source ? google[source] : source;
        return spell(base, current.spell);
      },
    };
  }, [google, region, script]);

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export function useRegion(): RegionValue {
  const value = useContext(RegionContext);
  if (!value) throw new Error("Region missing");
  return value;
}

const sourceOf = new WeakMap<Text, string>();
const applied = new WeakMap<Text, string>();

function syncText(node: Text, tx: (value: string) => string) {
  const current = node.data;
  if (!current.trim()) return;
  let source = sourceOf.get(node);
  const last = applied.get(node);
  if (source === undefined) {
    source = current;
  } else if (current !== source && current !== last) {
    source = current;
  }
  sourceOf.set(node, source);
  const next = tx(source);
  applied.set(node, next);
  if (current !== next) node.data = next;
}

function syncAttr(el: Element, attr: string, tx: (value: string) => string) {
  const current = el.getAttribute(attr);
  if (!current?.trim()) return;
  const key = `data-locale-${attr}`;
  const stored = el.getAttribute(key);
  const source = stored && stored !== "" ? stored : current;
  if (!stored) el.setAttribute(key, source);
  const next = tx(source);
  if (current !== next) el.setAttribute(attr, next);
}

function restoreText(node: Text) {
  const source = sourceOf.get(node);
  if (source !== undefined && node.data !== source) node.data = source;
  applied.delete(node);
}

function restoreAttr(el: Element, attr: string) {
  const source = el.getAttribute(`data-locale-${attr}`);
  if (source && el.getAttribute(attr) !== source) el.setAttribute(attr, source);
}

function localeRoots(): Element[] {
  const roots: Element[] = [];
  const main = document.getElementById("locale-root");
  if (main) roots.push(main);
  document.querySelectorAll("[role='dialog']").forEach((node) => {
    if (!main?.contains(node)) roots.push(node);
  });
  return roots;
}

function walkLocale(root: Element, visit: (node: Text) => void) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest("[data-no-locale]")) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA" || tag === "INPUT") return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let current: Node | null = walker.nextNode();
  while (current) {
    visit(current as Text);
    current = walker.nextNode();
  }
}

export function useApplyLocale() {
  const { region, script, tx } = useRegion();
  useLayoutEffect(() => {
    const active = script === "hi" || Boolean(region);
    for (const root of localeRoots()) {
      if (!active) {
        walkLocale(root, restoreText);
        root.querySelectorAll("[data-locale-placeholder], [data-locale-aria-label], [data-locale-alt]").forEach((el) => {
          restoreAttr(el, "placeholder");
          restoreAttr(el, "aria-label");
          restoreAttr(el, "alt");
        });
        continue;
      }
      walkLocale(root, (node) => syncText(node, tx));
      root.querySelectorAll("[placeholder], [aria-label], [alt]").forEach((el) => {
        if (el.closest("[data-no-locale]")) return;
        syncAttr(el, "placeholder", tx);
        syncAttr(el, "aria-label", tx);
        syncAttr(el, "alt", tx);
      });
    }
  });
}

export function LocalePass() {
  useApplyLocale();
  return null;
}

export function sessionWhen(iso: string, time: string, minutes: number, region: Region): string {
  const start = slotStart(iso, time);
  const end = new Date(start.getTime() + minutes * 60 * 1000);
  const day = new Intl.DateTimeFormat("en-GB", {
    timeZone: region.timeZone,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(start);
  return `${day} · ${clockIn(start, region)}–${clockIn(end, region)} ${region.code}`;
}

export function sessionClock(iso: string, time: string, region: Region): string {
  const start = slotStart(iso, time);
  return zoneStamp(iso, time, region, start);
}

export function zoneClock(iso: string, time: string, region: Region): string {
  return clockIn(slotStart(iso, time), region);
}

function zoneStamp(iso: string, time: string, region: Region, start: Date): string {
  const clock = clockIn(start, region);
  const localDay = new Intl.DateTimeFormat("en-CA", {
    timeZone: region.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(start);
  if (localDay === iso) return clock;
  const weekday = new Intl.DateTimeFormat("en-GB", {
    timeZone: region.timeZone,
    weekday: "short",
  }).format(start);
  return `${clock} · ${weekday}`;
}

function clockIn(date: Date, region: Region): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: region.timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(date);
  const hour = parts.find((part) => part.type === "hour")?.value ?? "";
  const minute = parts.find((part) => part.type === "minute")?.value ?? "00";
  const period = (parts.find((part) => part.type === "dayPeriod")?.value ?? "").toLowerCase();
  return minute === "00" ? `${hour} ${period}` : `${hour}:${minute} ${period}`;
}
