"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "./icons";
import { WHATSAPP_HREF } from "@/lib/site";

interface WhatsAppButtonProps {
  href?: string;
}

export default function WhatsAppButton({ href = WHATSAPP_HREF }: WhatsAppButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto flex items-center gap-2 sm:gap-3 select-none">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-white/95 backdrop-blur-2xl border border-neutral-200/90 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.04)] text-[#0A0A0C] text-xs font-semibold font-ui tracking-tight whitespace-nowrap cursor-pointer"
            onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Chat with us on WhatsApp</span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ scale: [1, 1.05, 1], y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        whileHover={{ scale: 1.12, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45),0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65),0_4px_12px_rgba(0,0,0,0.15)] transition-shadow duration-300 cursor-pointer"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-sm transition-transform duration-200 group-hover:scale-105" />
      </motion.a>
    </div>
  );
}
