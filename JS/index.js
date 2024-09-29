'use strict';

//* HTML Eelements

//^ =====> SignUp ELement
let nameUpInput = document.querySelector('#name-up');
let emailUpInput = document.querySelector('#email-up');
let passUpInput = document.querySelector('#pass-up');
let signUp = document.querySelector('#sign-up');

//^ =====> Signin ELement
let emailInInput = document.querySelector('#email-in');
let passInInput = document.querySelector('#pass-in');
let login = document.querySelector('#login');
//* APP Variabels

let nameRgx = /^[A-Za-z][a-z]{3,}([1-9][1-9])?$/;
let emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRgx =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

let allData = JSON.parse(localStorage.getItem('dataStorgeUser')) || [];

//* Function

function addUser() {
  if (
    validtion(nameUpInput, nameRgx) &&
    validtion(emailUpInput, emailRgx) &&
    validtion(passUpInput, passwordRgx)
  ) {
    let dataUser = {
      name: nameUpInput.value,
      email: emailUpInput.value,
      password: passUpInput.value,
    };
    allData.push(dataUser);
    localStorage.setItem('dataStorgeUser', JSON.stringify(allData));
    clearInput();
  }
}
function clearInput() {
  nameUpInput.classList.remove('is-valid');
  emailUpInput.classList.remove('is-valid');
  passUpInput.classList.remove('is-valid');
  nameUpInput.value = '';
  emailUpInput.value = '';
  passUpInput.value = '';
}
function validtion(ele, rgx) {
  if (rgx.test(ele.value)) {
    ele.classList.add('is-valid');
    ele.classList.remove('is-invalid');
    return true;
  } else {
    ele.classList.add('is-invalid');
    ele.classList.remove('is-valid');
    return false;
  }
}

// *Event

// signUp.addEventListener('click', addUser);
// emailUpInput.addEventListener('input', function () {
//   validtion(emailUpInput, emailRgx);
// });
// nameUpInput.addEventListener('input', function () {
//   validtion(nameUpInput, nameRgx);
// });
// passUpInput.addEventListener('input', function () {
//   validtion(passUpInput, passwordRgx);
// });

// login.addEventListener('click', function () {
//   console.log(emailInInput.value);
// }); 

// console.log(allData);
// function checkedUser() {
//   for (let i = 0; i < allData.length; i++) {
//     console.log(allData[i]);
//   }
// }
// login.addEventListener('click', checkedUser);
