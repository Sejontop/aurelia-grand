import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://aurelia-grand-gamma.vercel.app"),

  title: {
    default: "Aurelia Grand | Luxury Hotel Inspiration",
    template: "%s | Aurelia Grand",
  },

  description:
    "Discover Aurelia Grand, a luxury hotel inspiration website showcasing modern architecture, elegant interiors, refined hospitality, and premium guest experiences.",

  keywords: [
    "luxury hotel",
    "hotel inspiration",
    "modern hotel design",
    "boutique hotel",
    "five star hotel",
    "luxury resort",
    "hotel architecture",
    "hotel interiors",
    "hospitality design",
    "Aurelia Grand",
  ],

  authors: [
    {
      name: "Aurelia Grand",
    },
  ],

  creator: "Aurelia Grand",
  publisher: "Aurelia Grand",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aurelia-grand-gamma.vercel.app",
    siteName: "Aurelia Grand",
    title: "Aurelia Grand | Luxury Hotel Inspiration",
    description:
      "Experience timeless elegance through a curated showcase of luxury hotel architecture, sophisticated interiors, and premium hospitality design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurelia Grand Luxury Hotel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aurelia Grand | Luxury Hotel Inspiration",
    description:
      "A modern luxury hotel inspiration website celebrating exceptional hospitality and elegant design.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://aurelia-grand-gamma.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
  {/* Background image */}
  <div className="fixed inset-0 z-0">
    <Image
      src="/background_image.jpg"
      alt=""
      fill
      priority
      className="object-cover opacity-30"
    />
  </div>

  {/* Dark tint */}
  <div className="fixed inset-0 z-10 bg-black/50" />

  {/* Website scrolling content */}
  <main className="relative z-20">
    {children}
  </main>
</body>

    </html>
  );
}
