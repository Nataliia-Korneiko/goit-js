"use strict";
// Задание 8
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// Решение 8
const newControls = document.getElementById("controls");
const newInput = newControls.querySelector("input");
const buttonRender = document.querySelector('[data-action="render"]');
const buttonDestroy = document.querySelector('[data-action="destroy"]');
const newBoxes = document.getElementById("boxes");
// console.log("newBoxes :", newBoxes);

buttonRender.addEventListener("click", () => {
  const amount = newInput.value;
  createBoxes(amount);
});
let width = 30;
let height = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    const newElement = document.createElement("div");
    // newElement.style.border = "1px solid red";
    newElement.style.width = `${width}px`;
    newElement.style.height = `${height}px`;
    newElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    console.log("newElement :", newElement);
    newBoxes.append(newElement);
    width += 10;
    height += 10;
  }
}

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function destroyBoxes() {
  console.dir(newBoxes);
  newBoxes.innerHTML = "";
  width = 30;
  height = 30;
}
