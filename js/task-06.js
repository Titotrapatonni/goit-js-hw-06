const inputEl = document.querySelector("#validation-input");

const onInputBlur = inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});
