const createLightbox = (portfolioSrc, medias) => {
  const lightboxBground = document.querySelector(".lightbox__bground");
  lightboxBground.innerHTML = "";

  const lightboxContent = document.createElement("div");
  lightboxContent.classList.add("lightbox__content");

  const lightboxImg = document.createElement("img");
  lightboxImg.classList.add("lightbox__img");
  lightboxImg.src = portfolioSrc;
  lightboxImg.alt = medias.alt;

  const lightboxTitle = document.createElement("h3");
  lightboxTitle.classList.add("lightbox__title");
  lightboxTitle.textContent = medias.alt;

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

  lightboxContent.appendChild(lightboxImg);
  lightboxContent.appendChild(lightboxTitle);

  lightboxCloseButton.appendChild(lightboxCloseIcon);

  nextImg.appendChild(lightboxCheveronRight);
  prevImg.appendChild(lightboxCheveronLeft);

  lightboxBground.appendChild(nextImg);
  lightboxBground.appendChild(prevImg);
  lightboxBground.appendChild(lightboxCloseButton);
  lightboxBground.appendChild(lightboxContent); 
  


  //1- recup en premier l'index qui correspond à la source dans le tableau 0
  // tableau = media qui contient toutes les images savoir portfolio ou elle ce trouve dans le tableau

  //2- index +1 pour récupèrer les images suivantes

  //3- avec le new index récup le
  
  

};




function launchLightbox (portfolioSrc, medias) {
  createLightbox(portfolioSrc, medias);   
  const lightbox = document.querySelector(".lightbox__bground");
  lightbox.style.display = "block";  
  //todo lightboxCloseBtn call index.js 1x
  const lightboxCloseBtn = document.querySelector(".close");
  function closeLightbox() {
    lightbox.style.display = "none";
  }
  lightboxCloseBtn.addEventListener("click", closeLightbox);
}

export { launchLightbox };
