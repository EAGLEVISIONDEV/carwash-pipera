"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { business, images } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden mesh-bg">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-bg opacity-60" />

      <div className="section-pad relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 pb-28 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-16 lg:pt-24">
        {/* Copy */}
        <div className="relative z-10 order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] font-semibold uppercase tracking-[0.4em] text-accent"
          >
            Voluntari · Pipera
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.6rem,8vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-platinum-bright"
          >
            CAR WASH
            <br />
            <span className="text-lux">PIPERA</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="lux-line mt-6 max-w-[12rem] origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="mt-6 max-w-md text-base font-light leading-relaxed text-mist md:text-lg"
          >
            {business.tagline} Exterior, interior și detailing — zilnic{" "}
            {business.hours[0].time}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7 }}
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
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-mist"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-accent">
                {business.rating}
              </span>
              <span className="text-xs tracking-wide">
                / 5 · {business.reviewCount}+ Google
              </span>
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="text-[11px] uppercase tracking-[0.22em]">
              Deschis zilnic
            </span>
          </motion.div>
        </div>

        {/* Contained HQ photo — full car visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 animate-pulse-glow rounded-[2rem] bg-[radial-gradient(circle,var(--accent-glow),transparent_68%)] blur-2xl md:-inset-10"
          />

          <div className="media-frame relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.55)] lg:max-w-none">
            <Image
              src={images.hero}
              alt="Ferrari la Car Wash Pipera"
              fill
              priority
              quality={100}
              sizes="(max-width:1024px) 90vw, 48vw"
              className="object-contain object-center p-2 sm:p-3"
            />
            <div className="absolute bottom-0 left-0 right-0 z-[2] p-5 sm:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                La locație
              </p>
              <p className="mt-1 font-[family-name:var(--font-display)] text-lg tracking-wide text-platinum-bright sm:text-xl">
                Strălucire de showroom
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.35em] text-mist/50">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-px bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
