"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const gallery = [
  { src: images.foam, title: "Spumă activă", span: "md:col-span-2 md:row-span-2" },
  { src: images.gallery2, title: "Detailing", span: "" },
  { src: images.gallery3, title: "Finish premium", span: "" },
  { src: images.shine, title: "Wet shine", span: "md:col-span-1" },
  { src: images.gallery4, title: "Performance", span: "" },
  { src: images.gallery5, title: "Curbe & reflexii", span: "md:col-span-2" },
  { src: images.interior, title: "Interior care", span: "" },
];

export function Gallery() {
  return (
    <section id="galerie" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(240,208,0,0.06),transparent_50%)]"
      />

      <div className="section-pad relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            Galerie
          </p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.02em] text-platinum-bright md:text-5xl">
            Strălucire, pe imagini
          </h2>
          <p className="mt-4 max-w-md text-sm font-light text-mist">
            Foam, detailing, finish — atmosfera din Pipera, în cadre premium.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid auto-rows-[200px] gap-3 sm:auto-rows-[240px] md:grid-cols-3 md:auto-rows-[220px] lg:auto-rows-[260px]">
          {gallery.map((item) => (
            <StaggerItem key={item.title + item.src} className={`h-full ${item.span}`}>
              <motion.figure
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="media-frame group relative h-full min-h-[200px] overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  quality={92}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 z-[2] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {item.title}
                  </p>
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
