import throttle from 'lodash.throttle';
const formElement = document.querySelector('.feedback-form');
let userData = {};

formElement.addEventListener('input', throttle(onInput, 500));
formElement.addEventListener('submit', onSubmit);
window.addEventListener('load', onLoad);

const storageKey = 'feedback-form-state';

function onInput(e) {
  const target = e.target;
  const formValue = target.value;
  const formName = target.name;
  userData[formName] = formValue;
  localStorage.setItem(storageKey, JSON.stringify(userData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(userData);
  userData = {};
  e.target.reset();
  localStorage.removeItem(storageKey);
}

function onLoad() {
  try {
    const data = localStorage.getItem(storageKey);
    if (!data) return;
    userData = JSON.parse(data);
    for (const key in userData) {
      if (userData.hasOwnProperty(key)) {
        formElement.elements[key].value = userData[key];
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}