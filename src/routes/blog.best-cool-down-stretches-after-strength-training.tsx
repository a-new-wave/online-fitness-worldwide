import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { coolDownPost } from "@/content/blog/cool-down";

export const Route = createFileRoute("/blog/best-cool-down-stretches-after-strength-training")({
  head: () => postHead(coolDownPost, "en"),
  component: () => <BlogPostPage post={coolDownPost} lang="en" />,
});
