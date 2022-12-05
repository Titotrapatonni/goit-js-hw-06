const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector("ul.gallery");
let markup = ``;
let imgUrl;
let imgAlt;

for (let i = 0; i < images.length; i += 1) {
  const imageAttr = images[i];
  imgUrl = imageAttr.url;
  imgAlt = imageAttr.alt;
  markup += `<li><img src="${imgUrl}" alt="${imgAlt}" width="400" height="225"></li>`;
}

galleryEl.insertAdjacentHTML("beforeend", `${markup}`);
document.body.insertAdjacentHTML(
  "beforeend",
  `<style>
      .gallery {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 15px;
      }
    </style>`
);
console.log(galleryEl);

// Используй массив объектов images для создания элементов <img> вложенных в <li>.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
// galleryEl.insertAdjacentHTML("beforeend", ``);
