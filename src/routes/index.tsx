import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home";
import { faqs } from "@/studio/content";
import { BUSINESS_ID, SITE_URL, WEBSITE_ID, businessLd, coachLd, seoHead } from "@/lib/seo";
import { RegionProvider } from "@/studio/region";
import { StudioProvider } from "@/studio/studio-context";

const TITLE = "Online Personal Trainer, Live 1:1 on Video | Jalan PT";
const DESCRIPTION =
  "Online personal trainer in Pune, live on Meet, Zoom or FaceTime. 1:1 and small-group training at home, in Hindi or English, on IST. India, Dubai, Singapore.";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: TITLE,
      description: DESCRIPTION,
      path: "/",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": WEBSITE_ID,
              url: `${SITE_URL}/`,
              name: "Jalan PT",
              alternateName: "Online Fitness Worldwide",
              inLanguage: "en",
              publisher: { "@id": BUSINESS_ID },
            },
            businessLd,
            coachLd,
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            },
          ],
        },
      ],
    }),
  component: Home,
});

function Home() {
  return (
    <RegionProvider>
      <StudioProvider>
        <HomePage />
      </StudioProvider>
    </RegionProvider>
  );
}
