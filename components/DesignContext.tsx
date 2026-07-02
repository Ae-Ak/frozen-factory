"use client";

// =============================================================
// DESIGN-VARIANTEN-UMSCHALTER
// -------------------------------------------------------------
// Zwei Varianten:
//   "minimal"   – minimalistisch & elegant (Standard)
//   "verspielt" – farbenfroh & festival-nah, mit Animationen
//
// Die Wahl wird im localStorage gespeichert und als
// data-Attribut ans <html>-Element geschrieben, damit auch
// reine CSS-Regeln (globals.css) darauf reagieren können.
// =============================================================

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type DesignVariant = "minimal" | "verspielt";

type DesignContextValue = {
  variant: DesignVariant;
  setVariant: (v: DesignVariant) => void;
  /** true = verspielte Variante aktiv (Kurzform für Komponenten) */
  playful: boolean;
};

const DesignContext = createContext<DesignContextValue>({
  variant: "minimal",
  setVariant: () => {},
  playful: false,
});

const STORAGE_KEY = "ff-design-variant";

export function DesignProvider({ children }: { children: ReactNode }) {
  const [variant, setVariantState] = useState<DesignVariant>("minimal");

  // Gespeicherte Wahl beim ersten Laden wiederherstellen
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "minimal" || saved === "verspielt") {
      setVariantState(saved);
    }
  }, []);

  // Variante am <html>-Element und im localStorage hinterlegen
  useEffect(() => {
    document.documentElement.dataset.variant = variant;
    window.localStorage.setItem(STORAGE_KEY, variant);
  }, [variant]);

  return (
    <DesignContext.Provider
      value={{
        variant,
        setVariant: setVariantState,
        playful: variant === "verspielt",
      }}
    >
      {children}
    </DesignContext.Provider>
  );
}

/** Hook für Komponenten: const { playful } = useDesign(); */
export function useDesign() {
  return useContext(DesignContext);
}
