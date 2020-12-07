import { refs } from "../data/refs";

export const onDarkTheme = () => {
    refs.bodyRef.classList.contains("light-theme") && refs.bodyRef.classList.remove("light-theme");

    refs.bodyRef.classList.add("dark-theme");

}