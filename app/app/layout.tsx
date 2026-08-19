import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leri — An AI concierge for every customer",
  description:
    "Leri knows your policies, takes real action in your systems, and hands over to a person the moment that's the right call.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <div style={{ overflowX: "clip" }}>
          <Header />
          {children}
          <Footer />
        </div>
        <Reveal />
      </body>
    </html>
  );
}
