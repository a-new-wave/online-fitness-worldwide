import { Fragment, useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  Camera,
  ChartColumn,
  Check,
  Clock,
  Dumbbell,
  Flame,
  Globe,
  Languages,
  Layers,
  Menu,
  MessageSquare,
  PersonStanding,
  Repeat,
  Scale,
  Shield,
  User,
  Users,
  Video,
  Wind,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import room from "@/assets/room.jpg";
import ironBarbell from "@/assets/iron-barbell.jpg";
import openFloor from "@/assets/open-floor.jpg";
import ascaLogo from "@/assets/asca.png";
import aceLogo from "@/assets/ace.png";
import coachPhoto from "@/assets/coach.jpg";
import ofwLogo from "@/assets/ofw-logo.png";
import hourSetup from "@/assets/hour-setup.jpg";
import hourWarmup from "@/assets/hour-warmup.jpg";
import hourPrimary from "@/assets/hour-primary.jpg";
import hourAccessories from "@/assets/hour-accessories.jpg";
import hourCooldown from "@/assets/hour-cooldown.jpg";
import laptopCall from "@/assets/laptop-call.jpg";
import { BookDialog } from "@/components/book-dialog";
import { beats, faqs, programById, programs, WHATSAPP_E164 } from "@/studio/content";
import { REGIONS, useApplyLocale, useRegion } from "@/studio/region";

const photos: Record<string, string> = {
  iron: ironBarbell,
  lean: room,
  group: openFloor,
};

const programBenefits: Record<string, { icon: LucideIcon; title: string; line: string }[]> = {
  iron: [
    { icon: Dumbbell, title: "Build strength & muscle", line: "Progressive training to increase muscle mass and lifting capacity." },
    { icon: Zap, title: "Develop power & endurance", line: "Lift stronger, move better and improve work capacity." },
    { icon: PersonStanding, title: "Keep your mobility", line: "Maintain movement quality, flexibility and joint health." },
    { icon: ChartColumn, title: "Structured progression", line: "Periodised programming with coaching and feedback." },
  ],
  lean: [
    { icon: Scale, title: "Manage weight sustainably", line: "A realistic approach that fits your life, not a short-term fix." },
    { icon: Zap, title: "Build daily energy", line: "Improve fitness, so you can stay active and avoid mid-day crashes." },
    { icon: PersonStanding, title: "Stay active in what you love", line: "Build the fitness to keep playing your sport and enjoy daily activities." },
    { icon: Shield, title: "Support long-term health", line: "Injury-aware training that strengthens your body and reduces the risk of lifestyle disorders." },
  ],
  group: [
    { icon: Zap, title: "Build everyday energy", line: "Develop the fitness to stay active through the day." },
    { icon: CalendarCheck, title: "Make consistency easier", line: "A regular session and shared commitment help you keep showing up." },
    { icon: PersonStanding, title: "Keep doing what you love", line: "Build capacity for your sport, hobbies and everyday activities." },
    { icon: ChartColumn, title: "Train for the long term", line: "Progressive, adaptable training to support lasting health and capability." },
  ],
};

const beatPhotos: Record<string, { src: string; alt: string }> = {
  "Set-up": { src: hourSetup, alt: "Phone at the side, whole body in frame" },
  "Warm-up": { src: hourWarmup, alt: "Lunge with a reach overhead" },
  Primary: { src: hourPrimary, alt: "Barbell squat" },
  Accessories: { src: hourAccessories, alt: "Dumbbell row" },
  "Cool-down": { src: hourCooldown, alt: "Couch stretch" },
};

const beatIcons: Record<string, LucideIcon> = {
  "Set-up": Camera,
  "Warm-up": Activity,
  Primary: Dumbbell,
  Accessories: Layers,
  "Cool-down": Wind,
};

const programIcons: Record<string, LucideIcon> = {
  iron: Dumbbell,
  lean: Flame,
  group: Users,
  consult: MessageSquare,
};

const differenceRows = [
  {
    q: "Who creates the plan?",
    us: "Session by session, based on your goals, feedback and lifestyle.",
    recorded: "Same plan for everyone.",
    own: "You write it yourself.",
  },
  {
    q: "When is the rep corrected?",
    us: "In the session, in real time.",
    recorded: "After you send the clip.",
    own: "No one sees it.",
  },
  {
    q: "How often do we check in?",
    us: "Weekly, or more often if needed.",
    recorded: "No check-ins.",
    own: "Only if you remember.",
  },
  {
    q: "Who do you reach out to?",
    us: "Your coach, anytime you need.",
    recorded: "No one. You're on your own.",
    own: "You figure it out.",
  },
  {
    q: "What if the equipment changes?",
    us: "We adjust the session for your home, gym or available equipment.",
    recorded: "You work around their equipment.",
    own: "You adjust it yourself.",
  },
] as const;

function ProgramMark({ id }: { id: string }) {
  const Icon = programIcons[id] ?? Dumbbell;
  return <Icon className="size-4 text-copper" aria-hidden="true" />;
}

function Mark({ ok }: { ok: boolean }) {
  return (
    <span className={`grid size-5 shrink-0 place-items-center rounded-full ${ok ? "bg-ink text-bone" : "bg-ink/10 text-mist"}`}>
      {ok ? <Check className="size-3" strokeWidth={3} aria-hidden="true" /> : <X className="size-3" strokeWidth={3} aria-hidden="true" />}
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.92c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.26.64-.38.85-.38.21 0 .42 0 .6.01.19.01.45-.07.7.53.26.63.89 2.18.97 2.34.08.16.13.35.03.56-.1.21-.16.34-.31.52-.16.18-.33.41-.47.55-.16.16-.32.33-.14.64.18.31.81 1.34 1.74 2.17 1.2 1.07 2.21 1.4 2.52 1.56.31.16.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.16.28.1 1.79.84 2.1.99.31.16.51.23.59.36.07.13.07.76-.17 1.44z"
      />
    </svg>
  );
}

const whatsappHref = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent("Hi Susmit, I want to book a session")}`;

const LIVE_LINES = [
  { id: "gmeet", label: "live on GMeet" },
  { id: "zoom", label: "live on Zoom" },
  { id: "facetime", label: "live on FaceTime" },
] as const;

function CallIcon({ id }: { id: (typeof LIVE_LINES)[number]["id"] }) {
  if (id === "zoom") {
    return (
      <svg viewBox="0 0 36 36" className="size-5 shrink-0 rounded-md" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="#2D8CFF" />
        <rect x="8" y="13" width="13" height="10" rx="2" fill="#fff" />
        <path d="M21 16.2 28 13v10l-7-3.2z" fill="#fff" />
      </svg>
    );
  }
  if (id === "facetime") {
    return (
      <svg viewBox="0 0 36 36" className="size-5 shrink-0 rounded-md" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill="#30D158" />
        <rect x="8" y="12" width="13" height="12" rx="3" fill="#fff" />
        <path d="M21 16.5 28 13.2v9.6L21 19.5z" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 36 36" className="size-5 shrink-0 rounded-md" aria-hidden="true">
      <rect width="36" height="36" rx="10" fill="#00832D" />
      <rect x="7" y="12" width="14" height="12" rx="2" fill="#fff" />
      <path d="M21 16 29 12.2v11.6L21 20z" fill="#fff" />
    </svg>
  );
}

function LiveCall() {
  return (
    <img
      src={laptopCall}
      alt="A training set on a live video call, full body in frame, with the coach demonstrating a squat"
      className="mx-auto h-auto w-full"
      fetchPriority="high"
      decoding="async"
    />
  );
}

function Flag({ code }: { code: string }) {
  const frame = "h-3.5 w-5 shrink-0 overflow-hidden rounded-[3px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]";
  if (code === "IST") {
    return (
      <svg viewBox="0 0 60 40" className={frame} aria-hidden="true">
        <rect width="60" height="40" fill="#fff" />
        <rect width="60" height="13.4" fill="#FF9933" />
        <rect y="26.6" width="60" height="13.4" fill="#138808" />
        <circle cx="30" cy="20" r="4.2" fill="none" stroke="#000080" strokeWidth="1.1" />
      </svg>
    );
  }
  if (code === "SGT") {
    return (
      <svg viewBox="0 0 60 40" className={frame} aria-hidden="true">
        <rect width="60" height="40" fill="#fff" />
        <rect width="60" height="20" fill="#EF3340" />
        <circle cx="16" cy="13" r="6" fill="#fff" />
        <circle cx="18.2" cy="13" r="5" fill="#EF3340" />
        <g fill="#fff">
          <circle cx="26" cy="6" r="1" />
          <circle cx="29" cy="9" r="1" />
          <circle cx="29" cy="13" r="1" />
          <circle cx="26" cy="16" r="1" />
          <circle cx="22.5" cy="14.5" r="1" />
        </g>
      </svg>
    );
  }
  if (code === "GST") {
    return (
      <svg viewBox="0 0 60 40" className={frame} aria-hidden="true">
        <rect width="60" height="40" fill="#fff" />
        <rect width="14" height="40" fill="#EF3340" />
        <rect x="14" width="46" height="13.4" fill="#009739" />
        <rect x="14" y="26.6" width="46" height="13.4" fill="#000" />
      </svg>
    );
  }
  if (code === "CET") {
    return (
      <svg viewBox="0 0 60 40" className={frame} aria-hidden="true">
        <rect width="60" height="40" fill="#003399" />
        <g fill="#FC0">
          <circle cx="30" cy="8" r="1.15" />
          <circle cx="36" cy="9.6" r="1.15" />
          <circle cx="40.4" cy="14" r="1.15" />
          <circle cx="41.2" cy="20" r="1.15" />
          <circle cx="38.2" cy="25.2" r="1.15" />
          <circle cx="32.6" cy="28" r="1.15" />
          <circle cx="26" cy="27" r="1.15" />
          <circle cx="21" cy="22.6" r="1.15" />
          <circle cx="19.2" cy="16.8" r="1.15" />
          <circle cx="21.4" cy="11.2" r="1.15" />
          <circle cx="26.2" cy="8.6" r="1.15" />
          <circle cx="33.4" cy="8.2" r="1.15" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 40" className={frame} aria-hidden="true">
      <rect width="60" height="40" fill="#fff" />
      <rect y="3.1" width="60" height="3.1" fill="#B22234" />
      <rect y="9.3" width="60" height="3.1" fill="#B22234" />
      <rect y="15.5" width="60" height="3.1" fill="#B22234" />
      <rect y="21.7" width="60" height="3.1" fill="#B22234" />
      <rect y="27.9" width="60" height="3.1" fill="#B22234" />
      <rect y="34.1" width="60" height="3.1" fill="#B22234" />
      <rect width="26" height="21.5" fill="#3C3B6E" />
    </svg>
  );
}

const regionFlags: Record<string, { name: string }> = {
  IST: { name: "India" },
  SGT: { name: "Singapore" },
  GST: { name: "United Arab Emirates" },
  CET: { name: "Central Europe" },
  ET: { name: "United States" },
};

const navLinks = [
  { href: "#programs", label: "Programs", icon: Dumbbell },
  { href: "#hour", label: "The hour", icon: Clock },
  { href: "#coach", label: "Coach", icon: User },
  { href: "#questions", label: "Questions", icon: MessageSquare },
  { href: "/blog", label: "Blog", icon: BookOpen },
];

type BookSeed = { programId?: string; slotId?: string };

export function HomePage() {
  const { region, setRegion, script, setScript } = useRegion();
  useApplyLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const [seed, setSeed] = useState<BookSeed>({});
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const playLock = useRef(0);
  const elapsedRef = useRef(0);
  const [line, setLine] = useState(0);
  const consult = programById("consult");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setLine((current) => (current + 1) % LIVE_LINES.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!playing) return;
    let frame = 0;
    let last = performance.now();
    const step = (now: number) => {
      const next = Math.min(60, elapsedRef.current + (now - last) / 210);
      last = now;
      elapsedRef.current = next;
      setElapsed(next);
      if (next >= 60) {
        setPlaying(false);
        return;
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  function toggleHour() {
    const now = Date.now();
    if (now - playLock.current < 500) return;
    playLock.current = now;
    if (playing) {
      setPlaying(false);
      return;
    }
    if (elapsed >= 60) {
      elapsedRef.current = 0;
      setElapsed(0);
    }
    setPlaying(true);
  }

  function openBook(next: BookSeed = {}) {
    setSeed(next);
    setBookOpen(true);
    setMenuOpen(false);
  }

  const clockMinute = Math.floor(elapsed);
  const clockSecond = Math.floor((elapsed % 1) * 60);
  const activeBeat = [...beats].reverse().find((beat) => elapsed >= beat.at) ?? beats[0];

  return (
    <div className="min-h-screen bg-bone text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40">
        <div className="border-b border-line bg-bone">
          <div className="shell flex h-12 items-center justify-center gap-8 overflow-x-auto text-sm [scrollbar-width:none] sm:gap-10 [&::-webkit-scrollbar]:hidden">
            <p className="relative h-6 w-40 shrink-0">
              <span className="sr-only">live on GMeet, Zoom, or FaceTime.</span>
              {LIVE_LINES.map((item, index) => (
                <span
                  key={item.id}
                  aria-hidden="true"
                  className={`absolute inset-0 flex items-center gap-2 transition-opacity duration-500 ${index === line ? "opacity-100" : "pointer-events-none opacity-0"}`}
                >
                  <CallIcon id={item.id} />
                  {item.label}
                </span>
              ))}
            </p>
            <div className="flex shrink-0 items-center gap-3">
              {REGIONS.map((item) => {
                const mark = regionFlags[item.code];
                const on = region?.code === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setRegion(item.code)}
                    aria-pressed={on}
                    aria-label={mark?.name ?? item.code}
                    className={`inline-flex min-h-11 items-center gap-1.5 ${on ? "font-semibold" : ""}`}
                  >
                    <Flag code={item.code} />
                    {item.code}
                  </button>
                );
              })}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Languages className="size-4" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setScript("en")}
                aria-pressed={script === "en"}
                lang="en"
                className={`min-h-11 ${script === "en" ? "underline underline-offset-4" : "text-mist"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setScript("hi")}
                aria-pressed={script === "hi"}
                lang="hi"
                className={`min-h-11 ${script === "hi" ? "underline underline-offset-4" : ""}`}
              >
                हिंदी
              </button>
            </div>
          </div>
        </div>
        <div className="border-b border-line bg-ink-2/95 backdrop-blur">
          <div className="shell flex h-16 items-center justify-between gap-3">
            <a href="#top" className="flex items-center">
              <img src={ofwLogo} alt="Online Fitness Worldwide, Jalan PT" className="h-8 w-auto sm:h-10 lg:h-11" />
            </a>
            <nav className="hidden items-center gap-6 text-sm text-mist lg:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="inline-flex items-center gap-2 hover:text-ink">
                  <link.icon className="size-4" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-wa inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold sm:px-4"
              >
                <span className="grid size-7 place-items-center rounded-full bg-ink text-[#25d366]">
                  <WhatsAppIcon />
                </span>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <button
                type="button"
                className="btn-soft grid size-11 place-items-center rounded-full lg:hidden"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
          {menuOpen ? (
            <nav className="flex flex-col border-t border-line px-4 py-2 lg:hidden">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="inline-flex min-h-11 items-center gap-2 text-base">
                  <link.icon className="size-4" aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </header>

      <main id="main">
        <section id="top" className="shell band">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-widest text-copper">Online personal trainer · Live from Pune</p>
              <h1 className="mt-3 font-display text-5xl leading-[0.95] sm:text-6xl">Your coach, live on your screen.</h1>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">
                Set the phone up at home and join. We watch the set and correct it while you are in it.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" onClick={() => openBook()} className="btn inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
                  Book a session
                </button>
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-wa inline-flex min-h-12 items-center gap-2 rounded-full px-5 text-sm font-semibold">
                  <WhatsAppIcon />
                  Contact on WhatsApp
                </a>
              </div>
            </div>
            <LiveCall />
          </div>
        </section>

        <section className="border-y border-line bg-ink-2 text-ink">
          <ul className="shell grid grid-cols-2 gap-x-3 gap-y-4 py-4 lg:grid-cols-4 lg:gap-0 lg:py-5">
            <li className="flex min-w-0 items-center gap-2.5 sm:gap-3 lg:pr-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-2xl border border-line sm:size-11">
                <CalendarDays className="size-4 sm:size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xl leading-none sm:text-2xl">Mon–Sat</p>
                <p className="mt-1 text-xs leading-snug text-ink/80 sm:text-sm">Morning, midday, evening.</p>
              </div>
            </li>
            <li className="flex min-w-0 items-center gap-2.5 border-l border-line pl-3 sm:gap-3 lg:pr-6 lg:pl-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-2xl border border-line sm:size-11">
                <Video className="size-4 sm:size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xl leading-none sm:text-2xl">3500+</p>
                <p className="mt-1 text-xs leading-snug text-ink/80 sm:text-sm">live sessions conducted</p>
              </div>
            </li>
            <li className="flex min-w-0 items-center gap-2.5 border-t border-line pt-4 sm:gap-3 lg:border-t-0 lg:border-l lg:pt-0 lg:pr-6 lg:pl-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-2xl border border-line sm:size-11">
                <Repeat className="size-4 sm:size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xl leading-none sm:text-2xl">4–5</p>
                <p className="mt-1 text-xs leading-snug text-ink/80 sm:text-sm">average sessions per day</p>
              </div>
            </li>
            <li className="flex min-w-0 items-center gap-2.5 border-t border-l border-line pt-4 pl-3 sm:gap-3 lg:border-t-0 lg:pt-0 lg:pl-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-2xl border border-line sm:size-11">
                <Globe className="size-4 sm:size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xl leading-none sm:text-2xl">10+</p>
                <p className="mt-1 text-xs leading-snug text-ink/80 sm:text-sm">countries with 90% consistency</p>
              </div>
            </li>
          </ul>
        </section>

        <section id="programs" className="shell band scroll-mt-36 min-[640px]:scroll-mt-28">
          <p className="text-xs tracking-widest text-copper">PROGRAMS</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-[0.95] sm:text-6xl">
            Pick the hour.
            <br />
            The plan is yours.
          </h2>
          <ul className="mt-8 grid items-stretch gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
            {programs
              .filter((program) => program.id !== "consult")
              .map((program) => {
                const benefit = programBenefits[program.id];
                return (
                  <li key={program.id} className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-ink-2 md:max-xl:last:odd:col-span-2">
                    <img
                      src={photos[program.id]}
                      alt={
                        program.id === "iron"
                          ? "A barbell loaded with weight plates on a gym floor"
                          : program.id === "group"
                            ? "Yoga mats laid out for a group class, with two dumbbells and a resistance band"
                            : "Room set up for a home training session"
                      }
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <p className="inline-flex items-center gap-2 text-xs tracking-widest text-mist">
                        <ProgramMark id={program.id} />
                        {program.kicker}
                      </p>
                      <h3 className="mt-2 font-display text-3xl">{program.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-ink sm:text-base">{program.summary}</p>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-6 bg-ink px-4 py-5 text-bone sm:px-5">
                      {benefit?.map((item) => (
                        <li key={item.title} className="min-w-0">
                          <item.icon className="size-5 text-copper-2" strokeWidth={1.5} aria-hidden="true" />
                          <p className="mt-3 text-sm font-bold leading-tight">{item.title}</p>
                          <p className="mt-1.5 text-xs leading-snug text-bone/70 sm:text-sm">{item.line}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-col items-start gap-3 p-4 sm:p-5">
                      <p className="text-sm text-mist">
                        {program.minutes} min {program.cadence}
                        {program.monthlyNote ? ` · ${program.monthlyNote}` : ""}
                      </p>
                      <button
                        type="button"
                        onClick={() => openBook({ programId: program.id })}
                        className="btn inline-flex min-h-11 items-center gap-1 self-end rounded-full px-4 text-sm font-medium"
                      >
                        Book this
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
          {consult ? (
            <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-line bg-ink-2 p-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-xs tracking-widest text-mist">
                  <ProgramMark id="consult" />
                  {consult.minutes} min · before a block
                </p>
                <h3 className="mt-2 font-display text-3xl">{consult.name}</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-mist">{consult.summary}</p>
              </div>
              <button type="button" onClick={() => openBook({ programId: "consult" })} className="btn-light inline-flex min-h-11 shrink-0 items-center gap-1 rounded-full px-4 text-sm font-medium">
                Book a call
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          ) : null}
        </section>

        <section id="difference" className="scroll-mt-36 min-[640px]:scroll-mt-28">
          <div className="shell band">
            <p className="text-xs tracking-widest text-copper">THE DIFFERENCE</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[0.95] sm:text-6xl">
              Real coaching.
              <br />
              Built around you.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-mist">
              Same expert guidance. Different ways to train.
              <br />
              Choose what fits your life.
            </p>
            <ul className="mt-8 divide-y divide-line border-y border-line lg:hidden">
              {differenceRows.map((row) => (
                <li key={row.q} className="py-5">
                  <p className="text-sm font-medium">{row.q}</p>
                  <p className="mt-3 flex items-start gap-2.5 text-sm leading-snug">
                    <Mark ok />
                    <span>
                      <span className="font-medium">With us. </span>
                      {row.us}
                    </span>
                  </p>
                  <p className="mt-2.5 flex items-start gap-2.5 text-sm leading-snug text-mist">
                    <Mark ok={false} />
                    <span>Recorded class. {row.recorded}</span>
                  </p>
                  <p className="mt-2 flex items-start gap-2.5 text-sm leading-snug text-mist">
                    <Mark ok={false} />
                    <span>On your own. {row.own}</span>
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10 hidden lg:grid lg:grid-cols-[minmax(12rem,1.05fr)_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <div className="border-b border-line" />
              <div className="rounded-t-3xl bg-bone-2/80 px-5 py-6 text-center">
                <p className="font-display text-2xl">With us</p>
                <p className="mt-1 text-[11px] tracking-[0.16em] text-mist">1:1 COACHING</p>
              </div>
              <div className="border-b border-line px-4 py-6 text-center">
                <p className="font-display text-2xl">Recorded class</p>
                <p className="mt-1 text-[11px] tracking-[0.16em] text-mist">SAME VIDEO FOR EVERYONE</p>
              </div>
              <div className="border-b border-line px-4 py-6 text-center">
                <p className="font-display text-2xl">On your own</p>
                <p className="mt-1 text-[11px] tracking-[0.16em] text-mist">YOU PLAN IT</p>
              </div>
              {differenceRows.map((row, index) => {
                const last = index === differenceRows.length - 1;
                return (
                  <Fragment key={row.q}>
                    <div className={`flex items-center border-b border-line py-5 pr-4 text-sm font-medium ${last ? "border-b-0" : ""}`}>{row.q}</div>
                    <div className={`flex items-start gap-3 bg-bone-2/80 px-5 py-5 text-sm leading-snug ${last ? "rounded-b-3xl" : ""}`}>
                      <Mark ok />
                      <span>{row.us}</span>
                    </div>
                    <div className={`flex items-start gap-3 border-b border-line px-4 py-5 text-sm leading-snug text-mist ${last ? "border-b-0" : ""}`}>
                      <Mark ok={false} />
                      <span>{row.recorded}</span>
                    </div>
                    <div className={`flex items-start gap-3 border-b border-line px-4 py-5 text-sm leading-snug text-mist ${last ? "border-b-0" : ""}`}>
                      <Mark ok={false} />
                      <span>{row.own}</span>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </section>

        <section id="coach" className="shell band scroll-mt-36 min-[640px]:scroll-mt-28">
          <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <p className="text-xs tracking-widest text-copper">YOUR COACH</p>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">Susmit Jalan</h2>
            </div>
            <div className="md:row-span-2">
              <img src={coachPhoto} alt="Coach Susmit Jalan" loading="lazy" decoding="async" className="aspect-[3/4] w-full max-w-sm rounded-[1.35rem] object-cover object-[center_30%]" />
              <ul className="mt-4 space-y-4">
                <li className="flex items-center gap-3">
                  <img src={ascaLogo} alt="Australian Strength and Conditioning Association (ASCA)" loading="lazy" decoding="async" className="h-11 w-auto shrink-0" />
                  <span className="text-sm font-medium">Level 1 · Strength and Conditioning</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src={aceLogo} alt="American Council on Exercise (ACE)" loading="lazy" decoding="async" className="h-7 w-auto shrink-0" />
                  <span className="text-sm font-medium">Anatomy and Biomechanics</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-base leading-relaxed">
              <p>
                We coach live, one person at a time, from Pune. The call is in Hindi or English. You are not a name on a programme that was written once and left to run. We are on the screen for the set, and the work changes from what we see, not from what was decided before you picked up the bar.
              </p>
              <p>
                Most people who start here have already tried to train alone. The week gets in the way, the session goes vague, and no one notices when it stops. On this call that does not happen. The work is watched. If you miss, it is spoken about. If the week is a bad one, you still train. You do not wait for a quieter month that never comes.
              </p>
              <p>
                We are not interested in a room doing the same thing. We want the joint, the line of the lift, and a load that belongs to you today. That is the job. You bring the camera. We hold the standard.
              </p>
            </div>
          </div>
        </section>

        <section id="hour" className="on-dark relative scroll-mt-36 overflow-hidden text-bone min-[640px]:scroll-mt-28">
          <div className="absolute inset-0" aria-hidden="true">
            {beats.map((beat) => {
              const photo = beatPhotos[beat.label];
              const on = activeBeat.label === beat.label;
              return (
                <img
                  key={beat.label}
                  src={photo?.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${on ? "opacity-100" : "opacity-0"}`}
                />
              );
            })}
            <div className="absolute inset-0 bg-[#14120f]/82" />
          </div>
          <div className="shell band relative grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <p className="text-xs tracking-widest text-bone/70">THE HOUR</p>
              <h2 className="mt-3 font-display text-4xl leading-[0.95] text-bone sm:text-6xl">The hour.</h2>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
                <p className="font-display text-5xl tabular-nums leading-none text-bone sm:text-6xl">
                  {String(clockMinute).padStart(2, "0")}
                  <span className="text-3xl text-bone/70 sm:text-4xl">:{String(clockSecond).padStart(2, "0")}</span>
                </p>
                <button type="button" onClick={toggleHour} className="btn-light inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium">
                  {playing ? "Pause" : elapsed >= 60 ? "Replay" : "Play the hour"}
                </button>
              </div>
              <div className="mt-4 h-1 bg-bone/20">
                <div className="h-full bg-bone" style={{ width: `${(elapsed / 60) * 100}%` }} />
              </div>
              <p className="mt-6 font-display text-3xl text-bone">{activeBeat.label}</p>
              <p className="mt-2 max-w-md text-base leading-relaxed text-bone/80">{activeBeat.detail}</p>
            </div>
            <ol className="flex flex-col gap-2">
              {beats.map((beat) => {
                const Icon = beatIcons[beat.label] ?? Dumbbell;
                const on = activeBeat.label === beat.label;
                return (
                  <li key={beat.at}>
                    <button
                      type="button"
                      onClick={() => {
                        setPlaying(false);
                        elapsedRef.current = beat.at;
                        setElapsed(beat.at);
                      }}
                      className={`flex min-h-14 w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left ${on ? "bg-bone text-ink" : "bg-bone/10 text-bone"}`}
                    >
                      <span className="inline-flex min-w-0 items-center gap-2 font-display text-lg">
                        <Icon className="size-4 shrink-0" aria-hidden="true" />
                        <span className="truncate">{beat.label}</span>
                      </span>
                      <span className="shrink-0 tabular-nums text-sm">{String(beat.at).padStart(2, "0")}:00</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="questions" className="scroll-mt-36 bg-white min-[640px]:scroll-mt-28">
          <div className="shell band">
            <p className="text-xs tracking-widest text-copper">Questions</p>
            <h2 className="mt-3 font-display text-4xl">Before you book.</h2>
            <div className="mt-6 max-w-3xl divide-y divide-line border-y border-line">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-1">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 text-left">
                    {faq.q}
                    <span className="text-mist group-open:hidden" aria-hidden="true">+</span>
                    <span className="hidden text-mist group-open:inline" aria-hidden="true">–</span>
                  </summary>
                  <p className="pb-4 text-sm leading-relaxed text-mist">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="on-dark bg-ink text-bone">
          <div className="shell flex flex-col gap-6 py-16 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-4xl leading-[0.95] text-bone sm:text-6xl">Book the hour.</h2>
              <p className="mt-3 max-w-md text-bone/80">A consultation if you want to talk first. A session if you already know.</p>
            </div>
            <button type="button" onClick={() => openBook()} className="btn-accent inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
              Book a session
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="shell grid gap-8 py-12 md:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <img src={ofwLogo} alt="Online Fitness Worldwide, Jalan PT" loading="lazy" decoding="async" className="h-12 w-auto sm:h-16" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
              Jalan PT, Pune. Live online coaching on Meet, Zoom or FaceTime, in Hindi or English, on IST.
            </p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-mist">
              ASCA and ACE are credentials held by the coach. Neither body endorses this business.
            </p>
          </div>
          <nav aria-label="Footer" className="text-sm">
            <p className="font-semibold">From the blog</p>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/blog/best-exercises-for-desk-workers" className="text-copper underline underline-offset-4">
                  Best exercises for desk workers: 7 moves that fit a workday
                </a>
              </li>
              <li>
                <a href="/blog" className="underline underline-offset-4">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      <BookDialog open={bookOpen} onOpenChange={setBookOpen} initialProgramId={seed.programId} initialSlotId={seed.slotId} />
    </div>
  );
}
