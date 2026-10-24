import type { Metadata } from "next";
import PageHero from "@/components/pages/PageHero";
import CustomPackageCta from "@/components/pages/CustomPackageCta";
import { CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Work | Influencer Campaigns, UGC Ads & Meta Ads Case Studies | Influexe Media",
  description:
    "Case studies and campaign work from Influexe Media across influencer marketing, UGC ads, Meta Ads, and lead generation.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Our Work | Influexe Media",
    description: "Case studies across influencer marketing, UGC ads, Meta Ads, and lead generation.",
    url: "/our-work",
    images: ["/og-image.jpg"],
  },
};

export default function OurWorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Work"
        title="Campaigns and case studies."
        lead="Here you will find campaign results across influencer marketing, UGC ads, social media, and paid lead generation. Every case study is shared with the client's permission and built from real campaign data."
      />

      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {CASE_STUDIES.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-neutral-300 bg-white p-12 text-center">
              <p className="font-brand text-2xl font-bold text-[#0A0A0C]">Case studies coming soon.</p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                We are preparing verified results from recent campaigns. Each entry will include the industry, the
                campaign approach, and the outcomes the client has approved for publication.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <article key={study.client} className="rounded-3xl border border-neutral-200 bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{study.industry}</p>
                  <h2 className="mt-3 font-brand text-xl font-bold text-[#0A0A0C]">{study.client}</h2>
                  <p className="mt-4 font-brand text-3xl font-bold text-[#0A0A0C]">{study.metric}</p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">{study.summary}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CustomPackageCta
        title="Want results like these for your brand?"
        text="Share your goals and we will explain what a realistic plan looks like for your business, including the budget and timeline it needs."
      />
    </main>
  );
}
