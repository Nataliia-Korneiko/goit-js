import fetchCountries from './fetchCountries';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import debounce from 'lodash.debounce';

const input = document.querySelector('.input');
const ul = document.querySelector('.country__list');

input.addEventListener(
  'input',
  debounce(e => {
    console.log('debounce');
    fetchCountries(e.target.value)
      .then(data => {
        if (data.length <= 10 && data.length !== 1) {
          // PNotify.defaults.icons = 'material';
          PNotify.error({
            text: 'Too many matches found. Please enter a more specific query!',
            addClass: 'custom nonblock',
            delay: 2000,
            icon: true,
          });
          return data.reduce((acc, item) => {
            acc += `<li class="country__item">${item.name}</li>`;

            return (ul.innerHTML = acc);
          }, '');
        }
        if (data.length === 1) {
          return data.reduce((acc, item) => {
            acc += `<li class="country__item"><h2 class="country__title">${
              item.name
            }</h2><div class="country__wrapper"><div class="country__about">
          <p><span>Capital: </span>${item.capital}</p>
          <p><span>Population: </span>${item.population}</p>
          <p><span>Languages: </span></p>
          <ul>${item.languages.reduce((acc, cur) => {
            return (acc += `<li>${cur.name}</li>`);
          }, '')}</ul>

          </div><div class="country__flag"><img src="${
            item.flag
          }"alt="Flag"></div></li>`;
            return (ul.innerHTML = acc);
          }, '');
        } else {
          return '';
        }
      })
      .catch(err => console.log(err));
  }, 500),
);
