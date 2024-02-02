import {customCreateElement} from "./helpers.js";

const container = customCreateElement("div", { className: "home-page" });

const homePageTextContainer = customCreateElement("div", {
  className: "home-text",
});

const homeFirstText = customCreateElement("p", {
  innerText:
    "Famous chef Cassildo has been preparing his dishes for over 20 years, he learned to cook from his Italian grandmother and since then he has been perfecting vegetarian dishes. We also present delicious options with meat, such as strognoff and parmeggiana.",
});

const homeOpeningHours = customCreateElement("p", {
  innerText: "Open Tuesday to Sunday from 10 am until 12 pm",
});

const homeImg = customCreateElement("img", {
  className: "chef-img",
  src: "https://img.freepik.com/fotos-gratis/retrato-de-homem-sorrindo-na-cozinha_23-2150771051.jpg",
  alt: "chef Cassildo picture"
});

homePageTextContainer.appendChild(homeFirstText);
homePageTextContainer.appendChild(homeOpeningHours);

container.appendChild(homePageTextContainer);
container.appendChild(homeImg);

const Home = () => {
  return container;
};

export default Home;
