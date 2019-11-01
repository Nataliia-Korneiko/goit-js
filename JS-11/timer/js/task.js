"use strict";
// Задание
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно
// определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах,
// страницах регистрации событий, во время технического обслуживания и т.д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и
// секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// <div class="timer" id="timer-1">
//   <div class="field">
//     <span class="value" data-value="days">11</span>
//     <span class="label">Days</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="hours">11</span>
//     <span class="label">Hours</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="mins">11</span>
//     <span class="label">Minutes</span>
//   </div>

//   <div class="field">
//     <span class="value" data-value="secs">11</span>
//     <span class="label">Seconds</span>
//   </div>
// </div>

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

// Для подсчета значений используй следующие готовые формулы, где time - разница между
// targetDate и текущей датой.

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// Решение
const daysTimer = document.querySelector('span[data-value="days"]');
const hoursTimer = document.querySelector('span[data-value="hours"]');
const minsTimer = document.querySelector('span[data-value="mins"]');
const secsTimer = document.querySelector('span[data-value="days"]');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate.getTime();
  }

  initTimer() {
    setInterval(() => {
      const currentDate = Date.now();
      this.selector.innerHTML = "";
      let time = this.targetDate - currentDate;
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      let str = `<div class="field">
      <span class="value" data-value="days">${days}</span>
      <span class="label">Days</span>
    </div>
    <div class="field">
      <span class="value" data-value="hours">${hours}</span>
      <span class="label">Hours</span>
    </div>
    <div class="field">
      <span class="value" data-value="mins">${mins}</span>
      <span class="label">Minutes</span>
    </div>
    <div class="field">
      <span class="value" data-value="secs">${secs}</span>
      <span class="label">Seconds</span>
    </div>`;
      this.selector.insertAdjacentHTML("afterbegin", str);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020")
});

timer.initTimer();
