import loadPage from "./loadPage";
import { toggleHighlight } from "./helpers";

import "./style.css";

const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const aboutButton = document.querySelector(".about-btn");

homeButton.addEventListener("click", function (e) {
  toggleHighlight(e.target);
  loadPage(e.target.id);
});

menuButton.addEventListener("click", function (e) {
  toggleHighlight(e.target);
  loadPage(e.target.id);
});

aboutButton.addEventListener("click", function (e) {
  toggleHighlight(e.target);
  loadPage(e.target.id);
});

document.onload = loadPage("home");
