"use strict";
// Задание 1
// Создай галерею с возможностью просмотра полноразмерного изображения в модальном окне. Превью результата посмотри по ссылке.
// Необходимо динамически создать элементы галереи по указанному шаблону.
// При клике по элементу галереи должно открываться модальное окно с полноразмерным изображением. Обязательно используй делегирование событий и слушай клики на элементе ul.gallery.
// Модальное окно должно закрываться по клику на кнопку button[data-action="close-modal"], по клику на div.overlay или по нажатию ESC.
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки.

// Решение 1
import gallery from "./gallery-items.js";
// console.log("gallery :", gallery);

const galleryUl = document.querySelector(".gallery");
const newLightbox = document.querySelector(".lightbox");
const imageLightbox = document.querySelector(".lightbox___image");

const fragment = document.createDocumentFragment();

gallery.forEach(el => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  li.insertAdjacentHTML(
    "afterbegin",
    `<a class = "gallery__link" href = "${el.original}"><img class = "gallery__image" src = "${el.preview}" data-source = "${el.original}" alt = "${el.description}"><span class="gallery__icon"><i class="material-icons">zoom_out_map</i></span></a>`
  );

  fragment.append(li);
  // console.log(li);
});

galleryUl.appendChild(fragment);

galleryUl.addEventListener("click", e => {
  // console.log("e.target.nodeName :", e.target.nodeName);
  e.preventDefault();

  if (e.target.nodeName === "IMG") {
    newLightbox.classList.add("is-open");
    imageLightbox.src = e.target.dataset.source;
  }
});

newLightbox.addEventListener("click", e => {
  // console.log("e.target.nodeName :", e.target.nodeName);
  console.log(e.target.nodeName);
  if (e.target.nodeName === "I" || e.target.nodeName !== "IMG") {
    newLightbox.classList.remove("is-open");
  }
});

window.addEventListener("keydown", function(e) {
  // console.log("e.keyCode :", e.keyCode);
  // console.log("e.keyData :", e.key);
  if (e.keyCode === 27 && newLightbox.classList.contains("is-open")) {
    newLightbox.classList.remove("is-open");
  }
});
