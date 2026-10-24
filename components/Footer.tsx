import Image from "next/image";
import Link from "next/link";
import CurrentYear from "./CurrentYear";
import { BOOK_CALL_HREF, BOOK_CALL_LINK_PROPS, EMAIL_HREF, SITE, WHATSAPP_HREF } from "@/lib/site";
import SocialLinks from "./SocialLinks";

const DESCRIPTION =
  "Performance-focused Meta Ads, Google Ads, lead generation systems, and conversion tracking for businesses that want a more predictable acquisition process.";

const SECTIONS = [
  {
    title: "Services",
    links: [
      { name: "Meta Ads", href: "/services#meta-ads" },
      { name: "Google Ads", href: "/services#google-ads" },
      { name: "Lead Generation", href: "/services#lead-generation" },
      { name: "Influencer Marketing", href: "/services#influencer-marketing" },
      { name: "UGC Ads", href: "/services#ugc-ads" },
      { name: "Social Media Management", href: "/services#social-media" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/our-work" },
      { name: "Pricing", href: "/#pricing" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 bg-[#0A0A0C] text-white border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col gap-4 lg:items-start max-w-sm shrink-0">
            <Link href="/" className="inline-flex w-fit">
              {/* The logo is dark-on-light, so it sits on a white chip in the dark footer. */}
              <span className="inline-flex items-center rounded-xl bg-white px-3 py-2">
                <Image
                  src="/influexe-logo.png"
                  alt="Influexe Media"
                  width={806}
                  height={271}
                  className="h-9 w-auto object-contain"
                />
              </span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">{DESCRIPTION}</p>
            <SocialLinks className="pt-1" />
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <a href={EMAIL_HREF} className="hover:text-white hover:underline transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  WhatsApp: +{SITE.whatsappNumber.slice(0, 2)} {SITE.whatsappNumber.slice(2, 7)} {SITE.whatsappNumber.slice(7)}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid w-full grid-cols-2 gap-6 sm:gap-8 lg:gap-12 lg:max-w-md">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 font-bold text-xs sm:text-sm tracking-wider uppercase text-white/90">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
                  {section.links.map((link) => (
                    <li key={link.name} className="hover:text-white transition-colors duration-200">
                      <Link href={link.href} className="hover:underline">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-3 font-bold text-xs sm:text-sm tracking-wider uppercase text-white/90">Contact</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
                <li className="hover:text-white transition-colors duration-200">
                  <Link href={BOOK_CALL_HREF} {...BOOK_CALL_LINK_PROPS} className="hover:underline">
                    Book a Strategy Call
                  </Link>
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  <a href={EMAIL_HREF} className="hover:underline">
                    Email us
                  </a>
                </li>
                <li className="hover:text-white transition-colors duration-200">
                  <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] font-medium text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>
            © <CurrentYear /> {SITE.name}. All rights reserved.
          </p>
          <p className="text-neutral-500">
            Results depend on budget, competition, offer strength, tracking, and sales follow-up.
          </p>
        </div>
      </div>
    </footer>
  );
}
