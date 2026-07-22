"use client";

import Image from "next/image";
import { business, images } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function Visit() {
  return (
    <section id="vizita" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-champagne">
              Vizită
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-[0.08em] text-platinum-bright md:text-5xl">
              Ne găsești în Pipera
            </h2>
            <p className="mt-5 max-w-md text-sm font-light leading-relaxed text-mist">
              Pe Șoseaua București Nord — aproape de birouri, magazine și săli
              din zonă.
            </p>

            <dl className="mt-12 space-y-8">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
                  Adresă
                </dt>
                <dd className="mt-2 text-platinum-bright">
                  {business.address.line1}
                  <br />
                  {business.address.city}, {business.address.county}{" "}
                  {business.address.postal}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
                  Program
                </dt>
                <dd className="mt-2 text-platinum-bright">
                  {business.hours.map((h) => (
                    <div key={h.days}>
                      {h.days}: {h.time}
                    </div>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
                  Telefon
                </dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${business.phone}`}
                    className="font-[family-name:var(--font-display)] text-2xl tracking-[0.08em] text-platinum-bright transition hover:text-champagne"
                  >
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
                  Facilități
                </dt>
                <dd className="mt-4 flex flex-wrap gap-2">
                  {business.amenities.map((a) => (
                    <span
                      key={a}
                      className="border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-mist"
                    >
                      {a}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex px-7 py-3.5 text-xs uppercase tracking-[0.18em]"
              >
                Google Maps
              </a>
              <a
                href={`tel:${business.phone}`}
                className="btn-ghost inline-flex px-7 py-3.5 text-xs uppercase tracking-[0.18em]"
              >
                Sună acum
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[360px] lg:min-h-full">
            <div className="media-frame absolute inset-0">
              <Image
                src={images.wet}
                alt="Mașină premium după spălare"
                fill
                quality={95}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-contain object-center p-4 sm:p-6"
              />
              <div className="absolute bottom-0 left-0 right-0 z-[2] p-8">
                <p className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-platinum-bright">
                  Strălucire. Fără compromis.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
