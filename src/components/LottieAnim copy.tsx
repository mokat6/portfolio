// "use client";
// import { useEffect, useRef, useState } from "react";
// import lottie, { AnimationItem } from "lottie-web";
// import animationData from "@/lib/lottie";
// import { useTheme } from "@/context/theme/theme-context";

// export const LottieAnim = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const animRef = useRef<AnimationItem | null>(null);
//   const { theme } = useTheme();
//   const hasPlayedOnce = useRef(false);
//
//   useEffect(() => {
//     if (!containerRef.current) return;

//     const clonedData = JSON.parse(JSON.stringify(animationData));

//     const color = theme === "light" ? [0, 0, 0, 1] : [1, 1, 1, 1];
//     if (clonedData.layers[7]?.ef?.[0]?.ef?.[0].v.k) clonedData.layers[7].ef[0].ef[0].v.k = color;

//     if (animRef.current) {
//       animRef.current.destroy();
//     }

//     animRef.current = lottie.loadAnimation({
//       container: containerRef.current,
//       renderer: "svg",
//       loop: false,
//       autoplay: !hasPlayedOnce.current,
//       animationData: clonedData,
//     });

//     if (!hasPlayedOnce.current) hasPlayedOnce.current = true;
//   }, [theme]);

//   const replay = () => {
//     if (animRef.current && animRef.current.isPaused) {
//       animRef.current.stop();
//       animRef.current.play();
//     }
//   };

//   return (
//     <div>
//       <div ref={containerRef} onMouseEnter={replay} className="w-64 h-64" />
//     </div>
//   );
// };
