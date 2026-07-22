import Image from "next/image";
import { business, images } from "@/lib/data";

export function Visit() {
  return (
    <section id="vizita" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-aqua">
              Vizită
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide text-chrome-bright md:text-6xl">
              Ne găsești în Pipera
            </h2>
            <p className="mt-4 max-w-md text-mist">
              Locație accesibilă pe Șoseaua București Nord — aproape de birouri,
              magazine și săli din zonă.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                  Adresă
                </dt>
                <dd className="mt-2 text-chrome-bright">
                  {business.address.line1}
                  <br />
                  {business.address.city}, {business.address.county}{" "}
                  {business.address.postal}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                  Program
                </dt>
                <dd className="mt-2 text-chrome-bright">
                  {business.hours.map((h) => (
                    <div key={h.days}>
                      {h.days}: {h.time}
                    </div>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                  Telefon
                </dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${business.phone}`}
                    className="text-lg font-semibold text-chrome-bright transition hover:text-aqua"
                  >
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
                  Facilități
                </dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {business.amenities.map((a) => (
                    <span
                      key={a}
                      className="border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-mist"
                    >
                      {a}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-aqua px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-aqua-deep"
              >
                Deschide în Google Maps
              </a>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center rounded-sm border border-chrome/25 px-6 py-3.5 text-sm font-semibold text-chrome-bright transition hover:border-aqua/50 hover:text-aqua"
              >
                Sună acum
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
            <Image
              src={images.wet}
              alt="Mașină premium după spălare"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-chrome-bright">
                Strălucire. Fără compromis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
