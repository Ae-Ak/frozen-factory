import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Von der Smoothie-Werkstatt zur Frozen Factory: 10 Jahre Food-Truck-Erfahrung, ehrliche Zutaten und Festival-Herz. Lerne das Team hinter dem Eiswagen kennen.",
};

export default function Page() {
  return <AboutPage />;
}
