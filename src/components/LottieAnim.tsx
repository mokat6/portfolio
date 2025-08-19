"use client";
import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "@/lib/lottie";
import { useTheme } from "@/context/theme/theme-context";

const LottieAnim = () => {
  const { theme } = useTheme();
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const replay = () => {
    if (lottieRef.current && lottieRef.current) {
      lottieRef.current.stop();
      lottieRef.current.play();
    }
  };

  return (
    <div>
      {/* <div ref={containerRef} onMouseEnter={replay} className="w-64 h-64" /> */}
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        onMouseEnter={replay}
        placeholder="lolsadsadasd"
        loop={false}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};

export default LottieAnim;
