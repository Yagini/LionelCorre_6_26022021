let currentImgIndex = -1;
let currentMedias = [];

const createLightbox = (portfolioSrc, medias, media, photographerId) => {
  const lightboxBground = document.querySelector(".lightbox__bground");
  lightboxBground.innerHTML = "";

  const lightboxContent = document.createElement("div");
  lightboxContent.classList.add("lightbox__content");

  const lightboxVideo = document.createElement("video");
  lightboxVideo.classList.add("lightbox__video");
  lightboxVideo.alt = medias.alt;
  lightboxVideo.controls = true;
  lightboxVideo.style.display = "none";
  const lightboxVideoSrc = document.createElement("source");
  lightboxVideoSrc.src = portfolioSrc;
  lightboxVideoSrc.type = "video/mp4";
  lightboxVideo.appendChild(lightboxVideoSrc);
  lightboxContent.appendChild(lightboxVideo);

  const lightboxImg = document.createElement("img");
  lightboxImg.classList.add("lightbox__img");
  lightboxImg.src = portfolioSrc;
  lightboxImg.alt = medias.alt;
  lightboxImg.style.display = "none";
  lightboxContent.appendChild(lightboxImg);

  if (portfolioSrc.includes("jpg")) {
    lightboxImg.style.display = "block";
  } else {
    lightboxVideo.style.display = "block";
  }

  const lightboxTitle = document.createElement("h3");
  lightboxTitle.classList.add("lightbox__title");
  lightboxTitle.textContent = media.alt;

  const nextImg = document.createElement("a");
  nextImg.classList.add("nextImg");

  const lightboxCheveronRight = document.createElement("i");
  lightboxCheveronRight.classList.add("fas", "fa-chevron-right", "lightbox__icon", "lightbox__chevron-r");

  const prevImg = document.createElement("a");
  prevImg.classList.add("prevImg");

  const lightboxCheveronLeft = document.createElement("i");
  lightboxCheveronLeft.classList.add("fas", "fa-chevron-left", "lightbox__icon", "lightbox__chevron-l");

  const lightboxClose = document.createElement("i");
  lightboxClose.classList.add("lightbox__icon", "lightbox__close");

  const lightboxCloseButton = document.createElement("button");
  lightboxCloseButton.classList.add("close");

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
      imgPlus(photographerId);
    })
  );
  if (
    document.querySelector(".prevImg").addEventListener("click", function () {
      imgLess(photographerId, medias);
    })
  );
};

const imgPlus = (photographerId) => {
  //const lightboxContent =  document.querySelector(".lightbox__content");
  //lightboxContent.innerHTML = "";
  if (currentImgIndex === currentMedias.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex = currentImgIndex + 1;
  }
  const img = currentMedias[currentImgIndex];
  const currentImg = document.querySelector(".lightbox__img");
  const currentVideo = document.querySelector(".lightbox__video");
  const currentVideoSource = document.querySelector(".lightbox__video source");
  const currentImgAlt = document.querySelector(".lightbox__title");
  currentImgAlt.textContent = img.alt;
  if (img.image !== undefined) {
    currentImg.src = "./images/Photos/" + photographerId + "/" + img.image;
    currentImg.style.display = "block";
    currentVideo.style.display = "none";
  } else {
    currentVideoSource.src = "./images/Photos/" + photographerId + "/" + img.video;
    currentImg.style.display = "none";
    currentVideo.style.display = "block";
  }
};

const imgLess = (photographerId) => {
  if (currentImgIndex === 0) {
    currentImgIndex = currentMedias.length - 1;
  } else {
    currentImgIndex = currentImgIndex - 1;
  }
  const img = currentMedias[currentImgIndex];
  const currentImg = document.querySelector(".lightbox__img");
  const currentVideo = document.querySelector(".lightbox__video");
  const currentVideoSource = document.querySelector(".lightbox__video source");
  const currentImgAlt = document.querySelector(".lightbox__title");
  currentImgAlt.textContent = img.alt;
  if (img.image !== undefined) {
    currentImg.src = "./images/Photos/" + photographerId + "/" + img.image;
    currentImg.style.display = "block";
    currentVideo.style.display = "none";
  } else {
    currentVideoSource.src = "./images/Photos/" + photographerId + "/" + img.video;
    currentImg.style.display = "none";
    currentVideo.style.display = "block";
  }
};

function launchLightbox(portfolioSrc, medias, media, photographerId) {
  createLightbox(portfolioSrc, medias, media, photographerId);

  const lightbox = document.querySelector(".lightbox__bground");
  lightbox.style.display = "block";

  const lightboxCloseBtn = document.querySelector(".close");

  lightboxCloseBtn.addEventListener("click", closeLightbox);
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox__bground");
  lightbox.style.display = "none";
}
export { launchLightbox };
