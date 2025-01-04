import { homepage } from "./home.js";
import { aboutPage } from "./about.js";
import { menuPage } from "./menu.js";

homepage();

let content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const aboutButton = document.querySelector("#about");
const menuButton = document.querySelector("#menu");

homeButton.addEventListener("click", () => {
    content.textContent = "";
    homepage();
});

aboutButton.addEventListener("click", () => {
    content.textContent = "";
    aboutPage();
});

menuButton.addEventListener("click", () => {
    content.textContent = "";
    menuPage();
});