"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { business, images } from "@/lib/data";

const WashScene3D = dynamic(
  () => import("@/components/WashScene3D").then((m) => m.WashScene3D),
  { ssr: false },
);

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-void">
      <div className="absolute inset-0">
        <Image
          src="/hero-stage-bg.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/75 to-void/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/55" />
      </div>

      {/* 3D foam / droplets / turbine */}
      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        <WashScene3D />
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="section-pad relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center gap-10 pb-24 pt-[calc(var(--header-h)+1.5rem)] lg:flex-row lg:items-center lg:gap-10 lg:pb-12 xl:gap-16"
      >
        <div className="relative z-10 w-full max-w-xl shrink-0 lg:w-[40%]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-3"
          >
            <motion.span
              animate={{ scaleX: [0.4, 1, 0.4] }}
              transition={{ duration: 2.8, repeat: Infinity }}
              className="h-px w-10 origin-left bg-accent"
            />
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
            Luxury auto care cu energie 3D. Exterior, interior, detailing —
            strălucire de showroom.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${business.phone}`}
              className="btn-primary inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-[0.2em]"
            >
              Sună acum
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-[11px] uppercase tracking-[0.2em]"
            >
              Direcții
            </motion.a>
          </motion.div>

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
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + i * 0.08 }}
                className="px-3 py-4 text-center sm:px-4"
              >
                <p className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-platinum-bright sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-mist">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ y: photoY, scale: photoScale }}
          className="relative z-10 w-full flex-1"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,208,0,0.18)_0%,rgba(56,120,200,0.1)_40%,transparent_70%)] blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 48, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-[440px] [perspective:1200px] lg:max-w-[560px] xl:max-w-[600px]"
          >
            <motion.div
              animate={{ rotateY: [0, 2, 0, -2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/60 via-white/20 to-transparent" />
              <div className="relative bg-void p-[1px]">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
                  <Image
                    src={images.hero}
                    alt="Ferrari la Car Wash Pipera"
                    fill
                    priority
                    quality={100}
                    sizes="(max-width:1024px) 92vw, 600px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3 border border-white/10 bg-void/90 px-4 py-3 backdrop-blur-xl sm:left-6 sm:right-auto sm:min-w-[250px]"
            >
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-accent">
                  Ultra HQ
                </p>
                <p className="mt-0.5 text-sm font-medium text-platinum-bright">
                  Ferrari · Pipera
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
