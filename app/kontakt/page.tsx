import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Kontakt & Buchung",
  description:
    "Frozen Factory für dein Festival, Firmenevent oder deine private Feier buchen – oder Eis-Catering anfragen. Antwort innerhalb von 48 Stunden.",
};

export default function Page() {
  return <ContactPage />;
}
