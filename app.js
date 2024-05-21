const firstname = document.querySelector(`.Firstname`)
const lastname = document.querySelector(`.Lastname`)
const email = document.querySelector(`.email`)
const password = document.querySelector(`.password`)
const btn = document.querySelector(`.submit`)
const form = document.querySelector(`form`)

form.addEventListener(`submit` , function(event){
    event.preventDefault();
    console.log(`FirstName:` , firstname.value);
    console.log(`LastName:` , lastname.value);
    console.log(`Email:` , email.value);
    console.log(`Password:` , password.value);
    console.log(`Hello`, firstname.value , lastname.value);

})