import { onDarkTheme } from "./onDarkTheme";
import { onLightTheme } from "./onLightTheme";

export const checkboxState = (e) => {
    // приводим в string из boolean для localStorage
    localStorage.setItem("theme", JSON.stringify(e.target.checked))
    e.target.checked ? onDarkTheme() : onLightTheme();
}