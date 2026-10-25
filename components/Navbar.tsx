"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  TrendingUp,
  Megaphone,
  Menu,
  Search,
  Tag,
  Target,
  X,
  type LucideIcon,
} from "lucide-react";
import { BOOK_CALL_HREF, BOOK_CALL_LINK_PROPS } from "@/lib/site";

interface SubMenuItem {
  label: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

interface SubMenu {
  title: string;
  items: SubMenuItem[];
}

interface NavItem {
  id: number;
  label: string;
  link?: string;
  footer?: { label: string; description?: string; href: string };
  subMenus?: SubMenu[];
}

const NAV_ITEMS: NavItem[] = [
  { id: 0, label: "Services", link: "/services" },
  { id: 1, label: "Our Work", link: "/our-work" },
  { id: 2, label: "About", link: "/about" },
  { id: 3, label: "Pricing", link: "/#pricing" },
  { id: 4, label: "FAQ", link: "/#faq" },
];

interface MobileLink {
  label: string;
  href: string;
  description: string;
  badge?: string;
  icon: LucideIcon;
  iconClass: string;
  badgeClass?: string;
}

const MOBILE_LINKS: MobileLink[] = [
  {
    label: "Services",
    href: "/services",
    description: "Meta Ads, Google Ads, lead generation & tracking",
    icon: Megaphone,
    iconClass:
      "w-9 h-9 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors",
  },
  {
    label: "Our Work",
    href: "/our-work",
    description: "Campaign work & case studies",
    icon: TrendingUp,
    iconClass:
      "w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors",
  },
  {
    label: "Pricing",
    href: "/#pricing",
    description: "Six plans, monthly and six-month rates",
    icon: Tag,
    iconClass:
      "w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors",
  },
  {
    label: "FAQ",
    href: "/#faq",
    description: "Common questions answered",
    icon: HelpCircle,
    iconClass:
      "w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors",
  },
  {
    label: "About",
    href: "/about",
    description: "Who we are and how we work",
    icon: Target,
    iconClass:
      "w-9 h-9 rounded-xl bg-neutral-100 text-neutral-900 flex items-center justify-center group-hover:bg-[#0A0A0C] group-hover:text-white transition-colors",
  },
  {
    label: "Contact",
    href: "/#contact",
    description: "Book a strategy call or send an enquiry",
    icon: Target,
    iconClass:
      "w-9 h-9 rounded-xl bg-pink-50 text-pink-700 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors",
  },
];

const NAV_TRIGGER_CLASS =
  "text-[13px] xl:text-[13.5px] font-medium py-1.5 px-2.5 sm:px-3 xl:px-3.5 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-neutral-700 hover:text-[#0A0A0C] relative rounded-full whitespace-nowrap shrink-0 select-none";

function NavigationMenu({ navItems, onItemClick }: { navItems: NavItem[]; onItemClick?: () => void }) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const close = () => {
    setOpenLabel(null);
    onItemClick?.();
  };

