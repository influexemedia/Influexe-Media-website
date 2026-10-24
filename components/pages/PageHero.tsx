import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BOOK_CALL_HREF, BOOK_CALL_LINK_PROPS } from "@/lib/site";

export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_0%,rgba(168,85,247,0.10),transparent),radial-gradient(50%_40%_at_90%_10%,rgba(236,72,153,0.08),transparent)]"
      />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">{eyebrow}</p>
        <h1 className="mt-4 font-brand text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0A0A0C] sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">{lead}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={BOOK_CALL_HREF}
            {...BOOK_CALL_LINK_PROPS}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#2C2C31] via-[#1B1B1E] to-[#0A0A0C] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/#pricing"
            className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0A0A0C] transition-colors hover:bg-neutral-100"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
