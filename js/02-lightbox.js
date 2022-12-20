import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
console.log(galleryList);
const createList = markup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", createList);

function markup(items) {
  return items
    .map((item) => {
      return `<li><a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a></li>`;
    })
    .join("");
}
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
