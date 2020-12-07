import { refs } from "../data/refs";

export const onLightTheme = () => {
    refs.bodyRef.classList.contains("dark-theme") && refs.bodyRef.classList.remove("dark-theme");

    refs.bodyRef.classList.add("light-theme");

}