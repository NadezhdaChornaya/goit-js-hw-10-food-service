import './styles.css';
import data from "./data/menu.json";
import cards from "./templates/cards.hbs";
import { refs } from "./data/refs";
import { theme } from "./data/theme";


const onDarkTheme = () => {
    refs.bodyRef.classList.contains("light-theme") && refs.bodyRef.classList.remove("light-theme");

    refs.bodyRef.classList.add("dark-theme");

}

const onLightTheme = () => {
    refs.bodyRef.classList.contains("dark-theme") && refs.bodyRef.classList.remove("dark-theme");

    refs.bodyRef.classList.add("light-theme");

}

// приводим из string в boolean из localStorage
if (localStorage.getItem("theme")) {
    const checkedBoolean = JSON.parse(localStorage.getItem("theme"));
    refs.checkboxRef.checked = checkedBoolean;
    refs.checkboxRef.checked ? onDarkTheme() : onLightTheme();
}
const checkboxState = (e) => {
    // приводим в string из boolean для localStorage
    localStorage.setItem("theme", JSON.stringify(e.target.checked))
    e.target.checked ? onDarkTheme() : onLightTheme();
}
refs.checkboxRef.addEventListener("change", checkboxState);

refs.ulRef.innerHTML = cards(data);
