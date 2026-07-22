import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pb-sticky pt-28">
        <article className="section-pad mx-auto max-w-3xl py-12">
          <Link
            href="/"
            className="text-xs font-medium uppercase tracking-[0.2em] text-champagne transition hover:text-champagne-bright"
          >
            ← Înapoi
          </Link>
          <h1 className="mt-8 font-[family-name:var(--font-display)] text-4xl tracking-[0.08em] text-platinum-bright md:text-5xl">
            {title}
          </h1>
          <div className="mt-8 space-y-4 text-sm font-light leading-relaxed text-mist">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
