import { createRootRoute, HeadContent, Outlet, Scripts, useMatches } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";
import { isPostLang, LANG_META } from "@/content/blog/shared";

// Fallbacks only. Every route sets its own title, description, canonical and JSON-LD (see src/lib/seo.ts).
const APP_NAME = "Jalan PT · Online Fitness Worldwide";
const APP_DESCRIPTION =
  "Live online personal training with coach Susmit Jalan, from Pune. 1:1 and small-group sessions on Meet, Zoom or FaceTime, in Hindi or English, on IST.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: APP_NAME },
      { name: "description", content: APP_DESCRIPTION },
      { property: "og:title", content: APP_NAME },
      { property: "og:description", content: APP_DESCRIPTION },
      { name: "twitter:title", content: APP_NAME },
      { name: "twitter:description", content: APP_DESCRIPTION },
      { name: "theme-color", content: "#06070a" },
      { name: "author", content: "Susmit Jalan" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;700;800&family=Outfit:wght@400;500;640;800&display=swap",
      },
    ],
    scripts: [
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-MJC0RCPRZS",
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MJC0RCPRZS');`,
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

/** 404: tells crawlers not to index it, and points people back to real pages. */
function NotFound() {
  return (
    <main id="main" className="shell band max-w-2xl">
      <meta name="robots" content="noindex" />
      <p className="eyebrow text-xs font-semibold tracking-widest text-copper uppercase">404</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">That page is not here.</h1>
      <p className="mt-4 text-lg leading-relaxed text-mist">Wrong link, or it moved. Start again from one of these.</p>
      <ul className="mt-6 flex flex-wrap gap-3">
        <li>
          <a href="/" className="btn inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold">
            Home
          </a>
        </li>
        <li>
          <a href="/#programs" className="btn-light inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold">
            Programs
          </a>
        </li>
        <li>
          <a href="/blog" className="btn-light inline-flex min-h-11 items-center rounded-full px-5 text-sm font-semibold">
            Blog
          </a>
        </li>
      </ul>
    </main>
  );
}

/** <html lang/dir> follows the localised route (/ar/... is RTL). The home page may still switch to Hindi client-side. */
function useDocumentLang(): { lang: string; dir: "ltr" | "rtl" } {
  const matches = useMatches();
  for (const match of matches) {
    const lang = (match.params as { lang?: string }).lang;
    if (lang && isPostLang(lang)) return { lang, dir: LANG_META[lang].dir };
  }
  return { lang: "en", dir: "ltr" };
}

function RootDocument() {
  const { lang, dir } = useDocumentLang();
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
