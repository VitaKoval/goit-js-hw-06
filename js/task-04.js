
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueCount = document.querySelector('#value');

let counterValue = 0;
valueCount.textContent = counterValue;

decrementBtn.addEventListener('click', onDecrement)
incrementBtn.addEventListener('click', onIncrement)

function onDecrement() {
    counterValue -= 1;
    return valueCount.textContent = counterValue
}

function onIncrement() {
    counterValue += 1;
    return valueCount.textContent = counterValue;
}


