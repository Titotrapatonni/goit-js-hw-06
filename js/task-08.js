const formEl = document.querySelector(".login-form");
let emailInputEl = formEl.elements.email;
let pswrdInputEl = formEl.elements.password;
const userData = {};
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (emailInputEl.value === "" || pswrdInputEl.value === "") {
    alert("Все поля должны быть заполнены");
  } else {
    userData.email = emailInputEl.value;
    userData.password = pswrdInputEl.value;
    console.log(userData);
    formEl.reset();
  }
}
