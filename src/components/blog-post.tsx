import { Fragment, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BLOG_POSTS } from "@/content/blog";
import {
  alternatesFor,
  blogIndexPathFor,
  LANG_META,
  POST_LANGS,
  postPathFor,
  RELATED_LABEL,
  type BlogPost,
  type PostLang,
} from "@/content/blog/shared";
import { WHATSAPP_E164 } from "@/studio/content";
import {
  absoluteUrl,
  breadcrumbLd,
  businessLd,
  coachLd,
  seoHead,
} from "@/lib/seo";

/** Turns "text{1}{3}" into text with linked superscript citations. */
function Cited({ text }: { text: string }): ReactNode {
  const parts = text.split(/\{(\d+)\}/);
  return parts.map((part, index) => {
    if (index % 2 === 0) return <Fragment key={index}>{part}</Fragment>;
    const n = Number(part);
    return (
      <sup key={index} className="ms-0.5">
        <a href={`#source-${n}`} className="text-copper underline underline-offset-2" aria-label={`Source ${n}`}>
          [{n}]
        </a>
      </sup>
    );
  });
}

export function postHead(post: BlogPost, lang: PostLang) {
  const copy = post.copy[lang];
  const path = postPathFor(post.slug, lang);
  const blogPath = blogIndexPathFor(lang);
  const postPath = (l: PostLang) => postPathFor(post.slug, l);
  return seoHead({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path,
    lang,
    ogLocale: LANG_META[lang].ogLocale,
    type: "article",
    alternates: alternatesFor(post.slug),
    publishedTime: post.published,
    modifiedTime: post.modified,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${absoluteUrl(path)}#article`,
        headline: copy.h1,
        description: copy.metaDescription,
        inLanguage: lang,
        datePublished: post.published,
        dateModified: post.modified,
        mainEntityOfPage: absoluteUrl(path),
        author: { ...coachLd },
        publisher: { ...businessLd },
        about: { "@type": "Thing", name: post.about },
        isPartOf: { "@id": `${absoluteUrl(blogPath)}#blog` },
        citation: post.sources.map((source) => ({ "@type": "CreativeWork", name: source.cite, url: source.url })),
        workTranslation:
          lang === "en"
            ? POST_LANGS.filter((l) => l !== "en").map((l) => ({ "@type": "Article", "@id": `${absoluteUrl(postPath(l))}#article`, inLanguage: l }))
            : undefined,
        translationOfWork: lang === "en" ? undefined : { "@id": `${absoluteUrl(postPath("en"))}#article` },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${absoluteUrl(path)}#list`,
        name: copy.listHeading,
        inLanguage: lang,
        numberOfItems: copy.items.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: copy.items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name })),
      },
      breadcrumbLd([
        { name: copy.labels.home, path: "/" },
        { name: copy.labels.blog, path: blogPath },
        { name: copy.labels.crumb, path },
      ]),
    ],
  });
}

