import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { ORG, SITE_URL } from "@/lib/site";
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

// Who this company is, in the format crawlers read. areaServed lists cities
// we operate in, not offices — there is deliberately no postal address here.
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: ORG.name,
  url: SITE_URL,
  description: ORG.description,
  parentOrganization: { "@type": "Organization", name: ORG.parent },
  areaServed: ORG.cities.map((name) => ({ "@type": "City", name })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${SITE_URL}/contact`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <JsonLd data={organization} />
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
