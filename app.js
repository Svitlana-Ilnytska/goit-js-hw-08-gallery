const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const refs = {
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImage: document.querySelector(".lightbox___image"),
  closeBtn: document.querySelector('button[data-action="close-lightbox"]'),
  overlay: document.querySelector(".lightbox__content"),
};

const iconsContainer = document.querySelector(".js-gallery");
const cardsIcons = createGalery(galleryItems);

iconsContainer.insertAdjacentHTML("beforeend", cardsIcons);

iconsContainer.addEventListener("click", onIconContainerClick);

function createGalery(icons) {
  return icons
    .map(({ preview, original, description }) => {
      return `
   
<li class="gallery__item">
<a
  class="gallery__link"
  href="${original}"
>
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>
    `;
    })
    .join("");
}
// console.log(createGalery(icons));

function onIconContainerClick(e) {
  const isEl = e.target.classList.contains("gallery__image");

  if (!isEl) {
    return;
  }
  console.log(e.target.dataset.original);
}
//   const swatchEl = evt.target;
//   const parentColorCard = swatchEl.closest(".color-card");

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

const openModal = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgOriginal = e.target.dataset.original;
  const imgAlt = e.target.alt;
  lightbox.classList.add("is-open");
  lightbox__image.src = imgOriginal;
  lightbox__image.alt = imgAlt;

  // window.addEventListener("keydown", closeModalKeypress);
};

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector(".color-card.is-active");

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove("is-active");
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add("is-active");
// }

// відкрити модельне вікно - реалізація
// const openModal = (e) => {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }

//   const imgBigSrc = e.target.dataset.source;
//   const imgAlt = e.target.alt;
//   lightbox.classList.add("is-open");
//   lightbox__image.src = imgBigSrc;
//   lightbox__image.alt = imgAlt;

//   window.addEventListener("keydown", closeModalKeypress);
// };

// iconsContainer.addEventListener("click", openModal);
