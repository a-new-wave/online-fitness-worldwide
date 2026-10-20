export type Program = {
  id: string;
  name: string;
  kicker: string;
  minutes: number;
  cadence: string;
  summary: string;
  detail: string;
  monthlyNote?: string;
};

/** Digits only, country code included. Header WhatsApp opens this chat. */
export const WHATSAPP_E164 = "919881375047";

/** Standing room, if you want it baked in for every visitor. A link saved in the coach panel overrides this on that device only. */
export const STUDIO_MEET_URL = "";

export const certMarks = [
  { id: "asca", name: "ASCA", line: "Level 1 · S&C" },
  { id: "anatomy", name: "ACE", line: "American Council on Exercise" },
] as const;

export type SessionNote = {
  quote: string;
  name: string;
  place: string;
  topic?: string;
  image?: string;
};

export const clientNotes: SessionNote[] = [
  {
    quote:
      "I would start, last a couple of weeks, and then stop. That had been the pattern for years. No one was waiting on the other side of the camera, so missing a week cost me nothing. It is much harder to disappear now.",
    name: "Kirti Oswal",
    place: "Pune",
  },
  {
    quote:
      "I used to get to the gym and spend the start of the session deciding what to do. That was usually enough to make me leave early. Now I join and the hour is already written. I train the whole thing.",
    name: "Ashish Maniyar",
    place: "Mumbai",
  },
  {
    quote:
      "The one I can point at is the squat. I used to cut the depth and rush back up. We stayed with it. Last month I took a set at the same weight, deeper, and I actually owned the last rep.",
    name: "Heena Maniyar",
    place: "Dubai",
  },
  {
    quote:
      "The most useful part is the correction while the set is still going. If the bar drifts or I lose the brace, it gets called in that moment. I had plans before. I did not have someone watching the rep.",
    name: "Roopali Shah",
    place: "Singapore",
  },
  {
    quote:
      "If your week is messy, start anyway. I nearly didn’t, because work never stays where I put it. The session can move. Waiting for a quiet month is how I lost the last few years.",
    name: "Mandar Shah",
    place: "Ahmedabad",
  },
  {
    quote:
      "I don’t train in one room. Some weeks it is a gym, some weeks a hotel with a band and a chair. I used to cancel those weeks. Now the session is rewritten for what is actually there, and the week still counts.",
    name: "Veenu Bishnoi",
    place: "Jaipur",
  },
  {
    quote:
      "I didn’t come in to chase a look. I wanted normal things to feel lighter. Three floors with the shopping used to stop me on the landing. I walk straight up now. That is the progress I notice.",
    name: "Aisha Al Hashimi",
    place: "Dubai",
  },
  {
    quote:
      "I would tell someone not to buy another plan and try to be their own coach. I did that, and I quit each time it got unclear. The hour changes when I do, and someone is there to see the work. That is the part you cannot download.",
    name: "Daniel Tan",
    place: "Singapore",
  },
];

export const programs: Program[] = [
  {
    id: "iron",
    name: "Iron Hour",
    kicker: "Strength · Power · Athleticism",
    minutes: 60,
    cadence: "per session",
    summary:
      "Build strength that goes beyond the gym. Develop the power, endurance and physical capability to lift, run, jump and move with confidence. Train to perform better, push your limits and stay agile — not just strong.",
    detail:
      "The hour is sequenced. Warm-up is written for that lift — ramp sets to the working load, not a general loosen-up. Working sets are coached live. Accessories are selected for the pattern just trained: strength where it is short, mobility where range limits the lift. The cool-down is part of the session, so you leave the call ready for an easy afternoon, not a second workout.",
    monthlyNote: "20 sessions a month",
  },
  {
    id: "lean",
    name: "Lean Reset",
    kicker: "Lifestyle · Weight Management · Energy",
    minutes: 60,
    cadence: "per session",
    summary:
      "Get through your day with energy to spare. Feel better in your body, keep up with the people and activities you love, and build a healthier lifestyle without letting fitness take over your life.",
    detail:
      "Nothing is pulled from a generic fat-loss sheet. Each class is planned for that week and coached live. Booking holds the first hour. The block of twenty starts from there.",
    monthlyNote: "20 sessions a month",
  },
  {
    id: "group",
    name: "Open Floor",
    kicker: "Small group · Coaching · Community",
    minutes: 60,
    cadence: "per session",
    summary:
      "Make showing up the easy part. Train alongside others, get the guidance you need and find your rhythm in a group that keeps you moving forward. Less time fighting motivation, more time building a routine that sticks.",
    detail:
      "Every person has a position, a purpose, and a standard to meet. Your effort is tracked, your work is noticed, and you’re challenged to finish what you start.\n\nThe group gives you the push. The coaching keeps you accountable. The shared commitment keeps you in it.\n\nNever anonymous. Never on your own.",
    monthlyNote: "Small group coaching",
  },
  {
    id: "consult",
    name: "Consultation",
    kicker: "Before a block",
    minutes: 30,
    cadence: "per call",
    summary:
      "Thirty minutes before any training block is booked. We settle the aim, the camera, and which plan fits you. The call ends with a clear next step, not a workout.",
    detail:
      "Not a training session. The call ends with a clear next step: Iron Hour, Lean Reset, or Open Floor.",
  },
];

export const goals = [
  "Get stronger",
  "Lose fat",
  "Move without the ache",
  "Come back after time off",
  "Train for something specific",
] as const;

export const beats = [
  {
    at: 0,
    label: "Set-up",
    detail: "Camera at the side, whole body in frame. The primary lift for the hour is named before the first rep.",
  },
  {
    at: 4,
    label: "Warm-up",
    detail: "Specific to that lift. The pattern first, then ramp-up sets to the working load — not a general loosen-up.",
  },
  {
    at: 14,
    label: "Primary",
    detail: "One main strength lift. Working sets coached live: position, brace, and the load that belongs today.",
  },
  {
    at: 28,
    label: "Accessories",
    detail: "Strength and mobility chosen for the pattern just trained. They support the lift. They do not replace it.",
  },
  {
    at: 50,
    label: "Cool-down",
    detail: "A short close so you come down off the work and the rest of the day stays easy.",
  },
] as const;

export const faqs = [
  {
    q: "Is this a recorded class?",
    a: "No. The plan changes if the rep does.",
  },
  {
    q: "What do I need?",
    a: "A phone or laptop, enough floor to lie down and stand, and a camera at the side — not above you. Use what you already have: bands, dumbbells, a backpack, or a gym.",
  },
  {
    q: "What time zone?",
    a: "Tap a time zone at the top — IST, SGT, GST, CET, or ET. The hours follow that zone. Tap हिंदी for this page in Hindi. The call is in Hindi or English.",
  },
  {
    q: "How do I pay?",
    a: "Not on this page. Booking holds the time and puts it on your calendar. The fee is agreed directly, before or on the first call.",
  },
  {
    q: "Can you see my form well enough on a call?",
    a: "Yes, if the camera is at hip height from the side and the room is lit. The first two minutes of every session are for the frame. If we cannot see the joint, we move the phone before we lift.",
  },
  {
    q: "What if I need to move the hour?",
    a: "Tell us a day ahead and we shift it. Same-day cancellations forfeit the session unless something real happened.",
  },
];

export const readyList = [
  "Meet installed, and you have joined a call before",
  "Floor space about the size of a yoga mat, plus room to stand",
  "Camera at the side, on a stack of books if that is the tripod",
  "Water, and shoes you can actually brace in",
];

export function programById(id: string): Program | undefined {
  return programs.find((program) => program.id === id);
}
