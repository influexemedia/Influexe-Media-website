import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/pages/PageHero";
import CustomPackageCta from "@/components/pages/CustomPackageCta";
import { ABOUT_POINTS, AUDIENCES, SERVICE_DETAILS } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Influexe Media | Digital Marketing Agency in India",
  description:
    "Influexe Media is a digital marketing agency in India offering influencer marketing, UGC ads, social media management, Meta Ads, Google Ads, and lead generation.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Influexe Media | Digital Marketing Agency in India",
    description:
      "Influencer marketing, UGC ads, social media management, Meta Ads, and lead generation for growing businesses.",
    url: "/about",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Influexe Media"
        title="A digital marketing agency built around creators and measurable enquiries."
        lead="Influexe Media helps businesses grow through influencer marketing, UGC ads, social media management, Meta Ads, and lead generation. We combine creator-led content with paid systems so brands can reach the right people and build a steadier flow of enquiries."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C]">Who we are</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
              <p>
                {SITE.name} is a digital marketing agency based in India. We started in 2024 with a simple
                idea: marketing should be easier to understand, easier to measure, and built around the actions that
                matter to a business.
              </p>
              <p>
                Our work spans two connected sides. On one side, we connect brands with creators for influencer
                campaigns and UGC-style ads. On the other, we run paid campaigns on Meta and Google, along with lead
                generation systems and tracking that show where enquiries come from.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C]">Who we work with</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {AUDIENCES.map((item) => (
                <li key={item} className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-sm font-semibold text-[#0A0A0C]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C]">How we work</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ABOUT_POINTS.map((point) => (
              <article key={point.title} className="rounded-3xl bg-neutral-50 p-7">
                <h3 className="font-brand text-lg font-bold text-[#0A0A0C]">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C]">Our services</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {SERVICE_DETAILS.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A0A0C] transition-colors hover:bg-neutral-100"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CustomPackageCta />
    </main>
  );
}
