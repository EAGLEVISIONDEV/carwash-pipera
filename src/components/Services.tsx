import Image from "next/image";
import { images, packages } from "@/lib/data";

export function Services() {
  return (
    <section id="servicii" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-aqua">
            Servicii
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide text-chrome-bright md:text-6xl">
            Alege nivelul de strălucire
          </h2>
          <p className="mt-4 text-mist">
            Trei pachete clare — de la o spălare rapidă la detailing complet.
            Prețurile le afli pe loc, după tipul mașinii.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`relative flex flex-col border p-7 transition ${
                pkg.accent
                  ? "border-aqua/40 bg-aqua/5"
                  : "border-white/8 bg-asphalt-mid/60"
              }`}
            >
              {pkg.accent && (
                <span className="absolute -top-3 left-7 bg-aqua px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                  Popular
                </span>
              )}
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-aqua">
                {pkg.subtitle}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide text-chrome-bright">
                {pkg.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                {pkg.description}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-white/8 pt-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-chrome">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3]">
            <Image
              src={images.foam}
              alt="Spălare cu jet de apă de înaltă presiune"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-asphalt/80 to-transparent" />
            <p className="absolute bottom-5 left-5 font-[family-name:var(--font-display)] text-2xl tracking-wide text-chrome-bright">
              Spumă & presiune
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-[4/3]">
            <Image
              src={images.shine}
              alt="Mașină cu finisaj lucios după spălare"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-asphalt/80 to-transparent" />
            <p className="absolute bottom-5 left-5 font-[family-name:var(--font-display)] text-2xl tracking-wide text-chrome-bright">
              Finisaj wet-shine
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
