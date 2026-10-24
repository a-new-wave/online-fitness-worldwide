import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogIndexPage, blogIndexHead } from "@/components/blog-index";
import { isPostLang, type PostLang } from "@/content/blog/shared";

/** Localised blog indexes: /ar/blog, /hi/blog, /es/blog, /zh/blog, /ja/blog, /gu/blog. English lives at /blog. */
export const Route = createFileRoute("/$lang/blog/")({
  beforeLoad: ({ params }) => {
    if (!isPostLang(params.lang) || params.lang === "en") throw notFound();
  },
  head: ({ params }) => (isPostLang(params.lang) ? blogIndexHead(params.lang) : {}),
  component: LocalisedBlogIndex,
});

function LocalisedBlogIndex() {
  const { lang } = Route.useParams();
  return <BlogIndexPage lang={lang as PostLang} />;
}
