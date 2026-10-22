import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";

export const Route = createFileRoute("/blog/best-exercises-for-desk-workers")({
  head: () => postHead("en"),
  component: () => <BlogPostPage lang="en" />,
});
