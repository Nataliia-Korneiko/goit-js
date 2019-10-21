"use strict";
// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

// Решение 2 №1
const ingredientsUl = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

ingredients.forEach(el => {
  const ingredientsLi = document.createElement("li");

  ingredientsLi.textContent = el;
  fragment.append(ingredientsLi);
  console.log(ingredientsLi);
});

ingredientsUl.appendChild(fragment);

// Решение 2 №2
// const ingredientsUl = document.querySelector("#ingredients");
// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы"
// ];

// let concatenatedString = "";

// ingredients.forEach(el => {
//   concatenatedString += `<li>${el}</li>`;
//   console.log(concatenatedString);
// });

// ingredientsUl.insertAdjacentHTML("afterbegin", concatenatedString);
