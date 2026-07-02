"use client";

// =============================================================
// FORMULAR 2: EIS-CATERING ANFRAGEN (B2B)
// Felder: Name, E-Mail, Telefon, Veranstaltungstyp & Größe,
// Datum & Zeit, Anzahl Gäste, Sonderwünsche.
// =============================================================

import { useState, type FormEvent } from "react";
import {
  SelectField,
  TextAreaField,
  TextField,
  validators,
  type Errors,
} from "./fields";
import { submitInquiry } from "./submit";

const initial = {
  name: "",
  email: "",
  phone: "",
  occasionType: "",
  occasionSize: "",
  date: "",
  time: "",
  guests: "",
  wishes: "",
};

export default function CateringForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(field: keyof typeof initial) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate(): Errors {
    const errs: Errors = {};
    const add = (k: string, msg: string | null) => {
      if (msg) errs[k] = msg;
    };
    add("name", validators.required(values.name, "deinen Namen"));
    add("email", validators.email(values.email));
    add("phone", validators.phone(values.phone));
    add("occasionType", validators.required(values.occasionType, "den Veranstaltungstyp"));
    add("occasionSize", validators.required(values.occasionSize, "die Veranstaltungsgröße"));
    add("date", validators.futureDate(values.date));
    add("time", validators.required(values.time, "eine Uhrzeit"));
    add("guests", validators.positiveNumber(values.guests, "die Gästezahl"));
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    const result = await submitInquiry("eis-catering", values);
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.message);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card bg-rose-soft p-6 text-center">
        <p className="text-3xl" aria-hidden="true">🍦</p>
        <h3 className="mt-2 text-xl font-extrabold text-ink">
          Catering-Anfrage gesendet – danke!
        </h3>
        <p className="mt-2 text-ink-soft">
          Wir erstellen dir ein individuelles Angebot und melden uns innerhalb
          von 48 Stunden.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Name"
          name="catering-name"
          required
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
        />
        <TextField
          label="E-Mail"
          name="catering-email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <TextField
          label="Telefon"
          name="catering-phone"
          type="tel"
          required
          autoComplete="tel"
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
        />
        <SelectField
          label="Veranstaltungstyp"
          name="catering-occasion"
          required
          options={[
            "Firmenevent",
            "Hochzeit",
            "Geburtstag",
            "Messe / Kongress",
            "Sonstiges",
          ]}
          value={values.occasionType}
          onChange={set("occasionType")}
          error={errors.occasionType}
        />
        <SelectField
          label="Größe der Veranstaltung"
          name="catering-size"
          required
          options={[
            "Klein (bis 50 Gäste)",
            "Mittel (50–200 Gäste)",
            "Groß (200–1000 Gäste)",
            "Sehr groß (über 1000 Gäste)",
          ]}
          value={values.occasionSize}
          onChange={set("occasionSize")}
          error={errors.occasionSize}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <TextField
          label="Datum"
          name="catering-date"
          type="date"
          required
          value={values.date}
          onChange={set("date")}
          error={errors.date}
        />
        <TextField
          label="Uhrzeit"
          name="catering-time"
          type="time"
          required
          value={values.time}
          onChange={set("time")}
          error={errors.time}
        />
        <TextField
          label="Anzahl Gäste"
          name="catering-guests"
          type="number"
          min={1}
          required
          placeholder="z.B. 120"
          value={values.guests}
          onChange={set("guests")}
          error={errors.guests}
        />
      </div>

      <TextAreaField
        label="Sonderwünsche"
        name="catering-wishes"
        placeholder="Wunsch-Kreationen, Branding am Becher, Allergie-Infos, Standort-Besonderheiten …"
        value={values.wishes}
        onChange={set("wishes")}
      />

      {status === "error" && (
        <p role="alert" className="rounded-card bg-rose-soft px-4 py-3 text-sm font-bold text-rose-dark">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-btn bg-rose px-6 py-3 font-extrabold text-white transition-colors hover:bg-rose-dark disabled:opacity-60"
      >
        {status === "sending" ? "Wird gesendet …" : "Catering-Anfrage senden"}
      </button>
      <p className="text-xs text-ink-soft">
        * Pflichtfelder. Deine Daten nutzen wir ausschließlich zur Bearbeitung
        deiner Anfrage – Details in der{" "}
        <a href="/rechtliches#datenschutz" className="underline">
          Datenschutzerklärung
        </a>
        .
      </p>
    </form>
  );
}
