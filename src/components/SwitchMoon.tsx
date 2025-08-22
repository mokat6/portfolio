"use client";
import { useDark } from "@/context/theme/dark-context";
import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import clsx from "clsx";

export const SwitchMoon = () => {
  const { dark, setDark } = useDark();
  const [mounted, setMounted] = useState(false);
  const allowSlide = useRef(false); // hides sliding to dark thumb animation on mount

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    allowSlide.current = true;
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors"
    >
      <span
        className={clsx(
          "absolute top-1 left-[6px] h-6 w-6 rounded-full bg-white dark:bg-black duration-300 ease-out",
          allowSlide.current ? "transition-all" : "transition-opacity",
          mounted ? "opacity-100 " : "opacity-0 ",
          mounted && dark && "translate-x-7"
        )}
      />
      <FaSun className={`${mounted && dark === false ? "text-yellow-500" : "text-gray-500"} w-5 h-5 ml-1 z-10`} />
      <FaMoon className={`${mounted && dark === true ? "text-blue-400" : "text-gray-500"} w-5 h-5 ml-auto mr-1 z-10`} />
    </button>
  );
};
