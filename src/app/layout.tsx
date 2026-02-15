import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Andrew Tirto Kusumo — Senior Data Engineer";
const description =
  "Portfolio of Andrew Tirto Kusumo, a Senior Data Engineer with 7+ years of experience building scalable data pipelines and analytics platforms.";

export const metadata: Metadata = {
  metadataBase: new URL("https://andrewtk.dev"),
  title: {
    default: title,
    template: "%s — Andrew Tirto Kusumo",
  },
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andrewtk.dev",
    siteName: "Andrew Tirto Kusumo",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
