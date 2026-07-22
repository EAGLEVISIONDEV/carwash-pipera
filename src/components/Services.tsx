"use client";

import Image from "next/image";
import { images, packages } from "@/lib/data";
import {
  Reveal,
  Stagger,
  StaggerItem,
  fadeUp,
  motion,
} from "@/components/motion";

export function Services() {
  return (
    <section id="servicii" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            Servicii
          </p>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.02em] text-platinum-bright md:text-5xl">
            Alege nivelul de strălucire
          </h2>
          <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-mist md:text-base">
            Trei pachete clare — de la o spălare expres la detailing complet.
            Prețurile se confirmă pe loc, după tipul mașinii.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-4 lg:grid-cols-3">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex h-full flex-col p-8 transition-colors ${
                  pkg.accent
                    ? "border border-accent/40 bg-gradient-to-b from-accent/10 to-transparent"
                    : "glass hover:border-accent/30"
                }`}
              >
                {pkg.accent && (
                  <span className="absolute -top-3 left-8 bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                    Popular
                  </span>
                )}
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-accent">
                  {pkg.subtitle}
                </p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-platinum-bright">
                  {pkg.name}
                </h3>
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-mist">
                  {pkg.description}
                </p>
                <ul className="mt-8 space-y-3 border-t border-white/8 pt-7">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-platinum"
                    >
                      <span className="h-px w-4 bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          <Reveal variants={fadeUp}>
            <figure className="media-frame group relative aspect-[4/3]">
              <Image
                src={images.foam}
                alt="Spălare cu spumă activă"
                fill
                quality={95}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-contain object-center p-4 transition duration-700 group-hover:scale-[1.02] sm:p-6"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 z-[2] p-6">
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-platinum-bright">
                  Spumă & presiune
                </p>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.12}>
            <figure className="media-frame group relative aspect-[4/3]">
              <Image
                src={images.shine}
                alt="Finisaj wet-shine pe caroserie"
                fill
                quality={95}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-contain object-center p-4 transition duration-700 group-hover:scale-[1.02] sm:p-6"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 z-[2] p-6">
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-platinum-bright">
                  Finisaj wet-shine
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
