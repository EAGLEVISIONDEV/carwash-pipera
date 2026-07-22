import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section
      id="proces"
      className="relative scroll-mt-20 border-y border-white/5 bg-asphalt-mid/40 py-20 md:py-28"
    >
      <div className="section-pad mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-aqua">
            Cum funcționează
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide text-chrome-bright md:text-6xl">
            Patru pași. Zero bătăi de cap.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <li key={s.step} className="relative">
              <span className="font-[family-name:var(--font-display)] text-5xl text-aqua/30">
                {s.step}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl tracking-wide text-chrome-bright">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
