"use client";

import { processSteps } from "@/lib/data";
import { Reveal, Stagger, StaggerItem, motion } from "@/components/motion";

const icons = [
  // Arrive
  <svg key="a" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 12h14M12 5l7 7-7 7" />
  </svg>,
  // Choose
  <svg key="b" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>,
  // Wait
  <svg key="c" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 10h16v10H4zM8 10V7a4 4 0 018 0v3" />
  </svg>,
  // Shine
  <svg key="d" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
];

export function Process() {
  return (
    <section
      id="proces"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.05] bg-obsidian-mid/30 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]"
      />

      <div className="section-pad relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            Cum funcționează
          </p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.02em] text-platinum-bright md:text-5xl">
            Patru pași. Zero bătăi de cap.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <StaggerItem key={s.step}>
              <motion.div
                whileHover={{ y: -8, rotateX: 4 }}
                transition={{ duration: 0.4 }}
                className="glass group relative h-full p-7 [transform-style:preserve-3d]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-accent/30 bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-ink">
                  {icons[i]}
                </div>
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-accent/20">
                  {s.step}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-platinum-bright">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                  {s.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
