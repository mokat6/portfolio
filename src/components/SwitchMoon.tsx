"use client";
import { useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const SwitchMoon = () => {
  const [dark, setDark] = useState<boolean | null>(null);
  const allowSlide = useRef(false);

  // Load preference on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setDark(stored === "dark");
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      // fallback to system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

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
        className={`absolute top-1 left-[6px] h-6 w-6 rounded-full
    bg-white dark:bg-black
     duration-300 ease-out 
    ${allowSlide.current ? "transition-all" : "transition-opacity"} 
    ${dark != null ? "opacity-100 " : "opacity-0 "}
    ${dark ? "translate-x-7" : ""}
  `}
      />
      <FaSun className={`${dark === false ? "text-yellow-500" : "text-gray-500"} w-5 h-5 ml-1 z-10`} />
      <FaMoon className={`${dark === true ? "text-blue-400" : "text-gray-500"} w-5 h-5 ml-auto mr-1 z-10`} />
    </button>
  );
};
