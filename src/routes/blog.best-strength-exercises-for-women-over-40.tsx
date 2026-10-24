import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { womenOver40Post } from "@/content/blog/women-over-40";

export const Route = createFileRoute("/blog/best-strength-exercises-for-women-over-40")({
  head: () => postHead(womenOver40Post, "en"),
  component: () => <BlogPostPage post={womenOver40Post} lang="en" />,
});
