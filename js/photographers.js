import {data} from "./data.js"

console.log(data);

const photographers = data.photographers;
const photographersMain = document.querySelector(".photographer__main");
const photographersSection = document.querySelector(".photographers__block");


photographers.forEach(photographer => {

    //section photographers introduction    

    const photographersInfo = document.createElement("article");
    photographersInfo.classList.add("photographers__info");
    
    const photographersName = document.createElement("h2");
    photographersName.classList.add("photographers__name");
    photographersName.textContent = photographer.name;
    
    const photographersCity = document.createElement("p");
    photographersCity.classList.add("photographers__city, photographers__city--page");
    photographersCity.textContent = photographer.city;

    const photographersTagline = document.createElement("p");
    photographersTagline.classList.add("photographers__tagline, photographers__tagline--page");
    photographersTagline.textContent = photographer.tagline;

    const photographersTags = document.createElement("ul");
    photographersTags.classList.add("tag");
    photographers.forEach ( tag => {
        const tags = document.createElement("li");                
        tags.textContent = tag.tags;
        photographersTags.appendChild(tags);       
    })
    
    const photographersFrame = document.createElement("div");
    photographersFrame.classList.add("photographers__frame, photographers__frame--page");

    const photographersPortrait = document.createElement("img");
    photographersPortrait.src = photographer.portrait;
    photographersPortrait.alt = photographer.alt;
    
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
    photographersFrame.appendChild(photographersPhoto);
    
    photographersSection.appendChild(photographersFrame);
    photographersFrame.appendChild(photographersPhoto);

    photographersMain.appendChild(photographersPriceInsert);
    photographersPriceInsert.appendChild(photographersPrice);

    // section carousel
    const carouselSection = document.create("section");
    carouselSection.classList.add(".carousel.block");

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

    photographersSection.appendChild(carouselLabel);
    photographersSection.appendChild(carouselInput);
    photographersSection.appendChild(carouselSelect);

    photographersMain.appendChild(carouselSection);

    
});

