"use client";
import { useEffect, useMemo, useState } from "react";
import { DarkContext } from "./dark-context";

export const DarkProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return null;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const current = document.documentElement.classList.contains("dark") ? true : false;
    setDark(current);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.toggle("dark", !!dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return <DarkContext.Provider value={{ dark, setDark }}>{children}</DarkContext.Provider>;
};
