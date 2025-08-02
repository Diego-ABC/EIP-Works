import { darkModeLSKey } from "./constants";

export default function setDarkMode(isDarkMode) {
  localStorage.setItem(darkModeLSKey, JSON.stringify(isDarkMode));
  document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
}
