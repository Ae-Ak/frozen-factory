import type { Metadata } from "next";
import EventsPage from "@/components/pages/EventsPage";

export const metadata: Metadata = {
  title: "Events & Festivals – Termine",
  description:
    "Wo steht der Frozen-Factory-Truck als Nächstes? Alle bestätigten Festival- und Event-Termine plus Rückblicke auf vergangene Einsätze.",
};

export default function Page() {
  return <EventsPage />;
}
