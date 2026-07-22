import { business } from "@/lib/data";

export function Trust() {
  return (
    <section id="opinii" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-aqua">
              Încredere
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl tracking-wide text-chrome-bright md:text-6xl">
              Evaluat de șoferii din Pipera
            </h2>
            <p className="mt-4 max-w-md text-mist">
              Ratingul vine din recenziile reale de pe Google. Citește-le pe
              hartă înainte să vii — sau după ce ai plecat strălucind.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-aqua px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-aqua-deep"
              >
                Citește recenziile pe Google
              </a>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm border border-chrome/25 px-6 py-3.5 text-sm font-semibold text-chrome-bright transition hover:border-aqua/50 hover:text-aqua"
              >
                {business.instagramHandle}
              </a>
            </div>
          </div>

          <div className="relative border border-aqua/25 bg-gradient-to-br from-aqua/10 to-transparent p-10 md:p-14">
            <div className="flex items-end gap-4">
              <span className="font-[family-name:var(--font-display)] text-8xl leading-none text-aqua md:text-9xl">
                {business.rating}
              </span>
              <div className="pb-3">
                <div className="flex gap-1" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      className="h-5 w-5 fill-aqua"
                    >
                      <path d="M10 1.5l2.4 5.2 5.6.6-4.2 3.8 1.2 5.5L10 13.8 4.9 16.6l1.2-5.5L1.9 7.3l5.6-.6L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-2 text-sm text-mist">din 5 pe Google</p>
              </div>
            </div>
            <p className="mt-8 font-[family-name:var(--font-display)] text-3xl tracking-wide text-chrome-bright">
              {business.reviewCount}+ recenzii
            </p>
            <p className="mt-2 text-sm text-mist">
              Car Wash Pipera · Șoseaua București Nord 14
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
