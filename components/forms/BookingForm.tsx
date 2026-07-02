"use client";

// =============================================================
// FORMULAR 1: FESTIVALS & EVENTS BUCHEN
// Felder: Name, E-Mail, Telefon, Event-Typ, Wunschdatum,
// Ort/PLZ, Besucherzahl, Besonderheiten.
// Validierung clientseitig, Versand über submitInquiry().
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
  eventType: "",
  date: "",
  location: "",
  visitors: "",
  notes: "",
};

export default function BookingForm() {
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
    add("eventType", validators.required(values.eventType, "den Event-Typ"));
    add("date", validators.futureDate(values.date));
    add("location", validators.required(values.location, "Ort oder PLZ"));
    add("visitors", validators.positiveNumber(values.visitors, "die Besucherzahl"));
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    const result = await submitInquiry("event-buchung", values);
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.message);
    }
  }

  // Erfolgsmeldung statt Formular anzeigen
  if (status === "success") {
    return (
      <div className="rounded-card bg-rose-soft p-6 text-center">
        <p className="text-3xl" aria-hidden="true">🎉</p>
        <h3 className="mt-2 text-xl font-extrabold text-ink">
          Anfrage gesendet – danke!
        </h3>
        <p className="mt-2 text-ink-soft">
          Wir melden uns innerhalb von 48 Stunden bei dir. Bei dringenden
          Anfragen erreichst du uns auch telefonisch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Name"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
        />
        <TextField
          label="E-Mail"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Telefon"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
        />
        <SelectField
          label="Event-Typ"
          name="eventType"
          required
          options={["Festival", "Firmenanlass", "Private Veranstaltung", "Sonstiges"]}
          value={values.eventType}
          onChange={set("eventType")}
          error={errors.eventType}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <TextField
          label="Gewünschtes Datum"
          name="date"
          type="date"
          required
          value={values.date}
          onChange={set("date")}
          error={errors.date}
        />
        <TextField
          label="Ort / PLZ"
          name="location"
          required
          placeholder="z.B. 80331 München"
          value={values.location}
          onChange={set("location")}
          error={errors.location}
        />
        <TextField
          label="Erwartete Besucherzahl"
          name="visitors"
          type="number"
          min={1}
          required
          placeholder="z.B. 500"
          value={values.visitors}
          onChange={set("visitors")}
          error={errors.visitors}
        />
      </div>

      <TextAreaField
        label="Besonderheiten"
        name="notes"
        placeholder="Zeitraum, Stromversorgung, Allergie-Infos, besondere Wünsche …"
        value={values.notes}
        onChange={set("notes")}
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
        {status === "sending" ? "Wird gesendet …" : "Buchungsanfrage senden"}
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
