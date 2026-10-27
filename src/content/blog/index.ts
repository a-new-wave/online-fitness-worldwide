import { backAfterBreakPost } from "./back-after-a-break";
import { coolDownPost } from "./cool-down";
import { deskWorkersPost } from "./desk-workers";
import { strengthConditioningPost } from "./strength-conditioning";
import { warmUpPost } from "./warm-up";
import { womenOver40Post } from "./women-over-40";
import type { BlogPost } from "./shared";

/** Every post, newest first. The blog index, related links and sitemap follow this list. */
export const BLOG_POSTS: BlogPost[] = [
  coolDownPost,
  strengthConditioningPost,
  warmUpPost,
  womenOver40Post,
  backAfterBreakPost,
  deskWorkersPost,
];

export { backAfterBreakPost, coolDownPost, deskWorkersPost, strengthConditioningPost, warmUpPost, womenOver40Post };
