import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { backAfterBreakPost } from "@/content/blog/back-after-a-break";

export const Route = createFileRoute("/blog/best-exercises-after-a-long-break")({
  head: () => postHead(backAfterBreakPost, "en"),
  component: () => <BlogPostPage post={backAfterBreakPost} lang="en" />,
});
