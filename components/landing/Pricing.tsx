import { Check } from "lucide-react";
import { INCLUDED, INTERNATIONAL_PLANS, NOT_INCLUDED, PREMIUM_PLANS, type Plan } from "@/lib/content";
import { BOOK_CALL_HREF, BOOK_CALL_LINK_PROPS } from "@/lib/site";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

function PlanCard({ plan, highlight = false }: { plan: Plan; highlight?: boolean }) {
  const savingsPerMonth = plan.monthly - plan.sixMonthRate;
  const sixMonthTotal = plan.sixMonthRate * 6;
  const totalSavings = savingsPerMonth * 6;

  return (
    <article
      className={`flex flex-col rounded-3xl border p-7 ${
        highlight ? "border-neutral-900 bg-[#0A0A0C] text-white" : "border-neutral-200 bg-white text-[#0A0A0C]"
      }`}
    >
      <p className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-white/60" : "text-neutral-500"}`}>
        {plan.platforms}
      </p>
      <h3 className="mt-2 font-brand text-2xl font-bold">{plan.name}</h3>

      <div className="mt-6">
        <p className="font-brand text-4xl font-bold">
          {usd(plan.monthly)}
          <span className={`text-base font-medium ${highlight ? "text-white/60" : "text-neutral-500"}`}>/month</span>
        </p>
        <p className={`mt-1 text-sm ${highlight ? "text-white/60" : "text-neutral-500"}`}>Standard monthly rate</p>
      </div>

      <div className={`mt-5 rounded-2xl p-4 ${highlight ? "bg-white/10" : "bg-neutral-50"}`}>
        <p className="text-sm font-semibold">
          Six-month rate: {usd(plan.sixMonthRate)}/month
        </p>
        <p className={`mt-1 text-xs leading-relaxed ${highlight ? "text-white/70" : "text-neutral-600"}`}>
          Save {usd(totalSavings)} over six months. Total {usd(sixMonthTotal)}, billed monthly.
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-relaxed">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${highlight ? "text-pink-400" : "text-violet-600"}`} />
            <span className={highlight ? "text-white/85" : "text-neutral-700"}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={BOOK_CALL_HREF}
        {...BOOK_CALL_LINK_PROPS}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
          highlight ? "bg-white text-[#0A0A0C] hover:bg-neutral-200" : "bg-[#0A0A0C] text-white hover:bg-neutral-800"
        }`}
      >
        Book a Strategy Call
      </a>
    </article>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 border-t border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">Pricing</p>
          <h2 className="mt-3 font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C] sm:text-4xl">
            Simple monthly plans, with a six-month rate for committed clients.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            Six-month rates apply to the full six-month commitment. You are billed monthly, not upfront. Campaign limits
            and retargeting depend on account fit and available data. Payment dates, cancellation, and early-termination
            terms are set out in the signed service agreement.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="font-brand text-xl font-bold text-[#0A0A0C]">International Growth Plans</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {INTERNATIONAL_PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-brand text-xl font-bold text-[#0A0A0C]">Premium Business Plans</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {PREMIUM_PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} highlight={plan.name === "Growth Partner"} />
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 rounded-3xl bg-neutral-50 p-8 md:grid-cols-2 md:p-10">
          <div>
            <h3 className="font-brand text-lg font-bold text-[#0A0A0C]">Included in your plan</h3>
            <ul className="mt-4 space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-brand text-lg font-bold text-[#0A0A0C]">Not included unless separately agreed</h3>
            <ul className="mt-4 space-y-3">
              {NOT_INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
