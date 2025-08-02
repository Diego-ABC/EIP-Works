import Moon from "@/assets/icons/Moon";
import Sun from "@/assets/icons/Sun";
import getDarkMode from "@/lib/utils/darkmode/getDarkMode";
import setDarkMode from "@/lib/utils/darkmode/setDarkMode";
import { useEffect, useState } from "react";

export default function DarkModeToggle({ className = "" }) {
  const [isDarkMode, setIsDarkMode] = useState(getDarkMode());
  useEffect(() => {
    setDarkMode(isDarkMode);
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <button
      onClick={toggleDarkMode}
      className={"btn btn-accent" + " " + className}
    >
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
}
