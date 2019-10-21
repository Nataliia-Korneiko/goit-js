"use strict";
// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Решение 4 №1
const newValue = document.querySelector("#value");
const decr = document.querySelector('[data-action="decrement"]');
const incr = document.querySelector('[data-action="increment"]');

newValue.textContent = 0;
incr.addEventListener(
  "click",
  () => (newValue.textContent = +newValue.textContent + 1)
);
decr.addEventListener(
  "click",
  () => (newValue.textContent = +newValue.textContent - 1)
);

// Решение 4 №2
// const newValue = document.querySelector("#value");
// const decr = document.querySelector('[data-action="decrement"]');
// const incr = document.querySelector('[data-action="increment"]');

// let value = 0;
// incr.addEventListener("click", function() {
//   value += 1;
//   newValue.textContent = value;
// });

// decr.addEventListener("click", function() {
//   value -= 1;
//   newValue.textContent = value;
// });

// Решение 4 №3
// const Counter = function({ initialValue = 10, step = 1 }) {
//   this.value = initialValue;
//   this.step = step;
// };

// Counter.prototype.increment = function() {
//   this.value += this.step;
// };

// Counter.prototype.decrement = function() {
//   this.value -= this.step;
// };

// const newCounter = new Counter({ initialValue: 0, step: 1 });
// const counterValue = document.querySelector("#value");
// const buttonIncrement = document.querySelector('[data-action="increment"]');
// const buttonDecrement = document.querySelector('[data-action="decrement"]');

// counterValue.textContent = newCounter.value;

// buttonIncrement.addEventListener("click", () => {
//   newCounter.increment();
//   counterValue.textContent = newCounter.value;
// });

// buttonDecrement.addEventListener("click", () => {
//   newCounter.decrement();
//   counterValue.textContent = newCounter.value;
// });
