import type { Metadata } from "next";
import MenuPage from "@/components/pages/MenuPage";

export const metadata: Metadata = {
  title: "Menü – 7 Signature Kreationen",
  description:
    "Beerentraum, Tropicana, Affogato XL & mehr: Alle Softeis-Kreationen der Frozen Factory – 100 % laktosefrei, handgemacht, mit Soßen aus 90 % echten Früchten.",
};

export default function Page() {
  return <MenuPage />;
}
