import type { Metadata } from "next";
import { Merriweather, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const serif = Merriweather({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "700", "900"] });
const sans = Source_Sans_3({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mono = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Machine Labor and Human Time",
  description: "A future history of AI, politics, war, religion, labor, and institutional trust, 2026-2035.",
  openGraph: {
    title: "Machine Labor and Human Time",
    description: "A serious future-history scenario written from 2036.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
