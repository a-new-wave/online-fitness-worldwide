import { backAfterBreakPost } from "./back-after-a-break";
import { deskWorkersPost } from "./desk-workers";
import { warmUpPost } from "./warm-up";
import { womenOver40Post } from "./women-over-40";
import type { BlogPost } from "./shared";

/** Every post, newest first. The blog index, related links and sitemap follow this list. */
export const BLOG_POSTS: BlogPost[] = [warmUpPost, womenOver40Post, backAfterBreakPost, deskWorkersPost];

export { backAfterBreakPost, deskWorkersPost, warmUpPost, womenOver40Post };
