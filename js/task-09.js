function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");

btnEl.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
});
