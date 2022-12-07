
const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");
const userName = "Anonymous";

inputEl.addEventListener("input", (event) => {
  if (!(event.currentTarget.value.trim() === '')) {
      userNameEl.textContent = event.currentTarget.value;
      
  } else {  
      userNameEl.textContent = userName;
  }
});
