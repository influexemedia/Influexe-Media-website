"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Stage = "shapes" | "caption" | "logo" | "reveal" | "done";

const SHAPES = [
  { id: 1, pos: "top-[6%] left-[8%]", size: "w-14 h-14 sm:w-20 sm:h-20", style: "rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 shadow-lg shadow-amber-500/20", delay: 0.05, rot: 15 },
  { id: 2, pos: "top-[8%] left-[32%]", size: "w-10 h-10 sm:w-14 sm:h-14", style: "rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 shadow-md shadow-sky-500/20", delay: 0.12, rot: -20 },
  { id: 3, pos: "top-[5%] right-[28%]", size: "w-12 h-12 sm:w-16 sm:h-16", style: "rounded-full border-[3px] border-cyan-400/80 bg-cyan-100/30 backdrop-blur-sm", delay: 0.18, rot: 30 },
  { id: 4, pos: "top-[9%] right-[8%]", size: "w-16 h-9 sm:w-24 sm:h-12", style: "rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/20", delay: 0.24, rot: -10 },
  { id: 5, pos: "top-[28%] left-[4%]", size: "w-11 h-11 sm:w-16 sm:h-16", style: "rounded-3xl bg-gradient-to-tr from-rose-400 to-pink-500 shadow-md shadow-rose-500/20", delay: 0.1, rot: 45 },
  { id: 6, pos: "top-[25%] left-[22%]", size: "w-8 h-8 sm:w-10 sm:h-10", style: "rounded-full bg-amber-300 shadow-sm", delay: 0.28, rot: 0 },
  { id: 7, pos: "top-[22%] right-[18%]", size: "w-14 h-14 sm:w-18 sm:h-18", style: "rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 shadow-md shadow-emerald-500/20", delay: 0.15, rot: 25 },
  { id: 8, pos: "top-[32%] right-[4%]", size: "w-10 h-10 sm:w-12 sm:h-12", style: "rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 shadow-sm", delay: 0.32, rot: -15 },
  { id: 9, pos: "top-[48%] left-[12%]", size: "w-16 h-10 sm:w-22 sm:h-12", style: "rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 shadow-md shadow-amber-500/20", delay: 0.2, rot: -15 },
  { id: 10, pos: "top-[44%] right-[10%]", size: "w-14 h-14 sm:w-20 sm:h-20", style: "rounded-full border-[3px] border-amber-400/80 bg-amber-100/30 backdrop-blur-sm", delay: 0.26, rot: 40 },
  { id: 11, pos: "bottom-[26%] left-[6%]", size: "w-12 h-12 sm:w-16 sm:h-16", style: "rounded-2xl bg-gradient-to-tr from-sky-400 to-cyan-500 shadow-md shadow-sky-500/20", delay: 0.14, rot: -30 },
  { id: 12, pos: "bottom-[30%] left-[24%]", size: "w-9 h-9 sm:w-11 sm:h-11", style: "rounded-full bg-rose-400 shadow-sm", delay: 0.35, rot: 0 },
  { id: 13, pos: "bottom-[28%] right-[22%]", size: "w-16 h-9 sm:w-20 sm:h-11", style: "rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shadow-md shadow-purple-500/20", delay: 0.22, rot: 15 },
  { id: 14, pos: "bottom-[24%] right-[5%]", size: "w-12 h-12 sm:w-16 sm:h-16", style: "rounded-3xl bg-gradient-to-tr from-amber-400 to-orange-500 shadow-md shadow-amber-500/20", delay: 0.3, rot: -20 },
  { id: 15, pos: "bottom-[8%] left-[10%]", size: "w-16 h-9 sm:w-22 sm:h-12", style: "rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 shadow-md shadow-emerald-500/20", delay: 0.18, rot: 10 },
  { id: 16, pos: "bottom-[6%] left-[36%]", size: "w-10 h-10 sm:w-14 sm:h-14", style: "rounded-full border-[3px] border-indigo-400/80 bg-indigo-100/30 backdrop-blur-sm", delay: 0.34, rot: -25 },
  { id: 17, pos: "bottom-[8%] right-[30%]", size: "w-12 h-12 sm:w-16 sm:h-16", style: "rounded-2xl bg-gradient-to-tr from-orange-400 to-rose-500 shadow-md shadow-orange-500/20", delay: 0.16, rot: 35 },
  { id: 18, pos: "bottom-[7%] right-[8%]", size: "w-14 h-14 sm:w-18 sm:h-18", style: "rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 shadow-lg shadow-sky-500/20", delay: 0.26, rot: -15 },
] as const;

