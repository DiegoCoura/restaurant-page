import customCreateElement from "./customCreateElement";

const menu = () => {
  const menu = customCreateElement("div", { className: "menu-page" });

  const firstTextList = `<ul>
  <li><em>Walnut-Lentil Bolognese:</em> Boldly flavored, super hearty and incredibly easy, this vegan walnut and lentil bolognese recipe takes your plant-based eating goals to new heights.</li>
  <li><em>Vegetable Soup:</em> Just pair this vegetarian vegetable soup with some good bread or toast and you're good to go.</li>
  <li><em>Vegan Roasted Sweet Potato Salad:</em> Roasted sweet potatoes, avocado, black beans and raw kale are tossed in a creamy, lime dressing in this brightly flavorful, vegan sweet potato salad recipe.</li>
  <li><em>Shaved Brussels Sprout Salad with Creamy Maple Dressing:</em> Loaded with nuts, as well as dried and fresh fruit, this hearty vegetarian salad makes a great light, healthy lunch.</li>
  </ul>`

  const secondTextList = `<ul>
  <li><em>Vegetarian Burrito Bowl with Avocado Crema:</em> Roasted veggies, savory beans and a lime-garlic avocado crema top a bed of cilantro-lime rice in this hearty, healthy vegetarian burrito bowl recipe.</li>
  <li><em>Green Curry Buddha Bowl:</em> Finished with a creamy green curry sauce, this veggie-loaded vegan bowl is the healthiest thing you'll ever love.</li>
  <li><em>Creamy Goat Cheese Polenta With Ratatouille:</em> Ratatouille—a classic combination of late summer vegetables, cooked to tender perfection—is an ideal partner for creamy goat cheese polenta. Together, they’re the vegetarian dinner of your dreams!</li>
  <li><em>Curried Cauliflower Quinoa Salad:</em> This loaded salad is hearty and filling, and topped with an irresistible yogurt-tahini dressing.</li>
  
  </ul>`;

  const menuTextFirst = customCreateElement("div", {
    className: "menu-text",
    innerHTML: firstTextList,
  });
  const menuTextSecond = customCreateElement("div", {
    className: "menu-text",
    innerHTML: secondTextList
  });

  menu.append(menuTextFirst, menuTextSecond);

  return menu;
};

export default menu;
