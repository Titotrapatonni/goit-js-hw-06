const categoriesEl = document.querySelector("ul#categories");
const itemsEl = document.querySelectorAll("li.item");

console.log("Number of categories: ", itemsEl.length);

for (const elem of itemsEl) {
  const category = elem.firstElementChild.textContent;
  console.log("Category: ", category);

  const elements = elem.lastElementChild.children.length;
  console.log("Elements: ", elements);
}
