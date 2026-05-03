"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { media } from "../data/media";

interface CoverOverlayProps {
  onOpen: () => void;
  groom?: string;
  bride?: string;
  guestName?: string;
}

export default function CoverOverlay({
  onOpen,
  groom = "Satria",
  bride = "Heppa",
  guestName = "Tamu Undangan",
}: CoverOverlayProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="cover"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between text-center"
      >
        {/* Background image — fullscreen */}
        <img
          src={media.foto1}
          alt=""
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Top section: couple names */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 flex flex-col items-center pt-16 sm:pt-20 md:pt-24 px-6"
        >
          <h1 className="font-brittany text-5xl sm:text-5xl md:text-7xl text-white/80 whitespace-nowrap font-thin">
            {groom} &amp; {bride}
          </h1>
        </motion.div>

        {/* Bottom section: guest info, button, disclaimer */}
        <div className="relative z-10 flex flex-col items-center pb-6 sm:pb-20 md:pb-28 px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="font-garet text-white/75 text-base sm:text-lg">
              Kepada Bapak/Ibu/Saudara/i.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-1"
          >
            <p className="font-garet font-medium text-white text-lg sm:text-xl md:text-2xl">
              {guestName}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-4"
          >
            <button
              onClick={onOpen}
              className="font-garet flex items-center gap-2 bg-transparent backdrop-blur-md border border-white/40 text-white px-10 py-3 rounded-full text-sm sm:text-base tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Buka Undangan
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-3"
          >
            <p className="font-garet text-white/70 text-[10px] sm:text-[10px] font-semibold whitespace-nowrap">
              *Mohon maaf bila ada kesalahan nama/gelar
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
