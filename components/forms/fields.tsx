"use client";

// =============================================================
// FORMULAR-BAUSTEINE + VALIDIERUNG
// Gemeinsame Felder für beide Anfrage-Formulare
// (Festival/Event-Buchung und Eis-Catering).
// =============================================================

import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

// ---------- Validierungs-Helfer ------------------------------

export type Errors = Record<string, string>;

export const validators = {
  required(value: string, label: string): string | null {
    return value.trim() ? null : `Bitte ${label} angeben.`;
  },
  email(value: string): string | null {
    if (!value.trim()) return "Bitte E-Mail-Adresse angeben.";
    // Einfache, praxistaugliche Prüfung
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
      ? null
      : "Bitte eine gültige E-Mail-Adresse angeben.";
  },
  phone(value: string): string | null {
    if (!value.trim()) return "Bitte Telefonnummer angeben.";
    return /^[+\d][\d\s\-/()]{5,}$/.test(value)
      ? null
      : "Bitte eine gültige Telefonnummer angeben.";
  },
  futureDate(value: string): string | null {
    if (!value) return "Bitte ein Datum wählen.";
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(value) >= today
      ? null
      : "Das Datum liegt in der Vergangenheit.";
  },
  positiveNumber(value: string, label: string): string | null {
    if (!value.trim()) return `Bitte ${label} angeben.`;
    const n = Number(value);
    return Number.isFinite(n) && n > 0
      ? null
      : `Bitte eine gültige Zahl für ${label} angeben.`;
  },
};

// ---------- Feld-Komponenten ---------------------------------

const inputCls =
  "w-full rounded-btn border border-ink/15 bg-white px-3.5 py-2.5 text-ink " +
  "placeholder:text-ink-soft/60 focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/30";

function FieldWrapper({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1 block text-sm font-bold text-ink">
        {label}
        {required && <span className="text-rose"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-sm font-semibold text-rose-dark">
          {error}
        </p>
      )}
    </div>
  );
}

type BaseProps = { label: string; error?: string };

export function TextField({
  label,
  error,
  id,
  required,
  ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const fieldId = id ?? rest.name ?? label;
  return (
    <FieldWrapper label={label} htmlFor={fieldId} error={error} required={required}>
      <input
        id={fieldId}
        aria-invalid={!!error}
        className={`${inputCls} ${error ? "border-rose" : ""}`}
        {...rest}
      />
    </FieldWrapper>
  );
}

export function SelectField({
  label,
  error,
  id,
  required,
  options,
  ...rest
}: BaseProps & { options: string[] } & SelectHTMLAttributes<HTMLSelectElement>) {
  const fieldId = id ?? rest.name ?? label;
  return (
    <FieldWrapper label={label} htmlFor={fieldId} error={error} required={required}>
      <select
        id={fieldId}
        aria-invalid={!!error}
        className={`${inputCls} ${error ? "border-rose" : ""}`}
        {...rest}
      >
        <option value="">Bitte wählen …</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

export function TextAreaField({
  label,
  error,
  id,
  required,
  ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const fieldId = id ?? rest.name ?? label;
  return (
    <FieldWrapper label={label} htmlFor={fieldId} error={error} required={required}>
      <textarea
        id={fieldId}
        rows={4}
        aria-invalid={!!error}
        className={`${inputCls} ${error ? "border-rose" : ""}`}
        {...rest}
      />
    </FieldWrapper>
  );
}
