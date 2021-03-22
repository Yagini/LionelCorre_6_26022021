import { data } from "./data.js";

const createPhotographers = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const idNumber = parseInt(id, 10);

  const photographers = data.photographers;

  const photographer = photographers.find((photographer) => photographer.id === idNumber);

  const medias = data.media;
  const photographersMain = document.querySelector(".photographers__main");

  //photographers insert
  addPhotographerPresentation(photographer, photographersMain);

  // section DropDownMenu
  addDropdownMenu(photographersMain);

  // section album
  addPortofolio(medias, photographersMain, photographer);

  // section lightbox
  addLightbox(medias, photographersMain);

  // section modal
  addModal(photographersMain);
};

const addPhotographerPresentation = (photographer, photographersMain) => {
  const photographersSection = document.createElement("section");
  photographersSection.classList.add("photographers__block");

  const photographersInfo = document.createElement("article");
  photographersInfo.classList.add("photographers__info");

  const photographersName = document.createElement("h2");
  photographersName.classList.add("photographers__name", "photographers__name--page");
  photographersName.textContent = photographer.name;

  const photographersCity = document.createElement("p");
  photographersCity.classList.add("photographers__city", "photographers__city--page");
  photographersCity.textContent = photographer.city;

  const photographersTagline = document.createElement("p");
  photographersTagline.classList.add("photographers__tagline", "photographers__tagline--page");
  photographersTagline.textContent = photographer.tagline;

  const photographersTags = document.createElement("ul");
  photographersTags.classList.add("photographers__tag");

  photographer.tags.forEach((tag) => {
    const tagList = document.createElement("li");
    tagList.classList.add("tag__li");
    tagList.textContent = tag;
    photographersTags.appendChild(tagList);
  });

  const photographersFrame = document.createElement("div");
  photographersFrame.classList.add("photographers__frame", "photographers__frame--page");

  const photographersPortrait = document.createElement("img");
  photographersPortrait.classList.add("photographers__portrait", "photographers__portrait--page");
  photographersPortrait.src = "./images/Photos/Photographers_ID_Photos/" + photographer.portrait;
  photographersPortrait.alt = photographer.alt;

  const contactButton = document.createElement("button");
  contactButton.classList.add("button__contact");
  contactButton.textContent = "Contactez-moi";

  const photographersPriceInsert = document.createElement("div");
  photographersPriceInsert.classList.add("photographers__insert");

  const photographersLikes = document.createElement("p");
  photographersLikes.classList.add("photographers__likes");
  photographersLikes.textContent = "125240 ";

  const photographersIcon = document.createElement("i");
  photographersIcon.classList.add("fas", "fa-heart", "photographers__icon");

  const photographersPrice = document.createElement("p");
  photographersPrice.classList.add("photographers__price");
  photographersPrice.textContent = photographer.price + "€ / jour";

  photographersSection.appendChild(photographersInfo);
  photographersInfo.appendChild(photographersName);
  photographersInfo.appendChild(photographersCity);
  photographersInfo.appendChild(photographersTagline);
  photographersInfo.appendChild(photographersTags);

  photographersSection.appendChild(photographersFrame);
  photographersFrame.appendChild(photographersPortrait);

  photographersPriceInsert.appendChild(photographersLikes);
  photographersPriceInsert.appendChild(photographersIcon);
  photographersPriceInsert.appendChild(photographersPrice);

  photographersMain.appendChild(contactButton);
  photographersMain.appendChild(photographersSection);
  photographersMain.appendChild(photographersPriceInsert);
};

const addDropdownMenu = (photographersMain) => {
  const photographersDropDownMenu = document.createElement("section");
  photographersDropDownMenu.classList.add("dropdownmenu__block");

  const DropDownMenuLabel = document.createElement("label");
  DropDownMenuLabel.setAttribute("for", "order");
  DropDownMenuLabel.classList.add("dropdownmenu__label");
  DropDownMenuLabel.textContent = "Trier par";

  const DropDownMenuSelect = document.createElement("select");
  DropDownMenuSelect.setAttribute("name", "orderby");
  DropDownMenuSelect.setAttribute("id", "order");

  const DropDownMenuOptionPopularity = document.createElement("option");
  DropDownMenuOptionPopularity.setAttribute("value", "Popularity");
  DropDownMenuOptionPopularity.textContent = "Popularité";

  const DropDownMenuOptionDate = document.createElement("option");
  DropDownMenuOptionDate.setAttribute("value", "Date");
  DropDownMenuOptionDate.textContent = "Date";

  const DropDownMenuOptionTitle = document.createElement("option");
  DropDownMenuOptionTitle.setAttribute("value", "Title");
  DropDownMenuOptionTitle.textContent = "Titre";

  photographersDropDownMenu.appendChild(DropDownMenuLabel);
  photographersDropDownMenu.appendChild(DropDownMenuSelect);
  DropDownMenuSelect.appendChild(DropDownMenuOptionPopularity);
  DropDownMenuSelect.appendChild(DropDownMenuOptionDate);
  DropDownMenuSelect.appendChild(DropDownMenuOptionTitle);
  photographersMain.appendChild(photographersDropDownMenu);
};

