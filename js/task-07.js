
const c = console.log;
const cd = console.dir;

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  //   textEl.style.fontSize = fontSize;
  let currentValue = event.currentTarget.value;
  textEl.style.fontSize = `${currentValue}px`;
  cd(event.currentTarget.value);
});
