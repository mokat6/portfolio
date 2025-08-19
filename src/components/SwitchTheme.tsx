"use client";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/context/theme/theme-context";
import { Switch } from "./Switch";
import { useEffect, useState } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { SwitchMoon } from "./SwitchMoon";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handler = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
  };

  // While not mounted, show skeleton-ish version
  const isLoading = !mounted;
  const label = isLoading ? (
    <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse" />
  ) : theme === "dark" ? (
    <FaMoon size={32} />
  ) : (
    <FaSun size={32} />
  );

  return (
    // <SwitchPrimitive.Root
    //   checked={mounted && theme === "dark"}
    //   onCheckedChange={handler}
    //   className={`
    //           relative h-9 w-18 rounded-full bg-gray-200 transition-colors
    //           focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2 data-[state=checked]:bg-gray-400
    //           `}
    // >
    //   <FaMoon size={32} />

    //   <SwitchPrimitive.Thumb className="block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-10">
    //     <FaSun size={32} />
    //   </SwitchPrimitive.Thumb>
    // </SwitchPrimitive.Root>
    <SwitchMoon />
    // <Switch
    //   id="asd"
    //   label={label}
    //   checked={mounted && theme === "dark"} // prevent "jump" by locking checked until mounted
    //   onCheckedChange={handler}
    //   disabled={isLoading} // optional: block interaction until ready
    // />
  );
}
