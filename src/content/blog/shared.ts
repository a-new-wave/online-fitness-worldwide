/**
 * Shared blog types and helpers. Each post lives in its own file and exports a
 * BlogPost. Citations in copy are written as {n} and point at sources[n - 1].
 */

export const POST_LANGS = ["en", "ar", "hi", "es", "zh", "ja", "gu"] as const;
export type PostLang = (typeof POST_LANGS)[number];

export const LANG_META: Record<PostLang, { name: string; dir: "ltr" | "rtl"; ogLocale: string }> = {
  en: { name: "English", dir: "ltr", ogLocale: "en_IN" },
  ar: { name: "العربية", dir: "rtl", ogLocale: "ar_AE" },
  hi: { name: "हिन्दी", dir: "ltr", ogLocale: "hi_IN" },
  es: { name: "Español", dir: "ltr", ogLocale: "es_ES" },
  zh: { name: "中文", dir: "ltr", ogLocale: "zh_CN" },
  ja: { name: "日本語", dir: "ltr", ogLocale: "ja_JP" },
  gu: { name: "ગુજરાતી", dir: "ltr", ogLocale: "gu_IN" },
};

/** "More from the blog", per language. Used for the related-posts block. */
export const RELATED_LABEL: Record<PostLang, string> = {
  en: "More from the blog",
  ar: "المزيد من المدونة",
  hi: "ब्लॉग से और",
  es: "Más del blog",
  zh: "更多博客文章",
  ja: "ブログの他の記事",
  gu: "બ્લોગમાંથી વધુ",
};

export function isPostLang(value: string): value is PostLang {
  return (POST_LANGS as readonly string[]).includes(value);
}

export function postPathFor(slug: string, lang: PostLang): string {
  return lang === "en" ? `/blog/${slug}` : `/${lang}/blog/${slug}`;
}

/** hreflang set shared by every language version (reciprocal, plus x-default). */
export function alternatesFor(slug: string) {
  return [
    ...POST_LANGS.map((lang) => ({ hrefLang: lang, path: postPathFor(slug, lang) })),
    { hrefLang: "x-default", path: postPathFor(slug, "en") },
  ];
}

export type Source = { readonly cite: string; readonly url: string };

export type PostItem = { name: string; why: string; how: string; dose: string };

export type PostCopy = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  dek: string;
  updated: string;
  byline: string;
  credentialsNote: string;
  labels: {
    home: string;
    blog: string;
    why: string;
    how: string;
    dose: string;
    sources: string;
    readIn: string;
    programs: string;
    whatsapp: string;
    whatsappText: string;
    skip: string;
    crumb: string;
  };
  intro: string[];
  listHeading: string;
  items: PostItem[];
  enoughHeading: string;
  enough: string[];
  sampleHeading: string;
  sampleLabel: string;
  sample: string[];
  coachedHeading: string;
  coached: string[];
  safetyHeading: string;
  safety: string;
};

export type BlogPost = {
  slug: string;
  published: string;
  modified: string;
  /** Short English topic for JSON-LD "about". */
  about: string;
  sources: readonly Source[];
  copy: Record<PostLang, PostCopy>;
};
