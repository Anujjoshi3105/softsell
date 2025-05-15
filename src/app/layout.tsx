import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import Loading from "./loading";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});
export const metadata: Metadata = {
  title: "SoftSell – Software Resale Made Easy",
  description:
    "SoftSell is your trusted B2B platform to turn unused software licenses into cash. Get real-time quotes, accurate license valuation, and fast payouts — all within minutes.",
  keywords:
    "resell software licenses, unused software resale, sell digital licenses, B2B license marketplace, license buyback, software liquidation, license valuation, monetize software, SoftSell platform",
  authors: [
    { name: "SoftSell Team", url: "https://softsell.vercel.com" },
    { name: "Anuj Joshi", url: "https://anujoshi.netlify.app" },
  ],
  openGraph: {
    title: "SoftSell – Fast, Secure & Profitable Software License Resale",
    description:
      "Unlock value from your unused software licenses with SoftSell. Get quotes, validate licenses, and get paid instantly. Trusted by businesses for secure resale.",
    siteName: "SoftSell",
    url: "https://softsell.vercel.com",
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
  metadataBase: new URL("https://softsell.vercel.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${montserrat.className} overflow-x-hidden`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

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
