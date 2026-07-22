"use client";

import { business } from "@/lib/data";
import { Reveal, motion } from "@/components/motion";
import { BrandLogo } from "@/components/BrandLogo";

export function InstagramCta() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] py-24 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,var(--champagne-glow),transparent_55%)]"
      />
      <div className="section-pad relative mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mx-auto mb-8 flex justify-center">
            <BrandLogo size={64} spin />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-champagne">
            Instagram
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-[0.08em] text-platinum-bright md:text-5xl">
            Vezi rezultatele live
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-mist">
            Înainte / după, spumă, detailing — pe {business.instagramHandle}.
          </p>
          <motion.a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="mt-10 inline-flex items-center justify-center gap-3 border border-champagne/40 bg-champagne/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-champagne transition hover:bg-champagne hover:text-ink"
          >
            Urmărește {business.instagramHandle}
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
