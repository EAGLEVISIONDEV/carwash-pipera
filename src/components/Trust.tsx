"use client";

import dynamic from "next/dynamic";
import { business } from "@/lib/data";
import { Reveal, motion } from "@/components/motion";

const WashScene3D = dynamic(
  () => import("@/components/WashScene3D").then((m) => m.WashScene3D),
  { ssr: false },
);

export function Trust() {
  return (
    <section id="opinii" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 opacity-40">
        <WashScene3D density="low" />
      </div>

      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
              Încredere
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.02em] text-platinum-bright md:text-5xl">
              Evaluat de șoferii din Pipera
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-mist md:text-base">
              Ratingul vine din recenziile reale de pe Google. Citește-le pe
              hartă înainte să vii.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex px-7 py-3.5 text-xs uppercase tracking-[0.18em]"
              >
                Recenzii Google
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex px-7 py-3.5 text-xs uppercase tracking-[0.18em]"
              >
                {business.instagramHandle}
              </motion.a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.02, rotateY: -3 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden border border-accent/30 bg-gradient-to-br from-accent/15 via-transparent to-transparent p-10 md:p-14 [transform-style:preserve-3d]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-accent/20"
              />
              <div className="flex items-end gap-4">
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="font-[family-name:var(--font-display)] text-8xl font-bold leading-none text-accent md:text-9xl"
                >
                  {business.rating}
                </motion.span>
                <div className="pb-3">
                  <div className="flex gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        viewBox="0 0 20 20"
                        className="h-4 w-4 fill-accent"
                      >
                        <path d="M10 1.5l2.4 5.2 5.6.6-4.2 3.8 1.2 5.5L10 13.8 4.9 16.6l1.2-5.5L1.9 7.3l5.6-.6L10 1.5z" />
                      </motion.svg>
                    ))}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mist">
                    din 5 pe Google
                  </p>
                </div>
              </div>
              <p className="mt-10 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-platinum-bright">
                {business.reviewCount}+ recenzii
              </p>
              <p className="mt-2 text-sm font-light text-mist">
                Car Wash Pipera · Șoseaua București Nord 14
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
