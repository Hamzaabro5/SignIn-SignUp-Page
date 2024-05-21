const username = document.querySelector(`.Username`)
const password = document.querySelector(`.password`)
const btn = document.querySelector(`.submit`)
const form = document.querySelector(`form`)


form.addEventListener(`submit` , function(event) {
    event.preventDefault();
    console.log(username.value);
    console.log(password.value);
})