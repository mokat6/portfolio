"use client";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/context/theme/theme-context";
import { Switch } from "./Switch";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const handler = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
  };

  const label = theme === "dark" ? <FaMoon className="" size={32} /> : <FaSun className="" size={32} />;
  return <Switch id="asd" label={label} checked={theme === "dark"} onCheckedChange={handler} />;
}
