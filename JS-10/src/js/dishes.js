import dishesArray from './dishesArray.json';
import dishTemplate from '../template/dish.hbs';

// console.log('dishesArray', dishesArray);
// console.log('dishTemplate', dishTemplate);

const markup = dishTemplate(dishesArray);
const menuUl = document.getElementById('menu');
const body = document.querySelector('body');
const input = document.getElementById('theme-switch-control');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menuUl.insertAdjacentHTML('afterbegin', markup);

input.addEventListener('input', chosenTheme);

const theme = localStorage.getItem('theme');

if (theme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  input.checked = true;
}

function chosenTheme(e) {
  // console.log('e.target.nodeName', e.target.nodeName);
  // console.log('e.target', e.target);

  if (e.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
