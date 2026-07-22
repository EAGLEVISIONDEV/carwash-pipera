"use client";

import { motion } from "framer-motion";

type Props = {
  size?: number;
  className?: string;
  spin?: boolean;
};

export function BrandLogo({ size = 44, className = "", spin = false }: Props) {
  return (
    <motion.div
      className={`relative shrink-0 ${className}`}
      style={{ width: size, height: size }}
      animate={spin ? { rotate: 360 } : undefined}
      transition={
        spin ? { duration: 32, repeat: Infinity, ease: "linear" } : undefined
      }
      whileHover={spin ? undefined : { rotate: 25 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Car Wash Pipera"
        width={size}
        height={size}
        className="h-full w-full"
      />
    </motion.div>
  );
}

export function BrandEmblem({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-25%] animate-pulse-glow rounded-full bg-[radial-gradient(circle,rgba(196,168,116,0.28),transparent_68%)] blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Car Wash Pipera"
          className="relative mx-auto h-auto w-full max-w-[200px] drop-shadow-[0_0_48px_rgba(196,168,116,0.35)] md:max-w-[240px]"
        />
      </motion.div>
    </motion.div>
  );
}
