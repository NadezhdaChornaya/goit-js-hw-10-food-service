import './styles.css';
import data from "./data/menu.json"

console.log(data);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const checkboxRef = document.getElementById("theme-switch-toggle");
const bodyRef = document.querySelector("body");

const onDarkTheme = () => {
    bodyRef.classList.contains("light-theme") && bodyRef.classList.remove("light-theme");

    bodyRef.classList.add("dark-theme");

}

const onLightTheme = () => {
    bodyRef.classList.contains("dark-theme") && bodyRef.classList.remove("dark-theme");

    bodyRef.classList.add("light-theme");

}

// приводим из string в boolean из localStorage
if (localStorage.getItem("Theme")) {
    const checkedBoolean = JSON.parse(localStorage.getItem("Theme"));
    checkboxRef.checked = checkedBoolean;
    checkboxRef.checked ? onDarkTheme() : onLightTheme();
}
const checkboxState = (e) => {
    // приводим в string из boolean для localStorage
    localStorage.setItem("Theme", JSON.stringify(e.target.checked))
    e.target.checked ? onDarkTheme() : onLightTheme();
}
checkboxRef.addEventListener("change", checkboxState);

// ==========================================================



