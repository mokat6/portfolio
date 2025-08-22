"use client";

import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@/assets/lottieAnimGraph.json";
import { useDark } from "@/context/theme/dark-context";
import { LottiePlaceholder } from "@/lib/svgs";

export const LottieAnim = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const { dark } = useDark();
  const hasPlayedOnce = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!containerRef.current) return;

    const newAnimData = animationData;
    const strokeColor = dark ? [1, 1, 1, 1] : [0, 0, 0, 1];
    if (newAnimData.layers[7]?.ef?.[0]?.ef?.[0].v.k) {
      newAnimData.layers[7].ef[0].ef[0].v.k = strokeColor;
    }

    if (animRef.current) animRef.current.destroy();

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: !hasPlayedOnce.current,
      animationData: newAnimData,
    });

    if (!hasPlayedOnce.current) hasPlayedOnce.current = true;
  }, [dark]);

  const replay = () => {
    if (animRef.current && animRef.current.isPaused) {
      animRef.current.stop();
      animRef.current.play();
    }
  };

  return (
    <div className="relative w-64 h-64" onMouseEnter={replay}>
      {/* Placeholder */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          hasPlayedOnce.current ? "opacity-0" : "opacity-100"
        }`}
      >
        <LottiePlaceholder />
      </div>

      {/* Actual Lottie animation */}
      <div
        ref={containerRef}
        className={`absolute inset-0 transition-opacity duration-300 ${mounted ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};
