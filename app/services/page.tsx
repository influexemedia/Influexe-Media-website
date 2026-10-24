import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHero from "@/components/pages/PageHero";
import CustomPackageCta from "@/components/pages/CustomPackageCta";
import { SERVICE_DETAILS } from "@/lib/content";
import { WHATSAPP_CUSTOM_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Meta Ads, Google Ads & Lead Generation | Influexe Media",
  description:
    "Meta Ads management, Google Ads management, lead generation, influencer marketing, UGC ads, and social media management from Influexe Media in India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Marketing Services | Influexe Media",
    description:
      "Meta Ads, Google Ads, lead generation, influencer marketing, UGC ads, and social media management.",
    url: "/services",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Digital marketing services for brands that want enquiries, not just reach."
        lead="Choose a single service or combine them. Meta Ads, Google Ads, and lead generation are available as fixed monthly packages. Influencer marketing, UGC ads, and social media management are scoped to your business and quoted individually."
      />

      <section className="pb-8">
        <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-8">
          {SERVICE_DETAILS.map((service, i) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 grid gap-8 rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 lg:grid-cols-5"
            >
              <div className="lg:col-span-2">
                <p className="font-mono text-xs font-bold text-violet-600">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-brand text-2xl font-bold tracking-[-0.02em] text-[#0A0A0C] sm:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">{service.summary}</p>
                <div className="mt-6">
                  {service.model === "pricing" ? (
                    <Link
                      href="/#pricing"
                      className="inline-flex rounded-full bg-[#0A0A0C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                    >
                      View packages
                    </Link>
                  ) : (
                    <a
                      href={WHATSAPP_CUSTOM_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-[#0A0A0C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                    >
                      Get a custom quote
                    </a>
                  )}
                </div>
              </div>
              <ul className="space-y-4 lg:col-span-3 lg:self-center">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CustomPackageCta
        title="Combining services? We will build the mix for you."
        text="Many clients pair influencer campaigns with paid ads and lead generation. Message us on WhatsApp and we will suggest a package that matches your goals and budget."
      />
    </main>
  );
}
