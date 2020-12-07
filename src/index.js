import './styles.css';
import data from "./data/menu.json"
import cards from "./templates/cards.hbs"
// import 'material-desing-icons/iconfont/material-icons.css';



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

const ulRef = document.querySelector(".js-menu");

// const createMarkup = (dataArray) => {
//     return dataArray.reduce((acc, { image, description, name, price, ingredients }) => {
//         acc += `
//         <li class="menu__item">
//   <article class="card">
//     <img
//       src=${image}
//       alt=${description}
//       class="card__image"
//     />
//     <div class="card__content">
//       <h2 class="card__name">${name}</h2>
//       <p class="card__price">
//         <i class="material-icons"> monetization_on </i>
//         ${price} кредитов
//       </p>

//       <p class="card__descr">
//         ${description}
//       </p>

//       <ul class="tag-list">
//       ${ingredients.map(ingredient =>
//             (`<li class="tag-list__item">${ingredient}</li>`)).join('')
//             }
//       </ul>
//     </div>

//     <button class="card__button button">
//       <i class="material-icons button__icon"> shopping_cart </i>
//       В корзину
//     </button>
//   </article>
// </li>
//     `

//         return acc;
//     }, "")
// };

// ulRef.innerHTML = `<ul>${createMarkup(data)}</ul>`

ulRef.innerHTML = cards(data);
