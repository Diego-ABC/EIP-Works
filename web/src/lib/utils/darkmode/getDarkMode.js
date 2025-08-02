import { darkModeLSKey } from "./constants";

export default function getDarkMode() {
  return JSON.parse(localStorage.getItem(darkModeLSKey));
}
