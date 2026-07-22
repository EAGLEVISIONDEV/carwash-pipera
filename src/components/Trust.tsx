"use client";

import { business } from "@/lib/data";
import { Reveal, motion } from "@/components/motion";

export function Trust() {
  return (
    <section id="opinii" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-champagne">
              Încredere
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-[0.08em] text-platinum-bright md:text-5xl">
              Evaluat de șoferii din Pipera
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-mist md:text-base">
              Ratingul vine din recenziile reale de pe Google. Citește-le pe
              hartă înainte să vii.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex px-7 py-3.5 text-xs uppercase tracking-[0.18em]"
              >
                Recenzii Google
              </a>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex px-7 py-3.5 text-xs uppercase tracking-[0.18em]"
              >
                {business.instagramHandle}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden border border-champagne/25 bg-gradient-to-br from-champagne/12 via-transparent to-transparent p-10 md:p-14"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-champagne/15 blur-3xl"
              />
              <div className="flex items-end gap-4">
                <span className="font-[family-name:var(--font-display)] text-8xl leading-none text-champagne md:text-9xl">
                  {business.rating}
                </span>
                <div className="pb-3">
                  <div className="flex gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        className="h-4 w-4 fill-champagne"
                      >
                        <path d="M10 1.5l2.4 5.2 5.6.6-4.2 3.8 1.2 5.5L10 13.8 4.9 16.6l1.2-5.5L1.9 7.3l5.6-.6L10 1.5z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-mist">
                    din 5 pe Google
                  </p>
                </div>
              </div>
              <p className="mt-10 font-[family-name:var(--font-display)] text-3xl tracking-[0.1em] text-platinum-bright">
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
