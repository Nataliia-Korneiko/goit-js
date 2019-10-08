"use strict";
// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// Решение 5
const CHINA = "Китай";
const CHINA_DELIVERY = 100;
const CHILLY = "Чили";
const CHILLY_DELIVERY = 250;
const AUSTRALIA = "Австралия";
const AUSTRALIA_DELIVERY = 170;
const INDIA = "Индия";
const INDIA_DELIVERY = 80;
const JAMAICA = "Ямайка";
const JAMAICA_DELIVERY = 120;
const userInput = prompt("Введите название вашей страны");

switch (userInput.toLowerCase()) {
  case CHINA.toLowerCase():
    alert(`Доставка в ${CHINA} будет стоить ${CHINA_DELIVERY} кредитов`);
    break;

  case CHILLY.toLowerCase():
    alert(`Доставка в ${CHILLY} будет стоить ${CHILLY_DELIVERY} кредитов`);
    break;

  case AUSTRALIA.toLowerCase():
    alert(
      `Доставка в ${AUSTRALIA} будет стоить ${AUSTRALIA_DELIVERY} кредитов`
    );
    break;

  case INDIA.toLowerCase():
    alert(`Доставка в ${INDIA} будет стоить ${INDIA_DELIVERY} кредитов`);
    break;

  case JAMAICA.toLowerCase():
    alert(`Доставка в ${JAMAICA} будет стоить ${JAMAICA_DELIVERY} кредитов`);
    break;

  default:
    alert(`В вашей стране доставка не доступна`);
}
