import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yogasastrawan.vercel.app"),
  title: "I Putu Yoga Sastrawan | Junior Full-Stack Developer",
  description:
    "Portfolio personal I Putu Yoga Sastrawan — Junior Full-Stack Developer yang membangun aplikasi web modern, cepat, dan berdampak menggunakan React, Next.js, Laravel, dan lebih banyak lagi.",
  authors: [{ name: "I Putu Yoga Sastrawan" }],
  keywords: [
    "Junior Full-Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Laravel",
    "I Putu Yoga Sastrawan",
  ],
  openGraph: {
    title: "I Putu Yoga Sastrawan | Junior Full-Stack Developer",
    description:
      "Portfolio personal yang menampilkan proyek, keahlian, dan pengalaman saya sebagai Junior Full-Stack Developer.",
    url: "https://yogasastrawan.vercel.app",
    siteName: "Yoga Sastrawan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "I Putu Yoga Sastrawan – Junior Full-Stack Developer",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Putu Yoga Sastrawan | Junior Full-Stack Developer",
    description: "Portfolio personal yang menampilkan proyek dan keahlian saya.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
