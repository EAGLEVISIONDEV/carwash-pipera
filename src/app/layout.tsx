import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
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
  themeColor: "#07090b",
};

export const metadata: Metadata = {
  title: "Car Wash Pipera — Spălătorie Auto | Voluntari",
  description:
    "Spălătorie auto în Pipera: exterior, interior și detailing. Șoseaua București Nord 14, Voluntari. Zilnic 09:00–19:30. Tel. +40 743 664 665.",
  openGraph: {
    title: "Car Wash Pipera — Strălucire de showroom",
    description:
      "Spălare auto profesională în Pipera. Exterior, interior, detailing. Deschis zilnic 09:00–19:30.",
    locale: "ro_RO",
    type: "website",
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