export function BlogPostPage({ post, lang }: { post: BlogPost; lang: PostLang }) {
  const copy = post.copy[lang];
  const postPath = (l: PostLang) => postPathFor(post.slug, l);
  const blogPath = blogIndexPathFor(lang);
  const related = BLOG_POSTS.filter((other) => other.slug !== post.slug);
  const { dir } = LANG_META[lang];
  const wa = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(copy.labels.whatsappText)}`;

  return (
    <div className="min-h-screen bg-bone text-ink" lang={lang} dir={dir}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        {copy.labels.skip}
      </a>
      <SiteHeader homeLabel={copy.labels.home} blogLabel={copy.labels.blog} blogHref={blogPath} />

      <main id="main">
        <article className="shell band max-w-3xl text-start">
          <nav aria-label="Breadcrumb" className="text-sm text-mist">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <a href="/" className="underline-offset-4 hover:underline">
                  {copy.labels.home}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <a href={blogPath} className="underline-offset-4 hover:underline">
                  {copy.labels.blog}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {copy.labels.crumb}
              </li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">{copy.labels.blog}</p>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
            {copy.h1}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-mist">{copy.dek}</p>
          <p className="mt-4 text-sm text-mist">
            <span>{copy.byline}</span> <time dateTime={post.modified}>{copy.updated}</time>
          </p>

          <nav aria-label={copy.labels.readIn} className="mt-5 rounded-2xl border border-line bg-ink-2 p-4 text-sm">
            <p className="font-medium">{copy.labels.readIn}</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              {POST_LANGS.map((l) => (
                <li key={l}>
                  {l === lang ? (
                    <span aria-current="page" className="font-semibold" lang={l} dir={LANG_META[l].dir}>
                      {LANG_META[l].name}
                    </span>
                  ) : (
                    <a href={postPath(l)} hrefLang={l} lang={l} dir={LANG_META[l].dir} className="underline underline-offset-4">
                      {LANG_META[l].name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="prose-links mt-8 space-y-4 text-base leading-relaxed sm:text-lg">
            {copy.intro.map((line) => (
              <p key={line}>
                <Cited text={line} />
              </p>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl">{copy.listHeading}</h2>
          <ol className="mt-6 space-y-6">
            {copy.items.map((item, index) => (
              <li key={item.name} className="card-lift rounded-2xl border border-line bg-ink-2 p-5 sm:p-6">
                <h3 className="flex items-baseline gap-3 font-display text-2xl">
                  <span className="mark-badge grid size-9 shrink-0 place-items-center bg-ink text-base text-copper-2 tabular-nums" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{item.name}</span>
                </h3>
                <dl className="mt-4 space-y-3 text-base leading-relaxed">
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-copper uppercase">{copy.labels.why}</dt>
                    <dd className="mt-1">
                      <Cited text={item.why} />
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-copper uppercase">{copy.labels.how}</dt>
                    <dd className="mt-1">{item.how}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold tracking-widest text-copper uppercase">{copy.labels.dose}</dt>
                    <dd className="mt-1">
                      <Cited text={item.dose} />
                    </dd>
                  </div>
                </dl>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 font-display text-3xl">{copy.enoughHeading}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed sm:text-lg">
            {copy.enough.map((line) => (
              <p key={line}>
                <Cited text={line} />
              </p>
            ))}
          </div>

          <h2 className="mt-12 font-display text-3xl">{copy.sampleHeading}</h2>
          <div className="mt-4 rounded-2xl border-2 border-dashed border-copper/60 p-5">
            <p className="text-sm font-semibold text-copper">{copy.sampleLabel}</p>
            <ul className="mt-3 list-disc space-y-2 ps-5 text-base leading-relaxed">
              {copy.sample.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <section aria-labelledby="coached" className="mt-12 rounded-3xl bg-ink p-6 text-bone sm:p-8">
            <h2 id="coached" className="font-display text-3xl text-bone">
              {copy.coachedHeading}
            </h2>
            <div className="mt-4 space-y-3 leading-relaxed text-bone/90">
              {copy.coached.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/#programs" className="btn-accent inline-flex min-h-12 items-center gap-1 rounded-full px-6 text-sm font-semibold">
                {copy.labels.programs}
                <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-wa inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold">
                {copy.labels.whatsapp}
              </a>
            </div>
          </section>

          <h2 className="mt-12 font-display text-2xl">{copy.safetyHeading}</h2>
          <p className="mt-3 text-base leading-relaxed text-mist">
            <Cited text={copy.safety} />
          </p>

          <p className="mt-6 text-sm leading-relaxed text-mist">{copy.credentialsNote}</p>

          <h2 className="mt-12 font-display text-2xl">{copy.labels.sources}</h2>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed" lang="en" dir="ltr">
            {post.sources.map((source, index) => (
              <li key={source.url} id={`source-${index + 1}`} className="scroll-mt-24">
                <span className="tabular-nums">[{index + 1}]</span> {source.cite}{" "}
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="break-all text-copper underline underline-offset-2">
                  {source.url}
                </a>
              </li>
            ))}
          </ol>

          {related.length > 0 ? (
            <nav aria-labelledby="related" className="mt-12 border-t border-line pt-8">
              <h2 id="related" className="font-display text-2xl">
                {RELATED_LABEL[lang]}
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((other) => (
                  <li key={other.slug}>
                    <a href={postPathFor(other.slug, lang)} className="group inline-flex items-start gap-2 text-lg font-semibold underline decoration-copper-2 decoration-2 underline-offset-4 hover:text-copper">
                      <span>{other.copy[lang].h1}</span>
                      <ArrowUpRight className="mt-1 size-4 shrink-0 rtl:-scale-x-100" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <a href={blogPath} className="btn-light inline-flex min-h-11 items-center gap-1 rounded-full px-5 text-sm font-semibold">
                  {copy.labels.blog}
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
                </a>
              </p>
            </nav>
          ) : null}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
