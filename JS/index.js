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
//^ =====> Home ELement
let welcomeMessage = document.querySelector('.welcome-message');

//* APP Variabels

let nameRgx = /^[A-Za-z][a-z]{3,}([1-9][1-9])?$/;
let emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRgx =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

//********************* //
let allData = JSON.parse(localStorage.getItem('dataStorgeUser')) || [];

let errorEmail = document.createElement('p');
errorEmail.textContent = 'plase enter anothrt email';
errorEmail.classList.add('text-danger');

let errorValidtionInputEmpty = document.createElement('p');
errorValidtionInputEmpty.classList.add('text-danger', 'text-center', 'fs-5');
welcomeMessage.textContent = `Welcome ${localStorage.getItem(
  'nameUserInHome'
)}`;

//********************* //

//* Function

function addUser() {
  if (
    validtion(nameUpInput, nameRgx) &&
    validtion(emailUpInput, emailRgx) &&
    validtion(passUpInput, passwordRgx) &&
    chekedTOFindEmail(emailUpInput)
  ) {
    let dataUser = {
      name: nameUpInput.value,
      email: emailUpInput.value,
      password: passUpInput.value,
    };
    allData.push(dataUser);
    localStorage.setItem('dataStorgeUser', JSON.stringify(allData));
    clearInput();
    console.log(allData.indexOf(dataUser));
  }
}

function clearInput() {
  nameUpInput.classList.remove('is-valid');
  emailUpInput.classList.remove('is-valid');
  passUpInput.classList.remove('is-valid');
  nameUpInput.value = '';
  emailUpInput.value = '';
  passUpInput.value = '';
  errorEmail.classList.add('d-none');
  errorValidtionInputEmpty.textContent = '';
}
function checkEmptyInput() {}
function validtion(ele, rgx) {
  if (ele.value === '') {
    passUpInput.after(errorValidtionInputEmpty);
    errorValidtionInputEmpty.textContent = 'All inputs is required';
  } else {
    errorValidtionInputEmpty.textContent = '';
  }
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
// *** checked the email find or not find
function chekedTOFindEmail(currentInputValue) {
  if (allData.length === 0) return true;
  for (let i = 0; i < allData.length; i++) {
    if (currentInputValue.value === allData[i].email) {
      currentInputValue.value = '';
      currentInputValue.after(errorEmail);
      currentInputValue.classList.add('is-invalid');
      return false;
    }
  }
  return true;
}
function checkedTOValidEmail() {
  passInInput.after(errorValidtionInputEmpty);
  if (emailInInput.value === '' || passInInput.value === '') {
    errorValidtionInputEmpty.textContent = 'All inputs is required';
  } else {
    for (let i = 0; i < allData.length; i++) {
      if (
        emailInInput.value === allData[i].email &&
        passInInput.value === allData[i].password
      ) {
        errorValidtionInputEmpty.textContent = '';
        login.setAttribute('href', '/home.html');
        localStorage.setItem('nameUserInHome', allData[i].name);
        return true;
      }
    }
    errorValidtionInputEmpty.textContent = 'incorrect email or password';
  }
}
// *Event D#dd3333
