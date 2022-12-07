const inputEl = document.querySelector("#validation-input");
function addValidClass() {
  inputEl.classList.add("valid");
  inputEl.classList.remove("invalid");
}
function addInvalidClass() {
  inputEl.classList.add("invalid");
  inputEl.classList.remove("valid");
}
const onInputBlur = inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length >= Number(inputEl.dataset.length)) {
   addValidClass();
  } else {
   addInvalidClass();
  }
});

console.log(typeof Number(inputEl.dataset.length));



