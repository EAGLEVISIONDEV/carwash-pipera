import Image from "next/image";
import { business, images } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Mașină cu spumă activă la spălătorie auto"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-asphalt/70 via-asphalt/45 to-asphalt" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,9,11,0.55)_100%)]" />
      </div>

      <div className="section-pad relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-28 pt-28 md:justify-center md:pb-24 md:pt-20">
        <p className="animate-rise text-sm font-medium uppercase tracking-[0.28em] text-aqua">
          Voluntari · Pipera
        </p>
        <h1 className="animate-rise delay-1 mt-3 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.9] tracking-[0.02em] text-chrome-bright">
          CAR WASH
          <br />
          <span className="text-shine">PIPERA</span>
        </h1>
        <p className="animate-rise delay-2 mt-5 max-w-md text-base text-mist md:text-lg">
          {business.tagline} Exterior, interior și detailing — zilnic{" "}
          {business.hours[0].time}.
        </p>
        <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center justify-center rounded-sm bg-aqua px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-aqua-deep"
          >
            Sună · {business.phoneDisplay}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-chrome/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-chrome-bright backdrop-blur-sm transition hover:border-aqua/50 hover:text-aqua"
          >
            Direcții pe hartă
          </a>
        </div>
        <div className="animate-rise delay-4 mt-10 flex items-center gap-6 text-sm text-mist">
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-2xl text-aqua">
              {business.rating}
            </span>
            <span>
              / 5 · {business.reviewCount}+ recenzii Google
            </span>
          </div>
          <span className="hidden h-4 w-px bg-white/15 sm:block" />
          <span className="hidden sm:inline">Deschis zilnic</span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-mist/70">
          Scroll
        </span>
        <span className="animate-drip h-8 w-px bg-gradient-to-b from-aqua to-transparent" />
      </div>
    </section>
  );
}
