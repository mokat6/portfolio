"use client";
import { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "../../public/ae.json";

export const LottieAnim = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const [color, setColor] = useState<[number, number, number, number]>([1, 1, 1, 1]); // default white

  useEffect(() => {
    if (!containerRef.current) return;

    // Clone JSON to avoid mutation
    const clonedData = JSON.parse(JSON.stringify(animationData));

    // Apply initial color
    if (clonedData.layers[7]?.ef?.[0]?.ef?.[0].v.k) clonedData.layers[7].ef[0].ef[0].v.k = color;

    // Destroy previous anim if it exists
    if (animRef.current) {
      animRef.current.destroy();
    }

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: clonedData,
    });
  }, [color]); // rerun when color changes

  const replay = () => {
    if (animRef.current && animRef.current.isPaused) {
      animRef.current.stop(); // reset to frame 0
      animRef.current.play(); // play once
    }
  };

  return (
    <div>
      <div ref={containerRef} onMouseEnter={replay} className="w-64 h-64" />

      <div className="flex gap-2 mt-4">
        <button onClick={() => setColor([1, 0, 0, 1])}>Red</button>
        <button onClick={() => setColor([0, 1, 0, 1])}>Green</button>
        <button onClick={() => setColor([0, 0, 1, 1])}>Blue</button>
        <button onClick={() => setColor([1, 1, 1, 1])}>White</button>
      </div>
    </div>
  );
};
