import { data } from "./data.js";
import { createModal } from "./modal.js";
import { launchLightbox } from "./lightbox.js";

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

  // section modal
  createModal(photographersMain, photographer);
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

    if (media.image === undefined) {
      const portfolioVideo = document.createElement("video");      
      portfolioVideo.classList.add("portfolio__media");
      portfolioVideo.controls = true;
      portfolioVideo.alt = media.alt;
      const portfolioVideoSource = document.createElement("source");
      const portFolioVideoSrc = "./images/Photos/" + photographer.id + "/" + media.video;
      const videoIndex = medias.findIndex((img) => img.video === media.video);
      portfolioVideoSource.src = portFolioVideoSrc;
      portfolioVideoSource.type = "video/mp4";
      portfolioVideo.appendChild(portfolioVideoSource);
      portfolioBlock.appendChild(portfolioVideo);
      portfolioVideo.addEventListener("click", function () {
        launchLightbox(portfolioVideoSrc, medias, videoIndex);        
      });

    } else {
      const portfolioPhoto = document.createElement("img");
      const portfolioSrc = "./images/Photos/" + photographer.id + "/" + media.image;                 
      portfolioPhoto.classList.add("portfolio__media");
      portfolioPhoto.src = portfolioSrc;
      portfolioPhoto.alt = media.alt;      
      portfolioBlock.appendChild(portfolioPhoto);
      portfolioPhoto.addEventListener("click", function () {
        launchLightbox(portfolioSrc, medias);
        lightboxAction(imgIndex);
        console.log(imgIndex)                              
      });            
    };  
  
    portfolioBlock.appendChild(portfolioInfo);
    portfolioContent.appendChild(portfolioBlock);

    const imgIndex = medias.findIndex((img) => img.image === media.image);        
    
    const lightboxAction = (imgIndex) => {
      let currentImgIndex = imgIndex;
      let image = document.getElementsByClassName("portfolio__media");     
      const imgPlus = () => {
        if (currentImgIndex < currentImgIndex.length + 1) {          
          currentImgIndex ++          
          image ++
        }
      }
      document.querySelector(".nextImg").addEventListener("click", imgPlus); 
      
      const imgLess = () => {
        if (currentImgIndex === currentImgIndex.length - 1) {
          currentImgIndex --
        }
      }
      document.querySelector(".prevImg").addEventListener("click", imgLess);
      
    }
  });

  photographersMain.appendChild(portfolioContent);
};

export { createPhotographers };
