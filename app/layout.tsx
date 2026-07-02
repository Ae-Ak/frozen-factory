// =============================================================
// ROOT-LAYOUT
// Gilt für alle Seiten: Nunito-Schrift, Design-Varianten-
// Provider, Header, Footer und Google-Analytics-Platzhalter.
// =============================================================

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { DesignProvider } from "@/components/DesignContext";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Nunito (Google Fonts) – wird von Next.js selbst gehostet,
// dadurch kein externer Request an Google beim Seitenaufruf.
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Frozen Factory – Die rollende Softeisdiele",
    template: "%s | Frozen Factory",
  },
  description:
    "Handgemachtes Softeis aus österreichischer Alpenvollmilch – 100 % laktosefrei, mit Soßen aus 90 % echten Früchten. Buchbar für Festivals, Firmenevents und private Feiern.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <DesignProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </DesignProvider>
        <Analytics />
      </body>
    </html>
  );
}
