function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// -----------Не добавляет боксы к уже отрисованым-------------
const inputEl = document.querySelector("#controls input");
const btnCreateMarkupEl = document.querySelector("button[data-create]");
const btnDestroyMarkupEl = document.querySelector("button[data-destroy]");
const containerForMarkupEl = document.querySelector("#boxes");
btnCreateMarkupEl.addEventListener("click", createBoxes);
btnDestroyMarkupEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  containerForMarkupEl.innerHTML = "";
  let divSize = 30;
  let markup = ``;
  amount = parseInt(inputEl.value);

  const arr = [];
  for (let i = 1; i <= amount; i += 1) {
    let el = arr[i];
    let divColor = getRandomHexColor();
    divSize += 10;
    markup = `<div style="width: ${divSize}px; height: ${divSize}px; background-color: ${divColor}"></div>`;
    arr.push(markup);
  }
  containerForMarkupEl.insertAdjacentHTML("beforeend", arr.join(""));
}

function destroyBoxes() {
  containerForMarkupEl.innerHTML = "";
  inputEl.value = "";
}


// ------------добавляет боксы к уже имеющимся--------------

// const inputEl = document.querySelector("#controls input");
// const btnCreateMarkupEl = document.querySelector("button[data-create]");
// const btnDestroyMarkupEl = document.querySelector("button[data-destroy]");
// const containerForMarkupEl = document.querySelector("#boxes");
// btnCreateMarkupEl.addEventListener("click", createBoxes);
// btnDestroyMarkupEl.addEventListener("click", destroyBoxes);
// let divSize = 30;

// function createBoxes(amount) {
//   // containerForMarkupEl.innerHTML = "";
//   let markup = ``;
//   amount = parseInt(inputEl.value);

//   const arr = [];
//   for (let i = 1; i <= amount; i += 1) {
//     let el = arr[i];
//     let divColor = getRandomHexColor();
//     divSize += 10;
//     markup = `<div style="width: ${divSize}px; height: ${divSize}px; background-color: ${divColor}"></div>`;
//     arr.push(markup);
//   }
//   containerForMarkupEl.insertAdjacentHTML("beforeend", arr.join(""));
// }

// function destroyBoxes() {
//   containerForMarkupEl.innerHTML = "";
//   inputEl.value = "";
//   divSize = 30;
// }