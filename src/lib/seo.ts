/**
 * Small head() helpers so every route ships its own title, description,
 * canonical, Open Graph / Twitter tags, hreflang alternates and JSON-LD.
 *
 * SITE_URL is the intended production domain. Change it here once and every
 * canonical, og:url, hreflang link and JSON-LD id follows.
 */
export const SITE_URL = "https://onlinefitness.com";
export const SITE_NAME = "Jalan PT";
export const BRAND_ALT = "Online Fitness Worldwide";
export const COACH_NAME = "Susmit Jalan";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const COACH_ID = `${SITE_URL}/#coach`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type Alternate = { hrefLang: string; path: string };

export type SeoInput = {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/blog/best-exercises-for-desk-workers". */
  path: string;
  /** BCP 47 language of the page, e.g. "en", "ar". */
  lang?: string;
  /** Open Graph locale, e.g. "en_IN". */
  ogLocale?: string;
  type?: "website" | "article";
  alternates?: Alternate[];
  jsonLd?: object[];
  publishedTime?: string;
  modifiedTime?: string;
};

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export function seoHead(input: SeoInput) {
  const url = absoluteUrl(input.path);
  const meta: Array<Record<string, string>> = [
    { title: input.title },
    { name: "description", content: input.description },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { property: "og:type", content: input.type ?? "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: input.title },
    { property: "og:description", content: input.description },
    { property: "og:url", content: url },
    { property: "og:locale", content: input.ogLocale ?? "en_IN" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: input.title },
    { name: "twitter:description", content: input.description },
  ];
  if (input.publishedTime) meta.push({ property: "article:published_time", content: input.publishedTime });
  if (input.modifiedTime) meta.push({ property: "article:modified_time", content: input.modifiedTime });

  const links: Array<Record<string, string>> = [{ rel: "canonical", href: url }];
  for (const alt of input.alternates ?? []) {
    links.push({ rel: "alternate", hrefLang: alt.hrefLang, href: absoluteUrl(alt.path) });
  }

  const scripts = (input.jsonLd ?? []).map((data) => ({
    type: "application/ld+json",
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  }));

  return { meta, links, scripts };
}

export function breadcrumbLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** The coach. Credentials are named; they are not endorsements of the business. */
export const coachLd = {
  "@type": "Person",
  "@id": COACH_ID,
  name: COACH_NAME,
  jobTitle: "Online strength and conditioning coach",
  worksFor: { "@id": BUSINESS_ID },
  knowsLanguage: ["en", "hi"],
  homeLocation: { "@type": "Place", name: "Pune, India" },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ASCA Level 1 (strength and conditioning)",
      credentialCategory: "certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ACE (American Council on Exercise): anatomy and biomechanics",
      credentialCategory: "certification",
    },
  ],
};

/** The business. No prices anywhere: booking holds a time; the fee is agreed directly. */
export const businessLd = {
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: SITE_NAME,
  alternateName: BRAND_ALT,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Live online personal training from Pune. 1:1 and small-group sessions on Google Meet, Zoom or FaceTime, in Hindi or English, on IST.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Place", name: "Worldwide (online)" },
  ],
  availableLanguage: ["English", "Hindi"],
  founder: { "@id": COACH_ID },
  employee: { "@id": COACH_ID },
  knowsAbout: [
    "Online personal training",
    "Personal training at home",
    "Strength and conditioning",
    "Fat loss training",
    "Returning to exercise after a long break",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Programs",
    itemListElement: [
      ["Iron Hour", "60-minute 1:1 live strength session, coached on video."],
      ["Lean Reset", "1:1 live coaching, 20 sessions a month, for lifestyle, weight management and energy."],
      ["Return", "45-minute live sessions, 12 alternate-day sessions a month, for getting back into exercise after a long break."],
      ["Open Floor", "Small-group live coaching on video."],
      ["Consultation", "30-minute call before a training block. Not a training session."],
    ].map(([name, description]) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, description, provider: { "@id": BUSINESS_ID } },
    })),
  },
};
