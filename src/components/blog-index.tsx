import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BLOG_POSTS } from "@/content/blog";
import {
  BLOG_INDEX_COPY,
  blogIndexAlternates,
  blogIndexPathFor,
  LANG_META,
  POST_LANGS,
  postPathFor,
  type PostLang,
} from "@/content/blog/shared";
import { absoluteUrl, WEBSITE_ID, breadcrumbLd, businessLd, seoHead } from "@/lib/seo";

/** head() for /blog and /{lang}/blog: own title, description, canonical, reciprocal hreflang, Blog + BreadcrumbList JSON-LD. */
export function blogIndexHead(lang: PostLang) {
  const copy = BLOG_INDEX_COPY[lang];
  const path = blogIndexPathFor(lang);
  return seoHead({
    title: copy.metaTitle,
    description: copy.metaDescription,
    path,
    lang,
    ogLocale: LANG_META[lang].ogLocale,
    alternates: blogIndexAlternates(),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${absoluteUrl(path)}#blog`,
        name: "Jalan PT Blog",
        url: absoluteUrl(path),
        inLanguage: lang,
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { ...businessLd },
        blogPost: BLOG_POSTS.map((post) => ({
          "@type": "BlogPosting",
          headline: post.copy[lang].h1,
          description: post.copy[lang].metaDescription,
          url: absoluteUrl(postPathFor(post.slug, lang)),
          inLanguage: lang,
          datePublished: post.published,
          dateModified: post.modified,
        })),
      },
      breadcrumbLd([
        { name: copy.home, path: "/" },
        { name: copy.blog, path },
      ]),
    ],
  });
}

export function BlogIndexPage({ lang }: { lang: PostLang }) {
  const copy = BLOG_INDEX_COPY[lang];
  const { dir } = LANG_META[lang];
  const others = POST_LANGS.filter((l) => l !== lang);

  return (
    <div className="min-h-screen bg-bone text-ink" lang={lang} dir={dir}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        {copy.skip}
      </a>
      <SiteHeader homeLabel={copy.home} blogLabel={copy.blog} blogHref={blogIndexPathFor(lang)} />
      <main id="main" className="shell band max-w-3xl text-start">
        <nav aria-label="Breadcrumb" className="text-sm text-mist">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="underline-offset-4 hover:underline">
                {copy.home}
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {copy.blog}
            </li>
          </ol>
        </nav>
        <p className="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">{copy.blog}</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">{copy.h1}</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist">{copy.dek}</p>

        <nav aria-label={copy.readIn} className="mt-6 text-sm">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {POST_LANGS.map((l) => (
              <li key={l}>
                {l === lang ? (
                  <span aria-current="page" className="font-semibold" lang={l} dir={LANG_META[l].dir}>
                    {LANG_META[l].name}
                  </span>
                ) : (
                  <a href={blogIndexPathFor(l)} hrefLang={l} lang={l} dir={LANG_META[l].dir} className="underline underline-offset-4">
                    {LANG_META[l].name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <h2 className="sr-only">{copy.articles}</h2>
        <ul className="mt-10 space-y-4">
          {BLOG_POSTS.map((post) => {
            const postCopy = post.copy[lang];
            const href = postPathFor(post.slug, lang);
            return (
              <li key={post.slug} className="card-lift rounded-2xl border border-line bg-ink-2 p-5 sm:p-6">
                <p className="text-sm text-mist">
                  <time dateTime={post.modified}>{postCopy.updated}</time>
                </p>
                <h3 className="mt-2 font-display text-2xl">
                  <a href={href} className="underline-offset-4 hover:underline">
                    {postCopy.h1}
                  </a>
                </h3>
                <p className="mt-2 leading-relaxed text-mist">{postCopy.dek}</p>
                <p className="mt-4 text-sm">
                  <span className="text-mist">{copy.alsoIn} </span>
                  {others.map((l, i) => (
                    <span key={l}>
                      {i > 0 ? " · " : ""}
                      <a href={postPathFor(post.slug, l)} hrefLang={l} lang={l} dir={LANG_META[l].dir} className="underline underline-offset-4">
                        {LANG_META[l].name}
                      </a>
                    </span>
                  ))}
                </p>
                <a
                  href={href}
                  aria-label={`${copy.read}: ${postCopy.h1}`}
                  className="btn mt-5 inline-flex min-h-11 items-center gap-1 rounded-full px-5 text-sm font-semibold"
                >
                  {copy.read}
                  <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
