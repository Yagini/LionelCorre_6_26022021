import { data } from "./data.js";

const createLightbox = () => {
  const medias = data.media; // modification il faut call juste les médias qui concernent lightbox 

  const photographersMain = document.querySelector(".photographer__main");

  const lightboxBground = document.createElement("div");
  lightboxBground.classList.add("lightbox__bground");

  const lightboxContent = document.createElement("div");
  lightboxContent.classList.add("lightbox__content");

  const lightboxImg = document.createElement("img");
  lightboxImg.classList.add("lightbox__img");
  lightboxImg.src = medias.image;
  lightboxImg.alt = medias.alt;

  const lightboxTitle = document.createElement("h3");
  lightboxTitle.classList.add("lightbox__title");
  lightboxTitle.textContent = medias.alt;

  const lightboxCheveronRight = document.createElement("i");
  lightboxCheveronRight.classList.add("fas", "fa-chevron-right", "lightbox__icon", "lightbox__chevron-r");

  const lightboxCheveronLeft = document.createElement("i");
  lightboxCheveronLeft.classList.add("fas", "fa-chevron-left", "lightbox__icon", "lightbox__chevron-l");

  const lightboxClose = document.createElement("i");
  lightboxClose.classList.add("lightbox__icon", "lightbox__close");

  const lightboxCloseButton = document.createElement("button");
  lightboxCloseButton.classList.add("close");

  const lightboxCloseIcon = document.createElement("i");
  lightboxCloseIcon.classList.add("close__icon");

  lightboxContent.appendChild(lightboxImg);
  lightboxContent.appendChild(lightboxTitle);
  lightboxContent.appendChild(lightboxCheveronRight);
  lightboxContent.appendChild(lightboxCheveronLeft);
  lightboxContent.appendChild(lightboxCloseButton);

  lightboxCloseButton.appendChild(lightboxCloseIcon);

  lightboxBground.appendChild(lightboxContent);

  photographersMain.appendChild(lightboxBground);
};

export { createLightbox };
