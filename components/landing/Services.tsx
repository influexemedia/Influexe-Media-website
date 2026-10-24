import { Megaphone, Search, Target, BarChart3, type LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/content";

const ICONS: LucideIcon[] = [Megaphone, Search, Target, BarChart3];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">Services</p>
          <h2 className="mt-3 font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C] sm:text-4xl">
            Paid advertising built around enquiries, not vanity metrics.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <article
                key={service.title}
                className="group rounded-3xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-100 to-pink-100 text-violet-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-brand text-xl font-bold text-[#0A0A0C]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
