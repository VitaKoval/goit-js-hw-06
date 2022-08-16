const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    // console.log(event.currentTarget.email.value)
    // console.log(event.currentTarget.password.value)

    // console.log(event.currentTarget.elements)

    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
      return  alert("Заполни все поля!")
    }
    
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}