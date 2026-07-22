import type { Metadata, Viewport } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://carwash-pipera.vercel.app"),
  title: "Car Wash Pipera — Luxury Auto Care | Voluntari",
  description:
    "Spălătorie auto premium în Pipera: exterior, interior și detailing. Șoseaua București Nord 14, Voluntari. Zilnic 09:00–19:30. Tel. +40 743 664 665.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Car Wash Pipera — Luxury Auto Care",
    description:
      "Strălucire de showroom în Pipera. Exterior, interior, detailing. Deschis zilnic 09:00–19:30.",
    locale: "ro_RO",
    type: "website",
    images: [{ url: "/hero.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
