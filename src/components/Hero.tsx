"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { business, images } from "@/lib/data";
import { BrandEmblem } from "@/components/BrandLogo";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Spălare auto premium"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/50 to-void" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(196,168,116,0.12),transparent_55%)]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="section-pad relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-28 pt-28 md:justify-center md:pb-24 md:pt-24"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-xs font-medium uppercase tracking-[0.35em] text-champagne"
            >
              Voluntari · Pipera
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.75rem,9vw,5.75rem)] font-medium leading-[1.05] tracking-[0.06em] text-platinum-bright"
            >
              CAR WASH
              <br />
              <span className="text-lux">PIPERA</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lux-line mt-6 max-w-xs origin-left"
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-6 max-w-md text-base font-light leading-relaxed text-mist md:text-lg"
            >
              {business.tagline} Exterior, interior și detailing — zilnic{" "}
              {business.hours[0].time}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href={`tel:${business.phone}`}
                className="btn-primary inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.18em]"
              >
                Sună · {business.phoneDisplay}
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.18em]"
              >
                Direcții pe hartă
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-12 flex items-center gap-6 text-sm text-mist"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-3xl text-champagne">
                  {business.rating}
                </span>
                <span className="text-xs tracking-wide">
                  / 5 · {business.reviewCount}+ Google
                </span>
              </div>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <span className="hidden text-xs uppercase tracking-[0.2em] sm:inline">
                Deschis zilnic
              </span>
            </motion.div>
          </div>

          <div className="mx-auto hidden w-48 lg:block lg:w-56">
            <BrandEmblem />
          </div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-mist/60">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0], opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-champagne to-transparent"
        />
      </motion.div>
    </section>
  );
}
