import { FAQS } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">FAQ</p>
        <h2 className="mt-3 font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C] sm:text-4xl">
          Common questions
        </h2>
        <div className="mt-10 divide-y divide-neutral-200 rounded-3xl border border-neutral-200 bg-white">
          {FAQS.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#0A0A0C] marker:hidden">
                {item.q}
                <span className="text-xl leading-none text-neutral-400 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