  return (
    <div className="relative">
      <ul className="relative flex items-center shrink-0 space-x-0">
        {navItems.map((item) => {
          const triggerChildren = (
            <>
              <span className="relative z-10 whitespace-nowrap">{item.label}</span>
              {item.subMenus && (
                <ChevronDown
                  className={`h-3.5 w-3.5 shrink-0 relative z-10 text-neutral-500 group-hover:text-neutral-900 group-hover:rotate-180 duration-300 transition-transform ${openLabel === item.label ? "rotate-180 text-neutral-900" : ""}`}
                />
              )}
              {(hoveredId === item.id || openLabel === item.label) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-neutral-900/5 rounded-full"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </>
          );

          return (
            <li
              key={item.label}
              className="relative shrink-0"
              onMouseEnter={() => setOpenLabel(item.label)}
              onMouseLeave={() => setOpenLabel(null)}
            >
              {item.link ? (
                <Link
                  href={item.link}
                  onClick={close}
                  className={NAV_TRIGGER_CLASS}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {triggerChildren}
                </Link>
              ) : (
                <button
                  type="button"
                  className={NAV_TRIGGER_CLASS}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {triggerChildren}
                </button>
              )}

              <AnimatePresence>
                {openLabel === item.label && item.subMenus && (
                  <div className="w-auto absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="bg-white/95 backdrop-blur-2xl border border-black/10 p-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.14)] w-max rounded-3xl"
                      layoutId="menu"
                    >
                      <div className="w-fit shrink-0 flex space-x-8 overflow-hidden">
                        {item.subMenus.map((sub) => (
                          <motion.div layout key={sub.title} className="w-full min-w-[210px]">
                            <h3 className="mb-3.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-600">
                              {sub.title}
                            </h3>
                            <ul className="space-y-3.5">
                              {sub.items.map((entry) => {
                                const Icon = entry.icon;
                                return (
                                  <li key={entry.label}>
                                    <Link
                                      href={entry.href || "#"}
                                      onClick={close}
                                      className="flex items-start space-x-3 group p-1.5 rounded-xl hover:bg-neutral-100/70 transition-all duration-200"
                                    >
                                      <div className="border border-neutral-200/80 bg-neutral-50/80 text-[#0A0A0C] rounded-xl flex items-center justify-center size-9 shrink-0 group-hover:bg-[#0A0A0C] group-hover:text-white group-hover:border-[#0A0A0C] transition-all duration-300 shadow-2xs">
                                        <Icon className="h-4 w-4 flex-none" />
                                      </div>
                                      <div className="leading-5 w-max">
                                        <p className="text-[13.5px] font-semibold text-[#0A0A0C] shrink-0 group-hover:text-black">
                                          {entry.label}
                                        </p>
                                        <p className="text-[11.5px] text-neutral-500 shrink-0 group-hover:text-neutral-700 transition-colors duration-200 max-w-[220px]">
                                          {entry.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                      {item.footer && (
                        <div className="mt-4 pt-3.5 border-t border-black/[0.06] flex items-center justify-between gap-4">
                          <span className="text-[11.5px] text-neutral-500 font-medium">
                            {item.footer.description || "Looking for custom architecture?"}
                          </span>
                          <Link
                            href={item.footer.href}
                            onClick={close}
                            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#0A0A0C] hover:text-amber-600 transition-colors group/foot"
                          >
                            <span>{item.footer.label}</span>
                            <ChevronDown className="w-3.5 h-3.5 -rotate-90 transition-transform duration-200 group-hover/foot:translate-x-0.5" />
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Compact pill when scrolled, unless the pointer is over it or the mobile menu is open.
  const compact = scrolled && !hovered && !mobileOpen;

  return (
    <header className="fixed top-2.5 sm:top-3.5 md:top-4 left-0 right-0 z-50 pointer-events-none px-3 sm:px-6 lg:px-8 transition-all duration-300 flex justify-center">
      <div className="w-full flex flex-col items-center">
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          animate={{
            maxWidth: compact ? "1020px" : "1340px",
            scale: compact ? 0.985 : 1,
            y: compact ? 2 : 0,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.75 }}
          className={`pointer-events-auto w-full flex items-center justify-between gap-2.5 sm:gap-4 rounded-full border transition-colors duration-300 ${compact ? "py-1.5 sm:py-2 px-3 sm:px-4 md:px-5 bg-white backdrop-blur-2xl border-neutral-300/90 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.04)]" : "py-2 sm:py-2.5 px-3.5 sm:px-5 md:px-6 bg-white hover:bg-white backdrop-blur-xl border-neutral-200/80 shadow-[0_4px_22px_-2px_rgba(0,0,0,0.07)]"}`}
        >
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-full shrink-0 pl-1"
            aria-label="Influexe Media Home"
          >
            <Image
              src="/influexe-logo.png"
              alt="Influexe Media"
              width={806}
              height={271}
              className={`w-auto object-contain transition-all duration-300 group-hover:scale-[1.02] shrink-0 ${compact ? "h-7 sm:h-8 md:h-8.5" : "h-8 sm:h-9 md:h-10"}`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center shrink-0">
            <NavigationMenu navItems={NAV_ITEMS} />
          </div>

          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pr-1">
            <Link
              href="/services"
              aria-label="Explore our services"
              className={`hidden sm:flex rounded-full bg-neutral-100/90 hover:bg-neutral-200/80 items-center justify-center text-neutral-700 hover:text-black transition-all hover:scale-105 cursor-pointer ${compact ? "w-8.5 h-8.5 sm:w-9 sm:h-9" : "w-9 h-9 sm:w-10 sm:h-10"}`}
            >
              <Search className={compact ? "w-3.5 h-3.5" : "w-4 h-4"} />
            </Link>
            <Link
              href={BOOK_CALL_HREF}
              {...BOOK_CALL_LINK_PROPS}
              className={`group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-[#2C2C31] via-[#1B1B1E] to-[#0A0A0C] border border-white/20 text-white font-medium tracking-[-0.01em] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.35),0_4px_12px_-2px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5),0_8px_18px_-2px_rgba(0,0,0,0.4)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer ${compact ? "px-3.5 sm:px-4 py-1.5 sm:py-2 text-[12px] sm:text-[12.5px]" : "px-4 sm:px-5 py-2 sm:py-2.5 text-[12.5px] sm:text-[13px] md:text-[13.5px]"}`}
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 transition-all cursor-pointer ${compact ? "p-1.5 sm:p-2" : "p-2 sm:p-2.5"}`}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {mobileOpen && (
          <div className="lg:hidden pointer-events-auto mt-2 w-full max-w-[1340px] bg-white backdrop-blur-2xl border border-neutral-200/90 rounded-3xl p-4 sm:p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 px-2 pt-1">
                Direct Pages
              </span>
              {MOBILE_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-neutral-100/80 active:bg-neutral-200/70 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={link.iconClass}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        {link.badge ? (
                          <div className="flex items-center gap-2">
                            <p className="text-[14px] font-semibold text-[#0A0A0C]">{link.label}</p>
                            <span className={link.badgeClass}>{link.badge}</span>
                          </div>
                        ) : (
                          <p className="text-[14px] font-semibold text-[#0A0A0C]">{link.label}</p>
                        )}
                        <p className="text-[11.5px] text-neutral-500">{link.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 transition-all" />
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-neutral-100">
                <Link
                  href={BOOK_CALL_HREF}
                  {...BOOK_CALL_LINK_PROPS}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-b from-[#2C2C31] via-[#1B1B1E] to-[#0A0A0C] text-white text-[14px] font-medium shadow-md active:scale-[0.98] transition-all"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
