import { createFileRoute } from "@tanstack/react-router";
import { BlogIndexPage, blogIndexHead } from "@/components/blog-index";

/** English blog index. Localised indexes live at /{lang}/blog (see $lang.blog.index.tsx). */
export const Route = createFileRoute("/blog/")({
  head: () => blogIndexHead("en"),
  component: () => <BlogIndexPage lang="en" />,
});
