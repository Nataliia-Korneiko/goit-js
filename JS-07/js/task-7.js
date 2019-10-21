"use strict";
// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

// Решение 7
const newInput = document.getElementById("font-size-control");
const newText = document.getElementById("text");
newInput.value = 14;

newInput.addEventListener(
  "input",
  () => (newText.style.fontSize = `${newInput.value}px`)
);
