import { business } from "@/lib/data";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-asphalt/95 backdrop-blur-md md:hidden pb-[env(safe-area-inset-bottom)]">
      <div
        className="section-pad grid grid-cols-2 gap-2 py-3"
        style={{ minHeight: "var(--sticky-cta-h)" }}
      >
        <a
          href={`tel:${business.phone}`}
          className="flex items-center justify-center rounded-sm bg-aqua text-sm font-semibold text-ink"
        >
          Sună
        </a>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-sm border border-chrome/20 text-sm font-semibold text-chrome-bright"
        >
          Direcții
        </a>
      </div>
    </div>
  );
}
