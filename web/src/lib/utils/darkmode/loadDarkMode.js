import { darkModeLSKey } from "./constants";
export default function loadDarkMode() {
  const isDarkMode = JSON.parse(localStorage.getItem(darkModeLSKey));

  document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
}
