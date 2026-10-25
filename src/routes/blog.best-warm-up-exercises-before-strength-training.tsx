import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { warmUpPost } from "@/content/blog/warm-up";

export const Route = createFileRoute("/blog/best-warm-up-exercises-before-strength-training")({
  head: () => postHead(warmUpPost, "en"),
  component: () => <BlogPostPage post={warmUpPost} lang="en" />,
});
