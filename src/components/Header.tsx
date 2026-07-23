"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { business } from "@/lib/data";
import { BrandLogo } from "@/components/BrandLogo";

const links = [
  { href: "#servicii", label: "Servicii" },
  { href: "#galerie", label: "Galerie" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/5 bg-void/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="section-pad mx-auto flex h-full max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <BrandLogo size={40} />
          <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.22em] text-platinum-bright transition group-hover:text-champagne-bright md:text-base">
            CAR WASH <span className="text-champagne">PIPERA</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs font-medium uppercase tracking-[0.18em] text-mist transition-colors hover:text-champagne-bright"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${business.phone}`}
            className="btn-primary rounded-none px-5 py-2.5 text-xs uppercase tracking-[0.16em]"
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
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-platinum transition duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-platinum transition duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-platinum transition duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[var(--header-h)] z-40 bg-void/98 backdrop-blur-xl md:hidden"
          >
            <nav className="section-pad flex flex-col gap-7 pt-12">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.45 }}
                  className="font-[family-name:var(--font-display)] text-4xl tracking-[0.12em] text-platinum-bright"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href={`tel:${business.phone}`}
                className="btn-primary mt-4 inline-flex w-fit px-7 py-3.5 text-sm uppercase tracking-[0.16em]"
                onClick={() => setOpen(false)}
              >
                {business.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
