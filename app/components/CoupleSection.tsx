"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { weddingContent } from "../data/content";
import { CoupleInfo } from "../types";

function CoupleFullPage({
  person,
  label,
  align,
  imageScale = 1,
}: {
  person: CoupleInfo;
  label: string;
  align: "left" | "right";
  imageScale?: number;
}) {
  const [viewportHeight, setViewportHeight] = useState("100vh");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => setViewportHeight(`${window.innerHeight}px`);
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const isLeft = align === "left";

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: viewportHeight }}
    >
      {/* Background photo — fades in from left/right */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={person.photo}
          alt={person.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={imageScale !== 1 ? { transform: `scale(${imageScale})` } : undefined}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.2) 50%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Text content — positioned at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 ${
          isLeft ? "text-left" : "text-right"
        }`}
      >
        {/* THE GROOM / THE BRIDE label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-garet uppercase tracking-[0.25em] text-white/80 text-xs md:text-sm mb-2"
        >
          {label}
        </motion.p>

        {/* Name — Playfair Display, bold */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="font-serif font-bold text-white mb-1"
          style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)" }}
        >
          {person.name}
        </motion.h2>

        {/* Full name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="font-garet text-white/90 text-sm md:text-base mb-3"
        >
          {person.fullName}
        </motion.p>

        {/* Parent info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="font-garet text-white/80 text-xs md:text-sm">
            {person.parentLabel}
          </p>
          <p className="font-garet text-white/90 text-sm md:text-base mt-0.5">
            {person.parents}
          </p>
        </motion.div>

        {/* Instagram button */}
        {person.instagram && (
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
            href={`https://instagram.com/${person.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-white/40 backdrop-blur-sm bg-white/10 text-white text-xs md:text-sm hover:bg-white/20 transition-colors ${
              isLeft ? "" : "ml-auto"
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            {person.instagram}
          </motion.a>
        )}
      </div>
    </section>
  );
}

export default function CoupleSection() {
  return (
    <>
      <CoupleFullPage
        person={weddingContent.groom}
        label="THE GROOM"
        align="left"
      />
      <CoupleFullPage
        person={weddingContent.bride}
        label="THE BRIDE"
        align="right"
        imageScale={1.3}
      />
    </>
  );
}
