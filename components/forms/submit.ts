// =============================================================
// FORMULAR-VERSAND (Demo-Modus)
// -------------------------------------------------------------
// Aktuell werden Anfragen nur simuliert (1 s Wartezeit, dann
// Erfolg) und in der Browser-Konsole ausgegeben – perfekt zum
// Testen des kompletten Ablaufs.
//
// FÜR DEN LIVEGANG – Variante EmailJS (kein eigener Server nötig):
// 1. Konto auf https://www.emailjs.com anlegen (kostenloser Tarif reicht)
// 2. E-Mail-Service verbinden + Template anlegen
// 3. `npm install @emailjs/browser`
// 4. Unten den markierten Block einkommentieren und die drei
//    IDs eintragen.
//
// Alternative: eigene Next.js API-Route (/app/api/anfrage/route.ts)
// mit z.B. Resend oder Nodemailer – die Formulare müssen dafür
// nicht geändert werden, nur diese Funktion.
// =============================================================

export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function submitInquiry(
  formType: "event-buchung" | "eis-catering",
  data: Record<string, string>,
): Promise<SubmitResult> {
  try {
    // ---------- DEMO-MODUS ----------
    console.info(`[Frozen Factory] Neue Anfrage (${formType}):`, data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { ok: true };

    // ---------- LIVE-MODUS mit EmailJS (einkommentieren) ----------
    // const emailjs = (await import("@emailjs/browser")).default;
    // await emailjs.send(
    //   "DEIN_SERVICE_ID",
    //   "DEIN_TEMPLATE_ID",
    //   { formType, ...data },
    //   { publicKey: "DEIN_PUBLIC_KEY" },
    // );
    // return { ok: true };
  } catch {
    return {
      ok: false,
      message:
        "Das hat leider nicht geklappt. Bitte versuch es später erneut oder schreib uns direkt an hallo@frozen-factory.de.",
    };
  }
}