const addPortofolio = (medias, photographersMain, photographer) => {
  const portfolioContent = document.createElement("section");
  portfolioContent.classList.add("portfolio__content");

  const mediaFilter = medias.filter((media) => media.photographerId === photographer.id);
  mediaFilter.forEach((media) => {
    const portfolioBlock = document.createElement("div");
    portfolioBlock.classList.add("portfolio__block");

    const portfolioPhoto = document.createElement("img");
    portfolioPhoto.classList.add("portfolio__media");
    portfolioPhoto.src = "./images/Photos/" + photographer.id + "/" + media.image;
    portfolioPhoto.alt = media.alt;
    portfolioPhoto.setAttribute("id", media.id);

    const portfolioVideo = document.createElement("video");
    portfolioVideo.classList.add("portfolio__media");
    portfolioVideo.src = "./images/Photos/" + photographer.id + "/" + media.video;
    portfolioVideo.setAttribute("controls", "");
    portfolioVideo.alt = media.alt;
    console.log(portfolioVideo)

    const portfolioInfo = document.createElement("div");
    portfolioInfo.classList.add("portfolio__info");

    const portfolioTitle = document.createElement("h3");
    portfolioTitle.classList.add("portfolio__title");
    portfolioTitle.textContent = media.alt;

    const portfolioPrice = document.createElement("p");
    portfolioPrice.classList.add("portfolio__price");
    portfolioPrice.textContent = media.price + " €";

    const portfolioLikes = document.createElement("p");
    portfolioLikes.classList.add("portfolio__likes");
    portfolioLikes.textContent = media.likes;

    const portfolioIcon = document.createElement("i");
    portfolioIcon.classList.add("fas", "fa-heart", "portfolio__icon");

    portfolioInfo.appendChild(portfolioTitle);
    portfolioInfo.appendChild(portfolioPrice);
    portfolioInfo.appendChild(portfolioLikes);
    portfolioInfo.appendChild(portfolioIcon);

    portfolioBlock.appendChild(portfolioPhoto);
    portfolioBlock.appendChild(portfolioInfo);

    portfolioContent.appendChild(portfolioBlock);
  });

  photographersMain.appendChild(portfolioContent);
};

//lightbox

const addLightbox = (medias, photographersMain) => {  
 
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
  lightboxCloseIcon.classList.add("fas", "fa-times", "lightbox__icon", "close__icon");

  lightboxContent.appendChild(lightboxImg);
  lightboxContent.appendChild(lightboxTitle); 

  lightboxCloseButton.appendChild(lightboxCloseIcon);

  lightboxBground.appendChild(lightboxCheveronLeft);
  lightboxBground.appendChild(lightboxCheveronRight);
  lightboxBground.appendChild(lightboxCloseButton);
  lightboxBground.appendChild(lightboxContent);

  photographersMain.appendChild(lightboxBground);
};
const getImgId = document.getElementById(medias.id);

function openLightbox() {
  document.querySelector(".lightbox__bground").style.display = "block";
}

function closeLightbox() {
  document.querySelector(".close").style.display = "none";  
}

const firstImg = 1;
showImg(firstImg);

function nextImg(n) {
  showImg( firstImg += n);
}

function currentImg(n) {
  showImg(firstImg = n);
}

showImg.forEach( () => {
  https://www.w3schools.com/howto/howto_js_lightbox.asp
})

// form

const addModal = (photographersMain) => {

  const modalBground = document.createElement("div");
  modalBground.classList.add("modal__bground");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");

  const modalTitle = document.createElement("h1");
  modalTitle.classList.add("modal__title");

  const modalForm = document.createElement("form");
  modalForm.classList.add("modal__form");

  const modalFirstname = document.createElement("label");
  modalFirstname.setAttribute("for", "firstname");
  modalFirstname.classList.add("modal__firstname");
  modalFirstname.textContent = "Prénom";

  const modalInputFirstname = document.createElement("input");
  modalInputFirstname.setAttribute("id", "firstname");
  modalInputFirstname.type = "text";

  const modalLastname = document.createElement("label");
  modalLastname.setAttribute("for", "Lastname");
  modalLastname.classList.add("modal__lastname");
  modalLastname.textContent = "Nom";

  const modalInputLastname = document.createElement("input");
  modalInputLastname.setAttribute("id", "lastname");
  modalInputLastname.type = "text";

  const modalEmail = document.createElement("label");
  modalEmail.setAttribute("for", "Email");
  modalEmail.classList.add("modal__email");
  modalEmail.textContent = "Email";

  const modalInputEmail = document.createElement("input");
  modalInputEmail.setAttribute("id", "email");
  modalInputEmail.type = "text";

  const modalMessage = document.createElement("label");
  modalMessage.setAttribute("for", "Message");
  modalMessage.classList.add("modal__message");
  modalMessage.textContent = "Message";

  const modalInputMessage = document.createElement("textarea");
  modalInputMessage.setAttribute("id", "message");
  modalInputMessage.setAttribute("type", "text");
  modalInputMessage.rows = 5;
  modalInputMessage.cols = 35;

  const modalSendButton = document.createElement("button");
  modalSendButton.classList.add("modal__send-button");
  modalSendButton.textContent = "Envoyer";

  const modalCloseButton = document.createElement("button");
  modalCloseButton.classList.add("close");

  const modalCloseIcon = document.createElement("i");
  modalCloseIcon.classList.add("fas", "fa-times", "close-icon");

  const modalSpanError = document.createElement("span");
  modalSpanError.classList.add("Modal__error");
  const cloneSpanError = modalSpanError.cloneNode(true);

  modalForm.appendChild(modalFirstname);
  modalForm.appendChild(modalInputFirstname);
  modalInputFirstname.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalLastname);
  modalForm.appendChild(modalInputLastname);
  modalInputLastname.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalEmail);
  modalForm.appendChild(modalInputEmail);
  modalInputEmail.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalMessage);
  modalForm.appendChild(modalInputMessage);
  modalInputMessage.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalSendButton);
  modalSendButton.insertAdjacentElement("afterend", cloneSpanError);
  modalForm.appendChild(modalCloseButton);

  modalCloseButton.appendChild(modalCloseIcon);

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalForm);

  modalBground.appendChild(modalContent);

  photographersMain.appendChild(modalBground);
};
export { createPhotographers };