const PANEL_TRANSITION = { duration: 0.75, ease: [0.77, 0, 0.175, 1] } as const;

function PreloaderOverlay() {
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState<Stage>("shapes");

  // Lock body scroll while the intro is visible.
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // 3.75s timeline: shapes -> caption (1.1s) -> logo (2.1s) -> reveal (3.0s) -> done (3.75s).
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage("caption"), 1100),
      setTimeout(() => setStage("logo"), 2100),
      setTimeout(() => setStage("reveal"), 3000),
      setTimeout(() => {
        setVisible(false);
        setStage("done");
      }, 3750),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const skip = () => {
    setStage("reveal");
    setTimeout(() => {
      setVisible(false);
      setStage("done");
    }, 500);
  };

  if (!visible) return null;

  const revealing = stage === "reveal";

  return (
    <div className="fixed inset-0 z-[9999] w-screen h-screen overflow-hidden select-none pointer-events-auto">
      <motion.div
        initial={{ y: "0%" }}
        animate={revealing ? { y: "-100%" } : { y: "0%" }}
        transition={PANEL_TRANSITION}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#FAFAF9] border-b border-black/5"
      />
      <motion.div
        initial={{ y: "0%" }}
        animate={revealing ? { y: "100%" } : { y: "0%" }}
        transition={PANEL_TRANSITION}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#FAFAF9] border-t border-black/5"
      />
      <motion.div
        animate={revealing ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-violet-100/35 via-sky-100/30 to-pink-50/20 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <AnimatePresence>
        {stage === "shapes" && (
          <motion.div
            key="shapes-stage"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.35, ease: "easeInOut" } }}
            className="absolute inset-0 pointer-events-none"
          >
            {SHAPES.map((shape) => (
              <motion.div
                key={shape.id}
                initial={{ scale: 0, opacity: 0, rotate: shape.rot - 45 }}
                animate={{ scale: 1, opacity: 1, rotate: shape.rot }}
                exit={{ scale: 0, opacity: 0, rotate: shape.rot + 45 }}
                transition={{ type: "spring", stiffness: 420, damping: 18, mass: 0.6, delay: shape.delay }}
                className={`absolute ${shape.pos} ${shape.size} ${shape.style}`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === "caption" && (
          <motion.div
            key="caption-stage"
            initial={{ opacity: 0, y: 22, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -22, scale: 0.95, transition: { duration: 0.35, ease: "easeInOut" } }}
            transition={{ type: "spring", stiffness: 350, damping: 24 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-20 pointer-events-none"
          >
            <p className="font-brand font-bold text-[28px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.12] tracking-[-0.035em] text-[#0A0A0C] max-w-4xl text-balance">
              Turn Attention Into{" "}
              <span className="text-transparent bg-clip-text bg-[length:250%_auto] animate-intelligence-shimmer bg-gradient-to-r from-violet-600 via-neutral-900 to-pink-600">
                Measurable Growth.
              </span>
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 sm:mt-5 h-[2.5px] bg-gradient-to-r from-amber-500 via-neutral-800 to-sky-500 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(stage === "logo" || revealing) && (
          <motion.div
            key="logo-stage"
            initial={{ scale: 0.4, opacity: 0, rotate: -20 }}
            animate={
              revealing
                ? { scale: 1.25, opacity: 0, transition: { duration: 0.5 } }
                : { scale: 1, opacity: 1, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 380, damping: 22, mass: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 2.4, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-28 h-28 rounded-full border border-sky-400/60 bg-gradient-to-tr from-amber-300/20 via-sky-300/20 to-transparent pointer-events-none"
            />
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-[0_12px_40px_-6px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.08)] border border-neutral-200/90 p-2.5 flex items-center justify-center">
              <Image
                src="/influexe-mark-512.png"
                alt="Influexe Media logo mark"
                width={80}
                height={80}
                style={{ width: "auto", height: "auto" }}
                className="w-full h-full object-contain drop-shadow-md"
                priority
                unoptimized
              />
            </div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="mt-3 font-brand font-bold text-[24px] sm:text-[28px] tracking-[-0.03em] text-[#0A0A0C]"
            >
              Influexe Media
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {!revealing && (
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
          <button
            type="button"
            onClick={skip}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-200/80 bg-white/80 hover:bg-white text-neutral-500 hover:text-black text-[11.5px] font-medium tracking-tight shadow-xs hover:shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Skip</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}

/** Home-only intro. Mounted fresh each time "/" is entered, like the original home page. */
export default function Preloader() {
  const pathname = usePathname();
  return pathname === "/" ? <PreloaderOverlay /> : null;
}
