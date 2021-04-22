import { MediaFactory } from "./mediafactory.js";

let currentImgIndex = -1;
let currentMedias = [];
let currentPhotographerId = -1;

const createLightbox = (portfolioSrc, medias, media) => {
  const lightboxBground = document.querySelector(".lightbox__bground");
  lightboxBground.innerHTML = "";

  const lightboxContent = document.createElement("div");
  lightboxContent.classList.add("lightbox__content");

  if (portfolioSrc.includes("mp4")) {
    const lightboxVideo = document.createElement("video");
    lightboxVideo.classList.add("lightbox__media");
    lightboxVideo.alt = media.alt;
    lightboxVideo.controls = true;
    const lightboxVideoSrc = document.createElement("source");
    lightboxVideoSrc.src = portfolioSrc;
    lightboxVideoSrc.alt = media.alt;
    lightboxVideoSrc.type = "video/mp4";
    lightboxVideo.appendChild(lightboxVideoSrc);
    lightboxContent.appendChild(lightboxVideo);
  } else {
    const lightboxImg = document.createElement("img");
    lightboxImg.classList.add("lightbox__media");
    lightboxImg.src = portfolioSrc;
    lightboxImg.alt = media.alt;
    lightboxContent.appendChild(lightboxImg);
  }

  const lightboxTitle = document.createElement("h3");
  lightboxTitle.classList.add("lightbox__title");
  lightboxTitle.textContent = media.alt;

  const nextImg = document.createElement("a");
  nextImg.classList.add("nextImg");
  nextImg.setAttribute("aria-label", "Next image");

  const lightboxCheveronRight = document.createElement("i");
  lightboxCheveronRight.classList.add("fas", "fa-chevron-right", "lightbox__icon", "lightbox__chevron-r");

  const prevImg = document.createElement("a");
  prevImg.classList.add("prevImg");
  prevImg.setAttribute("aria-label", "Prev image");

  const lightboxCheveronLeft = document.createElement("i");
  lightboxCheveronLeft.classList.add("fas", "fa-chevron-left", "lightbox__icon", "lightbox__chevron-l");

  const lightboxCloseButton = document.createElement("button");
  lightboxCloseButton.classList.add("close");
  lightboxCloseButton.setAttribute("aria-label", "Close dialog");

  const lightboxCloseIcon = document.createElement("i");
  lightboxCloseIcon.classList.add("fas", "fa-times", "lightbox__icon", "close__icon");

  lightboxContent.appendChild(lightboxTitle);

  lightboxCloseButton.appendChild(lightboxCloseIcon);

  nextImg.appendChild(lightboxCheveronRight);
  prevImg.appendChild(lightboxCheveronLeft);

  lightboxBground.appendChild(nextImg);
  lightboxBground.appendChild(prevImg);
  lightboxBground.appendChild(lightboxCloseButton);
  lightboxBground.appendChild(lightboxContent);

  const imgIndex = medias.findIndex((img) => img.image === media.image);
  currentImgIndex = imgIndex;
  currentMedias = medias;

  if (
    document.querySelector(".nextImg").addEventListener("click", function () {
      imgPlus();
    })
  );
  if (
    document.querySelector(".prevImg").addEventListener("click", function () {
      imgLess();
    })
  );
};

const imgPlus = () => {
  const lightboxContent = document.querySelector(".lightbox__content");
  lightboxContent.innerHTML = "";
  if (currentImgIndex === currentMedias.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex = currentImgIndex + 1;
  }

  const img = currentMedias[currentImgIndex];

  if (img.image !== undefined) {
    const portfolioSrc = "./images/Photos/" + currentPhotographerId + "/" + img.image;
    const mediaFactory = new MediaFactory(portfolioSrc, img.alt);
    const nextMedia = mediaFactory.createElement();
    const lightboxTitle = document.createElement("h3");
    lightboxTitle.classList.add("lightbox__title");
    lightboxTitle.textContent = img.alt;
    nextMedia.classList.add("lightbox__media");
    lightboxContent.appendChild(nextMedia);
    lightboxContent.appendChild(lightboxTitle);
  } else {
    const portfolioSrc = "./images/Photos/" + currentPhotographerId + "/" + img.video;
    const mediaFactory = new MediaFactory(portfolioSrc, img.alt);
    const nextMedia = mediaFactory.createElement();
    const lightboxTitle = document.createElement("h3");
    lightboxTitle.classList.add("lightbox__title");
    lightboxTitle.textContent = img.alt;
    nextMedia.classList.add("lightbox__media");
    nextMedia.alt = img.alt;
    nextMedia.controls = true;
    lightboxContent.appendChild(nextMedia);
    lightboxContent.appendChild(lightboxTitle);
  }
};

const imgLess = () => {
  const lightboxContent = document.querySelector(".lightbox__content");
  lightboxContent.innerHTML = "";
  if (currentImgIndex === 0) {
    currentImgIndex = currentMedias.length - 1;
  } else {
    currentImgIndex = currentImgIndex - 1;
  }

  const img = currentMedias[currentImgIndex];

  if (img.image !== undefined) {
    const portfolioSrc = "./images/Photos/" + currentPhotographerId+ "/" + img.image;
    const mediaFactory = new MediaFactory(portfolioSrc, img.alt);
    const prevMedia = mediaFactory.createElement();
    const lightboxTitle = document.createElement("h3");
    lightboxTitle.classList.add("lightbox__title");
    lightboxTitle.textContent = img.alt;
    prevMedia.classList.add("lightbox__media");
    lightboxContent.appendChild(prevMedia);
    lightboxContent.appendChild(lightboxTitle);
  } else {
    const portfolioSrc = "./images/Photos/" + currentPhotographerId + "/" + img.video;
    const mediaFactory = new MediaFactory(portfolioSrc, img.alt);
    const prevMedia = mediaFactory.createElement();
    const lightboxTitle = document.createElement("h3");
    lightboxTitle.classList.add("lightbox__title");
    lightboxTitle.textContent = img.alt;
    prevMedia.classList.add("lightbox__media");
    prevMedia.controls = true;
    lightboxContent.appendChild(prevMedia);
    lightboxContent.appendChild(lightboxTitle);
  }
};


/**
 *  Fonction qui gère le lancement et la  fermeture de la lightbox
 */
function launchLightbox(portfolioSrc, medias, media, photographerId) {
  currentPhotographerId = photographerId;
  createLightbox(portfolioSrc, medias, media);
  const lightbox = document.querySelector(".lightbox__bground");
  lightbox.style.display = "block";
  lightbox.setAttribute("aria-label", "image closeup view");

  const lightboxCloseBtn = document.querySelector(".close");
  lightboxCloseBtn.addEventListener("click", closeLightbox);

  lightboxFocus();
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox__bground");
  lightbox.removeAttribute("aria-label", "image closeup view");
  lightbox.style.display = "none";
}

/**
 * Gestion du focus dans la lightbox
 */

const lightboxFocus = () => {
  document.querySelector(".lightbox__bground").addEventListener("keydown", (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 9) {
      document.querySelector(".close").focus();
    }
  });
};

/**
 * Gestion accessibilité clavier
 */

window.addEventListener("keydown", (event) => {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    imgPlus();
  }
  if (event.key === "Right" || event.key === "ArrowRight") {
    imgLess();
  }
  if (event.key === "Escape" || event.key === "Esc") {
    closeLightbox();
  }
});

export { launchLightbox };
