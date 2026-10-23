import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { deskWorkersPost } from "@/content/blog/desk-workers";

export const Route = createFileRoute("/blog/best-exercises-for-desk-workers")({
  head: () => postHead(deskWorkersPost, "en"),
  component: () => <BlogPostPage post={deskWorkersPost} lang="en" />,
});
