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
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  // const [mounted, setMounted] = useState(false);
  const [animationData, setAnimationData] = useState<any | null>(null);

  // useEffect(() => setMounted(true), []);

  useEffect(() => {
    fetch("/lottieAnimGraph.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !animationData) return;

    const animDataCopy = JSON.parse(JSON.stringify(animationData));
    const strokeColor = dark ? [1, 1, 1, 1] : [0, 0, 0, 1];
    if (animDataCopy.layers[7]?.ef?.[0]?.ef?.[0].v.k) {
      animDataCopy.layers[7].ef[0].ef[0].v.k = strokeColor;
    }

    if (animRef.current) animRef.current.destroy();

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: !hasPlayedOnce,
      animationData: animDataCopy,
    });

    if (!hasPlayedOnce) setHasPlayedOnce(true);
  }, [dark, animationData]);

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
        className={`absolute inset-0 transition-opacity duration-300 ${hasPlayedOnce ? "opacity-0" : "opacity-100"}`}
      >
        <LottiePlaceholder />
      </div>

      {/* Actual Lottie animation */}
      <div
        ref={containerRef}
        className={`absolute inset-0 transition-opacity duration-300 ${!!animationData ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};
