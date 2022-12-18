import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const addEl = document.createElement("ul");

const elem = galleryItems.map(({ preview, original, description }) => {
  const newItemEl = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.src = `${preview}`;
  imageEl.alt = `${description}`;
  newItemEl.appendChild(imageEl);
  return newItemEl;
});

addEl.append(...elem);
galleryContainer.append(addEl);
console.log(galleryContainer);
