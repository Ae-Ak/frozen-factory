import type { Metadata } from "next";
import CateringPage from "@/components/pages/CateringPage";

export const metadata: Metadata = {
  title: "Eis-Catering für Firmen & Events",
  description:
    "Softeis-Catering mit Truck oder mobiler Eistheke: Personal, Equipment und individuelles Menü inklusive. Jetzt unverbindlich für Firmenevent, Messe oder Feier anfragen.",
};

export default function Page() {
  return <CateringPage />;
}
