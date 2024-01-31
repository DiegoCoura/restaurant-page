import Home from "./home";
import Menu from "./menu";
import About from "./about";
import "./style.css";

const homeButton = document.querySelector(".home-btn");
const menuButton = document.querySelector(".menu-btn");
const aboutButton = document.querySelector(".about-btn");
const contentDiv = document.getElementById("content");

const slideBtn = document.querySelector(".slide-btn");

homeButton.addEventListener("click", function (e) {
  toggleHighlight(e.target);
  loadHomePage();
});

menuButton.addEventListener("click", function (e) {
  toggleHighlight(e.target);
  loadMenuPage();
});

aboutButton.addEventListener("click", function (e) {
  toggleHighlight(e.target);
  loadAboutPage();
});

function toggleHighlight(button) {
  document.querySelector(".active")?.classList.remove("active");
  button.classList.add("active");
}

function cleanDiv(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  return;
}

function updateSlide(position) {
  if (slideBtn.classList.contains(position)) return;

  slideBtn.classList.contains("right")
    ? slideBtn.classList.remove("right")
    : "";

  slideBtn.classList.contains("center")
    ? slideBtn.classList.remove("center")
    : "";

  slideBtn.classList.contains("left") ? slideBtn.classList.remove("left") : "";

  slideBtn.classList.add(position);
}

function loadHomePage() {
  if (document.querySelector(".home-page")) return;

  updateSlide("left");
  cleanDiv(contentDiv);
  contentDiv.appendChild(Home());
}

function loadMenuPage() {
  if (document.querySelector(".menu-page")) return;

  updateSlide("center");
  cleanDiv(contentDiv);
  contentDiv.appendChild(Menu());
}

function loadAboutPage() {
  if (document.querySelector(".about-page")) return;

  updateSlide("right");
  cleanDiv(contentDiv);
  contentDiv.appendChild(About());
}

document.onload = loadHomePage();
