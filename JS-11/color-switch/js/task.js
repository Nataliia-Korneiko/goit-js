"use strict";
// Задание
// Есть массив цветов в hex-формате и кнопки Start и Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// Решение
const body = document.querySelector("body");
const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

let min = 0;
let max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

console.log("randomIntegerFromInterval :", randomIntegerFromInterval);
body.style.transition = `0.8s ease-in-out`;

const changeBackgroundColor = {
  isActive: false,
  startChange: null,
  start() {
    // if (this.isActive) {
    //   return;
    // }
    startButton.disabled = !this.isActive;
    stopButton.disabled = this.isActive;

    // this.isActive = true;
    this.startChange = setInterval(() => {
      body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
    }, 1000);
    console.log(
      "randomIntegerFromInterval :",
      randomIntegerFromInterval(min, max)
    );
  },

  stop() {
    clearInterval(this.startChange);
    startButton.disabled = this.isActive;
    stopButton.disabled = !this.isActive;

    // this.isActive = false;
  }
};

startButton.addEventListener(
  "click",
  changeBackgroundColor.start.bind(changeBackgroundColor)
);
stopButton.addEventListener(
  "click",
  changeBackgroundColor.stop.bind(changeBackgroundColor)
);
stopButton.disabled = true;
