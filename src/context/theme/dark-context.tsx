"use client";
import { createContext, useContext } from "react";

export interface DarkContextValue {
  dark: boolean | null;
  setDark: (isDark: boolean) => void;
}

export const DarkContext = createContext<DarkContextValue | undefined>(undefined);

export const useDark = (): DarkContextValue => {
  const ctx = useContext(DarkContext);
  if (!ctx) {
    throw new Error("useDark must be used within a ThemeProvider");
  }
  return ctx;
};
