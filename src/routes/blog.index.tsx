import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { BLOG_POSTS } from "@/content/blog";
import { LANG_META, POST_LANGS, postPathFor } from "@/content/blog/shared";
import { SITE_URL, WEBSITE_ID, breadcrumbLd, businessLd, seoHead } from "@/lib/seo";

const TITLE = "Fitness Blog: Notes from an Online Personal Trainer | Jalan PT";
const DESCRIPTION =
  "Short, sourced training notes from an online personal trainer in Pune: exercise for desk workers, training at home, and getting back into exercise.";

export const Route = createFileRoute("/blog/")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/blog",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${SITE_URL}/blog#blog`,
          name: "Jalan PT Blog",
          url: `${SITE_URL}/blog`,
          inLanguage: "en",
          isPartOf: { "@id": WEBSITE_ID },
          publisher: { ...businessLd },
          blogPost: BLOG_POSTS.map((post) => ({
            "@type": "BlogPosting",
            headline: post.copy.en.h1,
            description: post.copy.en.metaDescription,
            url: `${SITE_URL}${postPathFor(post.slug, "en")}`,
            datePublished: post.published,
            dateModified: post.modified,
          })),
        },
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]),
      ],
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-bone text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="shell band max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-sm text-mist">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="underline-offset-4 hover:underline">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              Blog
            </li>
          </ol>
        </nav>
        <p className="eyebrow mt-8 text-xs font-semibold tracking-widest text-copper uppercase">Blog</p>
        <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">Notes from the session.</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist">
          Short lines. Real sources. What we would tell you on the call.
        </p>

        <h2 className="sr-only">Articles</h2>
        <ul className="mt-10 space-y-4">
          {BLOG_POSTS.map((post) => {
            const copy = post.copy.en;
            const href = postPathFor(post.slug, "en");
            return (
              <li key={post.slug} className="card-lift rounded-2xl border border-line bg-ink-2 p-5 sm:p-6">
                <p className="text-sm text-mist">
                  <time dateTime={post.modified}>{copy.updated}</time>
                </p>
                <h3 className="mt-2 font-display text-2xl">
                  <a href={href} className="underline-offset-4 hover:underline">
                    {copy.h1}
                  </a>
                </h3>
                <p className="mt-2 leading-relaxed text-mist">{copy.dek}</p>
                <p className="mt-4 text-sm">
                  <span className="text-mist">Also in: </span>
                  {POST_LANGS.filter((l) => l !== "en").map((l, i) => (
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
                  aria-label={`Read: ${copy.h1}`}
                  className="btn mt-5 inline-flex min-h-11 items-center gap-1 rounded-full px-5 text-sm font-semibold"
                >
                  Read the list
                  <ArrowUpRight className="size-4" aria-hidden="true" />
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
