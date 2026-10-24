import { Mail } from "lucide-react";
import BookACallForm from "@/components/book-a-call/BookACallForm";
import { FaWhatsapp } from "@/components/icons";
import { BOOK_CALL_HREF, BOOK_CALL_LINK_PROPS, EMAIL_HREF, SITE, WHATSAPP_HREF } from "@/lib/site";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">Contact</p>
          <h2 className="mt-3 font-brand text-3xl font-bold tracking-[-0.02em] text-[#0A0A0C] sm:text-4xl">
            Book a Strategy Call
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            Pick a time that suits you, or send a short enquiry. We will look at your current setup and tell you
            honestly whether we are the right fit.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={BOOK_CALL_HREF}
              {...BOOK_CALL_LINK_PROPS}
              className="flex items-center justify-center gap-2 rounded-full bg-[#0A0A0C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Choose a time on Calendly
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0A0A0C] transition-colors hover:bg-neutral-100"
            >
              <FaWhatsapp className="h-4 w-4 text-emerald-600" />
              Chat on WhatsApp
            </a>
            <a
              href={EMAIL_HREF}
              className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#0A0A0C] transition-colors hover:bg-neutral-100"
            >
              <Mail className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
          <div className="mt-8 border-t border-neutral-200 pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">Follow us</p>
            <SocialLinks className="text-neutral-700 [&_a:hover]:text-black" />
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-[#FAFAF9] p-6 sm:p-8 lg:col-span-3">
          <BookACallForm />
        </div>
      </div>
    </section>
  );
}
