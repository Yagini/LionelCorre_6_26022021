import {data} from "./data.js"

const photographers = data.photographers;
const medias = data.media;
const photographersMain = document.querySelector(".photographer__main");

export { photographers as photographersfunctions};

photographers.forEach(photographer => {

    //section photographers introduction
    const photographersSection = document.createElement("section");
    photographersSection.classList.add("photographers__block");

    const photographersInfo = document.createElement("article");
    photographersInfo.classList.add("photographers__info");
    
    const photographersName = document.createElement("h2");
    photographersName.classList.add("photographers__name");
    photographersName.textContent = photographer.name;
    
    const photographersCity = document.createElement("p");
    photographersCity.classList.add("photographers__city", "photographers__city--page");
    photographersCity.textContent = photographer.city;

    const photographersTagline = document.createElement("p");
    photographersTagline.classList.add("photographers__tagline", "photographers__tagline--page");
    photographersTagline.textContent = photographer.tagline;
    
    const photographersTags = document.createElement("ul");
    photographersTags.classList.add("tag");
    photographersTags.textContent = photographer.tags;
    
    const photographersFrame = document.createElement("div");
    photographersFrame.classList.add("photographers__frame", "photographers__frame--page");

    const photographersPortrait = document.createElement("img");
    photographersPortrait.src = photographer.portrait;
    photographersPortrait.alt = photographer.alt;

    const contactButton = document.createElement("button");
    contactButton.classList.add = "button";
    contactButton.textContent = "Contactez-moi";
    
    const photographersPriceInsert = document.createElement("div");
    photographersPriceInsert.classList.add("photographers__insert");

    const photographersPrice = document.createElement("p");
    photographersPrice.classList.add("photographer__price");
    photographersPrice.textContent = photographer.price;


    photographersSection.appendChild(photographersInfo);    
    photographersInfo.appendChild(photographersName);
    photographersInfo.appendChild(photographersCity);
    photographersInfo.appendChild(photographersTagline);    
    photographersInfo.appendChild(photographersTags);
    
    photographersSection.appendChild(photographersFrame);
    photographersFrame.appendChild(photographersPortrait);
    
    photographersSection.appendChild(contactButton);

    photographersPriceInsert.appendChild(photographersPrice);

    photographersMain.appendChild(photographersPriceInsert);
    photographersMain.appendChild(photographersSection);

    // section carousel 
    const photographersDropDownMenu = document.createElement("section");
    photographersDropDownMenu.classList.add("Drop-down-menu__block");

    const DropDownMenuLabel = document.createElement("label");
    DropDownMenuLabel.setAttribute("for", "order");
    DropDownMenuLabel.classList.add("drop-down-menu__label");
    DropDownMenuLabel.textContent= "Trier par";    

    const DropDownMenuSelect = document.createElement("select");
    DropDownMenuSelect.setAttribute("name", "orderby");
    DropDownMenuSelect.setAttribute("id", "order");

    const DropDownMenuOptionPopularity = document.createElement("option");
    DropDownMenuOptionPopularity.setAttribute("value", "Popularity")
    DropDownMenuOptionPopularity.textContent = "Popularité";

    const DropDownMenuOptionDate = document.createElement("option");
    DropDownMenuOptionDate.setAttribute("value", "Date")
    DropDownMenuOptionDate.textContent = "Date";

    const DropDownMenuOptionTitle = document.createElement("option");
    DropDownMenuOptionTitle.setAttribute("value", "Title")
    DropDownMenuOptionTitle.textContent = "Titre";

    photographersDropDownMenu.appendChild(DropDownMenuLabel);    
    photographersDropDownMenu.appendChild(DropDownMenuSelect);
    DropDownMenuSelect.appendChild(DropDownMenuOptionPopularity);
    DropDownMenuSelect.appendChild(DropDownMenuOptionDate);
    DropDownMenuSelect.appendChild(DropDownMenuOptionTitle);
    photographersMain.appendChild(photographersDropDownMenu);

    // section media
    const portfolioContent = document.createElement("section");
    portfolioContent.classList.add("portfolio__content");   

    const portfolioPhoto = document.createElement("img");
    portfolioPhoto.classList.add("portfolio__photo");
    portfolioPhoto.src = medias.image;
    portfolioPhoto.alt = medias.alt;

    const portfolioInfo = document.createElement("div");
    portfolioInfo.classList.add("portfolio__info");

    const portfolioTitle = document.createElement("h3");
    portfolioTitle.classList.add("portfolio__title");
    portfolioTitle.textContent = medias.alt;

    const portfolioPrice = document.createElement("p");
    portfolioPrice.classList.add("portfolio__price");
    portfolioPrice.textContent = medias.price;

    const portfolioLikes = document.createElement("p");
    portfolioLikes.classList.add("portfolio__likes");
    portfolioLikes.textContent = medias.likes;

    const portfolioIcon = document.createElement("i");
    portfolioIcon.classList.add("fas", "fa-heart", "portfolio__icon"); 

    portfolioContent.appendChild(portfolioPhoto);
    portfolioContent.appendChild(portfolioInfo);
    portfolioInfo.appendChild(portfolioTitle);
    portfolioInfo.appendChild(portfolioPrice);
    portfolioInfo.appendChild(portfolioLikes);
    portfolioInfo.appendChild(portfolioIcon);

    photographersMain.appendChild(portfolioContent);
    
    // section lightbox
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
    lightboxCheveronRight.classList.add("fas", "fa-chevron-right", "lightbox__chevron-r"); 

    const lightboxCheveronLeft = document.createElement("i");
    lightboxCheveronLeft.classList.add("fas", "fa-chevron-left", "lightbox__chevron-l");

    const lightboxClose = document.createElement("i");
    lightboxClose.classList.add("lightbox__close");

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

    //section modale
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
    modalInputMessage.setAttribute ("type", "text");
    modalInputMessage.rows = 5;
    modalInputMessage.cols = 35;

    const modalSendButton = document.createElement("button");
    modalSendButton.classList.add("modal__send-button");
    modalSendButton.textContent = "Envoyer";

    const modalCloseButton = document.createElement("button");
    modalCloseButton.classList.add("close");

    const modalCloseIcon = document.createElement("i");
    modalCloseIcon.classList.add("close-icon");

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
    modalForm.appendChild(modalSendButton)
    modalSendButton.insertAdjacentElement("afterend", cloneSpanError);
    modalForm.appendChild(modalCloseButton);    

    modalCloseButton.appendChild(modalCloseIcon);    

    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalForm);

    modalBground.appendChild(modalContent);

    photographersMain.appendChild(modalBground);

});
