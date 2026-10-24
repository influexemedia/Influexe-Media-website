import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-28 border-y border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-pink-600">How We Work</p>
          <h2 className="mt-3 font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C] sm:text-4xl">
            A clear four-step process from first call to ongoing optimization.
          </h2>
        </div>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((item) => (
            <li key={item.step} className="rounded-3xl bg-neutral-50 p-7">
              <span className="font-mono text-sm font-bold text-violet-600">{item.step}</span>
              <h3 className="mt-4 font-brand text-lg font-bold text-[#0A0A0C]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
