import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BLOG_POSTS } from "@/content/blog";
import { postPathFor } from "@/content/blog/shared";
import { WHATSAPP_E164 } from "@/studio/content";
import { absoluteUrl, breadcrumbLd, BUSINESS_ID, businessLd, seoHead } from "@/lib/seo";

/**
 * Landing page for "personal trainer for fat loss" (researched query).
 * Facts only from the brief: Lean Reset is 20 sessions a month, 1:1, coached live.
 * No prices, no promised results, no client quotes.
 */
const PATH = "/personal-trainer-for-fat-loss";
const TITLE = "Personal Trainer for Fat Loss, Live Online 1:1 | Jalan PT";
const DESCRIPTION =
  "A personal trainer for fat loss, live on video from Pune. Lean Reset: 20 coached 1:1 sessions a month, planned week by week. Hindi or English, on IST.";
const WHO_URL = "https://www.who.int/publications/i/item/9789240015128";
const WA_TEXT = "Hi Susmit, I read the fat loss coaching page and want to book a consultation";

const FAQS = [
  {
    q: "Is there a fixed fat-loss plan?",
    a: "No. Nothing is pulled from a generic fat-loss sheet. Each session is planned for that week and coached live.",
  },
  {
    q: "How many sessions is Lean Reset?",
    a: "20 sessions a month, 1:1, coached live on Google Meet, Zoom or FaceTime.",
  },
  {
    q: "Can I do it at home?",
    a: "Yes. A phone, floor space the size of a mat, and whatever kit you have. The session is written for the room you are in.",
  },
  {
    q: "What does it cost?",
    a: "Not on this page. Booking holds a time. The fee is agreed directly, before or on the first call.",
  },
  {
    q: "Do you promise a number on the scale?",
    a: "No. We do not promise results and we do not publish before-and-after numbers. We coach the sessions and adjust them every week.",
  },
  {
    q: "Where do I start?",
    a: "A 30-minute consultation. It is a conversation, not training. It ends with a clear next step.",
  },
] as const;

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${absoluteUrl(PATH)}#service`,
  name: "Lean Reset: online personal training for fat loss",
  serviceType: "Online personal training",
  description:
    "1:1 live coaching on video, 20 sessions a month, planned week by week for lifestyle, weight management and energy. No prices published; the fee is agreed directly.",
  url: absoluteUrl(PATH),
  provider: { ...businessLd, "@id": BUSINESS_ID },
  areaServed: businessLd.areaServed,
  availableLanguage: ["English", "Hindi"],
  availableChannel: {
    "@type": "ServiceChannel",
    name: "Live video: Google Meet, Zoom or FaceTime",
    serviceUrl: absoluteUrl(PATH),
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${absoluteUrl(PATH)}#faq`,
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/personal-trainer-for-fat-loss")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: PATH,
      lang: "en",
      ogLocale: "en_IN",
      alternates: [
        { hrefLang: "en", path: PATH },
        { hrefLang: "x-default", path: PATH },
      ],
      jsonLd: [
        serviceLd,
        faqLd,
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Personal trainer for fat loss", path: PATH },
        ]),
      ],
    }),
  component: FatLossPage,
});

function FatLossPage() {
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WA_TEXT)}`;
  return (
    <div className="min-h-screen bg-bone text-ink" lang="en" dir="ltr">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <article className="shell band max-w-3xl text-start">
          <nav aria-label="Breadcrumb" className="text-sm text-mist">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href="/" className="underline-offset-4 hover:underline">
                  Home
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                Personal trainer for fat loss
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">Lean Reset · Online personal training</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">Personal trainer for fat loss. Live, 1:1, on video.</h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Twenty coached sessions a month. Planned for your week. Watched rep by rep.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/#programs" className="btn inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">
              See the programs
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
              Ask on WhatsApp
            </a>
          </div>

          <section aria-labelledby="month" className="mt-12">
            <h2 id="month" className="font-display text-3xl">
              What a month of Lean Reset looks like
            </h2>
            <ul className="prose-links mt-4 list-disc space-y-3 ps-5 text-base leading-relaxed sm:text-lg">
              <li>20 sessions a month. 1:1. Coached live.</li>
              <li>Nothing is pulled from a generic fat-loss sheet. Each session is planned for that week.</li>
              <li>
                Strength work and moving more, together. WHO asks adults for 150 to 300 minutes a week of moderate activity, plus
                muscle-strengthening work on 2 or more days.{" "}
                <a href={WHO_URL} target="_blank" rel="noopener noreferrer">
                  WHO guidelines, 2020
                </a>
                .
              </li>
              <li>On Google Meet, Zoom or FaceTime. From Pune. In Hindi or English. On IST.</li>
            </ul>
          </section>

          <section aria-labelledby="food" className="mt-12">
            <h2 id="food" className="font-display text-3xl">
              Training is one part
            </h2>
            <p className="mt-4 text-base leading-relaxed sm:text-lg">
              Food, sleep and daily steps matter too. We talk about them on the call. For a medical condition or a clinical diet,
              see your doctor or a registered dietitian.
            </p>
          </section>

          <section aria-labelledby="fit" className="mt-12">
            <h2 id="fit" className="font-display text-3xl">
              Not the right fit?
            </h2>
            <ul className="mt-4 space-y-3 text-base leading-relaxed sm:text-lg">
              <li>
                <strong>Return.</strong> Coming back after a long break: 45 minutes, 12 alternate-day sessions a month.
              </li>
              <li>
                <strong>Iron Hour.</strong> Strength first: 60 minutes, 1:1. Set-up, warm-up, primary lift, accessories, cool-down.
              </li>
              <li>
                <strong>Open Floor.</strong> Prefer company: small-group coaching.
              </li>
              <li>
                <strong>Consultation.</strong> Not sure: 30 minutes, a conversation, not training.
              </li>
            </ul>
          </section>

          <section aria-labelledby="faq" className="mt-12">
            <h2 id="faq" className="font-display text-3xl">
              Questions
            </h2>
            <div className="mt-4 space-y-3">
              {FAQS.map((item) => (
                <details key={item.q} className="card-lift rounded-2xl border border-line bg-ink-2 p-5">
                  <summary className="font-semibold">{item.q}</summary>
                  <p className="mt-3 leading-relaxed text-mist">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <nav aria-labelledby="read" className="mt-12 border-t border-line pt-8">
            <h2 id="read" className="font-display text-2xl">
              Read next
            </h2>
            <ul className="mt-4 space-y-3">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <a
                    href={postPathFor(post.slug, "en")}
                    className="inline-flex items-start gap-2 text-lg font-semibold underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper"
                  >
                    <span>{post.copy.en.h1}</span>
                    <ArrowUpRight className="mt-1 size-4 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="start" className="mt-12 rounded-3xl bg-ink p-6 text-bone sm:p-8">
            <h2 id="start" className="font-display text-3xl text-bone">
              Start with a conversation
            </h2>
            <p className="mt-4 leading-relaxed text-bone/90">
              Booking holds a time. The fee is agreed directly. No prices on this site, and no promised numbers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/#programs" className="btn-accent inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">
                Book a consultation
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
                Ask on WhatsApp
              </a>
            </div>
          </section>

          <p className="mt-6 text-sm leading-relaxed text-mist">
            ASCA Level 1 (strength and conditioning) and ACE (anatomy and biomechanics). These are credentials held by the coach.
            Neither body endorses this business. General information, not medical advice.
          </p>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
