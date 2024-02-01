import Home from "./home";
import Menu from "./menu";
import About from "./about";

import { updateSlide, cleanDiv } from "./helpers";

const contentDiv = document.getElementById("content");

const loadPage = (page) => {
  switch (page) {
    case "home":
      if (document.querySelector(".home-page")) return;

      updateSlide("nav__left");
      cleanDiv(contentDiv);
      contentDiv.appendChild(Home());

      break;

    case "menu":
      if (document.querySelector(".menu-page")) return;

      updateSlide("nav__center");
      cleanDiv(contentDiv);
      contentDiv.appendChild(Menu());

      break;

    case "about":
      if (document.querySelector(".about-page")) return;

      updateSlide("nav__right");
      cleanDiv(contentDiv);
      contentDiv.appendChild(About());

      break;
  }
};

export default loadPage;
