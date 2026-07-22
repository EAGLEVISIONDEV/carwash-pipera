import Link from "next/link";
import { business } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-asphalt-mid/30 pb-sticky">
      <div className="section-pad mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-chrome-bright">
              CAR WASH <span className="text-aqua">PIPERA</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-mist">
              {business.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-chrome">
              <li>
                <a
                  href={`tel:${business.phone}`}
                  className="transition hover:text-aqua"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li>{business.address.full}</li>
              <li>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-aqua"
                >
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">
              Legal
            </p>
            <ul className="mt-4 space-y-2 text-sm text-chrome">
              <li>
                <Link href="/confidentialitate" className="transition hover:text-aqua">
                  Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/termeni" className="transition hover:text-aqua">
                  Termeni
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition hover:text-aqua">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Toate drepturile rezervate.
          </p>
          <p>Șoseaua București Nord 14 · Voluntari</p>
        </div>
      </div>
    </footer>
  );
}
