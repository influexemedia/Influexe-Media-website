import { FaWhatsapp } from "@/components/icons";
import { WHATSAPP_CUSTOM_HREF } from "@/lib/site";

export default function CustomPackageCta({
  title = "Need a customised package?",
  text = "Every business is different. Tell us what you are working toward and we will put together a package that fits your goals, budget, and channels.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-[#0A0A0C] p-8 text-white sm:p-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-brand text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{text}</p>
          </div>
          <a
            href={WHATSAPP_CUSTOM_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0A0A0C] transition-colors hover:bg-neutral-200"
          >
            <FaWhatsapp className="h-4 w-4 text-emerald-600" />
            Chat on WhatsApp for a custom package
          </a>
        </div>
      </div>
    </section>
  );
}
