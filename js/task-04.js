const totalValue = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

const onDecrement = () => {
    counterValue -= 1;
    totalValue.textContent = counterValue;
}

const onIncrement = () => {
    counterValue += 1;
    totalValue.textContent = counterValue;
    
}

decrement.addEventListener('click', onDecrement)
increment.addEventListener("click", onIncrement);
