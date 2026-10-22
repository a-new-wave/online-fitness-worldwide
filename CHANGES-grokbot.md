# CHANGES by Grok Bot

Branch: `grokbot/seo-theme-blog`. Nothing here is merged to `main` or deployed.

## 22 Oct 2026 (IST): SEO, theme, first blog post

### SEO, accessibility, speed
- `src/lib/seo.ts`: a new helper. Every route now sets its own title, meta description, canonical, Open Graph and Twitter tags, hreflang alternates and JSON-LD. The domain lives in one constant, `SITE_URL = https://onlinefitness.com`.
- Home (`/`): title "Online Personal Trainer, Live 1:1 on Video | Jalan PT", plus a new description. JSON-LD graph has WebSite, ProfessionalService (Jalan PT, Pune, Hindi and English, programs listed with **no prices**), Person (Susmit Jalan, credentials named only) and FAQPage.
- Root `<html>` now takes `lang` and `dir` from the route. `/ar/...` renders `lang="ar" dir="rtl"` on the server.
- `public/robots.txt` (allows all, blocks `/__grok/`, lists the sitemap) and `public/sitemap.xml` (home, `/blog`, all 7 language URLs of the post, each with reciprocal `xhtml:link` hreflang and x-default).
- Headings: one h1 per page, h2 then h3 in order (checked in server-rendered HTML).
- Alt text: the Lean Reset photo had an empty alt and now has one. Coach photo and credential logos have fuller alts.
- Images below the fold load with `loading="lazy"` and `decoding="async"`. The hero image gets `fetchPriority="high"`.
- Focus ring is now 3px copper: 5.4:1 on bone, and logo orange on dark sections (6.3:1). The EN/हिंदी toggles now have `aria-pressed` and `lang`.
- FAQ copy aimed at target searches, with no new facts beyond the brief:
  - "How do I pay?" is now "What does an online personal trainer cost?" Same answer, no price.
  - New: "Can I train at home?"
  - New: "I have not trained in years. Where do I start?" Answer: Return, 45 min, 12 alternate-day sessions a month.
  - New: "I live in Dubai or Singapore. Does that work?"
  - Hindi strings added for each one in `src/studio/hindi.ts`.
- Hero eyebrow now reads "Online personal trainer · Live from Pune". The hero line adds "at home". Header nav and footer link to the blog. The footer gives business facts and says ASCA and ACE don't endorse the business.

### Theme (from the logo mark in `public/favicon.svg`)
- Ink `#12110e` and logo orange `#e07a3d` (`--color-copper-2`) on the existing bone paper. `--color-copper` is now `#9c4615`, a darker copper for text and links that passes AA on light backgrounds. Before, both copper variables were plain `#111111`.
- The off-brand blue (`#0050f8`) hero WhatsApp button and closing CTA band are gone. WhatsApp uses the existing `.btn-wa`. The CTA band is ink, with a new `.btn-accent` button (orange with ink text, 6.3:1).
- `.btn` gets a thin orange underline. Icons on ink use the orange. Selected text is orange with ink text.
- Font stack falls back to Noto Gujarati, Arabic, SC and JP for the new languages. Nothing extra is downloaded.

### Blog
- `/blog` index, plus a post: **"Best exercises for desk workers: 7 moves that fit a workday"** at `/blog/best-exercises-for-desk-workers`.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-exercises-for-desk-workers`. Each has its own title, description and canonical, the full reciprocal hreflang set (7 languages plus x-default), and Article and BreadcrumbList JSON-LD. Unknown language codes return 404.
- Content is in `src/content/blog/desk-workers.ts`. Citations are written as `{n}` and link to a numbered source list.
- Sources, all real and opened:
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. Bull et al., Br J Sports Med 2020: https://pmc.ncbi.nlm.nih.gov/articles/PMC7719906/
  3. NHS physical activity guidelines for adults 19–64: https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/
  4. Dunstan et al., Diabetes Care 2012: https://doi.org/10.2337/dc11-1931
  5. Andersen et al., Pain 2011: https://doi.org/10.1016/j.pain.2010.11.016
  6. Ekelund et al., Lancet 2016: https://doi.org/10.1016/S0140-6736(16)30370-1
- No invented stats, no client results, no prices. The sample week is labelled "Sample only. Not a prescription." The post includes a medical-safety note and the credentials no-endorsement line.

### Verified
- `npm run build` cannot run on this repo as committed (see blockers below). The build was checked with a local-only Vite config that stubs the missing platform files and uses placeholder images. It built cleanly.
- The built server returned 200 for `/`, `/blog`, the English post and the `ar` and `gu` posts, and 404 for `/xx/blog/...`.
- Server-rendered HTML has exactly one title, description and canonical per page, hreflang on posts, and parseable JSON-LD.
- Arabic was checked in headless Chrome at 390px: RTL layout is right and there are no console errors.
- `tsc` adds no new errors. ESLint shows no errors and one fast-refresh warning.

## Blockers found (not fixed here)
- **The repo cannot build from a clean clone.** These are missing:
  - `scripts/grok-pwa-shared.mjs`, `src/lib/preview-host-bridge.ts`, and `src/lib/auth/{client,server,verify.server}`, `src/lib/app-data/{client.server,use-connector-readiness}.ts` and `src/lib/multiplayer/p2p`.
  - Every image in `src/assets/` (including `ofw-logo.png`), plus `public/og.jpg`. `binary-parts/manifest.json` lists about 29 files, but only 2 parts are committed.
  - The cPanel zip parts look incomplete (`part-09`/`part-10` are a few bytes).
- `npm install` fails with the box's npm 9 (`edgesOut` error). It works with npm 10 and `--legacy-peer-deps`. TanStack Start packages also want Node ≥ 22.12.

## Please check (facts I did not change)
- `src/studio/content.ts` has `clientNotes`: eight named first-person quotes that read like testimonials. They are not rendered anywhere today. Delete them, or confirm they are real and have consent.
- The Iron Hour card says "20 sessions a month". The brief gives 20 a month for Lean Reset only.
- The home stats band claims "3500+ live sessions", "4–5 average sessions per day" and "10+ countries with 90% consistency". Confirm these are accurate.
- Return is not a program card or a booking option yet. It only appears in the new FAQ and the blog.

## Suggested next steps
1. Restore the missing platform files and images so `npm run build` works from a clean clone.
2. Add a 1200×630 `og.jpg` and set `og:image` and `twitter:card=summary_large_image` in `seoHead`.
3. Port the prototype landing pages from `/workspace/jalanpt/site` as routes: `/personal-trainer-for-fat-loss`, `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, `/online-personal-trainer-india`, `/online-personal-trainer-dubai`, `/online-personal-trainer-singapore`. Add them to the sitemap.
4. Add Return as a program card and a booking option.
5. Get a native speaker to review the ar, hi, es, zh, ja and gu translations before launch.
6. Point DNS for onlinefitness.com at the host before shipping canonicals. Earlier notes say GoDaddy NS had lame delegation.
7. Next blog post ideas: "Best strength routines for women over 40", "Best home workouts with one dumbbell".
