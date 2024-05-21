const username = document.querySelector(`.Username`)
const password = document.querySelector(`.password`)
const btn = document.querySelector(`.submit`)
const form = document.querySelector(`form`)
const h1 = document.querySelector(`h1`)

form.addEventListener(`submit` , function(event) {
    event.preventDefault();
    console.log(`Username:` , username.value);
    console.log(`Password` , password.value);
    
    h1.innerHTML = `Welcome Back ${username.value}!`
})