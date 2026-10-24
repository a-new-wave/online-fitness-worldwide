import type { ReactNode } from "react";
import ofwLogo from "@/assets/ofw-logo.png";
import { WHATSAPP_E164 } from "@/studio/content";

/** Header and footer for content pages (blog). The home page keeps its own. */
export function SiteHeader({
  homeLabel = "Home",
  blogLabel = "Blog",
  blogHref = "/blog",
}: {
  homeLabel?: string;
  blogLabel?: string;
  /** Blog index for the current language, e.g. /ar/blog. */
  blogHref?: string;
}) {
  return (
    <header className="border-b border-line bg-ink-2">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a href="/" className="flex items-center" aria-label={`Online Fitness Worldwide, Jalan PT: ${homeLabel}`}>
          <img src={ofwLogo} alt="" width={160} height={44} decoding="async" className="h-8 w-auto sm:h-10" />
        </a>
        <nav aria-label="Site" className="flex items-center gap-5 text-sm">
          <a href="/#programs" className="inline-flex min-h-11 items-center text-mist hover:text-ink" lang="en">
            Programs
          </a>
          <a href={blogHref} className="inline-flex min-h-11 items-center text-mist hover:text-ink">
            {blogLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter({ children }: { children?: ReactNode }) {
  return (
    <footer className="border-t border-line bg-ink text-bone">
      <div className="shell grid gap-6 py-10 text-sm sm:grid-cols-2">
        <div>
          <p className="font-display text-xl text-bone" lang="en" dir="ltr">
            Jalan PT · Online Fitness Worldwide
          </p>
          <p className="mt-2 text-bone/80" lang="en" dir="ltr">
            Pune. Live online coaching on Meet, Zoom or FaceTime, in Hindi or English, on IST.
          </p>
          {children}
        </div>
        <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-5 gap-y-2 sm:justify-end" lang="en" dir="ltr">
          <a href="/" className="text-bone underline-offset-4 hover:underline">
            Home
          </a>
          <a href="/#programs" className="text-bone underline-offset-4 hover:underline">
            Programs
          </a>
          <a href="/#hour" className="text-bone underline-offset-4 hover:underline">
            The hour
          </a>
          <a href="/blog" className="text-bone underline-offset-4 hover:underline">
            Blog
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_E164}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bone underline-offset-4 hover:underline"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </footer>
  );
}
