const refs = {
    input: document.querySelector('#name-input'),
    nameUser: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    refs.nameUser.textContent = event.currentTarget.value
}