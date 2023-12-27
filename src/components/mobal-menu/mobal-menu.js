import "./mobal-menu.scss";

const openMenu = document.querySelector(".header__menu--mobal-img");
const openMenuMobal = document.querySelector(".header-mobal__menu-img");
const mobalMenu = document.querySelector(".mobal-menu");
const closeMenu = document.querySelector(".mobal-menu__close");

const toggleMenu = () => {
  mobalMenu.classList.toggle("mobal-menu__active");
};

openMenu.addEventListener("click", toggleMenu);
openMenuMobal.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
