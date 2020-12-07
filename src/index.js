import './styles.css';
import data from "./data/menu.json"
import cards from "./templates/cards.hbs"


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    checkboxRef: document.getElementById("theme-switch-toggle"),
    bodyRef: document.querySelector("body"),
    ulRef: document.querySelector(".js-menu"),
}

const onDarkTheme = () => {
    refs.bodyRef.classList.contains("light-theme") && refs.bodyRef.classList.remove("light-theme");

    refs.bodyRef.classList.add("dark-theme");

}

const onLightTheme = () => {
    refs.bodyRef.classList.contains("dark-theme") && refs.bodyRef.classList.remove("dark-theme");

    refs.bodyRef.classList.add("light-theme");

}

// приводим из string в boolean из localStorage
if (localStorage.getItem("Theme")) {
    const checkedBoolean = JSON.parse(localStorage.getItem("Theme"));
    refs.checkboxRef.checked = checkedBoolean;
    refs.checkboxRef.checked ? onDarkTheme() : onLightTheme();
}
const checkboxState = (e) => {
    // приводим в string из boolean для localStorage
    localStorage.setItem("Theme", JSON.stringify(e.target.checked))
    e.target.checked ? onDarkTheme() : onLightTheme();
}
refs.checkboxRef.addEventListener("change", checkboxState);

refs.ulRef.innerHTML = cards(data);
