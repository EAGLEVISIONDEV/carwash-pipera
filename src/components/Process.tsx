"use client";

import { processSteps } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Process() {
  return (
    <section
      id="proces"
      className="relative scroll-mt-24 border-y border-white/[0.05] bg-obsidian-mid/30 py-24 md:py-32"
    >
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-champagne">
            Cum funcționează
          </p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl tracking-[0.08em] text-platinum-bright md:text-5xl">
            Patru pași. Zero bătăi de cap.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <StaggerItem key={s.step}>
              <div className="relative">
                <span className="font-[family-name:var(--font-display)] text-5xl tracking-wider text-champagne/25">
                  {s.step}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-[0.1em] text-platinum-bright">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                  {s.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
