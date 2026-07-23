"use client";

import dynamic from "next/dynamic";
import { business } from "@/lib/data";
import { Reveal, motion } from "@/components/motion";
import { BrandLogo } from "@/components/BrandLogo";

const WashScene3D = dynamic(
  () => import("@/components/WashScene3D").then((m) => m.WashScene3D),
  { ssr: false },
);

export function InstagramCta() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] py-24 md:py-28">
      <div className="absolute inset-0 opacity-50">
        <WashScene3D density="low" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,var(--accent-glow),transparent_55%)]"
      />
      <div className="section-pad relative mx-auto max-w-3xl text-center">
        <Reveal>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="mx-auto mb-8 flex justify-center"
          >
            <BrandLogo size={72} />
          </motion.div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            Instagram
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.02em] text-platinum-bright md:text-5xl">
            Vezi rezultatele live
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-mist">
            Înainte / după, spumă, detailing — pe {business.instagramHandle}.
          </p>
          <motion.a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.02 }}
            className="mt-10 inline-flex items-center justify-center gap-3 border border-accent/40 bg-accent/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-ink"
          >
            Urmărește {business.instagramHandle}
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
