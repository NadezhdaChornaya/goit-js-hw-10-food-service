import './styles.css';
import data from "./data/menu.json";
import cards from "./templates/cards.hbs";
import { refs } from "./data/refs";
import { theme } from "./data/theme";
import { onDarkTheme } from "./components/onDarkTheme";
import { onLightTheme } from "./components/onLightTheme";
import { checkboxState } from "./components/checkboxState";


// приводим из string в boolean из localStorage
if (localStorage.getItem("theme")) {
    const checkedBoolean = JSON.parse(localStorage.getItem("theme"));
    refs.checkboxRef.checked = checkedBoolean;
    refs.checkboxRef.checked ? onDarkTheme() : onLightTheme();
}

refs.checkboxRef.addEventListener("change", checkboxState);

refs.ulRef.innerHTML = cards(data);
