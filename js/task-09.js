function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const colorNameEl = document.querySelector(".color");

btnEl.addEventListener("click", (event) => {
  let randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  colorNameEl.textContent = randomHexColor;
});
