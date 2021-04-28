import { MediaFactory } from "./mediafactory.js";

let currentImgIndex = -1;
let currentMedias = [];
let currentPhotographerId = -1;

/**
 * Fonction qui construit la page html de la lightbox
 * @param {URL} portfolioSrc
 * @param {array} medias
 * @param {object} media
 */

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
  nextImg.setAttribute('id', 'nextImg');
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

  /**
   * Variable qui recherche l'index de l'image en cour
   */
  const imgIndex = medias.findIndex((img) => img.image === media.image);
  currentImgIndex = imgIndex;
  currentMedias = medias;

  /**
   * Condition qui écoute un clique pour changement d'image dans la lightbox
   */
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

/**
 * Fonction qui gère le changement d'image dans la lightbox
 */
const imgPlus = () => {
  const lightboxContent = document.querySelector(".lightbox__content");
  lightboxContent.innerHTML = "";
  if (currentImgIndex === currentMedias.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex = currentImgIndex + 1;
  }

  const img = currentMedias[currentImgIndex];
  /**
   * Condition qui va analyser le type de fichier (mp4 / jpg) et créer la page correspondante
   */
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
    const portfolioSrc = "./images/Photos/" + currentPhotographerId + "/" + img.image;
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
 * Fonction qui gère le lancement et la  fermeture de la lightbox
 *
 * @param {URL} portfolioSrc
 * @param {array} medias
 * @param {object} media
 * @param {number} photographerId
 */
function launchLightbox(portfolioSrc, medias, media, photographerId) {
  console.log("launch light");
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
  const closeBtn = document.querySelector(".close");
  const nextImg = document.querySelector(".nextImg");
  const prevImg = document.querySelector(".prevImg");

  console.log("load");
  document.querySelector(".lightbox__bground").addEventListener("keydown", (event) => {
    console.log("nextt");
    if (event.keyCode === 9) {
      console.log("1");
      if (event.shiftKey) {
        console.log("2");
        if (document.activeElement === nextImg) {
          console.log("3");
          prevImg.focus();
        }
      } else {
        console.log("4", document.activeElement, closeBtn, nextImg );
        if (document.activeElement === closeBtn) {
          nextImg.focus(); 
          console.log("5") ;        
        }
      }
    }
  });
};

/**
 * Gestion accessibilité clavier
 */

window.addEventListener("keydown", (event) => {
  if (event.key === "Left" || event.key === "ArrowLeft") {
    imgLess();
  }
  if (event.key === "Right" || event.key === "ArrowRight") {
    imgPlus();
  }
  if (event.key === "Escape" || event.key === "Esc") {
    closeLightbox();
  }
});

export { launchLightbox };
