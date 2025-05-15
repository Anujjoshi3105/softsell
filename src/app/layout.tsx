import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Inter, Outfit } from "next/font/google"
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})


export const metadata: Metadata = {
title: "SoftSell - The Premium Software License Marketplace",
  description:
    "Transform your unused software licenses into revenue. Get top dollar valuations and fast payments with SoftSell's premium license resale platform.",
  keywords:
    "resell software licenses, unused software resale, sell digital licenses, B2B license marketplace, license buyback, software liquidation, license valuation, monetize software, SoftSell platform",
  authors: [
    { name: "SoftSell Team", url: "https://softsell.aj.vercel.com" },
    { name: "Anuj Joshi", url: "https://anujoshi.netlify.app" },
  ],
  openGraph: {
    title: "SoftSell – Fast, Secure & Profitable Software License Resale",
    description:
      "Unlock value from your unused software licenses with SoftSell. Get quotes, validate licenses, and get paid instantly. Trusted by businesses for secure resale.",
    siteName: "SoftSell",
    url: "https://softsell.aj.vercel.com",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "SoftSell – Software Resale Made Easy",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "SoftSell – Convert Unused Software Into Instant Cash",
    description:
      "SoftSell provides a modern, seamless experience to resell your unused software licenses. Instant quotes, easy transfer, and fast payouts.",
    card: "summary_large_image",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
  },
  metadataBase: new URL("https://softsell.aj.vercel.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                  <Suspense fallback={<Loading />}>

          <Navbar />
          {children}
          <Footer />
          <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
