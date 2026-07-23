"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { business, images } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-void">
      {/* Cinematic showroom stage */}
      <div className="absolute inset-0">
        <Image
          src="/hero-stage-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-void/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/50" />
      </div>

      <div className="section-pad relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center gap-10 pb-24 pt-[calc(var(--header-h)+1.5rem)] lg:flex-row lg:items-center lg:gap-8 lg:pb-12 xl:gap-16">
        {/* Brand column — restrained, Bentley-style */}
        <div className="relative z-10 w-full max-w-xl shrink-0 lg:w-[42%]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.42em] text-accent">
              Pipera · Voluntari
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease }}
            className="mt-6 font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.04em] text-platinum-bright"
          >
            CAR WASH
            <span className="mt-1 block text-lux">PIPERA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-7 max-w-sm text-[15px] font-light leading-relaxed text-mist md:text-base"
          >
            Luxury auto care în fața ta. Exterior, interior, detailing —
            mașina iese ca din showroom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href={`tel:${business.phone}`}
              className="btn-primary inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-[0.2em]"
            >
              Sună acum
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-[0.2em]"
            >
              Direcții
            </a>
          </motion.div>

          {/* Glass stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55, ease }}
            className="mt-12 grid grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl"
          >
            {[
              { label: "Google", value: `${business.rating}` },
              { label: "Recenzii", value: `${business.reviewCount}+` },
              { label: "Program", value: "09–19:30" },
            ].map((item) => (
              <div key={item.label} className="px-3 py-4 text-center sm:px-4">
                <p className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-platinum-bright sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-mist">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Photo stage — entire portrait image visible */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.15, delay: 0.2, ease }}
          className="relative z-10 w-full flex-1"
        >
          {/* Soft light halo matching photo yellow/sky */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,208,0,0.16)_0%,rgba(56,120,200,0.08)_40%,transparent_70%)] blur-3xl"
          />

          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[520px] xl:max-w-[560px]">
            {/* Thin tech frame */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/50 via-white/15 to-transparent opacity-80" />
            <div className="relative bg-void p-[1px]">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={images.hero}
                  alt="Ferrari la Car Wash Pipera"
                  fill
                  priority
                  quality={100}
                  sizes="(max-width:1024px) 92vw, 560px"
                  className="object-contain object-center"
                />
              </div>
            </div>

            {/* Floating caption chip — outside image, doesn't cover car */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="absolute -bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3 border border-white/10 bg-void/85 px-4 py-3 backdrop-blur-xl sm:left-6 sm:right-auto sm:min-w-[240px]"
            >
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Live on site
                </p>
                <p className="mt-0.5 text-sm font-medium text-platinum-bright">
                  Ferrari · Pipera
                </p>
              </div>
              <span className="hidden h-8 w-px bg-white/15 sm:block" />
              <p className="hidden text-[10px] uppercase tracking-[0.16em] text-mist sm:block">
                HQ photo
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom edge cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-mist/40">
            Discover
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-accent/80 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
