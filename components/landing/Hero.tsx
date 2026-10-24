import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BOOK_CALL_HREF, BOOK_CALL_LINK_PROPS, SITE, WHATSAPP_HREF } from "@/lib/site";
import { FaWhatsapp } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(168,85,247,0.12),transparent),radial-gradient(50%_40%_at_90%_20%,rgba(236,72,153,0.10),transparent)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-5 inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600">
            Meta Ads · Google Ads · Lead Generation
          </p>
          <h1 className="font-brand text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-[#0A0A0C] sm:text-5xl lg:text-6xl">
            Turn Attention Into{" "}
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
              Measurable Growth.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Performance-focused advertising and lead generation systems designed to help businesses reach the right
            audience, generate enquiries, and build a more predictable acquisition process.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={BOOK_CALL_HREF}
              {...BOOK_CALL_LINK_PROPS}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#2C2C31] via-[#1B1B1E] to-[#0A0A0C] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0A0A0C] transition-colors hover:bg-neutral-100"
            >
              Explore Our Services
            </Link>
          </div>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-[#0A0A0C]"
          >
            <FaWhatsapp className="h-4 w-4 text-emerald-600" />
            Prefer WhatsApp? Message us at +{SITE.whatsappNumber.slice(0, 2)} {SITE.whatsappNumber.slice(2, 7)}{" "}
            {SITE.whatsappNumber.slice(7)}
          </a>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-violet-200/50 via-white to-pink-200/50 blur-2xl" />
          <div className="relative w-full rounded-[2rem] border border-neutral-200 bg-white p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
            <Image
              src="/influexe-logo.png"
              alt="Influexe Media"
              width={806}
              height={271}
              priority
              className="mx-auto h-auto w-full max-w-sm"
            />
            <div className="mt-8 grid grid-cols-2 gap-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-500">
              <div className="rounded-xl bg-neutral-50 py-4">Reach</div>
              <div className="rounded-xl bg-neutral-50 py-4">Enquiries</div>
              <div className="rounded-xl bg-neutral-50 py-4">Tracking</div>
              <div className="rounded-xl bg-neutral-50 py-4">Reporting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
