"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

const INPUT_CLASS =
  "flex h-11 w-full rounded-xl border border-neutral-300/80 bg-white/90 px-3.5 py-2 text-sm text-[#0A0A0C] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-2xs";
const SELECT_CLASS =
  "flex h-11 w-full rounded-xl border border-neutral-300/80 bg-white/90 px-3.5 py-2 text-sm text-[#0A0A0C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer shadow-2xs font-ui";
const LABEL_CLASS =
  "text-xs font-semibold text-neutral-700 tracking-wide uppercase font-ui select-none block mb-1.5";

const BUTTON_CLASS =
  "inline-flex items-center justify-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-gradient-to-b from-[#2C2C31] via-[#1B1B1E] to-[#0A0A0C] border border-white/20 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]";

const SERVICES = [
  "Meta Ads",
  "Google Ads",
  "Lead Generation",
  "Conversion Tracking & Reporting",
  "Not sure yet",
];

const SOURCES: { value: string; label: string }[] = [
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "Google Search", label: "Google Search" },
  { value: "Instagram", label: "Instagram" },
  { value: "Friend / Referral", label: "Friend / Referral" },
  { value: "Twitter / X", label: "Twitter / X" },
  { value: "Other", label: "Other (Specify manually)" },
];

const INITIAL = {
  fullName: "",
  email: "",
  phone: "",
  businessName: "",
  service: "",
  source: "LinkedIn",
  customSource: "",
};

type FormState = typeof INITIAL;
export default function BookACallForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL);

  const set =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  // No backend exists yet, so the enquiry is handed to the visitor's email app
  // as a pre-filled draft. We never claim it was delivered.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.service) return;
    const source = form.source === "Other" ? form.customSource || "Other" : form.source;
    const subject = `Strategy call request: ${form.businessName || form.fullName}`;
    const body = [
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "-"}`,
      `Business: ${form.businessName || "-"}`,
      `Service interest: ${form.service}`,
      `How they heard about us: ${source}`,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg">
          <Mail className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold font-brand text-[#0A0A0C]">Almost there</h3>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md font-ui leading-relaxed">
            Your email app should open with your details pre-filled. Press send there to reach us. If nothing opened,
            email{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-neutral-900 underline underline-offset-4">
              {SITE.email}
            </a>{" "}
            directly.
          </p>
        </div>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className={`${BUTTON_CLASS} px-7 py-3 text-xs font-semibold uppercase tracking-wider`}
          >
            Back to form
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="grid gap-4">
        <div>
          <label className={LABEL_CLASS} htmlFor="fullName">Full name *</label>
          <input type="text" className={INPUT_CLASS} id="fullName" placeholder="Alex Morgan" required value={form.fullName} onChange={set("fullName")} />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="email">Email *</label>
          <input type="email" className={INPUT_CLASS} id="email" placeholder="alex@example.com" required value={form.email} onChange={set("email")} />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="phone">Phone Number *</label>
          <input type="tel" className={INPUT_CLASS} id="phone" placeholder="+1 (555) 000-0000" required value={form.phone} onChange={set("phone")} />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="businessName">Company / Business name *</label>
          <input type="text" className={INPUT_CLASS} id="businessName" placeholder="Acme Business Corp" required value={form.businessName} onChange={set("businessName")} />
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="service">Which service do you want? *</label>
          <select id="service" className={SELECT_CLASS} required value={form.service} onChange={set("service")}>
            <option value="" disabled>Select a service...</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={LABEL_CLASS} htmlFor="source">Where did you hear about us? *</label>
          <select id="source" className={SELECT_CLASS} required value={form.source} onChange={set("source")}>
            {SOURCES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        {form.source === "Other" && (
          <div className="mt-1">
            <label className={LABEL_CLASS} htmlFor="customSource">Please specify where you heard about us *</label>
            <input type="text" className={INPUT_CLASS} id="customSource" placeholder="e.g. YouTube, Tech Blog, Podcast" required value={form.customSource} onChange={set("customSource")} />
          </div>
        )}
      </div>
      <div>
        <p className="text-neutral-500 text-xs font-ui leading-relaxed">
          By submitting this form, I agree that Influexe Media may contact me using the details above to
          arrange a strategy call.
        </p>
      </div>
      <button
        className={`${BUTTON_CLASS} px-6 w-full group text-base py-3.5 font-semibold`}
        type="submit"
      >
        <span>Confirm Discovery Call</span>
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>
    </form>
  );
}
