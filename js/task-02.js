const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul#ingredients");
const markup = [];

const createMarkup = function () {
  ingredients.forEach((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");
    markup.push(itemEl);
  });

  listEl.append(...markup);
};

createMarkup();
