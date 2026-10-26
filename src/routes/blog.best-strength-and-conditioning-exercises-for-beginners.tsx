import { createFileRoute } from "@tanstack/react-router";
import { BlogPostPage, postHead } from "@/components/blog-post";
import { strengthConditioningPost } from "@/content/blog/strength-conditioning";

export const Route = createFileRoute("/blog/best-strength-and-conditioning-exercises-for-beginners")({
  head: () => postHead(strengthConditioningPost, "en"),
  component: () => <BlogPostPage post={strengthConditioningPost} lang="en" />,
});
