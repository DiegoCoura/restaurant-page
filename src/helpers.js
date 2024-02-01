export const customCreateElement = (elementTag, props = {}) => {
  const element = document.createElement(elementTag);

  Object.entries(props).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
};

export const toggleHighlight = (button) => {
  document.querySelector(".active")?.classList.remove("active");
  button.classList.add("active");
};

export const cleanDiv = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  return;
};

const positionClasses = ["nav__left", "nav__center", "nav__right"];

export const updateSlide = (position) => {
  const slideBtn = document.querySelector(".slide-btn");

  if (slideBtn.classList.contains(position)) return;

  positionClasses.forEach((positionClass) => {
    if (slideBtn.classList.contains(positionClass)) {
      slideBtn.classList.remove(positionClass);
    }
  });

  slideBtn.classList.add(position);
};
