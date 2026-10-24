import { CASE_STUDIES } from "@/lib/content";

export default function Results() {
  return (
    <section id="results" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Results</p>
          <h2 className="mt-3 font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C] sm:text-4xl">
            Case studies
          </h2>
        </div>

        {CASE_STUDIES.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-neutral-300 bg-white p-10 text-center">
            <p className="font-brand text-xl font-bold text-[#0A0A0C]">Case studies coming soon.</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
              We are preparing verified client results. Every figure shown here will come from real campaign data and
              client permission.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <article key={study.client} className="rounded-3xl border border-neutral-200 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{study.industry}</p>
                <h3 className="mt-3 font-brand text-xl font-bold text-[#0A0A0C]">{study.client}</h3>
                <p className="mt-4 font-brand text-3xl font-bold text-[#0A0A0C]">{study.metric}</p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">{study.summary}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
