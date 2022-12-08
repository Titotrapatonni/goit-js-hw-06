const inputEl = document.querySelector("#validation-input");

function toggleClass(ref, add, rem) {
  ref.classList.add(add);
  ref.classList.remove(rem);
}

const onInputBlur = inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    toggleClass(event.target, "valid", "invalid");
  } else {
    toggleClass(event.target, "invalid", "valid");
  }
});