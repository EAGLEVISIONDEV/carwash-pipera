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
            className="text-sm font-medium text-aqua transition hover:text-aqua-deep"
          >
            ← Înapoi
          </Link>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl tracking-wide text-chrome-bright">
            {title}
          </h1>
          <div className="prose-legal mt-8 space-y-4 text-sm leading-relaxed text-mist">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
