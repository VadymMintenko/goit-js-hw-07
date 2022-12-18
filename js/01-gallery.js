import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const addList = document.createElement("ul");

const ItemElements = galleryItems.map(({ preview, original, description }) => {
  const newItemEl = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.src = `${preview}`;
  imageEl.alt = `${description}`;
  newItemEl.appendChild(imageEl);
  return newItemEl;
});

addList.append(...ItemElements);
galleryContainer.append(addList);
console.log(galleryContainer);
