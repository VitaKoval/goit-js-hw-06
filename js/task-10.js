function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const input = document.querySelector('[type="number"]')
const body = document.querySelector('body')
const boxes = document.querySelector('#boxes')



input.addEventListener('input', onInputValue)

function onInputValue(event) {
  console.log(event.currentTarget.value);

 return event.currentTarget.value;
}


function createBoxes(amount) {
  for (let i = 0; i <= amount-1; i += 1) {
    
    boxes.insertAdjacentHTML('beforeend',
      `<div id="box" style="width: 30px; height: 30px; background-color: ${getRandomHexColor()};"></div>`)

  }
}

// let valueInput = onInputValue();
// console.log(valueInput)

createBoxes(createBoxes(5))

// const itemsEl = images.map(makeItemEl).join('')

// listEl.insertAdjacentHTML('beforeend', itemsEl)


