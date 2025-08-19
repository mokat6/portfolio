"use client";
import { LottiePlaceholder } from "@/lib/svgs";
import { useEffect, useState } from "react";

export function LottieAnim22({ children, fallback }: { children: React.ReactNode; fallback: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <>{<LottiePlaceholder />}</>; // show loader until hydration
  return <>{<p>OK la</p>}</>;
}
