import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const itemElements = createItemEl(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemElements);
galleryContainer.addEventListener("click", clickImaage);

function createItemEl(items) {
  return items
    .map((item) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
   <img class="gallery__image" data-source="${item.original}" data-pictureDesc="${item.description}" src="${item.preview}" alt="${item.description}" />
  </a>
</div>`;
    })
    .join("");
}

function clickImaage(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  evt.preventDefault();
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt="${evt.target.dataset.picturedesc}" />`
  );
  instance.show();
}
