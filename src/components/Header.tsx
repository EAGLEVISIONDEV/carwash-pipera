"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { business } from "@/lib/data";

const links = [
  { href: "#servicii", label: "Servicii" },
  { href: "#proces", label: "Proces" },
  { href: "#opinii", label: "Opinii" },
  { href: "#vizita", label: "Vizită" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-asphalt/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="section-pad mx-auto flex h-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl tracking-[0.06em] text-chrome-bright"
          onClick={() => setOpen(false)}
        >
          CAR WASH <span className="text-aqua">PIPERA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mist transition-colors hover:text-aqua"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${business.phone}`}
            className="rounded-sm bg-aqua px-4 py-2 text-sm font-semibold text-ink transition hover:bg-aqua-deep"
          >
            Sună acum
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Meniu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-chrome transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-chrome transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-chrome transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[var(--header-h)] z-40 bg-asphalt/98 backdrop-blur-lg md:hidden">
          <nav className="section-pad flex flex-col gap-6 pt-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-chrome-bright"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${business.phone}`}
              className="mt-4 inline-flex w-fit items-center justify-center rounded-sm bg-aqua px-6 py-3 text-base font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              {business.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
