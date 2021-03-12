

// création des imports

import {data} from "./data.js"

console.log(data);

const photographers = data.photographers;
const medias = data.media;
const photographersMain = document.querySelector(".photographer__main");
const photographersSection = document.querySelector(".photographers__block");
const photographersCarousel = document.querySelector(".carousel__block");
const photographersPortfolio = document.querySelector(".portfolio__content");

photographers.forEach(photographer => {

    //section photographers introduction
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
    photographers.forEach ( tag => {
        const tags = document.createElement("li");                
        tags.textContent = tag.tags;
        photographersTags.appendChild(tags);       
    })
    
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

    // section carousel 

    const carouselLabel = document.createElement("label");
    carouselLabel.setAttribute("for", "order");
    carouselLabel.classList.add("carousel__label");
    carouselLabel.textContent= "Trier par";

    const carouselInput = document.createElement("input");
    carouselInput.setAttribute("text", "text");
    carouselInput.setAttribute("id", "order");

    const carouselSelect = document.createElement("select");
    carouselSelect.setAttribute("name", "orderby");
    carouselInput.setAttribute("id", "select");

    photographersCarousel.appendChild(carouselLabel);
    photographersCarousel.appendChild(carouselInput);
    photographersCarousel.appendChild(carouselSelect);

    // section media

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
    
    photographersPortfolio.appendChild(portfolioPhoto);
    photographersPortfolio.appendChild(portfolioInfo);
    portfolioInfo.appendChild(portfolioTitle);
    portfolioInfo.appendChild(portfolioPrice);
    portfolioInfo.appendChild(portfolioLikes);
    portfolioInfo.appendChild(portfolioIcon);

});









































/*const photographers = data.photographers;
console.log(photographers);
const photographersSection = document.querySelector(".photographers");

photographers.forEach(photographer => {
    const photographersCard = document.createElement("article");
    photographersCard.classList.add("photographers__card");
    
    const photographersCity = document.createElement("p");
    photographersCity.classList.add("photographers__city");
    photographersCity.textContent = photographer.city;
    
    const photographersFrame = document.createElement("div");
    photographersFrame.classList.add("photographers__frame");

    const photographersLink = document.createElement("a");
    photographersLink.href = "../photographes.html";
    photographersLink.classList.add("photographers__link");

    const photographersName = document.createElement("h2");
    photographersName.classList.add("photographers__name");
    photographersName.textContent = photographer.name;
    
    const photographersPhoto = document.createElement("img");
    photographersPhoto.src = photographer.portrait;
    
    const photographersPrice = document.createElement("p");
    photographersPrice.classList.add("photographer__price");
    photographersPrice.textContent = photographer.price;
    
    const photographersTagline = document.createElement("p");
    photographersTagline.classList.add("photographers__tagline");
    photographersTagline.textContent = photographer.tagline;

    const photographersTags = document.createElement("ul");
    photographersTags.classList.add("tag");
    photographers.forEach ( tag => {
        const tags = document.createElement("li");                
        tags.textContent = tag.tags;
        photographersTags.appendChild(tags);       
    })

    photographersSection.appendChild(photographersCard);
    
    photographersCard.appendChild(photographersLink);
    photographersCard.appendChild(photographersCity);
    photographersCard.appendChild(photographersTagline);
    photographersCard.appendChild(photographersPrice);
    photographersCard.appendChild(photographersTags);

    photographersLink.appendChild(photographersFrame);
    
    photographersFrame.appendChild(photographersPhoto);
    photographersFrame.appendChild(photographersName);
});*/