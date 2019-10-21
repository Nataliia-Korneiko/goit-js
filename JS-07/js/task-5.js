"use strict";
// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

// Решение 5 №1
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function getName() {
  output.textContent = input.value;
  if (input.value === "") {
    output.textContent = "незнакомец";
  }
}
input.addEventListener("input", getName);

// Решение 5 №2
// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// input.addEventListener("input", () =>
//   input.value !== ""
//     ? (output.textContent = input.value)
//     : (output.textContent = "незнакомец")
// );
