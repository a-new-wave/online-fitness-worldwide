# CHANGES by Grok Bot

Branch: `grokbot/seo-theme-blog`. Nothing here is merged to `main` or deployed.

## 24 Oct 2026 (IST): third post, localised blog indexes, citation fix

### Blog
- New post: **"Best strength exercises for women over 40: 7 moves to start with"** at `/blog/best-strength-exercises-for-women-over-40`. It targets "strength exercises for women over 40" and "strength training for women over 40", and leads into Iron Hour (with Return, Lean Reset, Open Floor and the Consultation named).
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-strength-exercises-for-women-over-40`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article (with citations and translation links), ItemList (the 7 moves) and BreadcrumbList.
- The 7 moves: squat to a chair, hip hinge with dumbbells or a backpack, press-up (wall, desk, floor), one-arm row, split squat or step-up, back extension lying face down, and heel drops / small hops (only if bones allow).
- Content is in `src/content/blog/women-over-40.ts`. Sources, all real. Each URL was opened and each claim checked against the abstract or page text on 24 Oct 2026:
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. NHS physical activity guidelines for adults 19–64: https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/
  3. NHS strength exercises: https://www.nhs.uk/live-well/exercise/strength-exercises/
  4. ACSM position stand, Progression models in resistance training for healthy adults, MSSE 2009: https://doi.org/10.1249/MSS.0b013e3181915670 (8–12 RM for novices, 2–3 days a week, add 2–10% when you beat the target by 1–2 reps, multi-joint first, bilateral and unilateral).
  5. Westcott, Resistance training is medicine, Curr Sports Med Rep 2012: https://doi.org/10.1249/JSR.0b013e31825dabb8 (3–8% muscle loss per decade in inactive adults; labelled as one review).
  6. Watson et al., LIFTMOR RCT, J Bone Miner Res 2018: https://doi.org/10.1002/jbmr.3284 (101 postmenopausal women with low bone mass, 8 months, twice weekly 30-min supervised 5x5 >85% 1RM + impact; lumbar spine BMD +2.9% vs −1.2%; one minor adverse event). The post says plainly this was closely supervised and screened, and is not a home plan.
  7. Brooke-Wavell et al., Strong, steady and straight: UK consensus statement on exercise for osteoporosis, BJSM 2022: https://doi.org/10.1136/bjsports-2021-104634 (resistance and impact for bone, spinal extension for posture, avoid high spinal flexion, impact up to brisk walking after vertebral or multiple low-trauma fractures).
  8. Momma et al., muscle-strengthening and mortality, BJSM 2022: https://doi.org/10.1136/bjsports-2021-105061 (labelled observational).
  9. Riebe et al., ACSM preparticipation screening, MSSE 2015: https://doi.org/10.1249/MSS.0000000000000664
- The sample week is labelled "Sample only. Not a prescription." There are no client results, no quotes and no prices. The post includes the credentials no-endorsement line and a safety note covering osteoporosis/fractures, pregnancy, postnatal and pelvic floor symptoms.
- `src/content/blog/index.ts` now lists three posts, newest first. Every post's "More from the blog" block, the home page "From the blog" list and the blog indexes pick up the new post automatically.

### Localised blog indexes (new)
- New route `src/routes/$lang.blog.index.tsx` serves `/ar/blog`, `/hi/blog`, `/es/blog`, `/zh/blog`, `/ja/blog` and `/gu/blog`. `/en/blog` and unknown codes return 404.
- New shared component `src/components/blog-index.tsx` (`BlogIndexPage`, `blogIndexHead`) drives both `/blog` and the localised indexes. Each index has its own localised title, description, canonical, the full reciprocal hreflang set (7 + x-default), Blog JSON-LD listing every post in that language, and BreadcrumbList. A language switcher links the 7 indexes.
- Index copy lives in `BLOG_INDEX_COPY` in `src/content/blog/shared.ts`, with new helpers `blogIndexPathFor()` and `blogIndexAlternates()`. The English `/blog` title is unchanged; its description now mentions the new post.
- Localised posts now point to their own-language index: header Blog link, breadcrumb link, breadcrumb JSON-LD and the Article `isPartOf`. Each post also ends with a button back to its blog index.

### SEO, accessibility, speed
- `public/sitemap.xml`: 29 URLs. Home, 7 blog indexes and 7 language URLs for each of the 3 posts, every one with reciprocal `xhtml:link` hreflang and x-default.
- **Bug fix:** citations written as `{n}` inside the "Dose" field were printed as literal text (for example "Start with 5 slow reps.{3}" in the long-break post). The Dose field now renders linked citations like the other fields.
- External links (`target="_blank"`) now use `rel="noopener noreferrer"` (sources, WhatsApp).
- Header nav links on content pages get a 44px minimum tap height (`min-h-11`). The header logo gets `decoding="async"`.
- "Read the list" buttons on the indexes have localised, unique accessible names, and their arrow icons flip in RTL.

### Programs (facts unchanged)
- Iron Hour 60 min 1:1; Lean Reset 20 sessions/month 1:1; Return 45 min, 12 alternate-day sessions/month; Open Floor small group; Consultation 30 min, not training. No prices anywhere; booking holds a time, fee agreed directly.

### Not verified this run (please read)
- **The box computer never finished starting during this run**, so nothing was cloned, built, type-checked or rendered locally. All changes were written and pushed through the GitHub connector only. The code follows the existing patterns line for line, but please run the local build (or the Vite stub config from earlier batches) and check `/blog`, `/ar/blog`, the new post in `en`, `ar` and `gu`, and `/xx/blog` (should be 404) before relying on it.
- `src/routeTree.gen.ts` was updated by hand to add the 3 new routes. The TanStack Router plugin regenerates it on the next dev/build, so any ordering differences there are harmless.

### Still open (needs Susmit)
- Same build blockers as below. Missing platform files and images mean `npm run build` fails from a clean clone.
- No `og:image` yet. Add a 1200×630 `public/og.jpg` by hand (the connector can only write text files), then set `og:image` and `twitter:card=summary_large_image` in `seoHead`. Google's Article rich results also want an `image`, so add it to the Article JSON-LD at the same time.
- The home stats band ("3500+ live sessions conducted", "4–5 average sessions per day", "10+ countries with 90% consistency") is still unverified. Confirm or remove. Nothing was changed there.
- The unused `clientNotes` quotes in `src/studio/content.ts`: delete, or confirm they are real and have consent.
- The six prototype landing pages from `/workspace/jalanpt/site` are still not ported (the box was unavailable this run, so the prototypes could not be read).
- Native-speaker review of the ar, hi, es, zh, ja and gu versions of all three posts and the new blog index copy.
- The home footer still hard-codes one blog link (desk workers). Worth pointing it at `/blog` or the newest post when you next edit `home.tsx`.
- Fonts: the root still loads Outfit and Noto Sans Devanagari from Google Fonts on every page (with preconnect and `display=swap`). Self-hosting them, or loading Devanagari only on Hindi pages, would cut a render-blocking request.

## 23 Oct 2026 (IST): second post, Return program card, blog plumbing, theme polish

### Blog
- New post: **"Best exercises for getting back into exercise after a long break: 7 to start with"** at `/blog/best-exercises-after-a-long-break`. It targets "getting back into exercise after a long break" and "personal trainer at home", and leads into Return.
- Localised versions are at `/{ar,hi,es,zh,ja,gu}/blog/best-exercises-after-a-long-break`. Arabic renders `lang="ar" dir="rtl"`. Each version has its own title, description and canonical, plus the full reciprocal hreflang set (7 languages and x-default). JSON-LD: Article, ItemList (the 7 moves) and BreadcrumbList.
- The 7 moves: brisk walking, sit-to-stand, wall press-up (then desk, then floor), glute bridge, band or backpack row, dead bug, and walk-run intervals.
- Content is in `src/content/blog/back-after-a-break.ts`. Sources, all real, with each claim checked against the source text or abstract:
  1. WHO guidelines on physical activity and sedentary behaviour (2020): https://www.who.int/publications/i/item/9789240015128
  2. NHS physical activity guidelines for adults 19–64: https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/
  3. NHS strength exercises: https://www.nhs.uk/live-well/exercise/strength-exercises/
  4. NHS Couch to 5K: https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/
  5. Riebe et al., ACSM preparticipation screening, MSSE 2015: https://doi.org/10.1249/MSS.0000000000000664
  6. Paluch et al., daily steps and mortality, Lancet Public Health 2022: https://doi.org/10.1016/S2468-2667(21)00302-9
  7. Momma et al., muscle-strengthening and mortality, BJSM 2022: https://doi.org/10.1136/bjsports-2021-105061
  8. Ogasawara et al., continuous vs periodic strength training, Eur J Appl Physiol 2013: https://doi.org/10.1007/s00421-012-2511-9
- Observational findings (6, 7) are labelled as observational. The small trial (8) is labelled as small, with short breaks. The sample month is labelled "Sample only. Not a prescription." There are no client results, no quotes and no prices. The post includes the credentials no-endorsement line and a medical-clearance note covering injury, surgery and a baby.
- The blog now runs on shared plumbing. `src/content/blog/shared.ts` holds languages, types and the path/hreflang helpers. `src/content/blog/index.ts` lists posts newest first. `BlogPostPage` and `postHead` now take a post, and the desk-workers post uses the same code (its URLs are unchanged).
- Every post ends with a localised "More from the blog" block that links to the other posts in the same language. The `/blog` index lists both posts with their language links.

### SEO, accessibility, speed
- `public/sitemap.xml`: 16 URLs. Home, `/blog`, and 7 language URLs for each post, each with reciprocal `xhtml:link` hreflang and x-default.
- Home FAQ section gets a "From the blog" list linking both posts (internal links from the strongest page).
- `/blog` gets a new title, "Fitness Blog: Notes from an Online Personal Trainer | Jalan PT", and Blog JSON-LD now lists every post with its description and dates.
- New root 404 page. It sends `noindex`, has one h1 and links to Home, Programs and Blog. Unknown URLs used to fall back to the default router page.
- The post "Read the list" buttons now have unique accessible names (`aria-label="Read: <title>"`).
- Checked in server-rendered HTML: one title, description and canonical per page, one h1, headings in order (h1, h2, h3), parseable JSON-LD, and 8 hreflang links on every post.

### Programs (facts from the brief)
- **Return is now a program card and a booking option.** It shows 45 min per session and 12 sessions a month on alternate days, plus four benefit lines. It uses the existing Hindi strings and adds new ones. The Consultation detail now names Return.
- **Iron Hour no longer says "20 sessions a month".** It now reads "60 min per session · 1:1, coached live". Only Lean Reset says 20 sessions a month.
- The program grid is now 2×2 on tablet and desktop, so four cards sit evenly.

### Theme polish (logo mark: ink #12110e, orange #e07a3d)
- `.eyebrow`: section labels get a short logo-orange bar, echoing the crossbar of the mark. It flips correctly in RTL. Used on the home sections, the blog index, posts and the 404 page.
- `.card-lift`: program cards, blog list cards and post items pick up an orange-tinted border and a soft shadow on hover and focus-within.
- `.prose-links`: inline links in post copy get a 2px orange underline on ink text.
- Display h1/h2 get tighter tracking (-0.02em) to match the heavy mark. Times and doses use tabular numbers. Form controls and the caret use copper (`accent-color`, `caret-color`). Scrollbar colours are warm.
- No new fonts or downloads.

### Verified
- Built with the same local-only Vite config as last time (it stubs the missing platform files and uses placeholder images). It built cleanly.
- The built server returned 200 for `/`, `/blog`, both English posts and the `ar`, `gu`, `ja` and `hi` versions. It returned 404 for `/xx/blog/...` and `/nope`.
- Arabic and the home page were checked in headless Chrome at 1280px: RTL is right, and the Return card renders.
- `tsc` adds no new errors (the remaining ones are the missing platform files). ESLint has no new errors. The one error, in `src/studio/region.tsx`, was already there.

### Still open
- Same build blockers as below. Missing platform files and images mean `npm run build` fails from a clean clone.
- No `og:image` yet. The GitHub connector can only write text files, so a 1200×630 `public/og.jpg` has to be added by hand. Then set `og:image` and `twitter:card=summary_large_image` in `seoHead`.
- The six prototype landing pages (`/personal-trainer-for-fat-loss` and others) are still not ported.
- The home stats band numbers and the unused `clientNotes` still need your check (see below).
- Get a native speaker to review the ar, hi, es, zh, ja and gu translations of both posts before launch.

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
- ~~The Iron Hour card says "20 sessions a month".~~ Fixed 23 Oct.
- The home stats band claims "3500+ live sessions", "4–5 average sessions per day" and "10+ countries with 90% consistency". Confirm these are accurate.
- ~~Return is not a program card or a booking option yet.~~ Added 23 Oct.

## Suggested next steps
1. Restore the missing platform files and images so `npm run build` works from a clean clone.
2. Add a 1200×630 `og.jpg` and set `og:image` and `twitter:card=summary_large_image` in `seoHead`.
3. Port the prototype landing pages from `/workspace/jalanpt/site` as routes: `/personal-trainer-for-fat-loss`, `/getting-back-into-exercise`, `/online-strength-and-conditioning-coach`, `/online-personal-trainer-india`, `/online-personal-trainer-dubai`, `/online-personal-trainer-singapore`. Add them to the sitemap.
4. ~~Add Return as a program card and a booking option.~~ Done 23 Oct.
5. Get a native speaker to review the ar, hi, es, zh, ja and gu translations before launch.
6. Point DNS for onlinefitness.com at the host before shipping canonicals. Earlier notes say GoDaddy NS had lame delegation.
7. Next blog post ideas: "Best home workouts with one dumbbell", "Best exercises for back pain at a desk". (~~Women over 40~~ done 24 Oct.)
