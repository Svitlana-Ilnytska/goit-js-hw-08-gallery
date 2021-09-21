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
  iconsContainer: document.querySelector(".js-gallery"),
  lightbox: document.querySelector(".js-lightbox"),
  lightboxImage: document.querySelector(".lightbox__image"),
  overlay: document.querySelector(".lightbox__overlay"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
  
};

const cardsIcons = createGalery(galleryItems);
refs.iconsContainer.insertAdjacentHTML("beforeend", cardsIcons);

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

const openModal = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  refs.lightbox.classList.add("is-open");
  refs.lightboxImage.src = evt.target.dataset.source;
  refs.lightboxImage.alt = evt.target.alt;

  // window.addEventListener("keydown",  closeEsc);
};

refs.iconsContainer.addEventListener("click", openModal);

const closeButtonModal = (evt) => {
  refs.lightbox.classList.remove("is-open");
  refs.lightboxImage.src = "../images/image_loading.gif";

  // window.removeEventListener("keydown", closeEsc);
};

refs.closeButton.addEventListener("click", closeButtonModal);

const closeEsc = (evt) => {
  if (evt.code !== "Escape") {
    return;
  }
  closeButtonModal();
};

window.addEventListener("keydown", closeEsc);

const closePressOnOverlay = (evt) => {
  if (evt.target !== evt.currentTarget) {
    return;
  }
  closeButtonModal();
};

refs.overlay.addEventListener("click", closePressOnOverlay);


// galery scrolling

const dataSources = [];
const imageRef = document.querySelectorAll('.gallery__image');

imageRef.forEach(element => {
  dataSources.push(element.dataset.source)});


document.addEventListener("keydown", evt => {
  const currentIndex = dataSources.indexOf(refs.lightboxImage.src);
  if (evt.code === "ArrowLeft") {
      leftClick(currentIndex);
  }
  else if (evt.code === "ArrowRight") {
    rightClick(currentIndex);
  }
});

function  leftClick(currentIndex) {
  let nextIndex = currentIndex - 1;
  if(nextIndex == -1) {
    nextIndex = dataSources.length - 1;
  }
  refs.lightboxImage.src = dataSources[nextIndex];
}

function rightClick(currentIndex) {
  let nextIndex = currentIndex + 1;
  if(nextIndex == dataSources.length) {
    nextIndex = 0;
  }
  refs.lightboxImage.src = dataSources[nextIndex];
}
