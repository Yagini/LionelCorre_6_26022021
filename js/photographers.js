import { data } from "./data.js";
import { createModal } from "./modal.js";
import { launchLightbox } from "./lightbox.js";
//import { addfilters } from "./filters.js";
//import { addLikesInteractions } from "./likes.js";

const createPhotographers = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");
  const idNumber = parseInt(id, 10);

  const photographers = data.photographers;

  const photographer = photographers.find((photographer) => photographer.id === idNumber);
  const medias = data.media;
  const mediaFilter = medias.filter((media) => media.photographerId === photographer.id);
  const photographersMain = document.querySelector(".photographers__main");

  //photographers insert
  addPhotographerPresentation(photographer, photographersMain, mediaFilter);

  // section DropDownMenu
  addDropdownMenu(photographersMain);

  // section album
  // export pour créer le nouveau tableau
  addPortfolio(photographersMain, photographer, mediaFilter);

  // section modal
  createModal(photographersMain, photographer);

  //addfilters(mediaFilter);

  //addLikesInteractions();
};

const addPhotographerPresentation = (photographer, photographersMain, mediaFilter) => {
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
  photographersLikes.setAttribute("id", "total__likes");
  photographersLikes.innerHTML = mediaFilter.likes;

  const photographersIcon = document.createElement("i");
  photographersIcon.classList.add("fas", "fa-heart", "photographers__icon");

  const photographersPrice = document.createElement("p");
  photographersPrice.classList.add("photographers__price--page");
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
  DropDownMenuOptionPopularity.classList.add("dropdPopularity");
  DropDownMenuOptionPopularity.textContent = "Popularité";

  const DropDownMenuOptionDate = document.createElement("option");
  DropDownMenuOptionDate.setAttribute("value", "Date");
  DropDownMenuOptionDate.classList.add("dropdDate");
  DropDownMenuOptionDate.textContent = "Date";

  const DropDownMenuOptionTitle = document.createElement("option");
  DropDownMenuOptionTitle.setAttribute("value", "Title");
  DropDownMenuOptionTitle.classList.add("dropdTitle");
  DropDownMenuOptionTitle.textContent = "Titre";

  photographersDropDownMenu.appendChild(DropDownMenuLabel);
  photographersDropDownMenu.appendChild(DropDownMenuSelect);
  DropDownMenuSelect.appendChild(DropDownMenuOptionPopularity);
  DropDownMenuSelect.appendChild(DropDownMenuOptionDate);
  DropDownMenuSelect.appendChild(DropDownMenuOptionTitle);
  photographersMain.appendChild(photographersDropDownMenu);
};

const addPortfolio = (photographersMain, photographer, mediaFilter) => {
  const portfolioContent = document.createElement("section");
  portfolioContent.classList.add("portfolio__content");

  mediaFilter.forEach((media) => {
    const portfolioBlock = document.createElement("div");
    portfolioBlock.classList.add("portfolio__block");

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
    portfolioLikes.setAttribute("id", "portfolio__l");
    portfolioLikes.textContent = media.likes;

    const portfolioIcon = document.createElement("i");
    portfolioIcon.classList.add("fas", "fa-heart", "portfolio__icon");
    portfolioIcon.setAttribute("id", "portfolio__i");
    portfolioIcon.addEventListener("click", function () {
      let likesCounter = parseInt(portfolioLikes.textContent, 10);
      likesCounter++;
      portfolioLikes.textContent = likesCounter;
      // créer une fonction qui calcul le total de like
    });

    portfolioInfo.appendChild(portfolioTitle);
    portfolioInfo.appendChild(portfolioPrice);
    portfolioInfo.appendChild(portfolioLikes);
    portfolioInfo.appendChild(portfolioIcon);

    if (media.image === undefined) {
      const portfolioVideo = document.createElement("video");
      portfolioVideo.classList.add("portfolio__media");
      portfolioVideo.alt = media.alt;
      const portfolioVideoSource = document.createElement("source");
      const portfolioSrc = "./images/Photos/" + photographer.id + "/" + media.video;
      portfolioVideoSource.src = portfolioSrc;
      portfolioVideoSource.type = "video/mp4";
      portfolioVideo.appendChild(portfolioVideoSource);
      portfolioBlock.appendChild(portfolioVideo);
      portfolioVideo.addEventListener("click", function () {
        launchLightbox(portfolioSrc, mediaFilter, media, photographer.id);
      });
    } else {
      const portfolioPhoto = document.createElement("img");
      const portfolioSrc = "./images/Photos/" + photographer.id + "/" + media.image;
      portfolioPhoto.classList.add("portfolio__media");
      portfolioPhoto.src = portfolioSrc;
      portfolioPhoto.alt = media.alt;
      portfolioPhoto.textContent = media.alt;
      portfolioBlock.appendChild(portfolioPhoto);
      portfolioPhoto.addEventListener("click", function () {
        launchLightbox(portfolioSrc, mediaFilter, media, photographer.id);
      });
    }

    portfolioBlock.appendChild(portfolioInfo);
    portfolioContent.appendChild(portfolioBlock);
  });
  photographersMain.appendChild(portfolioContent);
};

export { createPhotographers };
