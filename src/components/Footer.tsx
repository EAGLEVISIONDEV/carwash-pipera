import Link from "next/link";
import { business } from "@/lib/data";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] bg-obsidian-mid/20 pb-sticky">
      <div className="section-pad mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo size={36} />
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-platinum-bright">
                CAR WASH <span className="text-champagne">PIPERA</span>
              </p>
            </div>
            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-mist">
              {business.description}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
              Contact
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-platinum">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="transition hover:text-champagne"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="font-light text-mist">{business.address.full}</li>
              <li>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-champagne"
                >
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne">
              Legal
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-platinum">
              <li>
                <Link
                  href="/confidentialitate"
                  className="transition hover:text-champagne"
                >
                  Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/termeni" className="transition hover:text-champagne">
                  Termeni
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition hover:text-champagne">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.05] pt-8 text-[11px] uppercase tracking-[0.16em] text-mist sm:flex-row sm:justify-between">
          <p>
            © {year} {business.name}
          </p>
          <p>Șoseaua București Nord 14 · Voluntari</p>
        </div>
      </div>
    </footer>
  );
}
