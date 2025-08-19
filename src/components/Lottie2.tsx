"use client";

import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@/lib/lottie";
import { useTheme } from "@/context/theme/theme-context";
import { LottiePlaceholder } from "@/lib/svgs";

export const LottieAnim2 = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated)
    return (
      <div className="w-64 h-64">
        <LottiePlaceholder />
      </div>
    ); // placeholder while waiting for hydration

  // Actual Lottie animation
  return <LottieAnimation />;
};

// Separate component for Lottie logic
const LottieAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const { theme } = useTheme();
  const hasPlayedOnce = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clone the animation JSON to safely modify it
    const clonedData = JSON.parse(JSON.stringify(animationData));

    // Example: change color based on theme
    const color = theme === "light" ? [0, 0, 0, 1] : [1, 1, 1, 1];
    if (clonedData.layers[7]?.ef?.[0]?.ef?.[0].v.k) clonedData.layers[7].ef[0].ef[0].v.k = color;

    if (animRef.current) {
      animRef.current.destroy();
    }

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: !hasPlayedOnce.current,
      animationData: clonedData,
    });

    if (!hasPlayedOnce.current) hasPlayedOnce.current = true;
  }, [theme]);

  const replay = () => {
    if (animRef.current && animRef.current.isPaused) {
      animRef.current.stop();
      animRef.current.play();
    }
  };

  return (
    <div>
      <div ref={containerRef} onMouseEnter={replay} className="w-64 h-64" />
    </div>
  );
};
