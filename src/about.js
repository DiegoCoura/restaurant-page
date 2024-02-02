import { customCreateElement } from "./helpers.js";

const container = customCreateElement("div", {
  className: "about-page",
});

const aboutText =
  "Seasonal ingredients are the focus at Trattoria Sofia, resulting in a rustic Italian offering that shines with fresh flavors and beautiful presentations. The menu features classic dishes like bucatini al pesto or pizza Margherita (made with mozzarella di bufala), as well as lesser-known specialties, like salsa di fagioli bianchi, a Tuscan specialty made with white beans. Highlights include the pasta cacio e pepe and the chicken Parmigiana, while the wine menu focuses mostly on Italian and American labels. Brought to Houston diners by the Berg Hospitality Group — who are also behind places like B.B. Italia Bistro & Bar and Emilia's Havana — this lively spot features a casual dining room and terrace, which is particularly lovely during weekend brunch while sipping on the house's apricot Bellini.";

const aboutImg =
  "https://i.pinimg.com/564x/70/32/6e/70326ee6bb0ddc74cf61d5f01bba7019.jpg";

const textDiv = customCreateElement("div", {
  className: "text-div",
  innerText: aboutText,
});
const imgDiv = customCreateElement("img", {
  className: "about-img",
  src: aboutImg,
  alt: "trattoria building"
});

container.appendChild(textDiv);
container.appendChild(imgDiv);

const About = () => {
  return container;
};

export default About;
