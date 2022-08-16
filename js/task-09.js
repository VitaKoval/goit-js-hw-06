function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const color = document.querySelector('.color');

changeColorBtn.addEventListener('click', onClickBtn)

function onClickBtn() {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}